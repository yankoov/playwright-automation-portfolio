import { test, expect } from '@playwright/test';

test('Mini debug test – step by step', async ({ page }) => {

  // 1️⃣ Отваряме сайта
  await page.goto('https://demoqa.com');

  // ⏸️ Спираме тук и ГЛЕДАМЕ
  await page.pause();

  // 2️⃣ Кликваме на "Elements"
  await page.getByText('Elements').click();

  // ⏸️ Пак спираме
  await page.pause();

  // 3️⃣ Кликваме на "Text Box"
  await page.getByText('Text Box').first().click();

  // ⏸️ Пак спираме
  await page.pause();

  // 4️⃣ Проверка: има заглавие "Text Box"
  const heading = page.getByRole('heading', { name: 'Text Box' });
  await expect(heading).toBeVisible();

});
