// Setzt index.html aus demo/shell.html und allen Dateien in sections/ zusammen.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = join(dirname(fileURLToPath(import.meta.url)), '..');
const dateien = readdirSync(join(wurzel, 'sections')).filter((d) => d.endsWith('.html')).sort();
const abschnitte = dateien.map((d) => `<!-- ${d} -->\n` + readFileSync(join(wurzel, 'sections', d), 'utf8')).join('\n');
const shell = readFileSync(join(wurzel, 'demo', 'shell.html'), 'utf8');
writeFileSync(join(wurzel, 'index.html'), shell.replace('<!-- SECTIONS -->', abschnitte));
console.log(`index.html mit ${dateien.length} Abschnitten geschrieben`);
