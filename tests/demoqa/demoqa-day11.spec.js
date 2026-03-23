import { test, expect } from '@playwright/test';

test('day 3 - button becomes enabled', async ({ page }) => {
  await page.goto('https://demoqa.com/dynamic-properties');

  const button = page.locator('#enableAfter');

  await expect(button).toBeDisabled();

  await expect(button).toBeEnabled();

  await button.click();
});
