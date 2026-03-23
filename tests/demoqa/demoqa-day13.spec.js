import { test, expect } from '@playwright/test';

test('day 4 - radio button Yes', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  await page.getByText('Yes').click();

  const yesRadio = page.locator('#yesRadio');

  await expect(yesRadio).toBeChecked();

  const result = page.locator('.text-success');
  await expect(result).toHaveText('Yes');
});
