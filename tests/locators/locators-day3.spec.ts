import { test, expect } from '@playwright/test';

test('locator chaining with first checkbox', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const container = page.locator('#checkboxes');
  const checkbox = container.locator('input').first();

  await checkbox.check();
  await expect(checkbox).toBeChecked();

});

test('locator chaining with nth', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const container = page.locator('#checkboxes');
  const checkbox = container.locator('input').nth(1);

  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();

});

test('locator chaining with count', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const container = page.locator('#checkboxes');
  const checkboxes = container.locator('input');

  await expect(checkboxes).toHaveCount(2);

});