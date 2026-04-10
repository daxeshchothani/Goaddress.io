import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const docsItems = [
  {
    title: "Authentication",
    text: "Use your API token in the Authorization header for every request.",
  },
  {
    title: "Postcode Lookup",
    text: "Fetch complete address lists for a full or partial UK postcode.",
  },
  {
    title: "Search Endpoint",
    text: "Query by postcode and partial address text for precise suggestions.",
  },
  {
    title: "Code Examples",
    text: "Ready-to-copy snippets for cURL, JavaScript, Node.js, PHP, and .NET.",
  },
];

export function DocsOverview() {
  return (
    <SectionWrapper id="docs">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">Documentation</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          API docs inside the product experience
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
          Browse key integration topics here, then open the full docs page for complete request and response references.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {docsItems.map((item) => (
          <article className="rounded-xl border border-border-color bg-card p-6 transition-colors duration-300 hover:border-accent-blue" key={item.title}>
            <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-text-muted">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-border-color bg-primary px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-blue"
          href="/docs"
        >
          Open full docs page
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
