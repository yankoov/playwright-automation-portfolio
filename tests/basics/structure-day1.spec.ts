import { test, expect, Page } from '@playwright/test';

test.describe('Checkbox page', () => {

  function checkbox(page: Page, index: number) {
    return page.locator('input[type="checkbox"]').nth(index);
  }

  test('first checkbox can be checked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const first = checkbox(page, 0);

    await first.check();
    await expect(first).toBeChecked();
  });

  test('second checkbox is checked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const second = checkbox(page, 1);

    await expect(second).toBeChecked();
  });

});