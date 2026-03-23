import { test, expect } from '@playwright/test';

test('day 10 - open link in new tab', async ({ page }) => {
  await page.goto('https://demoqa.com/links');

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Home' }).first().click()
  ]);

  await newPage.waitForLoadState();

  await expect(newPage).toHaveURL(/demoqa\.com/);
});
