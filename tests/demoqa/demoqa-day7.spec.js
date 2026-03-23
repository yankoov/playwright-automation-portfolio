import { test, expect } from '@playwright/test';

test('Text Box – базов сценарий', async ({ page }) => {

  // 1. Отваряме страницата
  await page.goto('https://demoqa.com/text-box');

  // 2. Проверяваме, че правилната страница се е заредила
  const header = page.getByRole('heading', { name: 'Text Box' });
  
  await expect(header).toBeVisible();

  // 3. Попълваме полетата
  await page.locator('#userName').fill('Hristo');
  await page.locator('#userEmail').fill('hristo@test.com');
  await page.locator('#currentAddress').fill('Sofia');
  await page.locator('#permanentAddress').fill('Bulgaria');

  // 4. Натискаме Submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // 5. Проверяваме резултата
  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('#name')).toContainText('Hristo');

});
