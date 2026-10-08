// Component/effect contracts only: native focus trapping and layout need browser checks.
// No DOM/browser packages or dependency changes are required by this harness.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';

const require = Module.createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
const toolRoot = process.env.NGE_TEST_TOOL_MODULES;
const toolRequire = toolRoot ? Module.createRequire(path.join(toolRoot, 'package.json')) : require;
const ts = toolRequire('typescript');

function elements(node) {
  if (!node || typeof node !== 'object') return [];
  if (Array.isArray(node)) return node.flatMap(elements);
  return [node, ...elements(node.props?.children)];
}

function text(node) {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node !== 'object') return String(node);
  if (Array.isArray(node)) return node.map(text).join(' ');
  return text(node.props?.children);
}

function resolve(node) {
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map(resolve);
  if (typeof node.type === 'function') return resolve(node.type(node.props));
  return { ...node, props: { ...node.props, children: resolve(node.props?.children) } };
}

function mountNavbar(t, { bodyOverflow = '', rootOverflow = '' } = {}) {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const slots = [];
  const hosts = new Map();
  const mediaListeners = new Set();
  const windowListeners = new Map();
  let cursor = 0;
  let effects = [];
  let tree;
  const media = {
    matches: false,
    media: '(min-width: 1440px)',
    addEventListener(type, listener) { assert.equal(type, 'change'); mediaListeners.add(listener); },
    removeEventListener(type, listener) { assert.equal(type, 'change'); mediaListeners.delete(listener); },
  };
  const document = {
    body: { style: { overflow: bodyOverflow } },
    documentElement: { style: { overflow: rootOverflow } },
    activeElement: null,
  };
  const window = {
    scrollY: 0,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame() {},
    addEventListener(type, listener) { windowListeners.set(type, listener); },
    removeEventListener(type) { windowListeners.delete(type); },
    matchMedia(query) { assert.equal(query, media.media); return media; },
  };
  globalThis.window = window;
  globalThis.document = document;

  const react = {
    ...toolRequire('react'),
    useState(initial) {
      const i = cursor++;
      if (!slots[i]) slots[i] = { value: initial };
      return [slots[i].value, next => { slots[i].value = typeof next === 'function' ? next(slots[i].value) : next; }];
    },
    useRef(initial) {
      const i = cursor++;
      if (!slots[i]) slots[i] = { ref: { current: initial } };
      return slots[i].ref;
    },
    useEffect(setup, dependencies) {
      const i = cursor++;
      const previous = slots[i];
      if (!previous || !dependencies || dependencies.some((value, index) => !Object.is(value, previous.dependencies[index]))) {
        effects.push(() => {
          previous?.cleanup?.();
          slots[i] = { dependencies, cleanup: setup(), setup };
        });
      }
    },
  };
  const filename = path.join(root, 'components/navbar/Navbar.tsx');
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
    reportDiagnostics: true,
  });
  assert.deepEqual(compiled.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error), []);
  const instance = new Module(filename);
  instance.filename = filename;
  instance.paths = Module._nodeModulePaths(root);
  instance.require = name => {
    if (name === 'react') return react;
    if (name === 'next/link') return { __esModule: true, default: 'a' };
    return toolRequire(name);
  };
  instance._compile(compiled.outputText, filename);
  const Navbar = instance.exports.default;

  function draw() {
    cursor = 0;
    effects = [];
    tree = resolve(Navbar());
    for (const host of hosts.values()) host.isConnected = false;
    for (const element of elements(tree)) {
      const ref = element.props?.ref;
      if (!ref) continue;
      let host = hosts.get(ref);
      if (!host) {
        host = {
          open: false,
          showModalCalls: 0,
          closeCalls: 0,
          focusCalls: [],
          showModal() { this.open = true; this.showModalCalls++; },
          close() { this.open = false; this.closeCalls++; },
          focus(options) { this.focusCalls.push(options); document.activeElement = this; },
        };
        hosts.set(ref, host);
      }
      host.isConnected = true;
      host.element = element;
      ref.current = host;
    }
    for (const [ref, host] of hosts) if (!host.isConnected) ref.current = null;
    for (const effect of effects) effect();
    return tree;
  }

  let unmounted = false;
  function unmount() {
    if (unmounted) return;
    for (const slot of slots) slot.cleanup?.();
    unmounted = true;
  }
  t.after(() => {
    unmount();
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
    if (originalDocument === undefined) delete globalThis.document;
    else globalThis.document = originalDocument;
  });
  draw();
  return {
    draw, unmount, document, mediaListeners, windowListeners,
    get tree() { return tree; },
    trigger: () => elements(tree).find(el => el.type === 'button' && el.props['aria-controls'] === 'mobile-navigation'),
    menu: () => elements(tree).find(el => el.props?.id === 'mobile-navigation'),
    host: element => hosts.get(element.props.ref),
    open() { this.trigger().props.onClick(); draw(); return this.menu(); },
    resize(width) {
      const matches = width >= 1440;
      if (matches !== media.matches) {
        media.matches = matches;
        for (const listener of [...mediaListeners]) listener({ matches });
      }
      draw();
    },
    repeatEffects() {
      for (const slot of slots) {
        if (slot.setup) { slot.cleanup?.(); slot.cleanup = slot.setup(); }
      }
    },
  };
}

