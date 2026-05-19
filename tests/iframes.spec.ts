import { test, expect } from '@playwright/test';

test('Handle elements inside an iframe', async ({ page }) => {
    // ПОПРАВКА: Изчистваме HTML кода, като ползваме стандартни двойни кавички навсякъде вътре
    const localHtml = `
        <h1>Нашият главен сайт</h1>
        <p>Това е текст на главната страница.</p>
        
        <iframe id="my-frame" srcdoc="
            <html>
                <body>
                    <h2>Текст ВЪТРЕ в ифрейма</h2>
                    <button id='iframe-btn'>Кликни ме</button>
                    <script>
                        document.getElementById('iframe-btn').addEventListener('click', function() {
                            this.innerText = 'Кликнат!';
                        });
                    </script>
                </body>
            </html>
        "></iframe>
    `;

    // Зареждаме локалния HTML код
    await page.setContent(localHtml);

    // 1. Хващаме рамката (iframe) по нейното ID на главната страница
    const myFrame = page.frameLocator('#my-frame');

    // 2. Намираме бутона вътре в рамката и го кликваме
    await myFrame.locator('#iframe-btn').click();

    // 3. Проверка: Уверяваме се, че текстът вътре в ифрейма се е сменил
    await expect(myFrame.locator('#iframe-btn')).toHaveText('Кликнат!');
});