import { test, expect } from '@playwright/test';

test('Text Box form – happy path', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Hristo');
  await page.locator('#userEmail').fill('test@test.com');
  await page.locator('#currentAddress').fill('Sofia');
  await page.locator('#permanentAddress').fill('Plovdiv');

  await page.locator('#submit').click();

  // Проверка дали резултатът се е появил
  await expect(page.locator('#output')).toBeVisible();
});
