import { test, expect } from '@playwright/test';

test('Upload a file', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/upload');
    const fileChooser = page.getByTestId('file-input');
    
    await fileChooser.setInputFiles('test-file.txt');
    await page.getByRole('button', { name: /upload/i }).click();

    const uploadedFileName = page.locator('#uploaded-files');
    await expect(uploadedFileName).toBeVisible();
    await expect(uploadedFileName).toHaveText(/test-file.txt/);
});