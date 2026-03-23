import { test, expect } from '@playwright/test';

test.describe('practice', () => {

    test('click green button', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/challenging_dom');
        const greenButton = page.locator('.button.success');
        await greenButton.click();
        await expect(greenButton).toBeVisible();
    });

    test('count rows', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/challenging_dom');
        const rows = page.locator('table tbody tr');

        await expect(rows).toHaveCount(10);
        
    });

    test('click edit', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/challenging_dom');

        const editLink = page.locator('table tbody tr').first().getByRole('link', { name: 'edit' });
        await editLink.click();

        await expect(page).toHaveURL(/#edit/);
    });


});