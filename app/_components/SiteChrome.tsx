import { OFFICIAL_STORE_URL } from "@/lib/faqData";

// Shared header / footer / JSON-LD, matching the homepage styling so the
// FAQ pages feel native to supplements.neoi.jp.

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
        >
          supplements.neoi.jp
        </a>
        <nav className="flex items-center gap-5">
          <a
            href="/faq"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            FAQ
          </a>
          <a
            href={OFFICIAL_STORE_URL}
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Official Store →
          </a>
        </nav>
      </div>
    </header>
  );
}

export function TopDisclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-3 text-center">
      <p className="text-xs text-zinc-500 dark:text-zinc-500">
        Educational content only. Not medical advice. For pregnancy, chronic conditions, or
        medications, consult a qualified professional.
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="disclaimer"
      className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-14"
    >
      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">
          <strong>Disclaimer:</strong> Educational content only. Not medical advice. For
          pregnancy, chronic conditions, or medications, consult a qualified professional.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          <a href="/" className="underline hover:no-underline">
            Home
          </a>
          {" · "}
          <a href="/faq" className="underline hover:no-underline">
            FAQ
          </a>
          {" · "}
          <a href={OFFICIAL_STORE_URL} rel="noopener noreferrer" className="underline hover:no-underline">
            Official Store
          </a>
        </p>
      </div>
    </footer>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
