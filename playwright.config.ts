import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // 1. Указваме точно къде са тестовете, за да не чете "old" папките
  testDir: './tests', 

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // 2. Добавяме автоматични скрийншоти и видео при грешка
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Твоите досегашни настройки
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