import { test, expect } from '@playwright/test';

test('day 11 - handle alert dialog', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  await page.locator('#alertButton').click();
});

// Код от чата вграден в vscode
// import { test, expect } from '@playwright/test';

// test('day 11 - handle alert dialog', async ({ page }) => {
//   await page.goto('https://demoqa.com/alerts');

//   page.once('dialog', async dialog => {
//     await dialog.accept();
//   });

//   await page.locator('#alertButton').click();
// });