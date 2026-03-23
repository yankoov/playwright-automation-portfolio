import { test, expect, Page } from '@playwright/test';

test.describe('Review day – radio button setup (by label)', () => {

  function pageContent(page: Page) {
    return page.locator('.row');
  }

  // намира radio по текста на label
  function radioByLabel(page: Page, label: string) {
    return pageContent(page)
      .filter({ hasText: label })
      .locator('input[type="radio"]');
  }

  async function selectRadio(page: Page, label: string) {
    const rb = radioByLabel(page, label);
    await rb.check();
  }

  async function isRadioSelected(page: Page, label: string) {
    const rb = radioByLabel(page, label);
    return await rb.isChecked();
  }

  async function expectRadioSelected(page: Page, label: string) {
    const rb = radioByLabel(page, label);
    await expect(rb).toBeChecked();
  }

  async function expectRadioNotSelected(page: Page, label: string) {
    const rb = radioByLabel(page, label);
    await expect(rb).not.toBeChecked();
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/radio-buttons');
    await expect(
      page.locator('h1', { hasText: 'Radio Buttons' })
    ).toBeVisible();
  });

  test('user can select radios by label', async ({ page }) => {

    await selectRadio(page, 'Red');
    await expectRadioSelected(page, 'Red');

    await selectRadio(page, 'Green');
    await expectRadioSelected(page, 'Green');

    await expectRadioNotSelected(page, 'Red');
  });

});