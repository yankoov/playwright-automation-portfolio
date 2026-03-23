import { test, expect } from '@playwright/test';

test('day 6 - button becomes enabled', async ({ page }) => {
  await page.goto('https://demoqa.com/dynamic-properties');

  const enableButton = page.locator('#enableAfter');

  await expect(enableButton).toBeDisabled();

  await expect(enableButton).toBeEnabled();
});
