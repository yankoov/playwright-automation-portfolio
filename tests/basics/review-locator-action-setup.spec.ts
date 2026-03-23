import { test, expect, Page } from '@playwright/test';

test.describe('Review locator action setup', () => {

    function radio(page: Page, id: string) {
        return page.locator('#' + id);
    }

    async function selectRadio(page: Page, id: string) {
        const r = radio(page, id);
        await r.check();
    }

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/radio-buttons');
    });

    test('red radio button can be checked', async ({ page }) => {
        await selectRadio(page, 'red');
        const red = radio(page, 'red');
        await expect(red).toBeChecked();
    });

    test('blue radio button can be checked', async ({ page }) => {
        await selectRadio(page, 'blue');
        const blue = radio(page, 'blue');
        await expect(blue).toBeChecked();
    });

});