test('mobile menu trigger has a visible Menu label and a 48px touch target', t => {
  const ui = mountNavbar(t);
  const trigger = ui.trigger();
  assert.match(text(trigger), /Menu/);
  assert.match(trigger.props.className, /\bh-12\b/);
  assert.match(trigger.props.className, /\bmin-w-12\b/);
  assert.match(trigger.props.className, /min-\[1440px\]:hidden/);
  assert.equal(trigger.props['aria-expanded'], false);
});

test('opening the menu uses a labelled native modal with focused close control and restores the trigger on close', t => {
  const ui = mountNavbar(t);
  assert.equal(ui.menu(), undefined);
  const menu = ui.open();
  assert.equal(menu.type, 'dialog', 'native modal isolates background controls');
  assert.equal(menu.props['aria-modal'], true);
  assert.equal(ui.trigger().props['aria-haspopup'], 'dialog');
  const title = elements(menu).find(el => el.props?.id === menu.props['aria-labelledby']);
  assert.equal(text(title), 'Menu');
  const dialog = ui.host(menu);
  assert.equal(dialog.showModalCalls, 1, 'must call showModal, not only render an open attribute');
  assert.equal(menu.props.open, undefined);
  const close = elements(menu).find(el => el.type === 'button' && el.props['aria-label'] === 'Close menu');
  assert.ok(close);
  assert.match(close.props.className, /\bh-12\b/);
  assert.equal(ui.document.activeElement, ui.host(close));
  assert.equal(ui.trigger().props['aria-expanded'], true);
  close.props.onClick();
  ui.draw();
  assert.equal(ui.menu(), undefined);
  assert.equal(dialog.closeCalls, 1);
  assert.equal(ui.document.activeElement, ui.host(ui.trigger()));
  assert.deepEqual(ui.host(ui.trigger()).focusCalls.at(-1), { preventScroll: true });
  assert.equal(ui.trigger().props['aria-expanded'], false);
});

test('Tab wraps between visible modal controls without intercepting browser shortcuts', t => {
  const ui = mountNavbar(t);
  const menu = ui.open();
  assert.equal(typeof menu.props.onKeyDown, 'function', 'keep the tab boundary inside the modal');
  const control = (name, visible = true) => ({
    name,
    getClientRects: () => visible ? [{}] : [],
    focus() { ui.document.activeElement = this; },
  });
  const first = control('Close');
  const middle = control('Home');
  const last = control('Get a Quote');
  const controls = [control('hidden first', false), first, middle, last, control('hidden last', false)];
  const currentTarget = { querySelectorAll: () => controls };
  const send = (active, overrides = {}) => {
    ui.document.activeElement = active;
    let prevented = false;
    menu.props.onKeyDown({
      key: 'Tab', shiftKey: false, ctrlKey: false, altKey: false, metaKey: false,
      currentTarget, preventDefault() { prevented = true; }, ...overrides,
    });
    return prevented;
  };
  assert.equal(send(last), true);
  assert.equal(ui.document.activeElement, first);
  assert.equal(send(first, { shiftKey: true }), true);
  assert.equal(ui.document.activeElement, last);
  assert.equal(send(middle), false, 'ordinary tabs keep their native behavior');
  assert.equal(send(last, { key: 'Escape' }), false);
  for (const modifier of ['ctrlKey', 'altKey', 'metaKey']) {
    assert.equal(send(last, { [modifier]: true }), false, `${modifier} browser shortcuts stay available`);
  }
});

