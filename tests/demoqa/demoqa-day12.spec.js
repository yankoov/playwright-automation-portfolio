import { test, expect } from '@playwright/test';

test('Работа с Checkbox', async ({ page }) => {
    // 1. Отиване на страницата
    await page.goto('https://demoqa.com/checkbox');

    // 2. Разпъване на дървото (Toggle)
    await page.locator('button[aria-label="Toggle"]').click();

    // 3. Действие: Кликаме на Home
    await page.getByText('Home').click();

    // 4. Проверка 1: Гледаме дали текстът "home" се е появил в резултатите долу
    const result = page.locator('#result');
    await expect(result).toContainText('home');

    // 5. Проверка 2: Гледаме дали зелената отметка (иконката) е станала видима
    const checkedIcon = page.locator('.rct-icon-check').first();
    await expect(checkedIcon).toBeVisible();
});