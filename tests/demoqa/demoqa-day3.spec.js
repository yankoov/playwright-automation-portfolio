import { test, expect } from '@playwright/test';

// 1️ Проверка на заглавието на страницата
test('Page title is correct', async ({ page }) => {
  await page.goto('https://demoqa.com');
  await expect(page).toHaveTitle(/DEMOQA/);
});

// 2️ Проверка дали header с текста ToolsQA е видим
test('Header ToolsQA is visible', async ({ page }) => {
  await page.goto('https://demoqa.com');
  const header = page.getByText('ToolsQA');
  await expect(header).toBeVisible();
});

// 3️ Проверка дали бутон Click Me е видим
test('Click Me button is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true });
  await expect(clickMeBtn).toBeVisible();
});

// 4️ Въвеждане на текст в input поле
test('User can type full name', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const fullNameInput = page.locator('#userName');
  await fullNameInput.fill('Hristo');
  await expect(fullNameInput).toHaveValue('Hristo');
});

test('Check Home checkbox reliably', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  // Разширяваме дървото
  await page.locator('button[title="Expand all"]').click();

  // Изчакваме малко, за да се рендерират checkbox-ите
  await page.waitForTimeout(500);

  // Взимаме видимия span, който визуализира checkbox-а
  const homeCheckboxSpan = page.locator('label[for="tree-node-home"] span.rct-checkbox');
  
  // Кликваме върху него
  await homeCheckboxSpan.click();

  // Проверка дали input е тикнат
  const homeCheckboxInput = page.locator('#tree-node-home');
  await expect(homeCheckboxInput).toBeChecked();
});
