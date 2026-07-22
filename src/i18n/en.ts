// English content. Mirrors de.ts exactly. DIN codes, grading figures, proper
// nouns, address, phone and email stay identical to the German source.
// Placeholder page copy: the first sentence ("Placeholder · …") is a brief that
// says what real text belongs there; the Latin lorem after it just fills the layout.
// NB: technical terms are a first pass; have a native reviewer confirm before production.

export const lang = 'en';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

export const meta = {
  title: 'Baustoffe Breitbach e.K. · Aggregates, stone powder and trass from the Vulkaneifel',
  description:
    'Baustoffe Breitbach e.K., Kruft. Wholesaler of concrete aggregate to DIN EN 12620, chippings, crushed stone, trass and stone powder from basalt, diabase and greywacke. Delivery across Germany, Benelux and France.',
};

export const content = {
  nav: [
    { slug: 'unternehmen', label: 'Company' },
    { slug: 'produkte', label: 'Products' },
    { slug: 'leistungen', label: 'Services' },
    { slug: 'kontakt', label: 'Contact' },
  ],
  heroMeta: ['Kruft, Vulkaneifel', 'DE · Benelux · FR'],
  hero: {
    title: 'Concrete aggregate, chippings and stone powder from the Vulkaneifel.',
    sub: 'Baustoffe Breitbach e.K. supplies quality-monitored aggregates to DIN EN 12620, plus trass, crushed stone and stone powder from basalt, diabase and greywacke. Wholesale to concrete, asphalt and construction.',
    imageLabel: ['Image area · photo to follow', 'Quarry, raw gravel and basalt chippings from the Vulkaneifel'],
  },
  slogan: {
    pre: 'Building in harmony with ',
    green: 'nature',
    post: '.',
    body: 'Regional raw materials, short transport distances and the reprocessing of mineral construction materials. The material stays natural stone, from the quarry to the building site.',
  },
  products: {
    heading: 'Product range: gradings from 0/2 to 32/45 mm.',
    aside: 'Concrete aggregate, chippings, crushed stone, sand, trass and stone powder. Loose by tipper and silo truck or in big bags. Rock type and grading as required.',
    more: 'All products',
    cols: ['Product', 'Grading', 'Standard', 'Application'],
    rows: [
      { name: 'Concrete gravel', note: 'rounded', kor: '0/2 · 2/8 · 8/16 · 16/32 mm', norm: 'DIN EN 12620', use: 'Ready-mixed and in-situ concrete, screed' },
      { name: 'Concrete sand', note: '', kor: '0/2 mm', norm: 'DIN EN 12620', use: 'Concrete, mortar, jointing sand' },
      { name: 'Chippings', note: 'basalt / diabase', kor: '2/5 · 5/8 · 8/11 · 11/16 mm', norm: 'DIN EN 13043', use: 'Asphalt, concrete, drainage' },
      { name: 'Premium chippings', note: '', kor: '2/5 · 5/8 mm', norm: 'DIN EN 13043', use: 'Asphalt surface and binder courses' },
      { name: 'Crushed stone', note: '', kor: '0/32 · 0/45 · 32/45 mm', norm: 'DIN EN 13242', use: 'Base and frost-protection courses' },
      { name: 'Crushed sand', note: '', kor: '0/2 · 0/5 mm', norm: 'DIN EN 13242', use: 'Unbound layers, paving bed' },
      { name: 'Stone powder', note: 'basalt, diabase, greywacke, microdiorite, limestone', kor: '0/0,09 mm', norm: 'DIN EN 12620', use: 'Filler for concrete and asphalt, agriculture, industry' },
      { name: 'Trass', note: 'volcanic tuff', kor: 'ground', norm: 'DIN 51043', use: 'Trass cement, trass lime, natural-stone laying' },
      { name: 'Frost-protection gravel', note: '', kor: '0/32 · 0/45 mm', norm: 'DIN EN 13242', use: 'Frost-protection courses in road construction' },
      { name: 'Recycled aggregate', note: 'quality-monitored', kor: '0/45 mm', norm: 'DIN EN 13242', use: 'Earthworks and path construction, backfill' },
      { name: 'White cement', note: '', kor: 'CEM I 42,5 · 52,5', norm: 'DIN EN 197-1', use: 'Fair-faced concrete, terrazzo, precast' },
      { name: 'Quicklime', note: '', kor: '0/3 mm', norm: 'DIN EN 459', use: 'Soil improvement, mortar' },
      { name: 'Decorative gravel', note: 'ornamental', kor: '8/16 · 16/32 mm', norm: 'not standardised', use: 'Garden and landscaping' },
    ],
  },
  band: { label: ['Image area · photo to follow', 'Basalt chippings 8/11 at the stockpile'], caption: 'Basalt chippings 8/11, Osteifel' },
  applications: {
    heading: 'One raw material, six trades.',
    aside: 'From ready-mixed concrete to soil conditioning: the same aggregates, each in the right grading and grade.',
    items: [
      { title: 'Concrete', body: 'Aggregate to DIN EN 12620 for ready-mixed, in-situ and precast concrete. Rounded and crushed grading.', rocks: 'Gravel, sand, chippings, filler' },
      { title: 'Asphalt', body: 'Premium chippings and crushed sand to DIN EN 13043 for surface, binder and base courses.', rocks: 'Basalt, diabase, greywacke' },
      { title: 'Road and path construction', body: 'Crushed stone, frost protection and recycled aggregates to DIN EN 13242 for the substructure.', rocks: 'Crushed stone, frost protection, RC' },
      { title: 'Garden and landscaping', body: 'Decorative gravel, ornamental chippings, paving bedding and backfill sands for outdoor areas.', rocks: 'Decorative gravel, chippings, sand' },
      { title: 'Agriculture', body: 'Stone powder from basalt and diabase for soil improvement and as a mineral fertiliser.', rocks: 'Stone powder, lime' },
      { title: 'Industry', body: 'Trass, white cement, quicklime and special gradings for building-materials plants and processors.', rocks: 'Trass, white cement, lime' },
    ],
  },
  technik: {
    heading: 'Quality-monitored, tested, documented.',
    aside: 'Every delivery with delivery note and certificate of conformity. Factory production control to European standard.',
    columns: [
      { head: 'Standards', rows: [
        { k: 'Concrete', v: 'DIN EN 12620' }, { k: 'Asphalt', v: 'DIN EN 13043' }, { k: 'Mortar', v: 'DIN EN 13139' },
        { k: 'Unbound', v: 'DIN EN 13242' }, { k: 'Trass', v: 'DIN 51043' }, { k: 'Cement', v: 'DIN EN 197-1' },
      ] },
      { head: 'Rock types', rows: [
        { k: 'Basalt', v: '' }, { k: 'Diabase', v: '' }, { k: 'Greywacke', v: '' },
        { k: 'Microdiorite', v: '' }, { k: 'Limestone', v: '' }, { k: 'Trass / tuff', v: '' },
      ] },
      { head: 'Gradings', rows: [
        { k: 'Powder', v: '0/0,09' }, { k: 'Sand', v: '0/2' }, { k: 'Chippings', v: '2/16' },
        { k: 'Gravel', v: '8/32' }, { k: 'Crushed', v: '32/45' }, { k: 'Special', v: 'on request' },
      ] },
      { head: 'Delivery', rows: [
        { k: 'Tipper', v: '' }, { k: 'Silo truck', v: '' }, { k: 'Big bag', v: '' },
        { k: 'Bagged', v: '' }, { k: 'Collection', v: '' }, { k: 'DE · Benelux · FR', v: '' },
      ] },
    ],
  },
  company: {
    heading: 'Baustoffe Breitbach, a family business for over 40 years.',
    aside: 'Run by Daniel Breitbach. Based in Kruft, at the edge of the eastern Eifel between Laacher See and the Rhine.',
    more: 'More about us',
    paras: [
      'What began as a regional trade in sand and gravel has grown into a wholesaler of mineral construction materials. The focus is on aggregates for concrete and asphalt and on stone powder from the volcanic rock of the Eifel.',
      'We advise on grading, rock type and standard, schedule delivery and supply on time to concrete plants, asphalt mixing plants and construction firms in Germany, the Benelux countries and France.',
      'Short distances, dependable contacts and consistent quality. That is the basis our customers have planned on for decades.',
    ],
    facts: [
      { v: '40+', l: 'Years in the aggregates trade' },
      { v: '3', l: 'Countries in the delivery area' },
      { v: '5', l: 'Rock types for stone powder' },
      { v: 'DIN EN', l: 'Quality-monitored gradings' },
    ],
  },
  partners: {
    heading: 'Partners and suppliers.',
    aside: 'Placeholder · insert the partner company logos (cement works, special sands, international suppliers).',
    slots: ['Partner logo', 'Partner logo', 'Partner logo', 'Partner logo', 'Partner logo', 'Partner logo'],
  },
  map: {
    heading: 'Location: Kruft, Vulkaneifel.',
    aside: 'Reuschenlay 32, 56642 Kruft. Delivery and collection by arrangement.',
  },
  contact: {
    heading: 'Request a grading, receive a price.',
    lead: 'Tell us the rock type, grading, quantity and delivery location. You receive a quotation with price and delivery date.',
    cta: 'To contact',
    email: 'info@baustoffe-breitbach.com',
    rows: [
      { k: 'Phone', v: '02652 6326' },
      { k: 'E-mail', v: 'info@baustoffe-breitbach.com' },
      { k: 'Hours', v: 'Mon to Fri, 7:00 to 17:00' },
    ],
    standortLabel: 'Location',
    address: ['Baustoffe Breitbach e.K.', 'Reuschenlay 32', '56642 Kruft', 'Germany'],
  },
  footer: {
    blurb: 'Wholesaler of aggregates, trass and stone powder from the Vulkaneifel.',
    cols: [
      { head: 'Address', wide: true, items: [
        { label: 'Baustoffe Breitbach e.K.' }, { label: 'Reuschenlay 32' }, { label: '56642 Kruft' }, { label: 'Germany' },
      ] },
      { head: 'Contact', wide: false, items: [
        { label: '02652 6326', href: 'tel:+4926526326' },
        { label: 'info@baustoffe-breitbach.com', href: 'mailto:info@baustoffe-breitbach.com' },
        { label: 'baustoffe-breitbach.de' },
      ] },
      { head: 'Range', wide: false, items: [
        { label: 'Company', slug: 'unternehmen' }, { label: 'Products', slug: 'produkte' },
        { label: 'Services', slug: 'leistungen' }, { label: 'Contact', slug: 'kontakt' },
      ] },
    ],
    legal: [
      { label: 'Imprint', slug: 'impressum' }, { label: 'Privacy', slug: 'datenschutz' }, { label: 'Cookie policy', slug: 'cookies' },
    ],
    copyright: '© 2026 Baustoffe Breitbach e.K.',
  },

  pages: {
    unternehmen: {
      slug: 'unternehmen',
      title: 'Company',
      lead: 'Placeholder · Short intro about the company (who we are, since when, region). ' + LOREM,
      blocks: [
        { heading: 'About the firm', body: 'Placeholder · Company history and identity: a family business with over 40 years of experience in concrete and in the application of stone powder. ' + LOREM },
        { heading: 'Customers and delivery area', body: 'Placeholder · Customer base (mid-sized and large companies in concrete production, mortar production, agriculture) and delivery area Germany, Benelux, France. ' + LOREM },
        { heading: 'Our approach', body: 'Placeholder · Values and way of working: a flexible, advice-led family business with reliable supply concepts for natural products. ' + LOREM },
      ],
      inhaber: {
        heading: 'The owner',
        name: 'Daniel Breitbach',
        role: 'Owner',
        imageLabel: ['Image area · photo to follow', 'Portrait of Daniel Breitbach'],
        body: 'Placeholder · Short profile of the owner Daniel Breitbach (background, role, any additional management). ' + LOREM,
      },
    },
    produkte: {
      slug: 'produkte',
      title: 'Products and stone powder',
      lead: 'Placeholder · Intro to the range: exclusively products certified to DIN 12620 for concrete production, plus a full stone-powder line. ' + LOREM,
      categories: [
        { name: 'Stone powder', imageLabel: ['Image area · photo to follow', 'Stone powder'], body: 'Placeholder · Description of the stone-powder line and note about dozens of products with different shades and properties, personal consultation. ' + LOREM, items: ['Basalt powder', 'Diabase powder', 'Greywacke powder', 'Microdiorite powder', 'Limestone powder'] },
        { name: 'Special stone powder for white cement', imageLabel: ['Image area · photo to follow', 'Special stone powder'], body: 'Placeholder · Special stone powder for use with white cements, offering significant savings potential. ' + LOREM, items: [] },
        { name: 'Further products via partners', imageLabel: ['Image area · photo to follow', 'Trass, basalt, gravel, crushed stone'], body: 'Placeholder · Additional products offered together with partners. ' + LOREM, items: ['Trass', 'Basalt', 'Gravel', 'Crushed stone', 'White cement'] },
        { name: 'Special products', imageLabel: ['Image area · photo to follow', 'Special products'], body: 'Placeholder · Special products beyond the standard range for the concrete industry, industrial production and agriculture. ' + LOREM, items: ['Calcium oxide (quicklime)', 'various ashes', 'Bauxite', 'Decorative gravel (black and white)'] },
        { name: 'Industrial and special sands', imageLabel: ['Image area · photo to follow', 'Special sands'], body: 'Placeholder · Special sands for concrete production and industrial processes, for example quartzite sands. ' + LOREM, items: ['Quartzite sand', 'further special sands'] },
        { name: 'White cement', imageLabel: ['Image area · photo to follow', 'White cement'], body: 'Placeholder · High-quality white cement in classes 42,5 and 52,5, delivered in bags or by silo truck, via an international partner. ' + LOREM, items: ['CEM I 42,5', 'CEM I 52,5'] },
        { name: 'Limestone powder', imageLabel: ['Image area · photo to follow', 'Limestone powder'], body: 'Placeholder · Limestone powder as a key component in concrete production and agriculture, also as a de-dusting filler. ' + LOREM, items: [] },
        { name: 'Crushed stone and gravel', imageLabel: ['Image area · photo to follow', 'Crushed stone and gravel'], body: 'Placeholder · Crushed stone and gravel from various rocks, gradings and quantities, from decorative stone to bulk volumes, domestic and imported. ' + LOREM, items: ['Crushed stone', 'Gravel', 'Chippings', 'Decorative stone'] },
      ],
    },
    leistungen: {
      slug: 'leistungen',
      title: 'Services and consulting',
      lead: 'Placeholder · Intro to consulting around the application of stone powder in concrete production. ' + LOREM,
      blocks: [
        { heading: 'Stone powder as an alternative to fillers', body: 'Placeholder · Using stone powder as a strategic alternative to conventional fillers. ' + LOREM },
        { heading: 'Cost optimisation', body: 'Placeholder · Using stone powder as a filler to optimise costs. ' + LOREM },
        { heading: 'Quality optimisation', body: 'Placeholder · Using stone powder as a filler to raise quality. ' + LOREM },
        { heading: 'An ecological natural product', body: 'Placeholder · Stone powder as an ecological natural product. ' + LOREM },
        { heading: 'Optimisation projects', body: 'Placeholder · Joint, complex projects to optimise production and operations when using stone powder. ' + LOREM },
      ],
    },
    kontakt: {
      slug: 'kontakt',
      title: 'Contact',
      lead: 'Placeholder · Short line about getting in touch and requesting a quote. ' + LOREM,
      form: {
        intro: 'Enquiry with material, grading, quantity and delivery location.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'firma', label: 'Company', type: 'text', required: false },
          { name: 'email', label: 'E-mail', type: 'email', required: true },
          { name: 'telefon', label: 'Phone', type: 'tel', required: false },
          { name: 'material', label: 'Material and grading', type: 'text', required: false },
          { name: 'menge', label: 'Quantity', type: 'text', required: false },
          { name: 'lieferort', label: 'Delivery location', type: 'text', required: false },
          { name: 'nachricht', label: 'Message', type: 'textarea', required: false },
        ],
        submit: 'Send enquiry',
        note: 'Placeholder · Form submission still to be wired (Formspree, Netlify Forms or server-side). Until then, by e-mail.',
      },
      mapHeading: 'Directions',
    },
    legal: {
      impressum: {
        slug: 'impressum',
        title: 'Imprint',
        blocks: [
          { heading: 'Information pursuant to § 5 TMG', body: 'Baustoffe Breitbach e.K.\nReuschenlay 32\n56642 Kruft\nGermany' },
          { heading: 'Represented by', body: 'Owner: Daniel Breitbach' },
          { heading: 'Contact', body: 'Phone: 02652 6326\nFax: 02652 7897\nE-mail: info@baustoffe-breitbach.com' },
          { heading: 'VAT ID', body: 'Placeholder · VAT identification number pursuant to § 27a UStG to be supplied by the client.' },
          { heading: 'Responsible for content', body: 'Daniel Breitbach, address as above.' },
        ],
      },
      datenschutz: {
        slug: 'datenschutz',
        title: 'Privacy',
        blocks: [
          { heading: 'Privacy at a glance', body: 'Placeholder · The legally binding privacy text must be supplied by the client or their data-protection officer (GDPR). Responsible: Daniel Breitbach. ' + LOREM },
          { heading: 'Responsible party', body: 'Baustoffe Breitbach e.K., Reuschenlay 32, 56642 Kruft. Data-protection officer: Daniel Breitbach.' },
        ],
      },
      cookies: {
        slug: 'cookies',
        title: 'Cookie policy',
        blocks: [
          { heading: 'Cookies on this website', body: 'Placeholder · The cookie policy (EU) must be supplied by the client or legally reviewed. This website currently uses no tracking cookies. ' + LOREM },
        ],
      },
    },
  },
};
