import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 

  fullyParallel: true,
  // Заменяме променливите с твърди стойности за локална работа
  forbidOnly: false, 
  retries: 0,
  reporter: 'html',

  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // За начало те съветвам да оставиш само Chromium, за да е по-бързо. 
    // Можеш да разкоментираш другите по-късно.
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});