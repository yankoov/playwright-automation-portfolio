import { test, expect } from '@playwright/test';

test('Text Box – basic user flow', async ({ page }) => {
  // 1. Отваряме сайта
  await page.goto('https://demoqa.com/text-box');

  // 2. Попълваме Full Name
  await page.locator('#userName').fill('Ivan Ivanov');

  // 3. Попълваме Email
  await page.locator('#userEmail').fill('ivan@test.com');

  // 4. Попълваме Current Address
  await page.locator('#currentAddress').fill('Sofia');

  // 5. Натискаме Submit
  await page.locator('#submit').click();

  await page.pause();


  // 6. Проверки (assertions)
  await expect(page.locator('#name')).toContainText('Ivan Ivanov');
  await expect(page.locator('#email')).toContainText('ivan@test.com');
});
