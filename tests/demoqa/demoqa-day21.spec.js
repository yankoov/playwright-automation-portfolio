import { test, expect } from '@playwright/test';

test('day 12 - hover and open profile (second check)', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  const firstFigure = page.locator('.figure').first();

  // 1. hover
  await firstFigure.hover();

  // 2. клик на линка, който се появява
  const profileLink = firstFigure.getByRole('link', { name: 'View profile' });
  await profileLink.click();

  // 3. втора проверка – URL
  await expect(page).toHaveURL(/\/users\/1$/);
});
