import { test, expect } from '@playwright/test';

test('challange button', async ({ page }) => {

  await page.goto('https://uitestingplayground.com/dynamicid');

  const button = page.getByRole('button', { name: 'Button with Dynamic ID' });

  await expect(button).toBeVisible();

  await button.click();

});