import { test, expect } from '@playwright/test';

// ПЪРВИ ТЕСТ
test('should show error on invalid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'wrong');
  await page.fill('#password', 'wrong');
  await page.click('button[type=submit]');

  await expect(page.locator('#flash')).toContainText('Your username is invalid');
}); 

test('user can complete purchase flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Ivan');
  await page.fill('[data-test="lastName"]', 'Petrov');
  await page.fill('[data-test="postalCode"]', '1000');

  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header')).toHaveText(/thank you/i);
});