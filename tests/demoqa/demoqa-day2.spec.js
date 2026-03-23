import { test, expect } from '@playwright/test';

// 1️⃣ Тестът, който вече имаш
test('Header ToolsQA is visible', async ({ page }) => {
  await page.goto('https://demoqa.com');
  const header = page.getByText('ToolsQA');
  await expect(header).toBeVisible();
});

// 2️⃣ Тест: Проверка на бутон "Click Me"
test('Click Me button is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true });
  await expect(clickMeBtn).toBeVisible();
});

// 3️⃣ Тест: Въвеждане на текст в input
test('Type text in Full Name input', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const fullNameInput = page.locator('#userName');
  await fullNameInput.waitFor({ state: 'visible', timeout: 5000 });
  await fullNameInput.fill('Hristo');
  await expect(fullNameInput).toHaveValue('Hristo');
});

// 4️⃣ Тест: Проверка на Email input
test('Type text in Email input', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const emailInput = page.locator('#userEmail');
  await emailInput.fill('hristo@example.com');
  await expect(emailInput).toHaveValue('hristo@example.com');
});

// 5️⃣ Тест: Проверка на submit бутон
test('Submit button is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const submitBtn = page.getByRole('button', { name: 'Submit' });
  await expect(submitBtn).toBeVisible();
});
