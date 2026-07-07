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
