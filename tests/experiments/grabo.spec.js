import { test, expect } from '@playwright/test';

test('grabo.bg basic interaction', async ({ page }) => {
  await page.goto('https://grabo.bg/');

 
  const searchButton = page.getByText('Търсене');
  await expect(searchButton).toBeEnabled();
  await searchButton.click();

  // 3️⃣ Първа оферта
  const firstOffer = page.locator('.category-item').first();
  await expect(firstOffer).toBeVisible();
  await expect(firstOffer).toContainText('spa');

  // 4️⃣ Клик върху офертата
  await firstOffer.click();

  // 5️⃣ Проверка на детайлната страница
  const detailTitle = page.locator('.deal-title');
  await expect(detailTitle).toBeVisible();
  await expect(detailTitle).toContainText('spa');
});

