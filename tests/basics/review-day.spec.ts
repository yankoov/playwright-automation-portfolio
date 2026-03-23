import { test, expect } from '@playwright/test';

test.describe('Review Day', () => {

  test('self check 2', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');

    const redRadioButton = page.locator('#red');
    await redRadioButton.check();
    await expect(redRadioButton).toBeChecked();
  });

  test('self check 3', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);
    await secondCheckbox.check();
    await expect(secondCheckbox).toBeChecked();
  });

  test('self check 4', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    const doubleClickButton = page.getByText('Double-Click Me To See Alert');

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('You double clicked me..');
      await dialog.accept();
    });

    await doubleClickButton.dblclick();
  });
});