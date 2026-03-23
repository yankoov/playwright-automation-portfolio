import { test, expect } from '@playwright/test';

test('table row action', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    const row = page.locator('#table1 tbody tr').filter({ hasText: 'Jason' });

    await row.getByText('edit').click();

    await expect(row).toHaveCount(1);
});