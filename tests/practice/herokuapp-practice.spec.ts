import { test, expect } from '@playwright/test';

test.describe('practice', () => {

  test('successful login', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash'))
      .toContainText('You logged into a secure area!');

  });

  test('invalid login', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('wrong');
    await page.locator('#password').fill('wrong');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash'))
      .toContainText('Your username is invalid!');

  });

  test('add and remove element', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.getByRole('button', { name: 'Add Element' }).click();

    const deleteButton = page.getByRole('button', { name: 'Delete' });

    await expect(deleteButton).toBeVisible();

    await deleteButton.click();

    await expect(deleteButton).toHaveCount(0);

  });

  test('check table rows', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    const rows = page.locator('#table1 tbody tr');

    await expect(rows).toHaveCount(4);

  });

});