import { test, expect, Page } from '@playwright/test';

test.describe('Review day – locator action setup', () => {

  function pageContent(page: Page) {
    return page.locator('#content');
  }

  // locator (chaining)
  function checkbox(page: Page, index: number) {
    return pageContent(page)
      .locator('input[type="checkbox"]')
      .nth(index);
  }

  // action
  async function checkCheckbox(page: Page, index: number) {
    const cb = checkbox(page, index);
    await cb.check();
  }

  // action, който връща резултат
  async function isCheckboxChecked(page: Page, index: number) {
    const cb = checkbox(page, index);
    return await cb.isChecked();
  }

  // action + assertion helper
  async function expectCheckboxChecked(page: Page, index: number) {
    const cb = checkbox(page, index);
    await expect(cb).toBeChecked();
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    // малко по-силен setup
    await expect(page.locator('h3')).toHaveText('Checkboxes');
  });

  test('first checkbox can be checked', async ({ page }) => {
    await checkCheckbox(page, 0);

    await expectCheckboxChecked(page, 0);
  });

  test('second checkbox is checked by default', async ({ page }) => {
    const isChecked = await isCheckboxChecked(page, 1);

    expect(isChecked).toBe(true);
  });

});