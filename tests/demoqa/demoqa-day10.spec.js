import { test, expect } from '@playwright/test';

test('mini home practice', async ({ page }) => {
  // 1️⃣ Отиваме на страницата
  await page.goto('https://demoqa.com/text-box');

  // 2️⃣ Пълним полетата
  await page.getByPlaceholder('Full Name').fill('Hristo Practice');
  await page.getByPlaceholder('name@example.com').fill('practice@test.com');
  await page.getByPlaceholder('Current Address').fill('Sofia');
  await page.locator('#permanentAddress').fill('Plovdiv');

  // 3️⃣ Проверка: Submit бутон е активен
  const submitButton = page.getByRole('button', { name: 'Submit' });
  await expect(submitButton).toBeEnabled();

  // 4️⃣ Клик върху Submit
  await submitButton.click();

  // 5️⃣ Проверки след Submit
  const output = page.locator('#output');
  await expect(output).toBeVisible();
  await expect(output).toContainText('Hristo Practice');
  await expect(output).toContainText('practice@test.com');
  await expect(output).toContainText('Plovdiv');
});
