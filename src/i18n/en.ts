// English content. Mirrors de.ts exactly. DIN codes, grading figures, proper
// nouns, address, phone and email stay identical to the German source.
// Placeholder page copy: the first sentence ("Placeholder · …") is a brief that
// says what real text belongs there; the Latin lorem after it just fills the layout.
// NB: technical terms are a first pass; have a native reviewer confirm before production.

export const lang = 'en';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

export const meta = {
  title: 'Baustoff-Großhandel Breitbach e.K. · Raw materials for the concrete and cement industry',
  description:
    'Baustoff-Großhandel Breitbach e.K., Kruft. Raw materials for the concrete and cement industry, technical applications for the precast concrete industry and international raw-material sourcing. Delivery across Germany, Benelux and France.',
};

export const content = {
  nav: [
    { slug: 'unternehmen', label: 'Company' },
    { slug: 'produkte', label: 'Products' },
    { slug: 'leistungen', label: 'Services' },
    { slug: 'kontakt', label: 'Contact' },
  ],
  heroMeta: ['Kruft, Rhineland-Palatinate', 'DE · Benelux · FR'],
  hero: {
    // Wording set by the client on 2026-07-23. Both lines sit in the headline size.
    lines: [
      'For more than 40 years',
      'Innovative raw-material solutions and technical applications for the concrete and cement industry',
    ],
    alt: 'Cement loading at the port: freighter under load, big bags on flatbed trailers',
    imageLabel: ['Image area · photo to follow', 'Cement loading, raw-material delivery, operations'],
  },
  slogan: {
    pre: 'Building in harmony with ',
    green: 'nature',
    post: '.',
    body: 'Regional raw materials, short transport distances and the reprocessing of mineral construction materials. The material stays natural stone, from the quarry to the building site.',
  },
  products: {
    heading: 'Raw materials, technical applications and international sourcing.',
    aside: 'Three areas, one point of contact. Delivery loose by silo truck, in big bags or as bagged goods, domestic and for export.',
    more: 'All products',
    groups: [
      {
        name: 'Raw materials for the concrete and cement industry',
        body: 'Mineral base materials and additives for cement works, ready-mixed concrete plants and precast plants. Stone powders act as fillers, cement and clinker as binders, pumice and lava as lightweight aggregate.',
        items: ['Stone powders', 'White cement', 'Grey cement', 'Clinker', 'Fly ash', 'Pumice', 'Lava', 'Gypsum'],
      },
      {
        name: 'Technical applications for the precast concrete industry',
        body: 'Formwork and mould technology for precast and concrete-block production. Magnet systems, shuttering and moulds for the steel table and the carousel plant.',
        items: ['Magnet boxes', 'Shuttering profiles', 'Magnetic rails', 'Concrete spacers', 'Tilting tables', 'Plastic boards for concrete-block production', 'Moulds for block production'],
      },
      {
        name: 'International raw-material sourcing',
        body: 'Procurement and trading of metals and ores through international suppliers and trading partners. Specification, quantity and route agreed per enquiry.',
        items: ['Iron and iron ore', 'Nickel', 'Aluminium', 'Copper', 'Scrap metal'],
      },
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
      'What began as a regional trade in sand and gravel has grown into a wholesaler of mineral raw materials. The focus today is on base materials and additives for the concrete and cement industry and on technical applications for the precast concrete industry.',
      'We advise on mix design and application, schedule delivery and supply on time to cement works, concrete plants and processors in Germany, the Benelux countries and France. Alongside this comes the international procurement of metals and ores.',
      'Short distances, dependable contacts and consistent quality. That is the basis our customers have planned on for decades.',
    ],
    facts: [
      { v: '40+', l: 'Years in the raw-materials trade' },
      { v: '3', l: 'Product areas' },
      { v: '3', l: 'Countries in the delivery area' },
      { v: 'Export', l: 'International procurement' },
    ],
  },
  partners: {
    heading: 'Partners and suppliers.',
    aside: 'Placeholder · insert the partner company logos (cement works, special sands, international suppliers).',
    slots: ['Partner logo', 'Partner logo', 'Partner logo', 'Partner logo', 'Partner logo', 'Partner logo'],
  },
  map: {
    heading: 'Location: Kruft, Rhineland-Palatinate.',
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
    blurb: 'Raw materials for the concrete and cement industry, technical applications for the precast concrete industry and international raw-material sourcing.',
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
    // Restructured 2026-07-28 to the three groups the client specified on 2026-07-23.
    // catImages in components/pages/Produkte.astro is matched to this list BY INDEX.
    produkte: {
      slug: 'produkte',
      title: 'Products',
      lead: 'The range is organised into three areas: mineral raw materials for the concrete and cement industry, technical applications for the precast concrete industry, and international raw-material sourcing.',
      categories: [
        {
          name: 'Raw materials for the concrete and cement industry',
          imageLabel: ['Image area · photo to follow', 'Stone powder, cement, raw materials'],
          body: 'Base materials and additives for cement works, ready-mixed concrete plants and precast plants. Stone powders are used as fillers and influence particle packing, workability and the colour of the concrete. White and grey cement and clinker act as binders in the mix, fly ash as a pozzolanic additive. Pumice and lava serve as lightweight aggregate, gypsum as a set regulator in cement. Delivered loose by silo truck, in big bags or as bagged goods.',
          items: ['Stone powders', 'White cement', 'Grey cement', 'Clinker', 'Fly ash', 'Pumice', 'Lava', 'Gypsum'],
        },
        {
          name: 'Technical applications for the precast concrete industry',
          imageLabel: ['Image area · photo to follow', 'Magnet systems and shuttering on the steel table'],
          body: 'Equipment and consumables for the production of precast elements and concrete blocks. Magnet boxes, magnetic rails and shuttering profiles fix and delimit the formwork on the steel table and can be repositioned without drilling. Tilting tables are used to lift finished elements upright, concrete spacers secure the cover to the reinforcement. For concrete-block production there are plastic boards as a base and moulds for block production.',
          items: ['Magnet boxes', 'Shuttering profiles', 'Magnetic rails', 'Concrete spacers', 'Tilting tables', 'Plastic boards for concrete-block production', 'Moulds for block production'],
        },
        {
          name: 'International raw-material sourcing',
          imageLabel: ['Image area · photo to follow', 'Loading at the port'],
          body: 'Procurement of metals and ores through international suppliers and trading partners. Iron and iron ore, nickel, aluminium and copper are sourced and supplied, as well as scrap metal for recycling. Specification, quantity and route are agreed per enquiry.',
          items: ['Iron and iron ore', 'Nickel', 'Aluminium', 'Copper', 'Scrap metal'],
        },
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
