import { test, expect, Page } from '@playwright/test';

test.describe('Checkbox review', () => {
    function checkbox(page: Page, index: number) {
        return page.locator('input[type="checkbox"]').nth(index);
    }

    async function ensureChecked(page: Page, index: number) {
        const cb = checkbox(page, index);

        if (!(await cb.isChecked())) {
            await cb.check();
        }
    }

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
    });

    test('first checkbox can be checked', async ({ page }) => {
        await ensureChecked(page, 0);
        const first = checkbox(page, 0);
        await expect(first).toBeChecked();
    });

    test('second checkbox is checked by default', async ({ page }) => {
        const second = checkbox(page, 1);
        await expect(second).toBeChecked();
    });

});