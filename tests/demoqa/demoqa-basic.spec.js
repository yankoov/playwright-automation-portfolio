import { test, expect } from '@playwright/test';

test('Check page title', async ({ page }) => {
  await page.goto('https://demoqa.com');
  await expect(page).toHaveTitle(/DEMOQA/);
});

test('Check button visibility', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true });
  await expect(clickMeBtn).toBeVisible();
});

test('Type text in input', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const fullNameInput = page.locator('#userName');
  await fullNameInput.waitFor({ state: 'visible', timeout: 5000 });
  await fullNameInput.fill('Hristo');
  await expect(fullNameInput).toHaveValue('Hristo');
});
