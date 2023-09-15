import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	console.log('page', page.url());
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});
