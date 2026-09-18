import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const args = new Map();
for (let index = 2; index < process.argv.length; index += 1) {
  const argument = process.argv[index];
  if (argument.startsWith('--')) {
    const value = process.argv[index + 1];
    args.set(argument.slice(2), value && !value.startsWith('--') ? value : 'true');
    if (value && !value.startsWith('--')) index += 1;
  }
};

const inputPath = resolve(args.get('input') || join(scriptDir, 'carousel.json'));
const templatePath = resolve(args.get('template') || join(scriptDir, 'template.html'));
const outputPath = resolve(args.get('output') || join(scriptDir, 'output'));
const browserPath = args.get('browser');
const keepTemp = args.get('keep-temp') === 'true';

function parseArgs() {
  if (!existsSync(inputPath)) throw new Error(`Arquivo de dados não encontrado: ${inputPath}`);
  if (!existsSync(templatePath)) throw new Error(`Template não encontrado: ${templatePath}`);
}

function findBrowser() {
  const configured = browserPath || process.env.EDGE_PATH || process.env.CHROME_PATH;
  const candidates = [
    configured,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\EdgeCore\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\EdgeCore\\Application\\msedge.exe',
  ].filter(Boolean);

  const browser = candidates.find((candidate) => existsSync(candidate));
  if (!browser) {
    throw new Error('Nenhum Edge/Chrome foi encontrado. Informe o executável com --browser.');
  }
  return browser;
}

function escapeForScriptJson(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}

function fillTemplate(template, payload) {
  return template
    .replaceAll('{{THEME}}', payload.theme)
    .replaceAll('{{VARIANT}}', payload.slide.variant)
    .replaceAll('{{LABEL}}', payload.slide.label)
    .replaceAll('{{DESCRIPTOR}}', payload.descriptor)
    .replaceAll('{{BRAND_MARK}}', payload.brandMark)
    .replaceAll('{{BRAND_DESCRIPTOR}}', payload.brandDescriptor)
    .replaceAll('{{NUMBER}}', payload.number)
    .replaceAll('{{TOTAL}}', payload.total)
    .replaceAll('{{DATA_JSON}}', escapeForScriptJson(payload));
}

function wait(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function removePath(path) {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      rmSync(path, { recursive: true, force: true });
      return;
    } catch (error) {
      if (attempt === 7) return;
      wait(100);
    }
  }
}

function pngSize(filePath) {
  const header = readFileSync(filePath).subarray(0, 24);
  if (header.length !== 24 || header.subarray(1, 4).toString('ascii') !== 'PNG') {
    throw new Error(`Arquivo PNG inválido: ${filePath}`);
  }
  return {
    width: header.readUInt32BE(16),
    height: header.readUInt32BE(20),
  };
}

function waitForFile(filePath, timeoutMs = 10000) {
  const started = Date.now();
  while (!existsSync(filePath)) {
    if (Date.now() - started >= timeoutMs) return false;
    wait(100);
  }
  return true;
}

function renderSlide(browser, htmlPath, pngPath, profileDir) {
  rmSync(pngPath, { force: true });
  const result = spawnSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-background-networking',
    '--disable-default-app',
    '--disable-extensions',
    '--disable-sync',
    '--metrics-recording-only',
    '--no-first-run',
    '--no-sandbox',
    '--force-color-profile=srgb',
    '--force-device-scale-factor=1',
    '--hide-scrollbars',
    '--lang=pt-BR',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=1000',
    `--user-data-dir=${profileDir}`,
    '--window-size=1080,1350',
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ], {
    encoding: 'utf8',
    timeout: 60000,
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || '').trim();
    throw new Error(`Falha ao renderizar ${pngPath}: ${detail}`);
  }
  if (!waitForFile(pngPath)) throw new Error(`Nenhum PNG foi criado: ${pngPath}`);

  const size = pngSize(pngPath);
  if (size.width !== 1080 || size.height !== 1350) {
    throw new Error(`Dimensão incorreta em ${pngPath}: ${size.width}x${size.height}`);
  }
  return size;
}

function main() {
  parseArgs();
  mkdirSync(outputPath, { recursive: true });

  const data = JSON.parse(readFileSync(inputPath, 'utf8'));
  const template = readFileSync(templatePath, 'utf8');
  const browser = findBrowser();
  const tempRoot = mkdtempSync(join(tmpdir(), 'carrossel-gold-'));
  const profileDir = join(tempRoot, 'profile');
  const results = [];

  try {
    data.slides.forEach((slide, index) => {
      const number = String(index + 1).padStart(2, '0');
      const payload = {
        theme: data.theme,
        descriptor: data.brand.descriptor,
        brandMark: data.brand.name,
        brandDescriptor: data.brand.descriptor,
        number,
        total: String(data.slides.length).padStart(2, '0'),
        slide,
      };
      const htmlPath = join(tempRoot, `slide-${number}.html`);
      const pngPath = join(outputPath, `${number}-${slide.id}.png`);
      writeFileSync(htmlPath, fillTemplate(template, payload), 'utf8');
      const size = renderSlide(browser, htmlPath, pngPath, profileDir);
      results.push({ file: pngPath, ...size });
      process.stdout.write(`${number} ${slide.id}: ${size.width}x${size.height}\n`);
    });
  } finally {
    if (!keepTemp) removePath(tempRoot);
  }

  process.stdout.write(`Renderizados: ${results.length} PNGs em ${outputPath}\n`);
}

try {
  main();
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
