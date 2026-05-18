import { test, expect } from '@playwright/test';

test('Handle JavaScript Confirm Alert Local', async ({ page }) => {
    // 1. Създаваме си наш собствен HTML код с един бутон и едно поле за резултат
    const localHtml = `
        <button id="alert-btn" onclick="let res = confirm('Сигурен ли си?'); document.getElementById('demo').innerText = res ? 'You pressed OK!' : 'You pressed Cancel!';">
            Try it
        </button>
        <p id="demo"></p>
    `;

    // 2. Нареждаме на Playwright да зареди този HTML код на празна страница
    await page.setContent(localHtml);

    // 3. Настройваме "слушателя" за изскачащия прозорец
    page.on('dialog', async dialog => {
        console.log('Текстът в прозореца е:', dialog.message());
        await dialog.accept(); // Натиска "OK"
    });

    // 4. Намираме нашия бутон по ID и го кликваме
    await page.locator('#alert-btn').click();

    // 5. Проверяваме дали параграфът се е напълнил с правилния текст
    const resultText = page.locator('#demo');
    await expect(resultText).toHaveText('You pressed OK!');
});

test('Handle JavaScript Cancel Alert Local', async ({ page }) => {
    const localHtml = `
        <button id="alert-btn" onclick="let res = confirm('Сигурен ли си?'); document.getElementById('demo').innerText = res ? 'You pressed OK!' : 'You pressed Cancel!';">
            Try it
        </button>
        <p id="demo"></p>
    `;

    // 2. Нареждаме на Playwright да зареди този HTML код на празна страница
    await page.setContent(localHtml);

    // 3. Настройваме "слушателя" за изскачащия прозорец
    page.on('dialog', async dialog => {
        console.log('Текстът в прозореца е:', dialog.message());
        await dialog.dismiss(); // Натиска "Cancel"
    });

    // 4. Намираме нашия бутон по ID и го кликваме
    await page.locator('#alert-btn').click();

    // 5. Проверяваме дали параграфът се е напълнил с правилния текст
    const resultText = page.locator('#demo');
    await expect(resultText).toHaveText('You pressed Cancel!');
});