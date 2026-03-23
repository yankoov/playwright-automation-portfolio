import { test, expect } from '@playwright/test';

test('Basic user flow – click, type, check', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const header = page.getByRole('heading', { name: 'Text Box' });
  await expect(header).toBeVisible();

  const fullNameInput = page.locator('#userName');
  await expect(fullNameInput).toBeVisible();

  await fullNameInput.fill('Hristo');
  await expect(fullNameInput).toHaveValue('Hristo');

  const submitButton = page.locator('#submit');
  await submitButton.click();

  const nameResult = page.locator('#name');
  await expect(nameResult).toContainText('Hristo');
});
