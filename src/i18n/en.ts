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
    slideLabel: 'Photo',
    // One entry per hero slide, matched BY INDEX against heroSlides in Home.astro.
    alts: [
      'Cement loading at the port: freighter under load, big bags on flatbed trailers',
      'Concrete pipes in the works yard, stacked by diameter',
    ],
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
    heading: 'Six fields of application, one supply programme.',
    aside: 'The list names the raw materials, additions and equipment we supply for each field of application; natural building materials such as gravel, chippings and trass complete the range.',
    items: [
      { title: 'Cement plants', body: 'Clinker, fly ash, gypsum and limestone powder go into cement production as raw materials and cement constituents. Delivery is loose by silo truck, in big bags or by container, with loading at the seaport for export quantities.', rocks: 'Clinker · Fly ash · Gypsum · Limestone powder · Trass' },
      { title: 'Ready-mixed concrete', body: 'Grey cement, white cement, fly ash and stone powders make up the binder and fines content in ready-mixed concrete. Limestone powder and basalt filler improve the cohesion and workability of the mix.', rocks: 'Grey cement · White cement · Fly ash · Limestone powder · Basalt filler' },
      { title: 'Precast concrete', body: 'For concrete production in the precast plant we supply cement, fly ash and stone powders. Added to this is the equipment on the steel table: magnet boxes, magnetic rails, shuttering profiles, tilting tables and concrete spacers.', rocks: 'Cement · Magnet boxes · Shuttering profiles · Magnetic rails · Concrete spacers' },
      { title: 'Concrete products and blocks', body: 'Paving stones, concrete slabs and block steps are made from cement, aggregate and stone powder, with white cement used for light and coloured surfaces. For production we supply plastic boards and moulds for block production, and for garden landscaping decorative gravel, chippings and natural stone.', rocks: 'White cement · Stone powder · Plastic boards · Moulds · Decorative gravel' },
      { title: 'Mortar and render', body: 'In mortar production, cement, limestone powder and closely graded sands are processed into factory mortar, render and screed. Trass is a natural building material made from volcanic tuff and is used in masonry and laying mortars.', rocks: 'Cement · Limestone powder · Trass · Crushed sand · Gypsum' },
      { title: 'Metals and sourcing', body: 'Iron and iron ore, nickel, aluminium, copper and scrap metal are procured through international suppliers and trading partners. Specification, quantity and route are agreed for each enquiry; the business is trading, not own production.', rocks: 'Iron and iron ore · Nickel · Aluminium · Copper · Scrap metal' },
    ],
  },
  technik: {
    heading: 'Loose, in big bags, in containers.',
    aside: 'Stone powders, cement and fly ash ship loose or in big bags, precast equipment on pallets. The delivery area covers Germany, Benelux and France, plus export and international sourcing.',
    columns: [
      { head: 'Delivery forms', rows: [
        { k: 'Loose', v: 'Silo truck' }, { k: 'Big bag', v: '' }, { k: 'Bagged', v: '' },
        { k: 'Palletised', v: '' }, { k: 'Container', v: '' }, { k: 'Collection', v: '' },
      ] },
      { head: 'Raw materials', rows: [
        { k: 'Stone powders', v: 'Filler' }, { k: 'Cement', v: 'grey · white' }, { k: 'Clinker and fly ash', v: '' },
        { k: 'Pumice and lava', v: '' }, { k: 'Gypsum', v: '' }, { k: 'Metals and ores', v: 'Sourcing' },
      ] },
      { head: 'Stone powders', rows: [
        { k: 'Basalt', v: 'Filler' }, { k: 'Diabase', v: 'Filler' }, { k: 'Greywacke', v: 'Filler' },
        { k: 'Microdiorite', v: 'Filler' }, { k: 'Limestone', v: 'Limestone powder' }, { k: 'Special grades', v: '' },
      ] },
      { head: 'Delivery area', rows: [
        { k: 'Germany', v: '' }, { k: 'Benelux', v: '' }, { k: 'France', v: '' },
        { k: 'Export', v: 'international' }, { k: 'Seaport', v: 'Loading' }, { k: 'Dates', v: 'by arrangement' },
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
    aside: 'We work with cement works, grinding mills and international suppliers, sourcing white cement, grey cement, clinker, stone powders and metals through them.',
    slots: ['Partner Logo', 'Partner Logo', 'Partner Logo', 'Partner Logo', 'Partner Logo', 'Partner Logo'],
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
      { k: 'E-Mail', v: 'info@baustoffe-breitbach.com' },
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
      lead: 'Baustoff-Großhandel Breitbach e.K. is an owner-run trading house for mineral raw materials and building materials, based in Kruft in the district of Mayen-Koblenz. The family business has been on the market for more than 40 years and supplies cement works, concrete plants, ready-mixed concrete plants and precast concrete plants in Germany, the Benelux countries and France.',
      blocks: [
        { heading: 'About the firm', body: 'Breitbach is a family business, has been trading for more than 40 years and is run by Daniel Breitbach as its owner. The company deals in mineral raw materials and building materials for processing industries. The focus is on raw materials for the concrete and cement industry: stone powders milled from basalt, diabase, greywacke, microdiorite and limestone, plus white cement, grey cement, clinker, fly ash, pumice, lava and gypsum. The second focus is technical applications for the precast concrete industry, from magnet boxes and shuttering profiles to tilting tables and moulds for block production. International sourcing of iron and iron ore, nickel, aluminium, copper and scrap metal has been added. The mineral range of gravel, chippings, crushed stone, crushed sand, trass and decorative gravel is still part of the programme.' },
        { heading: 'Customers and delivery area', body: 'Customers include cement works, concrete plants, ready-mixed concrete plants, precast concrete plants and mortar works. For concrete production and mortar production we supply stone powders, fillers and cements; for precast concrete elements we also supply the technical equipment. The delivery area covers Germany, the Benelux countries and France. Material is delivered loose by silo truck, in big bags or as bagged goods, depending on quantity and plant logistics. Procurement and export run through international suppliers and trading partners, including cement shipments loaded at sea ports. Specification, quantity and route are agreed for each enquiry.' },
        { heading: 'Our approach', body: 'Before the first delivery we clarify the application and the mix design. Basalt filler, diabase filler and microdiorite filler differ in particle size distribution, density and colour; in concrete production this affects water demand, workability and appearance. Every plant is assigned a fixed contact who knows the mix design, the call-off quantities and the delivery rhythm. Delivery dates are confirmed as binding and aligned with your production schedule. On running deliveries the agreed specification remains the basis, and any deviation is discussed before loading. For special grades, part quantities and short-notice dates we look for a solution, as long as procurement and logistics allow one.' },
      ],
      inhaber: {
        heading: 'The owner',
        name: 'Daniel Breitbach',
        role: 'Owner',
        imageLabel: ['Image area · photo to follow', 'Portrait of Daniel Breitbach'],
        body: 'Staying in a market kept in motion by prices, freight rates and supply chains for more than 40 years is a question of relationships. Daniel Breitbach has grown Breitbach from a regional building-materials trade into a trading house that sources internationally. He sets the direction: long-term supply relationships, a range that follows what the concrete and cement industry needs, and the move into new procurement markets where it gives customers an advantage. The day-to-day business is carried by the team.',
      },
    },
    // Restructured 2026-07-28 to the three groups the client specified on 2026-07-23.
    // catImages in components/pages/Produkte.astro is matched to this list BY INDEX.
    produkte: {
      slug: 'produkte',
      title: 'Products',
      lead: 'The range is organised into three areas: raw materials for the concrete and cement industry, technical applications for the precast concrete industry and international raw-material sourcing. Further mineral construction materials such as gravel, chippings, crushed stone and trass remain available alongside them.',
      categories: [
        {
          name: 'Raw materials for the concrete and cement industry',
          imageLabel: ['Image area · photo to follow', 'Stone powder, cement, raw materials'],
          body: 'Mineral base materials and additions for cement works, ready-mixed concrete plants and precast plants. The stone powders are milled from basalt, diabase, greywacke, microdiorite and limestone and are used as fillers in concrete production and in mortar production: they fill out the grading in the fine fraction, improve workability and influence the colour of the finished concrete. Basalt filler, diabase filler, microdiorite filler and limestone powder are available for the fine content of the concrete. White cement and grey cement act as binders in the mix, clinker is supplied to grinding and cement plants. Fly ash is added as a pozzolanic addition, pumice and lava serve as lightweight aggregate, gypsum as a set regulator in cement. Delivery is loose by bulk silo tanker, in big bags or in bags.',
          items: ['Stone powders', 'White cement', 'Grey cement', 'Clinker', 'Fly ash', 'Pumice', 'Lava', 'Gypsum'],
        },
        {
          name: 'Technical applications for the precast concrete industry',
          imageLabel: ['Image area · photo to follow', 'Magnet systems and shuttering on the steel table'],
          body: 'Equipment and consumables for the production of precast concrete elements and concrete goods. Magnet boxes and magnetic rails fix the shuttering profiles to the steel table without drilling or welding and can be repositioned for the next layout. The shuttering profiles define the edge of the element and close off the concrete cross-section. Tilting tables raise finished wall panels once they have cured. Concrete spacers hold the specified concrete cover, protecting the reinforcement against corrosion. For concrete-block production, plastic production boards and moulds for block making are added, for example for paving stones and concrete slabs.',
          items: ['Magnet boxes', 'Shuttering profiles', 'Magnetic rails', 'Concrete spacers', 'Tilting tables', 'Plastic boards for concrete-block production', 'Moulds for block production'],
        },
        {
          name: 'International raw-material sourcing',
          imageLabel: ['Image area · photo to follow', 'Loading at the port'],
          body: 'Procurement of metals and ores through an international network of suppliers and trading partners. Iron and iron ore, nickel, aluminium and copper are sourced and supplied, as is scrap metal for recycling. Specification, quantity and route are agreed per enquiry, for single lots as well as for running contracts. Trading covers export as well, including cement shipments loaded at the seaport. The delivery area is Germany, Benelux and France; beyond that, material is procured and shipped internationally.',
          items: ['Iron and iron ore', 'Nickel', 'Aluminium', 'Copper', 'Scrap metal'],
        },
        {
          name: 'Further mineral construction materials',
          imageLabel: ['Image area · photo to follow', 'Chippings, gravel and crushed stone in the yard'],
          body: 'Alongside the three main areas, the classic range of mineral construction materials remains available. Gravel, chippings, crushed stone and crushed sand go into concrete and mortar, into paving bedding and into base courses. Trass is added to the mortar for natural stone and paving work; limestone powder serves as a filler and for soil improvement. In garden landscaping, decorative gravel is used as an open surface layer and chippings as bedding for paving stones and concrete slabs. The basis in every case is natural stone, a natural building material that can be recovered and reused as a single, unmixed material. Grading, colour and rock type of these natural materials are selected to suit the application.',
          items: ['Gravel', 'Chippings', 'Crushed stone', 'Crushed sand', 'Trass', 'Limestone powder', 'Decorative gravel'],
        },
      ],
    },
    leistungen: {
      slug: 'leistungen',
      title: 'Services and consulting',
      lead: 'In concrete production, stone powder is more than a cheap filler: it governs particle packing, workability, colour and the binder demand of a mix design. We advise ready-mixed concrete plants, precast plants and mortar producers on selecting the right filler and then supply the material on a continuous basis.',
      blocks: [
        { heading: 'Stone powder as an alternative to fillers', body: 'In the fine fraction, fillers are interchangeable as soon as initial type testing confirms that grading, density and colour suit the mix. Stone powders milled from basalt, diabase, greywacke, microdiorite and limestone do the same job in concrete as conventional fillers and can be selected specifically by rock type. Basalt and diabase fillers contribute a dense, dark particle, microdiorite filler an even grading curve, limestone powder a bright fines fraction. Before any changeover we check with you which stone powder can replace the filler in use and what fineness the mix design will take. Delivery is loose by silo truck, in big bags or as bagged goods, for concrete production as well as for mortar production.' },
        { heading: 'Cost optimisation', body: 'The binder content sets the price of a concrete mix. Used as a filler, stone powder occupies the fines fraction that cement would otherwise have to fill, and can reduce binder demand per cubic metre as long as the minimum cement content of the exposure class is maintained. In ready-mixed concrete the effect comes through volume, in mortar production through the consistency of the mix. We calculate the saving against your own mix design, not against a model figure. The basis is the current cement price, the freight cost to your silo and the quantity you take on a regular basis.' },
        { heading: 'Quality optimisation', body: 'Stone powder closes gaps in the particle structure. The mix becomes smoother, the fresh concrete easier to place, and fewer voids remain in the fines fraction, so a denser structure is formed. On precast elements this shows on the fair-faced surface: fewer blowholes, more even texture. Colour is governed by the rock type. Limestone powder keeps white cement mix designs bright, basalt and diabase produce dark, matt surfaces. Which combination of cement and stone powder your plant needs is settled before the first delivery.' },
        { heading: 'An ecological natural product', body: 'Stone powder is ground natural stone. Basalt, diabase, greywacke, microdiorite and limestone are crushed, the fines are milled to the required fineness, and no chemical additives are involved. That places stone powder among the natural building materials: it stays mineral from the mill to the finished element and introduces no organic constituents into the mix. Where stone powder takes over part of the fines fraction, the share of the most energy-intensive component of the mix design, the cement, goes down. When the source of supply is selected, the distance to your plant counts alongside rock type and fineness, because it determines freight cost and transport effort.' },
        { heading: 'Optimisation projects', body: 'A change of mix design starts with a sample. We supply the stone powders under consideration in laboratory quantities, your plant runs trial mixes with them and measures fresh concrete properties and strength development. Based on the results we select a different rock type or a different fineness where needed and repeat the cycle until the mix design is settled. After that it becomes a question of logistics: silo allocation, call-off quantities, delivery intervals. Projects of this kind run over weeks, sometimes over a whole season. What remains at the end is a fixed mix design and a continuous supply of consistent material.' },
      ],
    },
    kontakt: {
      slug: 'kontakt',
      title: 'Contact',
      lead: 'Send us your enquiry for stone powders, cement, technical products for the precast concrete industry or international raw material sourcing · through the form, by e-mail to info@baustoffe-breitbach.com or by phone on 02652 6326. You receive a quotation with price and delivery date, on request with alternatives for grading, delivery form and delivery window.',
      checklistHeading: 'What to include in your enquiry',
      checklist: [
        'Material and grade, e.g. basalt filler',
        'Quantity per call-off or per year',
        'Delivery location, postcode and access',
        'Delivery form and required date',
      ],
      deliveryHeading: 'Delivery forms and delivery area',
      deliveryBody: 'Deliveries go out loose by silo truck, in big bags and as bagged goods · which delivery form fits depends on the material, the quantity and the unloading point. The delivery area covers Germany, Benelux and France, plus export and international sourcing including cement shipments loaded at sea ports.',
      form: {
        intro: 'Tell us the material, the quantity and the delivery location. We will work out the rest with you.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'firma', label: 'Company', type: 'text', required: false },
          { name: 'email', label: 'E-Mail', type: 'email', required: true },
          { name: 'telefon', label: 'Phone', type: 'tel', required: false },
          // full: true spans both columns of the form grid; the rest pair up two per row.
          { name: 'material', label: 'Material and Quality', type: 'text', required: false, full: true },
          { name: 'menge', label: 'Quantity', type: 'text', required: false },
          { name: 'lieferort', label: 'Delivery Location', type: 'text', required: false },
          { name: 'nachricht', label: 'Message', type: 'textarea', required: false, full: true },
        ],
        submit: 'Send enquiry',
        // TODO(internal): form submission is not wired up; the form currently discards
        // input silently. Until a backend exists this note points at the path that works.
        // Do not remove it without implementing submission.
        note: 'The quickest way to reach us is by e-mail to info@baustoffe-breitbach.com or by phone on 02652 6326.',
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
