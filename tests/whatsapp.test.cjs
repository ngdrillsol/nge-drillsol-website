// Dependency-light component contract tests; no browser or WhatsApp requests.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const root = path.resolve(__dirname, '..');
const toolRoot = process.env.NGE_TEST_TOOL_MODULES;
const toolRequire = toolRoot ? Module.createRequire(path.join(toolRoot, 'package.json')) : require;
const ts = toolRequire('typescript');
let pathname = '/';
const cache = new Map();
function load(relative) {
  let filename = path.resolve(root, relative);
  if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) filename += fs.existsSync(filename + '.ts') ? '.ts' : '.tsx';
  if (cache.has(filename)) return cache.get(filename).exports;
  const source = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
    reportDiagnostics: true,
  });
  assert.deepEqual(compiled.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error), [], filename);
  const instance = new Module(filename, module);
  instance.filename = filename;
  instance.paths = module.paths;
  instance.require = (name) => {
    if (name === 'next/navigation') return { usePathname: () => pathname, notFound: toolRequire('next/navigation').notFound };
    if (name === 'next/link') return { __esModule: true, default: 'a' };
    if (name === 'framer-motion') return { motion: new Proxy({}, { get: (_, tag) => tag }) };
    if (name.startsWith('@/')) return load(name.slice(2));
    if (name.startsWith('.')) return load(path.relative(root, path.resolve(path.dirname(filename), name)));
    return toolRequire(name);
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
function whatsappLinks(tree) {
  return elements(tree).filter(el => typeof el.props?.href === 'string' && el.props.href.startsWith('https://wa.me/'));
}
function message(href) {
  const url = new URL(href);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/919106360907');
  assert.deepEqual([...url.searchParams.keys()], ['text']);
  return url.searchParams.get('text');
}
function requirements(text) {
  assert.match(text, /depth.*\(m or ft\)/i);
  assert.match(text, /diameter.*\(mm or inches\)/i);
}

test('floating WhatsApp follows homepage, contact, water-well and product routes without guessing model names', () => {
  const FloatingContact = load('components/shared/FloatingContact.tsx').default;
  for (const [route, context] of [
    ['/', /homepage/i], ['/contact', /contact page/i],
    ['/drilling-rigs/water-well-drilling-rigs', /water well drilling/i],
    ['/drilling-rigs/ngdr3000', /\/drilling-rigs\/ngdr3000/],
    ['/drilling-rigs/ngdth600', /\/drilling-rigs\/ngdth600/],
    ['/about', /drilling project/i], [null, /drilling project/i],
  ]) {
    pathname = route;
    const link = whatsappLinks(FloatingContact())[0];
    const text = message(link.props.href);
    assert.match(text, context);
    requirements(text);
    assert.equal(typeof link.props.onClick, 'function');
    assert.equal(link.props.rel, 'noopener noreferrer');
  }
});

test('contact CTAs and card share contact context with explicit unit prompts', () => {
  for (const file of ['ContactHero', 'CTASection']) {
    const tree = load(`components/contact/${file}.tsx`).default();
    for (const link of whatsappLinks(tree)) {
      const text = message(link.props.href);
      assert.match(text, /contact page/i);
      requirements(text);
    }
    assert.equal(whatsappLinks(tree).length, 1);
  }
  const card = load('components/contact/contact.data.ts').contactCards.find(c => c.title === 'WhatsApp');
  const text = message(card.href);
  assert.match(text, /contact page/i);
  requirements(text);
});

test('each enquiry field has a persistent associated label', () => {
  const nodes = elements(load('components/contact/InquiryForm.tsx').default());
  const fields = nodes.filter(el => ['input', 'select', 'textarea'].includes(el.type));
  assert.equal(fields.length, 9);
  assert.equal(new Set(fields.map(el => el.props.id)).size, fields.length);
  for (const field of fields) {
    assert.ok(field.props.id, `${field.props.name} needs an id`);
    const label = nodes.find(el => el.type === 'label' && el.props.htmlFor === field.props.id);
    assert.ok(label, `${field.props.name} needs a label`);
    assert.ok(typeof label.props.children === 'string' && label.props.children.trim());
  }
});

test('contact form explains that the enquiry must be sent in WhatsApp', () => {
  const fields = elements(load('components/contact/InquiryForm.tsx').default());
  const button = fields.find(el => el.props?.type === 'submit');
  assert.ok(button.props.children.includes('Continue to WhatsApp'));
  assert.ok(fields.some(el => typeof el.props?.children === 'string' &&
    el.props.children.includes('Review your enquiry in WhatsApp, then tap Send.')));
});

test('measurement fields require a value with explicit supported units', () => {
  const fields = elements(load('components/contact/InquiryForm.tsx').default());
  for (const [name, valid, invalid] of [
    ['depth', ['300 ft', '100m', '12.5 M'], ['300', '100 mm', '-10 m', 'abc']],
    ['boreDiameter', ['6 inches', '150 mm', '6.5 IN'], ['6', '150 m', '-6 inches', 'abc']],
  ]) {
    const field = fields.find(el => el.props?.name === name);
    assert.ok(field.props.pattern, `${name} needs browser validation`);
    const pattern = new RegExp(`^(?:${field.props.pattern})$`, 'v');
    for (const value of valid) assert.ok(pattern.test(value), `${name}: ${value}`);
    for (const value of invalid) assert.ok(!pattern.test(value), `${name}: ${value}`);
    assert.ok(field.props.title);
  }
});

test('rig detail content reserves space for the fixed navigation', () => {
  const rig = load('components/drilling-rigs/rig.data.ts').getAllRigs()[0];
  const tree = load('components/drilling-rigs/RigDetailPage.tsx').default({ rig });
  assert.ok(tree.props.className.includes('pt-[78px]'));
});

test('rig hero uses a responsive image with eager loading', () => {
  const rig = load('components/drilling-rigs/rig.data.ts').getAllRigs()[0];
  const nodes = elements(load('components/drilling-rigs/RigHero.tsx').default({ rig }));
  const image = nodes.find(el => el.props?.src === rig.heroImage);
  assert.notEqual(image.type, 'img');
  assert.equal(image.props.fill, true);
  assert.ok(image.props.sizes);
  assert.equal(image.props.loading, 'eager');
});

test('utility page titles leave branding to the shared title template', () => {
  for (const [route, title] of [
    ['privacy-policy', 'Privacy Policy'], ['terms-of-use', 'Terms of Use'], ['sitemap', 'Sitemap'],
  ]) assert.equal(load(`app/${route}/page.tsx`).metadata.title, title);
});

test('related rig cards declare responsive image sizing', () => {
  const rigs = load('components/drilling-rigs/rig.data.ts').getAllRigs();
  const rig = rigs.find(item => item.relatedRigs?.length);
  assert.ok(rig);
  const nodes = elements(load('components/drilling-rigs/RelatedRigs.tsx').default({ rig }));
  const images = nodes.filter(el => el.props?.src);
  assert.ok(images.length);
  for (const image of images) {
    assert.notEqual(image.type, 'img');
    assert.equal(image.props.fill, true);
    assert.ok(image.props.sizes);
  }
});

test('contact page declares its own enquiry metadata', () => {
  const metadata = load('app/contact/page.tsx').metadata;
  assert.ok(metadata, 'Contact metadata is missing');
  assert.equal(metadata.title.absolute, 'Contact NGE Drillsol');
  assert.equal(metadata.alternates.canonical, '/contact');
  assert.match(metadata.description, /project requirements/);
});

test('contact form prompts and submitted message retain explicit measurement units', () => {
  const tree = load('components/contact/InquiryForm.tsx').default();
  const fields = elements(tree);
  assert.match(fields.find(el => el.props?.name === 'depth').props.placeholder, /\(m or ft\)/);
  assert.match(fields.find(el => el.props?.name === 'boreDiameter').props.placeholder, /\(mm or inches\)/);
  const form = fields.find(el => typeof el.props?.onSubmit === 'function');
  const OriginalFormData = global.FormData;
  const originalWindow = global.window;
  const calls = [];
  const values = { name: ' A & B ', email: 'test@example.invalid', phone: '+123', country: 'Test', application: 'Water Well Drilling', depth: '300 ft', boreDiameter: '6 inches', requirements: 'Rock & clay? #1\n第二行' };
  global.FormData = class { get(key) { return values[key] ?? ''; } };
  global.window = { open: (...args) => calls.push(args) };
  try {
    let prevented = false;
    form.props.onSubmit({ preventDefault() { prevented = true; }, currentTarget: { checkValidity: () => true } });
    assert.equal(prevented, true);
    assert.equal(calls.length, 1);
    const text = message(calls[0][0]);
    requirements(text);
    assert.match(text, /depth \(m or ft\): 300 ft/i);
    assert.match(text, /diameter \(mm or inches\): 6 inches/i);
    assert.ok(text.includes(values.requirements));
    assert.ok(text.includes('Name: A & B'));
    assert.ok(text.includes('Preferred Rig: Not specified'));
    assert.deepEqual(calls[0].slice(1), ['_blank', 'noopener,noreferrer']);
    let reported = false;
    form.props.onSubmit({ preventDefault() {}, currentTarget: { checkValidity: () => false, reportValidity() { reported = true; } } });
    assert.equal(reported, true);
    assert.equal(calls.length, 1);
  } finally { global.FormData = OriginalFormData; global.window = originalWindow; }
});

test('homepage engineering CTA supplies homepage context and units', () => {
  const links = whatsappLinks(load('components/home/EngineeringSolution.tsx').default());
  assert.equal(links.length, 1);
  const text = message(links[0].props.href);
  assert.match(text, /homepage/i);
  requirements(text);
});

test('all source rig models retain exact dynamic WhatsApp references and inquiry units', () => {
  const rigs = load('components/drilling-rigs/rig.data.ts').getAllRigs();
  assert.ok(rigs.length > 0);
  const Hero = load('components/drilling-rigs/RigHero.tsx').default;
  const Inquiry = load('components/drilling-rigs/RigInquiryCTA.tsx').default;
  for (const rig of rigs) {
    for (const Component of [Hero, Inquiry]) {
      const links = whatsappLinks(Component({ rig }));
      assert.equal(links.length, 1);
      const text = message(links[0].props.href);
      assert.ok(text.includes(rig.model), rig.slug);
      if (Component === Inquiry) {
        assert.ok(text.includes(rig.name), rig.slug);
        requirements(text);
      }
    }
    const visible = elements(Inquiry({ rig })).map(el => el.props?.children).filter(v => typeof v === 'string').join('\n');
    requirements(visible);
  }
  console.log(`Verified dynamic WhatsApp references for ${rigs.length} source rigs.`);
});

test('model performance and FAQ introductions preserve word spacing', () => {
  const React = toolRequire('react');
  const { renderToStaticMarkup } = toolRequire('react-dom/server');
  const rigs = load('components/drilling-rigs/rig.data.ts').getAllRigs();
  for (const rig of rigs) {
    for (const [file, word] of [['RigPerformance', 'configuration'], ['RigFAQ', 'drilling rig']]) {
      if (file === 'RigPerformance' && !rig.performance?.length) continue;
      if (file === 'RigFAQ' && !rig.faqs?.length) continue;
      const Component = load(`components/drilling-rigs/${file}.tsx`).default;
      const html = renderToStaticMarkup(React.createElement(Component, { rig }));
      assert.ok(html.includes(`${rig.model} ${word}`), `${rig.model}: missing space before ${word}`);
      assert.ok(!html.includes(`${rig.model}${word}`));
    }
  }
});

test('rig hero and listing WhatsApp CTAs include contextual project fields', () => {
  const rigs = load('components/drilling-rigs/rig.data.ts').getAllRigs();
  const Hero = load('components/drilling-rigs/RigHero.tsx').default;
  const listing = load('components/drilling-rigs/CTASection.tsx').default;
  for (const rig of rigs) {
    const text = message(whatsappLinks(Hero({ rig }))[0].props.href);
    assert.ok(text.includes(rig.model));
    requirements(text);
    for (const field of ['Application:', 'Formation / ground conditions:', 'Drilling method:', 'Project location:']) assert.ok(text.includes(field));
  }
  const text = message(whatsappLinks(listing())[0].props.href);
  assert.match(text, /select a drilling rig/);
  requirements(text);
  assert.ok(text.includes('Drilling method:'));
});

test('sampled model metadata uses the approved page-specific descriptions', async () => {
  const { generateMetadata } = load('app/drilling-rigs/[slug]/page.tsx');
  for (const [slug, expected] of [
    ['ngdr3000', 'Explore the NGE Drillsol NGDR3000. View published specifications, compare related rigs and send your project requirements for technical review.'],
    ['ngdr2000', 'Review the NGE Drillsol NGDR2000 specifications, mounting information and related models. Contact the team to discuss your drilling project.'],
  ]) {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug }) });
    assert.equal(metadata.description, expected);
    assert.equal(metadata.openGraph.description, expected);
    assert.equal(metadata.twitter.description, expected);
    assert.equal(metadata.alternates.canonical, `/drilling-rigs/${slug}`);
  }
});


