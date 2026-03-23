import { test, expect } from '@playwright/test';

test.describe('Locators exercises', () => {

    test('checkbox chaining', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        const container = page.locator('#checkboxes');

        const firstCheckbox = container.locator('input').first();
        await firstCheckbox.check();

        await expect(firstCheckbox).toBeChecked();

    });

    test('count checkboxes', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        const checkboxes = page.locator('#checkboxes input');

        await expect(checkboxes).toHaveCount(2);

    });

    test('dropdown select', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/dropdown');

        const dropdown = page.locator('#dropdown');

        await dropdown.selectOption('1');

        await expect(dropdown).toHaveValue('1');

    });

    test('table rows count', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/tables');

        const rows = page.locator('#table1 tbody tr');

        await expect(rows).toHaveCount(4);

    });

    test('add element button', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

        await page.getByRole('button', { name: 'Add Element' }).click();

        const deleteButton = page.getByRole('button', { name: 'Delete' });

        await expect(deleteButton).toBeVisible();

    });


});