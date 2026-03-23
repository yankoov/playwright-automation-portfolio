import { test, expect, Page } from '@playwright/test';

test('locators practice', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');

    const red = page.getByRole('radio', { name: 'Red' });
    const green = page.getByRole('radio', { name: 'Green' });

    console.log(await page.getByRole('radio', { name: 'Blue' }).count());
    console.log(await page.getByRole('radio', { name: 'Red' }).count());

    console.log(await page.locator('#tennis').count());
    console.log(await page.getByRole('radio', { name: 'Tennis' }).count());
});