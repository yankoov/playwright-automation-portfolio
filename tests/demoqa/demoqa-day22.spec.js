import { test, expect } from '@playwright/test';

test('day XX - right click', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/context_menu');

  const box = page.locator('#hot-spot');

  await box.click({ button: 'right' });

  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });
});

test('day – double click shows alert', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

  const doubleClickBtn = page.getByText('Double-Click Me To See Alert');

  // 👉 ТУК добавяме проверката
  page.once('dialog', async dialog => {

    await expect(dialog.message())
      .toContain('You double clicked me..');

    await dialog.accept();
  });

  await doubleClickBtn.dblclick();
});
