import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FAQS,
  getFaq,
  relatedFaqs,
  SITE_URL,
  OFFICIAL_STORE_URL,
} from "@/lib/faqData";
import { SiteHeader, TopDisclaimer, SiteFooter, JsonLd } from "@/app/_components/SiteChrome";

// Pre-render every FAQ page at build time (static, fully crawlable).
export function generateStaticParams() {
  return FAQS.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) return {};
  const url = `${SITE_URL}/faq/${faq.slug}`;
  return {
    title: faq.title.length <= 52 ? `${faq.title} | Neoi` : faq.title,
    description: faq.answer.slice(0, 155),
    alternates: { canonical: url },
    openGraph: {
      title: faq.question,
      description: faq.answer.slice(0, 200),
      url,
      siteName: "supplements.neoi.jp",
      type: "article",
    },
  };
}

export default async function FaqDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) notFound();

  const url = `${SITE_URL}/faq/${faq.slug}`;
  const related = relatedFaqs(faq.slug);

  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: faq.question,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        url: `${url}#answer`,
        author: { "@type": "Organization", name: "Neoi", url: OFFICIAL_STORE_URL },
      },
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
      { "@type": "ListItem", position: 3, name: faq.title, item: url },
    ],
  };
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neoi",
    url: OFFICIAL_STORE_URL,
  };

  return (
    <>
      <JsonLd data={qaSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={org} />

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <SiteHeader />
        <TopDisclaimer />

        <article className="max-w-3xl mx-auto px-6 py-10">
          <nav className="text-sm text-zinc-500 dark:text-zinc-500 mb-6" aria-label="Breadcrumb">
            <a href="/" className="hover:underline">Home</a>
            {" / "}
            <a href="/faq" className="hover:underline">FAQ</a>
            {" / "}
            <span className="text-zinc-700 dark:text-zinc-300">{faq.category}</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{faq.question}</h1>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
            By Neoi · Educational content, not medical advice
          </p>

          {/* Answer-first block — the unit AI engines quote */}
          <p
            id="answer"
            className="mt-6 text-lg leading-relaxed border-l-4 border-green-500 bg-zinc-50 dark:bg-zinc-900/50 px-5 py-4 rounded-r"
          >
            {faq.answer}
          </p>

          <div className="mt-8 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {faq.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {related.length > 0 && (
            <section className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-500 mb-3">
                Related questions
              </h2>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <a href={`/faq/${r.slug}`} className="text-green-600 dark:text-green-400 hover:underline">
                      {r.question}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              For official sourcing and Japan-made product options, visit the main store.
            </p>
            <a
              href={OFFICIAL_STORE_URL}
              rel="noopener noreferrer"
              className="inline-block text-sm text-zinc-700 dark:text-zinc-300 underline hover:no-underline"
            >
              Browse the official store →
            </a>
          </section>

          <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-500">
            This information is for general education and is not medical advice. Supplements are not
            intended to diagnose, treat, cure or prevent any disease. Consult a qualified
            professional before use, especially during pregnancy, while nursing, or if you take
            medication.
          </p>
        </article>

        <SiteFooter />
      </main>
    </>
  );
}
