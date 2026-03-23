import { test, expect } from '@playwright/test';

test.describe('Locators day 2 – label vs text', () => {

    test('compare locators', async ({ page }) => {

        await page.goto('https://practice.expandtesting.com/radio-buttons');

        const byLabel = page.getByLabel('Red');
        const byText = page.getByText('Red');
        const byRole = page.getByRole('radio', { name: 'Red' });

        console.log('byLabel count:', await byLabel.count());
        console.log('byText count:', await byText.count());
        console.log('byRole count:', await byRole.count());

    });

    test('narrow getByRole instead of Label', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/radio-buttons');

        // Използваме Role, защото Label понякога не е правилно свързан в тренировъчни сайтове
        const redRadio = page
            .locator('.form-check') // Селектираме контейнера
            .filter({ hasText: 'Red' }) // Филтрираме този, който съдържа текста
            .getByRole('radio'); // Вземаме самия бутон вътре

        await redRadio.check();
        await expect(redRadio).toBeChecked();
    });

    test('find Yes get by role', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button');

        const yesRadio = page.getByRole('radio', { name: 'Yes' });

        await yesRadio.check();
        await expect(yesRadio).toBeChecked();

        const impressiveRadio = page.getByRole('radio', { name: 'Impressive' });

        await impressiveRadio.check();
        await expect(impressiveRadio).toBeChecked();
        await expect(yesRadio).not.toBeChecked();
    });
}); 