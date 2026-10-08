import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
const require = Module.createRequire(import.meta.url);
const ts = require('typescript');
const root = path.resolve(import.meta.dirname, '..');
const cache = new Map();
let pathname = '/';
function load(relative) {
  let filename = path.resolve(root, relative);
  if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) filename = path.join(filename, 'index');
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) filename += fs.existsSync(filename + '.ts') ? '.ts' : '.tsx';
  if (cache.has(filename)) return cache.get(filename).exports;
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
    fileName: filename, reportDiagnostics: true,
  });
  assert.deepEqual(compiled.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error), []);
  const instance = new Module(filename);
  instance.filename = filename;
  instance.paths = Module._nodeModulePaths(root);
  instance.require = name => {
    if (name === 'next/navigation') return { usePathname: () => pathname };
    if (name === 'next/link') return { __esModule: true, default: 'a' };
    if (name.startsWith('@/')) return load(name.slice(2));
    if (name.startsWith('.')) return load(path.relative(root, path.resolve(path.dirname(filename), name)));
    return require(name);
  };
  cache.set(filename, instance);
  instance._compile(compiled.outputText, filename);
  return instance.exports;
}
function elements(node) {
  if (!node || typeof node !== 'object') return [];
  if (Array.isArray(node)) return node.flatMap(elements);
  return [node, ...elements(node.props?.children)];
}
function text(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(text).join(' ');
  return node && typeof node === 'object' ? text(node.props?.children) : '';
}

test('homepage main browse action precedes the long introduction without removing it', () => {
  const Hero = load('components/home/hero/hero.tsx').default;
  const nodes = elements(Hero());
  const actionIndex = nodes.findIndex(el => el.props?.href === '/drilling-rigs' && /Explore Drilling Rigs/.test(text(el)));
  const introIndex = nodes.findIndex(el => el.type === 'p' && /NGE Drillsol designs and manufactures/.test(text(el)));
  assert.ok(actionIndex >= 0 && introIndex >= 0);
  assert.ok(actionIndex < introIndex, 'the main action must not be buried below the introduction');
  assert.equal(nodes.filter(el => el.type === 'h1').length, 1);
  assert.ok(nodes.some(el => el.props?.href === '/downloads/NGE-DRILLSOL-CATALOGUE.pdf'));
  assert.ok(nodes.some(el => el.type === 'p' && /Our drilling equipment is selected/.test(text(el))));
});

test('mobile quick contact has labelled enquiry and contextual WhatsApp actions without removing desktop call', () => {
  const Component = load('components/shared/FloatingContact.tsx').default;
  for (const route of ['/', '/contact', '/drilling-rigs/ngdr2000']) {
    pathname = route;
    const tree = Component();
    const bar = elements(tree).find(el => el.type === 'nav' && el.props['aria-label'] === 'Quick contact');
    assert.ok(bar, 'a labelled mobile quick-contact bar is required');
    const links = elements(bar).filter(el => el.props?.href);
    assert.equal(links.length, 2);
    const enquiry = links.find(el => el.props.href === '/contact#inquiry-form');
    assert.ok(enquiry);
    assert.match(text(enquiry), /Enquire/);
    const whatsapp = links.find(el => el.props.href.startsWith('https://wa.me/'));
    assert.equal(whatsapp.props.href, load('lib/whatsapp.ts').getPageWhatsAppEnquiryUrl(route));
    assert.match(text(whatsapp), /WhatsApp/);
    assert.equal(typeof whatsapp.props.onClick, 'function');
    assert.equal(whatsapp.props.rel, 'noopener noreferrer');
    assert.ok(elements(tree).some(el => el.props?.href?.startsWith('tel:')), 'retain the existing desktop call action');
  }
});
