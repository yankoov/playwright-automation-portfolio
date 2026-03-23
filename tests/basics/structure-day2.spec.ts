import { test, expect, Page } from '@playwright/test';

test.describe('Radio buttons page', () => {

  function radioButton(page: Page, color: string) {
    return page.locator('#' + color);
  }

  async function selectRadio(page: Page, color: string) {
    const radio = radioButton(page, color);
    await radio.check();
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');
  });

  test('red radio button can be checked', async ({ page }) => {
    await selectRadio(page, 'red');

    const red = radioButton(page, 'red');
    await expect(red).toBeChecked();
  });

  test('blue radio button can be checked', async ({ page }) => {
    await selectRadio(page, 'blue');

    const blue = radioButton(page, 'blue');
    await expect(blue).toBeChecked();
  });

});