test('page scrolling is locked only while the mobile modal is open and prior styles survive cleanup', t => {
  const ui = mountNavbar(t, { bodyOverflow: 'auto', rootOverflow: 'scroll' });
  const assertRestored = () => {
    assert.equal(ui.document.body.style.overflow, 'auto');
    assert.equal(ui.document.documentElement.style.overflow, 'scroll');
  };
  assertRestored();
  ui.open();
  assert.equal(ui.document.body.style.overflow, 'hidden');
  assert.equal(ui.document.documentElement.style.overflow, 'hidden');
  ui.repeatEffects();
  assert.equal(ui.document.body.style.overflow, 'hidden');
  assert.equal(ui.document.documentElement.style.overflow, 'hidden');
  elements(ui.menu()).find(el => el.props?.['aria-label'] === 'Close menu').props.onClick();
  ui.draw();
  assertRestored();
  ui.open();
  assert.equal(ui.document.body.style.overflow, 'hidden');
  ui.unmount();
  assertRestored();
});

test('Escape cancellation closes the modal state, unlocks scrolling and returns focus', t => {
  const ui = mountNavbar(t);
  const menu = ui.open();
  assert.equal(typeof menu.props.onCancel, 'function', 'native Escape must synchronize React state');
  let prevented = false;
  menu.props.onCancel({ preventDefault() { prevented = true; } });
  ui.draw();
  assert.equal(prevented, true);
  assert.equal(ui.menu(), undefined);
  assert.equal(ui.trigger().props['aria-expanded'], false);
  assert.equal(ui.document.body.style.overflow, '');
  assert.equal(ui.document.documentElement.style.overflow, '');
  assert.equal(ui.document.activeElement, ui.host(ui.trigger()));
  assert.equal(ui.open().type, 'dialog', 'menu can open again after Escape');
});

test('resizing to the 1440px desktop breakpoint closes and unlocks the mobile modal without reopening it', t => {
  const ui = mountNavbar(t);
  ui.open();
  ui.resize(1439);
  assert.ok(ui.menu(), 'tablet/mobile menu remains open below the desktop breakpoint');
  ui.resize(1440);
  assert.equal(ui.menu(), undefined, 'hidden mobile modal must not keep the desktop page inert');
  assert.equal(ui.document.body.style.overflow, '');
  assert.equal(ui.document.documentElement.style.overflow, '');
  assert.equal(ui.trigger().props['aria-expanded'], false);
  ui.resize(390);
  assert.equal(ui.menu(), undefined);
  ui.open();
  assert.ok(ui.menu());
  ui.unmount();
  assert.equal(ui.mediaListeners.size, 0, 'breakpoint listener must be cleaned up');
  assert.equal(ui.windowListeners.size, 0);
  assert.equal(ui.document.body.style.overflow, '');
});

test('the mobile drilling category toggle controls a stable, hidden-when-collapsed panel', t => {
  const ui = mountNavbar(t);
  ui.open();
  const toggle = () => elements(ui.menu()).find(el => el.type === 'button' && text(el).trim() === 'Drilling Rigs');
  const controls = toggle().props['aria-controls'];
  assert.equal(typeof controls, 'string', 'screen readers need the controlled category panel id');
  const panel = () => elements(ui.menu()).find(el => el.props?.id === controls);
  assert.ok(panel(), 'aria-controls resolves even while collapsed');
  assert.equal(toggle().props['aria-expanded'], false);
  assert.equal(panel().props.hidden, true);
  toggle().props.onClick();
  ui.draw();
  assert.equal(toggle().props['aria-expanded'], true);
  assert.equal(panel().props.hidden, false);
  assert.deepEqual(elements(panel()).filter(el => el.type === 'a').map(el => el.props.href), [
    '/drilling-rigs/water-well-drilling-rigs',
    '/drilling-rigs/dth-drilling-rigs',
    '/drilling-rigs/rotary-drilling-rigs',
    '/drilling-rigs/core-drilling-rigs',
    '/drilling-rigs/piling-rigs',
    '/drilling-rigs/tractor-mounted-drilling-rigs',
    '/drilling-rigs/workover-rigs',
    '/drilling-rigs',
  ]);
  toggle().props.onClick();
  ui.draw();
  assert.equal(toggle().props['aria-controls'], controls);
  assert.equal(toggle().props['aria-expanded'], false);
  assert.equal(panel().props.hidden, true);
});

