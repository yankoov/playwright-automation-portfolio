import { test, expect } from '@playwright/test';

test('day 9 - read text from iframe', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  const frame = page.frameLocator('#frame1');

  const heading = frame.locator('#sampleHeading');

  await expect(heading).toHaveText('This is a sample page');
});
