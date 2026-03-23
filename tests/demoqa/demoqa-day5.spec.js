// import { test, expect } from '@playwright/test';

// test('DemoQA homepage loads', async ({ page }) => {
//   await page.goto('https://demoqa.com');

//   const header = page.getByText('ToolsQA');
//   await expect(header).toBeVisible();
// });

import { test, expect } from '@playwright/test';

// 🔹 Това се изпълнява ПРЕДИ всеки тест
test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com');
});

// 1️⃣ Проверка на заглавието
test('Page title is correct', async ({ page }) => {
  await expect(page).toHaveTitle(/DEMOQA/);
});

// 2️⃣ Проверка дали header ToolsQA е видим
test('Header ToolsQA is visible', async ({ page }) => {
  await expect(page.getByText('ToolsQA')).toBeVisible();
});

// 3️⃣ Проверка дали бутон Click Me е видим
test('Click Me button is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  await expect(
    page.getByRole('button', { name: 'Click Me', exact: true })
  ).toBeVisible();
});

// 4️⃣ Писане в input поле
test('User can type full name', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const fullNameInput = page.locator('#userName');
  await fullNameInput.fill('Hristo');
  await expect(fullNameInput).toHaveValue('Hristo');
});

// 5️⃣ Checkbox Home (работещият вариант)
test('Check Home checkbox reliably', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  await page.locator('button[title="Expand all"]').click();
  await page.waitForTimeout(500);

  const homeCheckboxSpan =
    page.locator('label[for="tree-node-home"] span.rct-checkbox');

  await homeCheckboxSpan.click();

  const homeCheckboxInput = page.locator('#tree-node-home');
  await expect(homeCheckboxInput).toBeChecked();
});


