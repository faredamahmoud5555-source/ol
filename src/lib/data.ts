export type Note = { name: string; latin?: string };

export type Product = {
  id: string;
  slug: string;

  name: string;
  family: "Woody" | "Amber" | "Floral" | "Citrus" | "Musk" | "Green";
  concentration: "Eau de Parfum" | "Extrait de Parfum";
  price: number; // cents
  size: string;
  accent: string; // hex, used for bottle cap + accents
  tagline: string;
  description: string;
  story: string;
  notes: { top: Note[]; heart: Note[]; base: Note[] };
  longevity: 1 | 2 | 3 | 4 | 5;
  sillage: 1 | 2 | 3 | 4 | 5;
  season: string[];
  occasion: string[];
  ingredients: string[];
  bestseller?: boolean;
  featured?: boolean;
  new?: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  
  smellImages: string[];
  














};

export const products: Product[] = [
  {
    id: "1",
    slug: "Tuscan-Leather-Eau-de-Parfum",
    name: "Tuscan Leather Eau de Parfum",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 24500,
    size: "50ml",
    accent: "#6b4a34",
    tagline: "A sophisticated scent of extravagant leather and warm spice.",
    description:
      "Tuscan Leather is supple and extravagant. Deep and animalistic, night-blooming jasmine and black suede bring a distinctive texture that is raw yet refined.",
    story:
      "Composed in a single week during an unusually cold October, Tuscan Leather began as an attempt to bottle the moment firewood catches. The perfumer paired Tuscan Leather accord with birch tar and a whisper of cade, then softened the whole structure with a milky sandalwood base so the smoke never turns bitter.",
    notes: {
      top: [{ name: "Saffron" }, { name: "Raspberry"},{name: "Thyme"}],
      heart: [{ name: "Olibanum" }, { name: "Night Blooming Jasmine" }, { name: "Leather" }],
      base: [{ name: "Black Suede" }, { name: "Amberwood" }],
    
    },
    longevity: 4,
    sillage: 3,
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Everyday"],
    ingredients: ["Ingredients: Alcohol Denat., Fragrance (parfum), Water Aqua Eau, Hexamethylindanopyran, Linalool, Limonene, Methyl 2-octynoate, Vanillin, Linalyl Acetate, Sclareol, Pinene, Hexadecanolactone, Rose Ketones, Beta-caryophyllene, Alpha Terpinene, Terpineol, Tetramethyl Acetyloctahydronaphthalenes"],
    bestseller: true,
    featured: true,
    rating: 4.8,
    reviewCount: 312,

    image: "/tuscan.jpg",


    smellImages: [
  "amber.jpg",
  "rasperry.jpg",
  "saffron.jpg",
],
  
    

  },
  {
    id: "2",
    slug: "oud-wood",
    name: "Oud-Wood-Eau-de-parfum",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 22000,
    size: "50ml",
    accent: "#5c6d5e",
    tagline: "A rich, resinous scent of oud and wood.",
    description:
      "A deep, woody scent — oud and sandalwood intertwined with a hint of spice, built to feel like standing in a sun-drenched forest.",
    story:
      " oud wood was composed to capture the feeling of aural and olfactory warmth ",
    notes: {
      top: [{ name: "Cardamom" }, { name: "Pink Pepper" }, { name: "Patchouli" }],
      heart: [{ name: "Amber" }, ],
      base: [{ name: "Oud" }, { name: "Tonka Bean" }, ],
    },
    longevity: 3,
    sillage: 2,
    season: ["Spring", "Summer"],
    occasion: ["Everyday", "Daytime"],
    ingredients: ["Atlas Cedar", "Sea Salt Accord", "Cypress", "Vetiver", "Ambroxan", "Elemi"],
    featured: true,
    new: true,
    rating: 4.6,
    reviewCount: 154,

    image: "/oudwood.jpg",
smellImages: [
  "amberr.jpg",
  "Cardamom.jpg",
  "tonka.jpg",
]


  },
  {
    id: "3",
    slug: "Electric-Cherry-Eau-de-Parfum",
    name: "Electric Cherry Eau de Parfum",
        family: "Floral",
    concentration: "Extrait de Parfum",
    price: 29000,
    size: "50ml",
    accent: "#a8895a",
    tagline: "Effervescent, floral fruity scent with cherry, white florals and musk.",
    description:
      "ELECTRIC CHERRY evokes a teasing flirt sparkling with playful effervescence, as the scent of Morello cherry with the warmth of musk combines with sultry jasmine.",
    story:
      "ELECTRIC CHERRY merges the lush tartness of Morello cherry notes with exhilarating ginger, while opulent jasmine sambac entices with a mesmerizing aroma. Ambrettolide introduces an alluring musk scent, releasing a warm breath that mingles with spicy pink peppercorn.",
    notes: {

      top: [{ name: "Morello Cherry Scenttrek" }, { name: "Pistachio Accord" }],
      heart: [{ name: "Shimoga Ginger India Orpur" }, { name: "Jasmine Sambac Absolute" }],
      base: [{ name: "India Orpur" }, { name: "Jasmine Sambac" }, { name: "Sandalwoood" }],
    },
    longevity: 5,
    sillage: 4,
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Special Occasion"],
    ingredients: [ "Alcohol Denat.", "Water Aqua Eau", "Fragrance (parfum)"," Limonene", "Hydroxycitronellal", "Linalool", "Benzyl Benzoate", "Coumarin", "Anise Alcohol", "Citral", "Citronellol", "Geraniol", "Benzyl Cinnamate", "Benzyl Alcohol", "Tetramethyl Acetyloctahydronaphthalenes", "Hexadecanolactone", "Lemongrass Oil", "Hexyl Cinnamal", "Citrus Aurantium Bergamia (bergamot) Peel Oil"," Citrus Limon (lemon) Peel Oil", "Benzaldehyde", "Pinene", "Trimethylcyclopentenyl", "Methylisopentenol", "Vanillin", "Rose Ketones", "Trimethylbenzenepropanol", "Farnesol", "Beta-caryophyllene", "Rose Flower Oil/extract", "Terpineol", "Terpinolene", "Alpha Terpinene"],
    bestseller: true,
    featured: true,
    rating: 4.9,
    reviewCount: 487,
    image: "/Electric cherry.jpg",


  
smellImages: [
  "cherry.jpg",
  "jasmine.jpg",
  "sand.jpg",
]





  },
  {
    id: "4",
    slug: "Cherry-Smoke-Eau-de-parfum",
    name: "Cherry Smoke Eau de Parfum",
    family: "Amber",
    concentration: "Eau de Parfum",
    price: 21000,
    size: "50ml",
    accent: "#c9b190",
    tagline: "A smoldering scent fusing dark cherry, florals and woods.",
    description:
      "Cherry Smoke plays with fire, bursting with the scent of dark cherry, ignited by seductive osmanthus and smoldering, smoked woods.",
    story:
      "Cherry Smoke opens with the exquisite scent of dark cherry, enhanced by exotic saffron notes. The fragrant white flowers of osmanthus exude facets of apricot, olive, and leather—while a precious smoked wood accord tantalizes with heated vibrancy and a simmering, blazing pull.",

    notes: {
      top: [{ name: "Dark Cherry Flavor" }, { name: "Smoked Wood Accord," }],
      heart: [{ name: "Olibanum Somalia Orpur", }, { name: "Peru Balsam Resinoid" }],
      base: [{ name: "Absolute China Orpur" },  { name:"Cypriol India Orpur"}],
    },
    longevity: 2,
    sillage: 2,
    season: [ "winter"],
    occasion: [ "night time"],
    ingredients: ["Neroli", "Orange Flower Absolute", "Petitgrain", "Jasmine Sambac", "White Musk", "Iris"],
    featured: true,
    rating: 4.5,
    reviewCount: 201,

image:"/smoke cherry.jpg",
smellImages: [
  "smoke.jpg",
  "r.jpg",
  "yo.jpg",
],


          




  },
  {
    id: "5",
    slug: "Vanille-Fatale-Eau-de-Parfum",
    name: "Vanille Fatale Eau de Parfum",
    family: "Amber",
    concentration: "Eau de Parfum",
    price: 27500,
    size: "50ml",
    accent: "#2b2119",
    tagline: "A beguiling, deeply seductive scent of vanilla resinoid, mahogany wood accord and roasted barley.",
    description:
      "An unapologetic exploration of vanilla. Vanille Fatale evokes the ingredient’s alter-ego – a beguiling, richly cinematic and deeply seductive scent.",
    story:
      "Built around a rare tobacco leaf absolute sourced from a single small grower, Black Tobacco was formulated in extrait concentration because the perfumer felt any dilution flattened the leather note's texture.",
    notes: {
      top: [{ name: "Safraleine" }, { name: "Frangipani Scenttrek" }],
      heart: [{ name: "offee Absolute,{name: Mahogany Wood Accord, " }],
      base: [{ name: " Roasted Barley Orpur " },{name:" Vanilla Resinoid "} ],
    },
    longevity: 5,
    sillage: 4,
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Special Occasion"],
    ingredients: ["Tobacco Leaf Absolute", "Leather Accord", "Patchouli", "Oakmoss", "Dark Rum Accord"],
    bestseller: true,
    rating: 4.9,
    reviewCount: 398,
    image:"/vanille fatale.jpg",

    smellImages: [
  "c.jpg",
  "v.jpg",
  "pure.jpg",
],


    




  },
  {
    id: "6",
    slug:"Myrrhe-mystere-Eau-de-Parfum",
    name: "Myrrhe mystère Eau de Parfum",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 20500,
    size: "50ml",
    accent: "#ece3d3",
    tagline: "A provocative and vibrational expression of the mystical resin myrrh, Myrrhe Mystère captures a richly luminous aura.",


    description:
      "Myrrhe Mystère captures a richly luminous aura, unlocking the senses through powerfully grounding myrrh essences and a modern Ultra-Vanille accord.",
    story:
      "Conceived as an 'anti-perfume' — a scent that reads as the wearer's own skin rather than a fragrance layered on top of it. Testing focused entirely on how it aged over eight hours on skin rather than how it smelled from the bottle.",
    notes: {
      top: [{ name: "Myrrh Duo" }, { name: "Absinthe" }],
      heart: [{ name: "Sandalwood Album Australia Orpur" }, { name: "Jasmine Absolute Orpur" },],
      base: [{ name: "Ultra Vanille Accord, Black Leather Accord" }],
    },
    longevity: 2,
    sillage: 1,
    season: ["Spring", "Summer", "Autumn", "Winter"],
    occasion: ["Everyday", "Daytime"],
    ingredients: ["White Musk", "Heliotrope", "Rice Powder Accord", "Orris", "Sandalwood"],
    new: true,
    rating: 4.7,
    reviewCount: 88,

    image: "/Myrrhe.jpg",

    smellImages: [
  "j.jpg",
  "l.jpg",
  "s.jpg",
],

    


  },
  {
    id: "7",
    slug: "Fucking-Fabulous",
    name: "Fucking Fabulous Eau de Parfum ",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 26000,
    size: "50ml",
    accent: "#8a6a4f",
    tagline: "An explicit, spicy leather fragrance with an intoxicating grip.",
    description:
      "With a name that says it all, Fucking Fabulous is a decadent and spicy leather scent that wields an intoxicating grip.",
    story:
      "Vibrant clary sage and fresh lavender command attention with aromatic foreplay. Bitter almond and notes of vanilla infuse textural richness to the leather heart, intensified by floral orris accord. Tonka bean drives the scent as amber undertones and blonde woods accords reverberate with a warm glow.",
    notes: {
      top: [{ name: "Almond" } ],
      heart: [{ name: "Leather" }],
      base: [{ name: "Clary Sage Oil" } ],
    },
    longevity: 4,
    sillage: 3,
    season: ["Autumn", "Winter", "Spring"],
    occasion: ["Everyday", "Evening"],
    ingredients: ["Orris Butter", "Violet Leaf", "Vetiver", "Cedarwood", "Coriander Seed"],
    rating: 4.7,
    reviewCount: 176,

    image:"/fuck.jpg",
        
    smellImages: [
  "al.jpg",
  "l.jpg",
  "vell.jpg",
        
    ]
  },
  {
    id: "8",
    slug: "wild-iris",
    name: "Fucking Fabulous Parfum",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 23500,
    size: "50ml",
    accent: "#b56a4a",
    tagline: "A scent of amber leather glamour at full volume.",
    description:
      "Fucking Fabulous Parfum is a declaration of uncensored glamour at full volume. A parfum so fabulous, no other name would do. The fragrance reveals an excess of sensuous leather, warm balsamic notes and rich aromatics for sumptuous depth and desire.",
    story:
      "Sourced from Haitian vetiver root, distilled slowly to preserve its smoky, earthen character. The perfumer added a pepper accord late in development to give the composition a warm, spiced edge without softening the root's dryness.",
    notes: {
      top: [{ name: "Leather accord" }, { name: "Tonka roasted absolute" }],
      heart: [{ name: "Fir balsam absolute"}, { name: "Clary sage absolute France" }],
      base: [{ name: "Orris accord" }, { name: "Cashmeran" }],
    },
    longevity: 4,
    sillage: 3,
    season: ["Autumn", "Spring"],
    occasion: ["Everyday", "Evening"],
    ingredients: ["Vetiver Root", "Grapefruit", "Pink Peppercorn", "Smoked Woods", "Patchouli"],
    featured: true,
    rating: 4.6,
    reviewCount: 143,
    image:"/f2.jpg",

    smellImages: [
  "b.jpg",
  "l.jpg",
  "tonka3.jpg",
    ]
        


  },
];

