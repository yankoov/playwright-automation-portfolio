import { test, expect } from '@playwright/test';

test('add product to cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  await page.locator('#login-button').click();

  await page.locator('.inventory_item button').first().click();

  await page.locator('.shopping_cart_link').click();

  const cartItem = page.locator('.cart_item');

  await expect(cartItem).toHaveCount(1);

});