import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('day 8 - download file', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#downloadButton').click()
  ]);

  const filePath = path.join(__dirname, download.suggestedFilename());

  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBe(true);
});
