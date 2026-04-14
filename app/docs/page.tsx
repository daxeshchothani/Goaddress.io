import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon, BookOpenIcon, CheckCircleIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";

const resourceLinks = [
  { label: "Start Here", href: "#start-here" },
  { label: "Authentication", href: "#authentication" },
  { label: "Endpoints", href: "#endpoints" },
  { label: "Code Examples", href: "#code-examples" },
  { label: "Need Help?", href: "#need-help" },
];

const highlights = [
  {
    title: "Fast to understand",
    text: "A simple request flow, clear endpoint names, and small response shapes make integration easy.",
    icon: BookOpenIcon,
  },
  {
    title: "Fast to ship",
    text: "Copy a snippet, add your token, and you can test the API in minutes.",
    icon: CommandLineIcon,
  },
  {
    title: "Built for production",
    text: "The responses include the address data and usage metadata you need to monitor traffic.",
    icon: CheckCircleIcon,
  },
];

const endpointCards = [
  {
    title: "Find addresses by postcode",
    method: "GET",
    path: "https://portal.goaddress.io/api/address/{postcode}",
    when: "Use this when you already have a full or partial UK postcode.",
    returns: "A list of matching addresses, raw address records, and usage data.",
  },
  {
    title: "Search addresses",
    method: "GET",
    path: "https://portal.goaddress.io/api/address/search?q={query}",
    when: "Use this for typeahead, free-text address search, or postcode filtering.",
    returns: "Matched results with labels plus the raw address payload.",
  },
];

const responseOne = `{
  "postcode": "NW3 2RT",
  "total": 16,
  "addresses": [
    "100 Warden Road",
    "102 Warden Road",
    "104 Warden Road"
  ],
  "raw_address_res": [

const authSnippet = `Authorization: Bearer YOUR_API_TOKEN`;

const requestFlow = [
  {
    step: "01",
    title: "Get your token",
    text: "Create a free API key, then add it to every request in the Authorization header.",
  },
  {
    step: "02",
    title: "Pick an endpoint",
    text: "Use the postcode endpoint for exact lookups or the search endpoint for broader matches.",
  },
  {
    step: "03",
    title: "Read the result",
    text: "Each response returns structured address data and usage information you can log or cache.",
  },
];
    {
      "raw_address": "100 Warden Road",
      "street": "Warden Road",
      "city": "London",
      "county": "Metropolitan Police",
      "country": "England"
    }
  ],
  "extra_info": {
    "latitude": 51.5562,
    "longitude": -0.2001
  },
  "usage_today": 14899
}`;

const responseTwo = `{
  "query": "100",
  "results": [
    {
      "postcode": "NW3 2RT",
      "label": "100 Warden Road, London"
    }
  ],
  "raw_address_res": [
    {
      "raw_address": "100 Warden Road",
      "street": "Warden Road",
      "city": "London",
      "county": "Metropolitan Police"
    }
  ],
  "usage_today": 14899
}`;

const examples = [
  {
    title: "cURL",
    code: `curl -X GET "https://portal.goaddress.io/api/address/search?q=NW3%202RT" \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`,
  },
  {
    title: "JavaScript (Fetch)",
    code: `fetch("https://portal.goaddress.io/api/address/search?q=NW3%202RT", {
  headers: { Authorization: "Bearer YOUR_API_TOKEN" }
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));`,
  },
  {
    title: "Node.js (Axios)",
    code: `const axios = require("axios");

axios.get("https://portal.goaddress.io/api/address/search?q=NW3%202RT", {
  headers: { Authorization: "Bearer YOUR_API_TOKEN" }
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));`,
  },
  {
    title: "PHP (cURL)",
    code: `$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://portal.goaddress.io/api/address/search?q=NW3%202RT");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR_API_TOKEN"]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);`,
  },
  {
    title: ".NET (C# - HttpClient)",
    code: `using System.Net.Http;
using System.Net.Http.Headers;

var client = new HttpClient();
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "YOUR_API_TOKEN");

var response = await client.GetAsync("https://portal.goaddress.io/api/address/search?q=NW3%202RT");
var content = await response.Content.ReadAsStringAsync();

Console.WriteLine(content);`,
  },
];

function DocCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-border-color bg-card p-5 shadow-glow sm:p-6">{children}</div>;
}

function MinimalCodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-border-color bg-primary/80 p-4 text-[12px] leading-6 text-text-primary sm:text-[13px]">
      <code>{code}</code>
    </pre>
  );
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-primary px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <section className="relative overflow-hidden rounded-[2rem] border border-border-color bg-card px-6 py-10 shadow-glow sm:px-10 sm:py-12 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(57,194,255,0.16),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(57,255,180,0.12),_transparent_36%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <Badge className="border-accent-blue/30 bg-accent-blue/10 text-accent-blue">Documentation</Badge>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                  Everything you need to go from token to first response.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
                  This guide keeps the integration path short: authenticate once, choose the right endpoint, and copy a
                  working example into your app. The result is a cleaner build process and less guessing for your team.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/register" variant="primary">
                    Get Free API Key
                  </Button>
                  <Button href="#code-examples" variant="outline">
                    Jump to examples
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      className="rounded-2xl border border-border-color bg-primary/70 p-5 backdrop-blur-sm transition-colors hover:border-accent-blue/40"
                      key={item.title}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-color bg-white/5 text-accent-mint">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h2 className="text-base font-semibold text-text-primary">{item.title}</h2>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-text-muted">{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-2xl border border-border-color bg-card p-5 shadow-glow lg:sticky lg:top-24 lg:h-fit">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-mint">Start here</p>
              <p className="mt-3 text-sm leading-7 text-text-muted">
                Use the quick links below to jump between the main concepts, then copy the examples that match your
                stack.
              </p>

              <nav className="mt-6 space-y-2 text-sm">
                {resourceLinks.map((resource) => (
                  <a
                    className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-text-muted transition-colors hover:border-border-color hover:bg-white/5 hover:text-text-primary"
                    href={resource.href}
                    key={resource.href}
                  >
                    <span>{resource.label}</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 rounded-2xl border border-border-color bg-primary/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">Recommended flow</p>
                <div className="mt-4 space-y-3">
                  {requestFlow.map((item) => (
                    <div className="flex gap-3" key={item.step}>
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-color bg-white/5 text-xs font-semibold text-text-primary">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-medium text-text-primary">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-text-muted">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <section id="start-here" className="rounded-2xl border border-border-color bg-card p-6 shadow-glow sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-blue">Overview</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                      A simple API with two clear paths.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                      If you only need one thing, use postcode lookup. If you want flexible search and autocomplete,
                      use the search endpoint. Both return structured data you can show directly in your app.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3 lg:w-[430px] lg:grid-cols-1">
                    {[
                      { label: "Free tier", value: "50 lookups/day" },
                      { label: "Auth", value: "Bearer token" },
                      { label: "Format", value: "JSON responses" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-border-color bg-primary/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">{stat.label}</p>
                        <p className="mt-2 text-base font-semibold text-text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="authentication" className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-mint">Authentication</p>
                  <h2 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">Add your API token to every request</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
                    The API expects a bearer token in the Authorization header. Once that is in place, your requests
                    can use either endpoint without any extra setup.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <DocCard>
                    <h3 className="mb-3 text-lg font-semibold text-text-primary">Header example</h3>
                    <MinimalCodeBlock code={authSnippet} />
                  </DocCard>
                  <DocCard>
                    <h3 className="mb-3 text-lg font-semibold text-text-primary">Why this matters</h3>
                    <p className="text-sm leading-7 text-text-muted">
                      Keeping auth in a single header makes your implementation easier to test, easier to secure, and
                      easier to swap across environments.
                    </p>
                  </DocCard>
                </div>
              </section>

              <section id="endpoints" className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-blue">Endpoints</p>
                  <h2 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">Choose the request that fits the job</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
                    The postcode endpoint is best for exact lookups. The search endpoint is better when users are still
                    typing and you need broader matching.
                  </p>
                </div>

                <div className="grid gap-4">
                  {endpointCards.map((endpoint) => (
                    <DocCard key={endpoint.title}>
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-blue">
                              {endpoint.method}
                            </span>
                            <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{endpoint.title}</h3>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-text-muted">{endpoint.when}</p>
                          <p className="mt-3 text-sm leading-7 text-text-muted">{endpoint.returns}</p>
                        </div>
                        <Link
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent-mint transition-colors hover:text-text-primary"
                          href="#code-examples"
                        >
                          See code
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                      </div>
                      <div className="mt-5 rounded-2xl border border-border-color bg-primary/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">Request</p>
                        <p className="mt-2 break-all font-mono text-sm text-text-primary">{endpoint.path}</p>
                      </div>
                    </DocCard>
                  ))}

                  <div className="grid gap-4 lg:grid-cols-2">
                    <DocCard>
                      <h3 className="mb-3 text-lg font-semibold text-text-primary">Postcode response</h3>
                      <CodeBlock title="Sample JSON">{responseOne}</CodeBlock>
                    </DocCard>
                    <DocCard>
                      <h3 className="mb-3 text-lg font-semibold text-text-primary">Search response</h3>
                      <CodeBlock title="Sample JSON">{responseTwo}</CodeBlock>
                    </DocCard>
                  </div>
                </div>
              </section>

              <section id="code-examples" className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-mint">Code examples</p>
                  <h2 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">Copy, paste, and ship</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
                    These snippets are ready to adapt into your app. Start with the one that matches your stack, then
                    swap in your token and endpoint values.
                  </p>
                </div>

                <div className="space-y-4">
                  {examples.map((example) => (
                    <DocCard key={example.title}>
                      <h3 className="mb-3 text-lg font-semibold text-text-primary">{example.title}</h3>
                      <CodeBlock title={example.title}>{example.code}</CodeBlock>
                    </DocCard>
                  ))}
                </div>
              </section>

              <section id="need-help" className="rounded-2xl border border-border-color bg-card p-6 shadow-glow sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-blue">Need help?</p>
                    <h2 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">
                      Pick the right endpoint faster.
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
                      If you want the shortest path to a working integration, start with the postcode lookup endpoint
                      and move to search only when you need flexible input.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href="/register" variant="primary">
                      Create API key
                    </Button>
                    <Button href="/" variant="outline">
                      Back to home
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