test('Get a Quote and Close stay outside the scrolling category list in a viewport-height menu', t => {
  const ui = mountNavbar(t);
  ui.open();
  elements(ui.menu()).find(el => el.type === 'button' && text(el).trim() === 'Drilling Rigs').props.onClick();
  ui.draw();
  const menu = ui.menu();
  const quote = elements(menu).find(el => el.type === 'a' && el.props.href === '/contact');
  const close = elements(menu).find(el => el.props?.['aria-label'] === 'Close menu');
  assert.ok(quote);
  for (const control of [quote, close]) {
    const parents = elements(menu).filter(el => el !== control && elements(el.props?.children).includes(control));
    assert.equal(parents.some(el => /overflow-y-auto/.test(el.props.className)), false,
      `${text(control).trim()} must not scroll out of reach with the category list`);
  }
  const scrollingNav = elements(menu).find(el => el.type === 'nav' && el.props['aria-label'] === 'Mobile navigation');
  assert.ok(scrollingNav);
  assert.match(scrollingNav.props.className, /min-h-0/);
  assert.match(scrollingNav.props.className, /flex-1/);
  assert.match(scrollingNav.props.className, /overflow-y-auto/);
  assert.match(menu.props.className, /h-dvh/);
  assert.match(menu.props.className, /open:flex/);
  assert.match(menu.props.className, /flex-col/);
  assert.equal(elements(scrollingNav).includes(quote), false);
  quote.props.onClick();
  ui.draw();
  assert.equal(ui.menu(), undefined);
  assert.equal(ui.document.body.style.overflow, '');
});

// Preservation checks: existing destinations/callbacks must survive the modal change.
test('all existing mobile destinations close the menu and reset the category on navigation', t => {
  const ui = mountNavbar(t);
  const expectedHrefs = [
    '/', '/drilling-rigs/water-well-drilling-rigs', '/drilling-rigs/dth-drilling-rigs',
    '/drilling-rigs/rotary-drilling-rigs', '/drilling-rigs/core-drilling-rigs',
    '/drilling-rigs/piling-rigs', '/drilling-rigs/tractor-mounted-drilling-rigs',
    '/drilling-rigs/workover-rigs', '/drilling-rigs', '/solutions', '/industries',
    '/services', '/projects', '/markets', '/resources', '/about', '/contact',
  ];
  for (const href of expectedHrefs) {
    ui.open();
    const toggle = elements(ui.menu()).find(el => el.type === 'button' && text(el).trim() === 'Drilling Rigs');
    assert.equal(toggle.props['aria-expanded'], false, 'previous navigation resets expanded categories');
    toggle.props.onClick();
    ui.draw();
    const links = elements(ui.menu()).filter(el => el.type === 'a');
    assert.deepEqual(links.map(el => el.props.href), expectedHrefs);
    links.find(el => el.props.href === href).props.onClick();
    ui.draw();
    assert.equal(ui.menu(), undefined, `${href} closes the menu`);
    assert.equal(ui.document.body.style.overflow, '');
    assert.equal(ui.document.documentElement.style.overflow, '');
    assert.equal(ui.trigger().props['aria-expanded'], false);
  }
  assert.ok(elements(ui.tree).some(el => el.props?.['aria-label'] === 'GSTIN: 24AAGCN4440G1ZP'));
  assert.ok(elements(ui.tree).some(el => el.props?.['aria-label'] === 'NGE DRILLSOL Home'));
});
