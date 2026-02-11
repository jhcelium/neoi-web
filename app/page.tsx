import Image from "next/image";

const OFFICIAL_STORE_URL = "https://supplement.neoi.jp";

const FAQ_ITEMS = [
  {
    question: "Are supplements regulated in Singapore?",
    answer:
      "Supplements are generally regulated as health products under Singapore's framework, and marketing claims can be restricted. Always check labeling and seller credibility.",
  },
  {
    question: "Is it safer to buy from pharmacies than online?",
    answer:
      "Pharmacies offer familiarity and a perceived trust channel; online offers more variety. The key is verifying authenticity and avoiding exaggerated claims—whether you buy in-store or online.",
  },
  {
    question: "Is it safe to buy supplements online in Singapore?",
    answer:
      "Buying online can be safe when you use reputable sellers, verify product authenticity, and avoid offers that make strong outcome claims. Check seller reviews and regulatory compliance.",
  },
  {
    question: "Can you buy melatonin in Singapore?",
    answer:
      "Melatonin availability in Singapore is subject to local regulations. Some forms may be available over the counter or through specific channels. Check current rules and product labeling.",
  },
  {
    question: "Why are Japanese supplements popular in Singapore?",
    answer:
      "Often for the perceived manufacturing discipline and the 'daily routine' positioning—less hype, more consistency. This is a habit and preference pattern, not a medical advantage.",
  },
  {
    question: "What is the most common consumer mistake?",
    answer:
      "Over-stacking multiple products at once. More isn't automatically better; many people take more ingredients or higher doses than needed.",
  },
] as const;

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neoi",
    url: OFFICIAL_STORE_URL,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <OrganizationJsonLd />

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        {/* Site header with Official Store link */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              supplements.neoi.jp
            </span>
            <a
              href={OFFICIAL_STORE_URL}
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Official Store →
            </a>
          </div>
        </header>

        {/* Top disclaimer */}
        <div className="max-w-3xl mx-auto px-6 py-3 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Educational content only. Not medical advice. For pregnancy, chronic conditions, or
            medications, consult a qualified professional.
          </p>
        </div>

        {/* Hero + Intro */}
        <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Singapore Supplements Guide: How People Choose Health Products in Singapore
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Supplements in Singapore are widely available—at Guardian, Watsons, NTUC, and across
              online stores. Many people also discover options through Reddit and community
              recommendations.
            </p>
            <div className="my-12 flex justify-center">
              <Image
                src="/images/singapore-supplements-market-overview.webp"
                alt="Singapore supplement buying landscape overview"
                width={1200}
                height={675}
                className="rounded-xl shadow-sm"
                unoptimized
              />
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This site is an education-first guide to how people choose and use supplements in
              Singapore, with a Japan-informed perspective on routines rather than quick fixes.
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500 italic">
              Educational content only. Not medical advice.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 py-10 space-y-14">
          {/* What People Usually Search */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              What People Usually Search in Singapore
            </h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
              <li>Singapore supplements</li>
              <li>health supplements Singapore</li>
              <li>vitamin supplements Singapore</li>
              <li>collagen supplements Singapore</li>
              <li>collagen drinks Singapore</li>
              <li>probiotics Singapore</li>
              <li>immune booster Singapore</li>
              <li>multivitamin Singapore</li>
              <li>protein powder Singapore</li>
              <li>protein shakes Singapore</li>
              <li>weight loss supplements Singapore</li>
              <li>omega 3 Singapore</li>
              <li>halal supplements Singapore</li>
              <li>skin whitening supplements Singapore</li>
              <li>sleep supplements Singapore</li>
              <li>gut health supplements Singapore</li>
              <li>Japanese supplements Singapore</li>
              <li>made in Japan supplements</li>
            </ul>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm">
              Typical Singapore search behavior centers on category (e.g. collagen, probiotics),
              channel (pharmacy vs online), and trust cues—including Reddit discussions and
              pharmacy familiarity.
            </p>
          </section>

          {/* Where Supplements Are Bought */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Where Supplements Are Bought in Singapore
            </h2>

            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mt-6 mb-2">
              Pharmacies (Guardian / Watsons)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Pharmacies are often chosen for perceived authenticity and familiarity. People
              search for options such as probiotics Singapore Guardian, probiotics Singapore
              Watsons, or sleeping pills Singapore Guardian when comparing in-store availability.
            </p>

            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mt-6 mb-2">
              Online Platforms
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Online channels offer variety, price comparison, and cross-border options. Searches
              like buy supplements online Singapore and cheap supplements Singapore online are
              common; Singapore supplements Reddit threads also influence choices. Authenticity
              verification and avoiding exaggerated claims remain important.
            </p>
          </section>

          {/* Singapore Market Patterns */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Singapore Market Patterns
            </h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
              <li>Beauty-from-within routines (e.g. collagen)</li>
              <li>Interest in whitening products (without outcome claims)</li>
              <li>Gut comfort habits (probiotics, digestion)</li>
              <li>Immune and travel-related routines</li>
              <li>Age-segmented women&apos;s multivitamins (30+ / 40+ / 50+)</li>
              <li>Fitness-oriented protein formats</li>
              <li>Halal certification importance for some buyers</li>
              <li>Community trust (e.g. Reddit) as a decision factor</li>
            </ul>
          </section>
          <div className="my-12 flex justify-center">
            <Image
              src="/images/pharmacy-vs-online-supplements-singapore.webp"
              alt="Pharmacy vs online supplement buying comparison in Singapore"
              width={1200}
              height={675}
              className="rounded-xl shadow-sm"
              unoptimized
            />
          </div>

          <div className="my-12 flex justify-center">
            <Image
              src="/images/singapore-supplement-category-patterns.webp"
              alt="Singapore supplement category patterns overview"
              width={1000}
              height={1000}
              className="rounded-xl shadow-sm"
              unoptimized
            />
          </div>

          {/* Japan-Informed Perspective */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              A Japan-Informed Perspective (Without Romanticizing)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
              In Japan, the emphasis is often on routine over hype: smaller daily portions, fewer
              ingredients with clearer purpose, and long-term consistency rather than immediate
              visible change. Terms like Japanese collagen Singapore and made in Japan supplements
              reflect interest in this positioning.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm italic">
              This reflects a routine-oriented habit pattern, not a medical advantage.
            </p>
          </section>

          {/* Common Misconceptions */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Common Misconceptions
            </h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
              <li>More ingredients = better</li>
              <li>Higher dose = stronger</li>
              <li>Imported = superior</li>
              <li>Trending = suitable</li>
              <li>Stacking many products is harmless</li>
            </ul>
          </section>

          {/* Start With These Guides */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Start With These Guides
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
              <li id="guide-collagen">
                <a href="#guide-collagen" className="text-green-600 dark:text-green-400 hover:underline">
                  Collagen in Singapore: Pills vs Drinks
                </a>
              </li>
              <li id="guide-probiotics">
                <a href="#guide-probiotics" className="text-green-600 dark:text-green-400 hover:underline">
                  Probiotics in Singapore: Guardian vs Online
                </a>
              </li>
              <li id="guide-immune">
                <a href="#guide-immune" className="text-green-600 dark:text-green-400 hover:underline">
                  Immune Booster Singapore: Travel vs Daily
                </a>
              </li>
              <li id="guide-womens">
                <a href="#guide-womens" className="text-green-600 dark:text-green-400 hover:underline">
                  Women&apos;s Multivitamins: 30+, 40+, 50+
                </a>
              </li>
              <li id="guide-halal">
                <a href="#guide-halal" className="text-green-600 dark:text-green-400 hover:underline">
                  Halal Supplements Singapore: What Certification Covers
                </a>
              </li>
            </ul>
          </section>

          {/* Mid-page Official Store CTA */}
          <section className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              For official sourcing and Japan-made product options, visit our main store:{" "}
              <a
                href={OFFICIAL_STORE_URL}
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                supplement.neoi.jp
              </a>
              .
            </p>
            <a
              href={OFFICIAL_STORE_URL}
              rel="noopener noreferrer"
              className="inline-block text-sm text-zinc-700 dark:text-zinc-300 underline hover:no-underline"
            >
              Browse the official store
            </a>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              FAQ (Singapore Search Phrasing)
            </h2>
            <dl className="space-y-6">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i}>
                  <dt className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
                    Q{i + 1}: {item.question}
                  </dt>
                  <dd className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Hashtag block */}
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Hashtag Set (Algorithmic Geo Signal, Not SEO)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">
              #Singapore #SingaporeWellness #SGLifestyle #SGHealth #MadeInJapan #JapaneseWellness
              #JapanQuality #DailySupplements #WellnessRoutine #HealthyHabits
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 italic">
              Hashtags are algorithmic geographic signals, not SEO ranking factors.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer id="disclaimer" className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-14">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">
              <strong>Disclaimer:</strong> Educational content only. Not medical advice. For
              pregnancy, chronic conditions, or medications, consult a qualified professional.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              <a href={OFFICIAL_STORE_URL} rel="noopener noreferrer" className="underline hover:no-underline">
                Official Store
              </a>
              {" · "}
              <a href="#disclaimer" className="underline hover:no-underline">
                Disclaimer
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