export const journalPosts = [
  {
    slug: "art-of-layering",
    title: "On Layering: Building a Scent Wardrobe",
    excerpt:
      "Why the most memorable fragrance wearers rarely rely on a single bottle — and how to combine ours with restraint.",
    date: "2026-05-02",
    readTime: "6 min",
    category: "Craft",
    body: [
      "The people whose fragrance we remember most rarely wear a single scent, unmodified, for years. More often they've learned to layer — a base musk applied to skin, a woodier composition sprayed over clothing, the two mingling into something that reads as neither bottle alone.",
      "Layering works best with restraint. Start with a fragrance that sits close to skin, such as a light musk, then add a single additional composition rather than three. Two families that share a base note — vetiver and cedar, for instance — will blend more coherently than two built on opposing accords.",
      "We designed our own collection with this in mind: every composition in the line shares at least one base material with at least one other, so pairing within the collection rarely produces a clash. Salt Cedar and Copper Vetiver, for example, share a smoked woods base and layer cleanly.",
    ],
  },
  {
    slug: "orris-root-five-years",
    title: "Five Years in the Ground: The Cost of Orris Root",
    excerpt:
      "A look at why iris is among perfumery's most expensive materials, and what that waiting teaches a perfumer.",
    date: "2026-04-11",
    readTime: "8 min",
    category: "Ingredients",
    body: [
      "Orris butter, extracted from the rhizome of Iris pallida, is among the most expensive raw materials used in perfumery — not because the plant is rare, but because of the time the process demands. Rhizomes are harvested, peeled, and left to dry and age for three to five years before they develop the material's characteristic powdery, faintly carrot-like note.",
      "Even after aging, yield is punishing: it can take over a thousand kilograms of dried root to produce a single kilogram of orris butter. That scarcity shapes how a perfumer works with it — sparingly, and usually as the composition's central idea rather than a supporting note.",
      "Wild Iris uses orris butter nearly unadorned, framed only by violet leaf and a dry vetiver base, because diluting it further with competing florals felt like wasting five years of patience on a material that had already done the hard work.",
    ],
  },
  {
    slug: "smoke-and-restraint",
    title: "Smoke & Restraint: Composing Without Sweetness",
    excerpt: "Inside the development of Smoked Fig, and the argument for a fragrance with no top note at all.",
    date: "2026-03-20",
    readTime: "5 min",
    category: "Behind the Bottle",
    body: [
      "Most fragrances lead with a bright top note — citrus, a green fruit, something to catch attention in the first ten minutes on skin. Smoked Fig was built to do the opposite: its opening is closer to birch tar than to fruit, and it only gradually reveals the green fig leaf underneath.",
      "The temptation during development was to soften that opening with sugar — a common move in fig fragrances, which usually lean toward a creamy, coconut-like sweetness. We resisted it through eleven revisions, worried that sweetness would flatten the smoke into something more generic.",
      "The final version keeps a low, tarry register from open to dry-down, softened only by a milky sandalwood base late in the wear. It won't suit everyone, and that was the point — restraint, here, meant leaving a fragrance a little uncomfortable rather than rounding off every edge.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Every bottle feels considered rather than marketed. Smoked Fig is the first scent I've worn that people ask about without me offering.",
    name: "M. Ardant",
    location: "Paris",
  },
  {
    quote: "Amber Hour lasted through an entire dinner service without needing to be reapplied. Extraordinary sillage for something this soft.",
    name: "R. Okafor",
    location: "Lagos",
  },
  {
    quote: "The fragrance pyramid on the product page actually matches what I smell hour to hour. Rare honesty for this category.",
    name: "S. Whitfield",
    location: "London",
  },







];
