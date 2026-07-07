import { test, expect } from '@playwright/test';
import { loadSnapshot } from '../helpers/snapshot-helpers';
import { PAGES } from './pages';

test.describe('ARIA snapshot', () => {
	for (const { url, name } of PAGES) {
		test(`${name}ページのARIA snapshotが一致する`, async ({ page }) => {
			await page.goto(url);
			await page.waitForLoadState('load');

			const snapshot = await page.locator('body').ariaSnapshot();
			const expected = loadSnapshot(name);

			expect(snapshot).toBe(expected);
		});
	}
});
