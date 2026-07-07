import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from '@playwright/test';
import { PAGES } from './pages';

const BASE_URL = 'http://localhost:4321';
const SNAPSHOT_DIR = join(import.meta.dirname, '__snapshots__');

async function main() {
	const browser = await chromium.launch();

	try {
		await Promise.all(
			PAGES.map(async ({ url, name }) => {
				const page = await browser.newPage();
				await page.goto(`${BASE_URL}${url}`);
				await page.waitForLoadState('load');

				const snapshot = await page.locator('body').ariaSnapshot();
				writeFileSync(join(SNAPSHOT_DIR, `${name}.yml`), `${snapshot.trim()}\n`);
				console.log(`Wrote ${name}.yml`);

				await page.close();
			})
		);
	} finally {
		await browser.close();
	}
}

main().catch(error => {
	console.error(error);
	process.exit(1);
});
