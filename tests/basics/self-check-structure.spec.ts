import { test, expect } from '@playwright/test';

test.describe('Checkboxes page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
  });

  test('check first checkbox', async ({ page }) => {

    const checkboxes = page.locator('input[type="checkbox"]');
    const first = checkboxes.first();

    await first.check();
    await expect(first).toBeChecked();
  });

  test('second checkbox is checked by default', async ({ page }) => {

    const checkboxes = page.locator('input[type="checkbox"]');
    const second = checkboxes.nth(1);

    await expect(second).toBeChecked();
  });

});
