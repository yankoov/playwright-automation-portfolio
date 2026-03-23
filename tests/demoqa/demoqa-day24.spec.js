import { test, expect } from '@playwright/test';

test('day - hover shows profile link', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/hovers');

  const firstFigure = page.locator('.figure').first();

  await firstFigure.hover();

  const profileLink =
    firstFigure.getByRole('link', { name: 'View profile' });

  await expect(profileLink).toBeVisible();

  const nameText = firstFigure.locator('h5');
  await expect(nameText).toHaveText('name: user1');
});
