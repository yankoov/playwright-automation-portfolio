import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
    });

    test('Positive Login Test', async ({ page }) => {
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');

        // Можеш да ползваш и директно клик на бутона с икона/текст
        await page.getByRole('button', { name: /login/i }).click();

        // 1. Дефинираме локатора (без await)
        const flashMessage = page.locator('#flash');

        // 2. Проверяваме (с await пред expect), което активира автоматичното чакане
        await expect(flashMessage).toBeVisible();
        await expect(flashMessage).toContainText('You logged into a secure area!');
    });

    test('Negative Login Test', async ({ page }) => {
        await page.getByLabel('Username').fill('tomsmith123');
        await page.getByLabel('Password').fill('wrongpassword');
        await page.getByRole('button', { name: /login/i }).click();

        const flashMessage = page.locator('#flash');
        await expect(flashMessage).toBeVisible();
        await expect(flashMessage).toContainText('Your username is invalid!');
    });

    test('Empty Credentials Test', async ({ page }) => {
        await page.getByRole('button', { name: /login/i }).click();
        const flashMessage = page.locator('#flash');
        await expect(flashMessage).toBeVisible();
        await expect(flashMessage).toContainText('Your username is invalid!');
    });

});