import { test, expect } from '@playwright/test';
import path from 'path';

test('day 7 - upload file', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  const filePath = path.join(__dirname, 'test-file.txt');

  await page.setInputFiles('#uploadFile', filePath);

  const uploadedFilePath = page.locator('#uploadedFilePath');

  await expect(uploadedFilePath).toContainText('test-file.txt');
});
