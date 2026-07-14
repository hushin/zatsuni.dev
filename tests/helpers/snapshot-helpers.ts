import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export function loadSnapshot(name: string): string {
	const snapshotPath = join(import.meta.dirname, '..', 'aria', '__snapshots__', `${name}.yml`);

	try {
		return readFileSync(snapshotPath, 'utf-8').trim();
	} catch {
		throw new Error(
			`Snapshot not found: ${snapshotPath}\nRun: pnpm test:aria:update`
		);
	}
}

// Footerの Copyright © {年} は年をまたぐと変わるため、比較前に年を固定値へ正規化する
export function normalizeSnapshot(text: string): string {
	return text.replace(/Copyright © \d{4} /, 'Copyright © YYYY ');
}
