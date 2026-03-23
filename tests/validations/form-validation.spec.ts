import { test, expect } from '@playwright/test';

test('should show error on invalid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'wrong');
  await page.fill('#password', 'wrong');
  await page.click('button[type=submit]');

  await expect(page.locator('#flash')).toContainText('Your username is invalid');
});