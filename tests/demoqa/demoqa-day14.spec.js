import { test, expect } from '@playwright/test';

test('day 5 - check Downloads checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  // разтвори дървото
  await page.locator('.rct-option-expand-all').click();

  // чекни Downloads
  await page.getByText('Downloads').click();

  // истинският checkbox
  const downloadsCheckbox = page.locator('input#tree-node-downloads');

  await expect(downloadsCheckbox).toBeChecked();

  // резултатът отдолу
  const result = page.locator('#result');

  await expect(result).toContainText('downloads');
});
