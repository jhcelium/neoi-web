import type { Metadata } from "next";
import { FAQS, CATEGORIES, SITE_URL } from "@/lib/faqData";
import { SiteHeader, TopDisclaimer, SiteFooter, JsonLd } from "@/app/_components/SiteChrome";

export const metadata: Metadata = {
  title: "Supplements FAQ (Singapore) | supplements.neoi.jp",
  description:
    "Education-first answers about buying and using supplements in Singapore - regulation, pharmacy vs online, labels, certifications, and common ingredients. Not medical advice.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "Supplements FAQ (Singapore)",
    description:
      "Education-first answers about buying and using supplements in Singapore. Not medical advice.",
    url: `${SITE_URL}/faq`,
    siteName: "supplements.neoi.jp",
    type: "website",
  },
};

function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${f.answer} Full answer: ${SITE_URL}/faq/${f.slug}`,
      },
    })),
  };
}

export default function FaqHub() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <SiteHeader />
        <TopDisclaimer />

        <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Supplements FAQ: Buying &amp; Using Supplements in Singapore
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Plain, education-first answers to the questions people in Singapore actually ask -
              from regulation and where to buy, to reading labels and understanding common
              ingredients. Each answer links to a fuller page.
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500 italic">
              Educational content only. Not medical advice.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 py-10 space-y-12">
          {CATEGORIES.map((cat) => {
            const items = FAQS.filter((f) => f.category === cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} id={cat.toLowerCase().replace(/[^a-z]+/g, "-")}>
                <h2 className="text-xs uppercase tracking-wider font-semibold text-green-600 dark:text-green-400 border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-4">
                  {cat}
                </h2>
                <ul className="space-y-5">
                  {items.map((f) => (
                    <li key={f.slug}>
                      <a
                        href={`/faq/${f.slug}`}
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-green-600 dark:hover:text-green-400"
                      >
                        {f.question}
                      </a>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.answer}</p>
                      <a
                        href={`/faq/${f.slug}`}
                        className="mt-1 inline-block text-sm text-green-600 dark:text-green-400 hover:underline"
                      >
                        Read the full answer →
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