test('static information pages declare page-specific metadata and self-canonicals', () => {
  const cases = [["/industries", "Industries & Drilling Applications", "Explore NGE Drillsol industry pages and share your drilling application, ground conditions and project requirements for review."], ["/markets", "India & Export Markets", "Explore NGE Drillsol market information and contact the team with your country, project location and drilling equipment requirements."], ["/projects", "Drilling Project Overview", "Browse the NGE Drillsol project pages and contact the team to discuss the requirements of your own drilling project."], ["/projects/adani-green-hydrogen", "Green Hydrogen Project Overview", "Read the green hydrogen project overview on the NGE Drillsol website and contact the team to discuss your project requirements."], ["/resources", "Drilling Resources", "Browse NGE Drillsol drilling resources and contact the team with questions about equipment and project requirements."], ["/services", "Drilling Services & Support", "Explore NGE Drillsol service information and discuss your drilling project, equipment or support requirements with the team."]];
  for (const [route, title, description] of cases) {
    const metadata = load(`app${route}/page.tsx`).metadata;
    assert.ok(metadata, `${route}: metadata missing`);
    assert.equal(metadata.title, title, route);
    assert.equal(metadata.description, description, route);
    assert.equal(metadata.alternates.canonical, route, route);
    assert.equal(metadata.openGraph.url, route, route);
    assert.equal(metadata.openGraph.title, `${title} | NGE Drillsol`, route);
    assert.equal(metadata.openGraph.description, description, route);
    assert.equal(metadata.twitter.title, `${title} | NGE Drillsol`, route);
    assert.equal(metadata.twitter.description, description, route);
  }
});


