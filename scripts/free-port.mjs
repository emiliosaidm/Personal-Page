#!/usr/bin/env node
/**
 * Libera un puerto TCP antes de `next dev` / `next start`.
 * Evita EADDRINUSE y abrir en 3005 otra app que responda 500.
 */
import { execSync } from 'node:child_process';
import process from 'node:process';

const port = process.argv[2] ?? '3005';

if (process.platform === 'win32') {
	try {
		const stdout = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
		const pids = new Set();
		for (const line of stdout.split('\n')) {
			const m = line.trim().match(/\s+(\d+)\s*$/);
			if (m) pids.add(m[1]);
		}
		for (const pid of pids) {
			try {
				execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
			} catch {
				/* ignorar */
			}
		}
	} catch {
		/* sin coincidencias */
	}
	process.exit(0);
}

try {
	const out = execSync(`lsof -ti :${port}`, { encoding: 'utf8' }).trim();
	if (!out) process.exit(0);
	for (const pid of out.split(/\s+/)) {
		if (!pid) continue;
		try {
			execSync(`kill -9 ${pid}`, { stdio: 'ignore' });
		} catch {
			/* proceso ya terminó */
		}
	}
} catch {
	/* nadie escuchando en ese puerto */
}
process.exit(0);
