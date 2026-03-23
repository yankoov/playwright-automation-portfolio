import { test, expect } from '@playwright/test';

/*
ЗАДАЧА 1
Text box – попълване и проверка
*/
test('self check 1 - text box', async ({ page }) => {
//   await page.goto('https://demoqa.com/text-box');

//   // TODO:
//   // попълни:
//   // Full Name -> Hristo
//   // Email -> hristo@test.com
//   // натисни Submit
//   // провери, че в резултата има Hristo

//   const fullName = await page.locator('#name');
//     await fullName.fill('Hristo');

//   const email = await page.locator('#email');
//     await email.fill('hristo@test.com');

//   const submitButton = await page.locator('#submit');
//     await submitButton.click();

//   const resultName = await page.locator('#name');
//     expect(await resultName.textContent()).toContain('Hristo');
});



test('self check 2 - radio (no demoqa)', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/radio-buttons');

  // TODO:
  // избери Blue
  // провери, че е checked
    const blueRadio = await page.locator('#blue');
    await blueRadio.check();
    await expect(blueRadio).toBeChecked();

});



test('self check 3 - checkbox (no demoqa)', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // TODO:
  // вземи първия checkbox
  // check()
  // expect -> toBeChecked()

    const firstCheckbox = await page.locator('input[type="checkbox"]').first();
    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();

});




/*
ЗАДАЧА 4
Alert (double click)
*/
test('self check 4 - alert on double click', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

  // TODO:
  // закачи listener за dialog
  // провери текста на alert-а
  // приеми alert-а
  // направи double click на бутона

    const doubleClickBtn = await page.getByText('Double-Click Me To See Alert');
    page.once('dialog', async dialog => {
      await expect(dialog.message()).toContain('You double clicked me..');
      await dialog.accept();
    });
    await doubleClickBtn.dblclick();
});