test('privacy policy declares its own canonical without changing its title', () => {
  const metadata = load('app/privacy-policy/page.tsx').metadata;
  assert.equal(metadata.alternates?.canonical, '/privacy-policy');
  assert.equal(metadata.title, 'Privacy Policy');
});


test('every industry gets route-specific metadata without new suitability claims', async () => {
  const page = load('app/industries/[slug]/page.tsx');
  assert.equal(typeof page.generateMetadata, 'function');
  const industries = load('components/industries/industries.data.ts').industries;
  for (const industry of industries) {
    const metadata = await page.generateMetadata({ params: Promise.resolve({ slug: industry.id }) });
    const route = `/industries/${industry.id}`;
    assert.equal(metadata.title, `${industry.title} Drilling`);
    assert.equal(metadata.alternates.canonical, route);
    assert.equal(metadata.openGraph.url, route);
    assert.equal(metadata.openGraph.description, metadata.description);
    assert.equal(metadata.twitter.description, metadata.description);
    assert.ok(metadata.description.includes(industry.title));
    assert.ok(!metadata.title.includes('NGE Drillsol'));
  }
});


test('every geology page gets its own canonical and descriptive metadata', async () => {
  const page = load('app/solutions/geology/[slug]/page.tsx');
  assert.equal(typeof page.generateMetadata, 'function');
  const items = load('components/solutions/geology/geology.data.ts').geologyData;
  for (const item of items) {
    const metadata = await page.generateMetadata({ params: Promise.resolve({ slug: item.slug }) });
    const route = `/solutions/geology/${item.slug}`;
    assert.equal(metadata.title, `${item.name} Drilling Considerations`);
    assert.equal(metadata.alternates.canonical, route);
    assert.equal(metadata.openGraph.url, route);
    assert.equal(metadata.openGraph.description, metadata.description);
    assert.equal(metadata.twitter.description, metadata.description);
    assert.ok(metadata.description.includes(item.name));
  }
});


