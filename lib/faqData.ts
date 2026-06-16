// Supplement FAQ data for supplements.neoi.jp (Singapore, education-first).
// Voice: educational, not medical advice; no outcome/treatment claims.
// Each entry renders a static /faq/[slug] page (QAPage schema) and appears in /faq (FAQPage schema).

export const OFFICIAL_STORE_URL = "https://supplement.neoi.jp";
export const SITE_URL = "https://supplements.neoi.jp";

export type Faq = {
  slug: string;
  category: "Buying in Singapore" | "Labels & Certifications" | "Ingredients" | "Safety";
  question: string;        // full natural-language question (the <h1>)
  title: string;           // <= ~58 char SEO <title>
  answer: string;          // answer-first, 40-55 words, self-contained (the quotable block)
  body: string[];          // 1-2 supporting paragraphs
};

export const FAQS: Faq[] = [
  {
    slug: "supplements-regulated-singapore",
    category: "Buying in Singapore",
    question: "Are supplements regulated in Singapore?",
    title: "Are Supplements Regulated in Singapore?",
    answer:
      "In Singapore, supplements are generally regulated as health products, and the claims sellers may make are restricted. Products should not promise to treat or cure disease. Always check the label, the seller's credibility, and whether any claim sounds exaggerated before buying.",
    body: [
      "Regulation focuses on safety and on limiting medicinal-style claims, rather than approving each product the way medicines are approved. That means the responsibility to verify a seller and read the label still sits with the buyer.",
      "If a listing promises fast or dramatic results, treat that as a warning sign rather than a selling point.",
    ],
  },
  {
    slug: "buy-supplements-online-singapore-safe",
    category: "Buying in Singapore",
    question: "Is it safe to buy supplements online in Singapore?",
    title: "Is It Safe to Buy Supplements Online in SG?",
    answer:
      "Buying online can be safe when you use reputable sellers, verify the product is authentic, and avoid listings that promise strong or fast results. Check seller reviews, look for clear labelling, and be cautious with unusually cheap cross-border offers.",
    body: [
      "Online channels offer more variety and easier price comparison than a single pharmacy shelf, which is why many Singapore buyers start there. The trade-off is that authenticity is harder to judge from a photo.",
      "Where possible, buy from the official store or an authorised seller, and compare the listing against the brand's own website.",
    ],
  },
  {
    slug: "pharmacy-vs-online-supplements-singapore",
    category: "Buying in Singapore",
    question: "Pharmacy or online: which is better for supplements in Singapore?",
    title: "Pharmacy vs Online Supplements in Singapore",
    answer:
      "Pharmacies like Guardian and Watsons offer familiarity and a trusted channel; online offers more variety and price comparison. Neither is automatically safer - what matters is verifying authenticity and ignoring exaggerated claims, whether you buy in store or online.",
    body: [
      "Many people use both: a pharmacy for quick, familiar repurchases and online for products or sizes that local shelves do not carry.",
      "The decision usually comes down to trust cues and convenience rather than a real quality gap between the two channels.",
    ],
  },
  {
    slug: "buy-melatonin-singapore",
    category: "Buying in Singapore",
    question: "Can you buy melatonin in Singapore?",
    title: "Can You Buy Melatonin in Singapore?",
    answer:
      "Melatonin availability in Singapore is subject to local regulation, and the rules can change. Some forms may be restricted or available only through specific channels. Check the current local rules and the product label, and speak to a pharmacist if you are unsure.",
    body: [
      "Because sleep-related products are an area where regulation and enforcement vary, it is worth confirming the current position rather than assuming overseas availability applies locally.",
      "This is general information and not medical advice; a pharmacist or doctor can give guidance for your situation.",
    ],
  },
  {
    slug: "why-japanese-supplements-popular-singapore",
    category: "Buying in Singapore",
    question: "Why are Japanese supplements popular in Singapore?",
    title: "Why Japanese Supplements Are Popular in SG",
    answer:
      "Often for the perceived manufacturing discipline and a daily-routine positioning - smaller portions, fewer ingredients, and long-term consistency rather than hype. Searches like 'Japanese collagen Singapore' reflect this preference. It is a habit and trust pattern, not a medical advantage.",
    body: [
      "The appeal tends to be about consistency and presentation: products framed as part of an unhurried routine rather than a quick fix.",
      "That positioning is a preference, not a clinical claim - the actual value still depends on the ingredients and dose on the label.",
    ],
  },
  {
    slug: "common-supplement-mistake-singapore",
    category: "Safety",
    question: "What is the most common supplement mistake?",
    title: "The Most Common Supplement Mistake",
    answer:
      "Over-stacking - taking many products, or higher doses, at the same time. More is not automatically better, and combining several products can be unnecessary or counterproductive. A smaller, consistent routine is usually easier to evaluate and to sustain.",
    body: [
      "When several products overlap, it becomes hard to tell what is doing anything, and some ingredients can duplicate or interact.",
      "Starting with one clearly chosen product, taken consistently, makes it much easier to judge whether it fits your routine.",
    ],
  },
  {
    slug: "what-made-in-japan-means-supplements",
    category: "Labels & Certifications",
    question: "What does \"made in Japan\" actually mean for a supplement?",
    title: "What 'Made in Japan' Means for Supplements",
    answer:
      "It indicates the product is manufactured in Japan, often in certified facilities, rather than where the brand is based. It can signal consistent manufacturing standards, but it is not a health claim - always check the actual ingredients, dose and certifications on the label.",
    body: [
      "Country of manufacture and country of brand are not the same thing, so it is worth confirming what 'made in Japan' refers to on a given product.",
      "Treat it as one quality signal among several, alongside GMP or ISO certification and a clear ingredient list.",
    ],
  },
  {
    slug: "what-is-gmp-iso-supplement",
    category: "Labels & Certifications",
    question: "What do GMP and ISO certifications mean on a supplement?",
    title: "GMP and ISO on Supplements: What They Mean",
    answer:
      "GMP (Good Manufacturing Practice) certifies controlled, documented manufacturing for hygiene and batch consistency; ISO 9001 certifies an audited quality-management system. Together they describe how a product is made, so the label matches the bottle - not what it does for your health.",
    body: [
      "These certifications are about process and traceability: consistent batches, documented hygiene, and identity checks on ingredients.",
      "They raise confidence that the contents match the label, but they are not endorsements of any health outcome.",
    ],
  },
  {
    slug: "how-to-read-supplement-label",
    category: "Labels & Certifications",
    question: "How do I read a supplement label?",
    title: "How to Read a Supplement Label",
    answer:
      "Look for the serving size, the amount of each active ingredient per serving, the full ingredient list, allergen notes, and any certification marks. A 'per bottle' total is not the daily dose - divide it by the number of servings to find what you would actually take each day.",
    body: [
      "Product names sometimes show a large total figure (for example a per-bottle milligram amount). Always trace it back to the per-serving amount to understand the real daily intake.",
      "Allergen and source notes matter too, especially for capsules that may use animal-derived gelatin.",
    ],
  },
  {
    slug: "collagen-pills-vs-drinks-singapore",
    category: "Ingredients",
    question: "Collagen in Singapore: pills or drinks?",
    title: "Collagen in Singapore: Pills vs Drinks",
    answer:
      "Both deliver collagen peptides; the difference is mostly format and routine. Drinks are easy to take and often flavoured; pills are portable and unflavoured. Choose what you will take consistently, and treat marketing about visible results cautiously - this is a routine choice, not a medical one.",
    body: [
      "Format affects adherence more than anything: the version you will actually take every day is the one that fits your routine.",
      "Compare the peptide amount per serving rather than the bottle size or the strength of the marketing.",
    ],
  },
  {
    slug: "probiotics-singapore-guardian-watsons-online",
    category: "Ingredients",
    question: "Probiotics in Singapore: Guardian, Watsons or online?",
    title: "Probiotics in Singapore: Where to Buy",
    answer:
      "Guardian and Watsons stock familiar, shelf-stable probiotic brands; online offers more strains and sizes, sometimes including refrigerated options. Compare the strain, the CFU count and the storage requirements rather than price alone, and buy from sellers you can verify.",
    body: [
      "Different strains are studied for different purposes, so the specific strain name on the label matters more than the word 'probiotic'.",
      "Some probiotics need refrigeration to stay viable, which is worth checking before buying online.",
    ],
  },
  {
    slug: "halal-supplements-singapore",
    category: "Labels & Certifications",
    question: "Halal supplements in Singapore: what does certification cover?",
    title: "Halal Supplements in Singapore Explained",
    answer:
      "Halal certification confirms the ingredients and manufacturing meet halal requirements - relevant because some capsules use gelatin or other animal-derived components. Look for a recognised halal mark on the label if this matters to you, and check which body issued the certification.",
    body: [
      "The most common issue is the capsule shell, which can be animal-derived; a halal mark or a plant-based capsule note addresses this.",
      "Certification bodies differ, so the specific mark is more meaningful than a general 'halal' wording.",
    ],
  },
  {
    slug: "womens-multivitamins-age-singapore",
    category: "Ingredients",
    question: "Women's multivitamins: do 30+, 40+, 50+ versions matter?",
    title: "Women's Multivitamins: 30+, 40+, 50+",
    answer:
      "Age-segmented multivitamins adjust certain nutrient levels that commonly shift with life stage. The segments are a guideline, not a rule - individual needs vary. If you have specific concerns, a doctor or pharmacist can advise better than the age band on the box.",
    body: [
      "The segmentation is a convenient default rather than a personalised recommendation; two people in the same age band can have very different needs.",
      "For targeted concerns, a blood test and professional advice are more useful than picking by age label alone.",
    ],
  },
  {
    slug: "what-is-nmn",
    category: "Ingredients",
    question: "What is NMN?",
    title: "What Is NMN?",
    answer:
      "NMN (nicotinamide mononucleotide) is a compound the body uses to make NAD+, a coenzyme involved in normal cellular energy metabolism. NAD+ levels naturally decline with age, which is why NMN is studied as a supplement. This is general information, not medical advice.",
    body: [
      "NMN occurs in trace amounts in some foods and is sold as a capsule or powder supplement.",
      "Research is ongoing, so it is best understood as an ingredient of interest rather than a proven outcome.",
    ],
  },
  {
    slug: "best-time-to-take-nmn",
    category: "Ingredients",
    question: "When do people take NMN?",
    title: "When to Take NMN",
    answer:
      "Many people take NMN in the morning with water, which fits a daytime routine and avoids doses close to bedtime. Consistency over weeks tends to matter more than the exact time of day. Follow your product label and consult a professional if you take medication.",
    body: [
      "Timing preferences vary and are not settled science; the practical advice is to pick a time you can keep to daily.",
      "As with any supplement, the label's serving guidance comes first.",
    ],
  },
  {
    slug: "what-is-royal-jelly",
    category: "Ingredients",
    question: "What is royal jelly?",
    title: "What Is Royal Jelly?",
    answer:
      "Royal jelly is a nutrient-rich secretion that worker bees produce to feed the queen, valued as a natural source of amino acids, B-vitamins and fatty acids. It is sold as capsules, softgels or raw jelly. People with bee or pollen allergies should avoid it.",
    body: [
      "Because it is a bee product, allergy risk is the main safety consideration to check before use.",
      "If you are pregnant, nursing or taking medication, speak to a healthcare professional first.",
    ],
  },
  {
    slug: "how-to-spot-fake-supplements",
    category: "Safety",
    question: "How do I avoid fake or low-quality supplements?",
    title: "How to Avoid Fake Supplements",
    answer:
      "Buy from the official store or an authorised seller, check that packaging, batch codes and seals look intact, and be wary of prices far below normal. Verify the brand's certifications and avoid listings that promise dramatic results - a common sign of counterfeit or low-quality products.",
    body: [
      "Counterfeits often copy the look of a brand but get details wrong: missing batch codes, broken seals, or inconsistent packaging.",
      "Cross-checking the listing against the brand's official website is one of the quickest authenticity tests.",
    ],
  },
  {
    slug: "are-supplements-medicine",
    category: "Safety",
    question: "Are supplements medicine?",
    title: "Are Supplements Medicine?",
    answer:
      "No. Supplements are intended to support normal nutrition and daily wellbeing, not to diagnose, treat, cure or prevent disease. If you are pregnant, nursing, managing a condition or taking medication, consult a qualified healthcare professional before starting anything new.",
    body: [
      "This distinction is the reason supplement marketing cannot make medicinal claims, and why outcome promises are a red flag.",
      "Used sensibly, supplements are part of a routine - not a replacement for medical care.",
    ],
  },
];

export const CATEGORIES: Faq["category"][] = [
  "Buying in Singapore",
  "Labels & Certifications",
  "Ingredients",
  "Safety",
];

export function getFaq(slug: string): Faq | undefined {
  return FAQS.find((f) => f.slug === slug);
}

export function relatedFaqs(slug: string, limit = 3): Faq[] {
  const current = getFaq(slug);
  if (!current) return [];
  const sameCat = FAQS.filter((f) => f.category === current.category && f.slug !== slug);
  const others = FAQS.filter((f) => f.category !== current.category && f.slug !== slug);
  return [...sameCat, ...others].slice(0, limit);
}
