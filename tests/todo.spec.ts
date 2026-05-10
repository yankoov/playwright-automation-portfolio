import { test, expect } from '@playwright/test';

test('Todo List Test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    const todoInput = page.getByPlaceholder('What needs to be done?');
    await todoInput.fill('Купи мляко');
    await todoInput.press('Enter');
    await todoInput.fill('Измий колата');
    await todoInput.press('Enter');
    await todoInput.fill('Научи Playwright');
    await todoInput.press('Enter');

    const todoItems = page.locator('.todo-list li');

    await expect(todoItems).toHaveText([
        'Купи мляко',
        'Измий колата',
        'Научи Playwright'
    ]);

    const middleTask = todoItems.filter({ hasText: 'Измий колата' });
    await middleTask.getByRole('checkbox').check();
    await expect(middleTask).toHaveClass(/completed/);

    //Изтриване на първата задача
    const firstTask = todoItems.first();
    await firstTask.hover();
    await firstTask.getByRole('button', { name: 'Delete'}).click();
    await expect(todoItems).toHaveText([
        'Измий колата',
        'Научи Playwright'
    ]);    

});