test('all service metadata uses the stable service URL and one shared brand suffix', async () => {
  const { generateMetadata } = load('app/services/[slug]/page.tsx');
  const items = load('components/services/services.data.ts').services;
  for (const item of items) {
    const slug = item.href.split('/').filter(Boolean).pop();
    for (const input of [slug, slug.toUpperCase()]) {
      const metadata = await generateMetadata({ params: Promise.resolve({ slug: input }) });
      assert.equal(metadata.title, item.title);
      assert.equal(metadata.description, item.description);
      assert.equal(metadata.alternates.canonical, item.href);
      assert.equal(metadata.openGraph.url, item.href);
      assert.equal(metadata.openGraph.title, `${item.title} | NGE Drillsol`);
      assert.equal(metadata.twitter.description, item.description);
    }
  }
});


test('unknown industry, geology and service slugs reject metadata with notFound', async () => {
  for (const route of ['industries', 'solutions/geology', 'services']) {
    const { generateMetadata } = load(`app/${route}/[slug]/page.tsx`);
    await assert.rejects(
      () => generateMetadata({ params: Promise.resolve({ slug: 'not-a-real-nge-page' }) }),
      error => error.digest === 'NEXT_HTTP_ERROR_FALLBACK;404',
      route,
    );
  }
});

test('homepage enquiry action has the approved destination and contextual editable requirements', () => {
  const action = load('components/home/InquirySection/inquiry.data.ts').inquiryActions.find(a => a.title === 'WhatsApp');
  const text = message(action.href);
  assert.match(text, /homepage/i);
  requirements(text);
});
