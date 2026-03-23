import { test, expect } from '@playwright/test';

// Настройка: всички тестове ще се пускат на видим браузър с бавни действия
test.use({
  headless: false,      // виждаш браузъра
  viewport: { width: 1280, height: 720 },
  launchOptions: { slowMo: 1000 } // 1 секунда забавяне между действията
});

test.describe('DemoQA Basic Tests - Day 4', () => {

  // 🔹 BeforeEach - отваря нова страница преди всеки тест
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com');
  });

  // 1️⃣ Проверка на заглавието
  test('Page title contains DEMOQA', async ({ page }) => {
    await expect(page).toHaveTitle(/DEMOQA/);
  });

  // 2️⃣ Проверка дали header ToolsQA е видим
  test('Header ToolsQA is visible', async ({ page }) => {
    const header = page.getByText('ToolsQA');
    await expect(header).toBeVisible();
  });

  // 3️⃣ Проверка дали бутон Click Me е видим
  test('Click Me button is visible', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true });
    await expect(clickMeBtn).toBeVisible();
  });

  // 4️⃣ Въвеждане на текст в input поле
  test('User can type full name', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    const fullNameInput = page.locator('#userName');
    await fullNameInput.fill('Hristo');
    await expect(fullNameInput).toHaveValue('Hristo');
  });

  // 5️⃣ Чекбокси - тикване на Home
  test('Check Home checkbox reliably', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');

    // Разширяваме дървото
    const expandBtn = page.locator('button[title="Expand all"]');
    await expandBtn.click();

    // Малко пауза, за да се визуализират checkbox-ите
    await page.waitForTimeout(500);

    // Взимаме видимия span, който визуализира checkbox-а
    const homeCheckboxSpan = page.locator('label[for="tree-node-home"] span.rct-checkbox');
    await homeCheckboxSpan.click();

    // Проверка дали input е тикнат
    const homeCheckboxInput = page.locator('#tree-node-home');
    await expect(homeCheckboxInput).toBeChecked();
  });

});
