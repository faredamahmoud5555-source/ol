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
};

export const products: Product[] = [
  {
    id: "1",
    slug: "smoked-fig",
    name: "Smoked Fig",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 24500,
    size: "50ml",
    accent: "#6b4a34",
    tagline: "A quiet fire beneath green fig leaf.",
    description:
      "An introspective woody gourmand built around fig leaf and a low, tarry smoke — the smell of a hearth long after the flame has gone out.",
    story:
      "Composed in a single week during an unusually cold October, Smoked Fig began as an attempt to bottle the moment firewood catches. The perfumer paired green fig accord with birch tar and a whisper of cade, then softened the whole structure with a milky sandalwood base so the smoke never turns bitter.",
    notes: {
      top: [{ name: "Green Fig Leaf" }, { name: "Bergamot", latin: "Citrus bergamia" }],
      heart: [{ name: "Birch Tar" }, { name: "Fig Accord" }, { name: "Cade Oil" }],
      base: [{ name: "Sandalwood", latin: "Santalum album" }, { name: "Cashmeran" }, { name: "White Musk" }],
    },
    longevity: 4,
    sillage: 3,
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Everyday"],
    ingredients: ["Fig Leaf Absolute", "Birch Tar", "Sandalwood", "Cashmeran", "Bergamot", "Cade Oil"],
    bestseller: true,
    featured: true,
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: "2",
    slug: "salt-cedar",
    name: "Salt Cedar",
    family: "Green",
    concentration: "Eau de Parfum",
    price: 22000,
    size: "50ml",
    accent: "#5c6d5e",
    tagline: "Wind, cedar, and mineral salt off a cold coast.",
    description:
      "A briny, coastal green scent — cedar and cypress sharpened by sea salt accord, built to feel like standing at the edge of water in early spring.",
    story:
      "Named for the tamarisk trees that grow bent and silver along drought-hardened shorelines, Salt Cedar pairs a mineral, almost metallic salt accord with textured cedarwood and a green cypress top. There is no sweetness here — only air and wood.",
    notes: {
      top: [{ name: "Sea Salt Accord" }, { name: "Cypress" }, { name: "Bitter Grapefruit" }],
      heart: [{ name: "Atlas Cedar" }, { name: "Elemi" }, { name: "Violet Leaf" }],
      base: [{ name: "Ambroxan" }, { name: "Driftwood Accord" }, { name: "Vetiver", latin: "Vetiveria zizanioides" }],
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
  },
  {
    id: "3",
    slug: "amber-hour",
    name: "Amber Hour",
    family: "Amber",
    concentration: "Extrait de Parfum",
    price: 29000,
    size: "50ml",
    accent: "#a8895a",
    tagline: "The last warm light before dusk, held in resin.",
    description:
      "A dense, resinous amber built on labdanum and benzoin, warmed with a trace of cardamom and finished in soft golden vanilla. Rich, but never loud.",
    story:
      "Amber Hour was composed to hold the particular color of light that appears for about eleven minutes before sunset — the perfumer worked from a single Polaroid taped above the blotting station for the whole development period.",
    notes: {
      top: [{ name: "Pink Pepper" }, { name: "Cardamom" }],
      heart: [{ name: "Labdanum" }, { name: "Benzoin" }, { name: "Saffron" }],
      base: [{ name: "Vanilla Absolute" }, { name: "Tonka Bean" }, { name: "Amber Resin" }],
    },
    longevity: 5,
    sillage: 4,
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Special Occasion"],
    ingredients: ["Labdanum", "Benzoin", "Vanilla Absolute", "Tonka Bean", "Cardamom", "Saffron"],
    bestseller: true,
    featured: true,
    rating: 4.9,
    reviewCount: 487,
  },
  {
    id: "4",
    slug: "white-neroli",
    name: "White Neroli",
    family: "Citrus",
    concentration: "Eau de Parfum",
    price: 21000,
    size: "50ml",
    accent: "#c9b190",
    tagline: "Orange blossom, bleached by sun and salt.",
    description:
      "A luminous citrus floral centered on neroli and orange flower absolute, kept crisp with petitgrain and a clean musk so it never tips into sweetness.",
    story:
      "Distilled from bitter orange blossoms harvested at dawn, this composition aims for translucency rather than richness — the perfumer removed three ingredients late in development simply because the scent felt 'too full.'",
    notes: {
      top: [{ name: "Petitgrain" }, { name: "Blood Orange" }],
      heart: [{ name: "Neroli", latin: "Citrus aurantium" }, { name: "Orange Flower Absolute" }, { name: "Jasmine Sambac" }],
      base: [{ name: "White Musk" }, { name: "Cedarwood" }, { name: "Iris" }],
    },
    longevity: 2,
    sillage: 2,
    season: ["Spring", "Summer"],
    occasion: ["Daytime", "Everyday"],
    ingredients: ["Neroli", "Orange Flower Absolute", "Petitgrain", "Jasmine Sambac", "White Musk", "Iris"],
    featured: true,
    rating: 4.5,
    reviewCount: 201,
  },
  {
    id: "5",
    slug: "black-tobacco",
    name: "Black Tobacco",
    family: "Woody",
    concentration: "Extrait de Parfum",
    price: 27500,
    size: "50ml",
    accent: "#2b2119",
    tagline: "Dried tobacco leaf, dark rum, and old leather.",
    description:
      "A dense, masculine-leaning composition of cured tobacco leaf absolute, dark rum accord, and worn leather, grounded in patchouli and oakmoss.",
    story:
      "Built around a rare tobacco leaf absolute sourced from a single small grower, Black Tobacco was formulated in extrait concentration because the perfumer felt any dilution flattened the leather note's texture.",
    notes: {
      top: [{ name: "Dark Rum Accord" }, { name: "Cinnamon Bark" }],
      heart: [{ name: "Tobacco Leaf Absolute" }, { name: "Dried Fig" }, { name: "Leather Accord" }],
      base: [{ name: "Patchouli" }, { name: "Oakmoss" }, { name: "Vanilla" }],
    },
    longevity: 5,
    sillage: 4,
    season: ["Autumn", "Winter"],
    occasion: ["Evening", "Special Occasion"],
    ingredients: ["Tobacco Leaf Absolute", "Leather Accord", "Patchouli", "Oakmoss", "Dark Rum Accord"],
    bestseller: true,
    rating: 4.9,
    reviewCount: 398,
  },
  {
    id: "6",
    slug: "milk-musk",
    name: "Milk Musk",
    family: "Musk",
    concentration: "Eau de Parfum",
    price: 20500,
    size: "50ml",
    accent: "#ece3d3",
    tagline: "Warm skin, clean linen, and soft white musk.",
    description:
      "A tender, close-to-skin musk built to smell like nothing more than warm, clean skin — a small amount of heliotrope and rice powder give it a faint, milky sweetness.",
    story:
      "Conceived as an 'anti-perfume' — a scent that reads as the wearer's own skin rather than a fragrance layered on top of it. Testing focused entirely on how it aged over eight hours on skin rather than how it smelled from the bottle.",
    notes: {
      top: [{ name: "Rice Powder Accord" }, { name: "Pear" }],
      heart: [{ name: "Heliotrope" }, { name: "Orris" }, { name: "Musk Accord" }],
      base: [{ name: "White Musk" }, { name: "Sandalwood" }, { name: "Vanilla Musk" }],
    },
    longevity: 2,
    sillage: 1,
    season: ["Spring", "Summer", "Autumn", "Winter"],
    occasion: ["Everyday", "Daytime"],
    ingredients: ["White Musk", "Heliotrope", "Rice Powder Accord", "Orris", "Sandalwood"],
    new: true,
    rating: 4.7,
    reviewCount: 88,
  },
  {
    id: "7",
    slug: "wild-iris",
    name: "Wild Iris",
    family: "Floral",
    concentration: "Eau de Parfum",
    price: 26000,
    size: "50ml",
    accent: "#8a6a4f",
    tagline: "Powdery iris root, grown up out of cold earth.",
    description:
      "An austere, root-forward iris built on orris butter — cool, powdery, and slightly bitter, with none of the sweetness typical of iris fragrances.",
    story:
      "Orris butter is one of the most expensive raw materials in perfumery, requiring roots to age for up to five years before distillation. Wild Iris uses it nearly unadorned, framed only by violet leaf and a dry vetiver base.",
    notes: {
      top: [{ name: "Violet Leaf" }, { name: "Coriander Seed" }],
      heart: [{ name: "Orris Butter", latin: "Iris pallida" }, { name: "Carrot Seed" }],
      base: [{ name: "Vetiver" }, { name: "Cedarwood" }, { name: "Grey Musk" }],
    },
    longevity: 4,
    sillage: 3,
    season: ["Autumn", "Winter", "Spring"],
    occasion: ["Everyday", "Evening"],
    ingredients: ["Orris Butter", "Violet Leaf", "Vetiver", "Cedarwood", "Coriander Seed"],
    rating: 4.7,
    reviewCount: 176,
  },
  {
    id: "8",
    slug: "copper-vetiver",
    name: "Copper Vetiver",
    family: "Woody",
    concentration: "Eau de Parfum",
    price: 23500,
    size: "50ml",
    accent: "#b56a4a",
    tagline: "Dry vetiver root, warmed with red spice.",
    description:
      "An earthy, smoky vetiver sharpened with grapefruit and warmed by a red pepper accord — dry, textured, and slightly metallic, like copper left out in the sun.",
    story:
      "Sourced from Haitian vetiver root, distilled slowly to preserve its smoky, earthen character. The perfumer added a pepper accord late in development to give the composition a warm, spiced edge without softening the root's dryness.",
    notes: {
      top: [{ name: "Grapefruit" }, { name: "Pink Peppercorn" }],
      heart: [{ name: "Vetiver Root", latin: "Vetiveria zizanioides" }, { name: "Nutmeg" }],
      base: [{ name: "Smoked Woods" }, { name: "Amberwood" }, { name: "Patchouli" }],
    },
    longevity: 4,
    sillage: 3,
    season: ["Autumn", "Spring"],
    occasion: ["Everyday", "Evening"],
    ingredients: ["Vetiver Root", "Grapefruit", "Pink Peppercorn", "Smoked Woods", "Patchouli"],
    featured: true,
    rating: 4.6,
    reviewCount: 143,
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
