import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const resourceLinks = [
  { label: "Authentication", href: "#authentication" },
  { label: "Find Addresses by Partial Postcode", href: "#find-addresses" },
  { label: "Search Addresses", href: "#search-addresses" },
  { label: "Code Examples", href: "#code-examples" },
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

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-border-color bg-primary/80 p-4 text-[12px] leading-6 text-text-primary sm:text-[13px]">
      <code>{code}</code>
    </pre>
  );
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-primary px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-xl border border-border-color bg-card p-5 shadow-glow lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent-mint">Resources</p>
            <ul className="space-y-3 text-sm text-text-muted">
              {resourceLinks.map((resource) => (
                <li key={resource.href}>
                  <a className="transition-colors hover:text-text-primary" href={resource.href}>
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-8">
            <section id="authentication" className="rounded-xl border border-border-color bg-card p-6 shadow-glow sm:p-8">
              <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Postcode Lookup API
              </h1>
              <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">
                Retrieve full address lists for a UK postcode or search addresses by postcode.
              </p>
            </section>

            <section id="find-addresses" className="space-y-5">
              <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
                1. Find Addresses by Partial Postcode
              </h2>
              <p className="text-sm text-text-muted sm:text-base">
                Returns a list of addresses matching the provided partial or full postcode.
              </p>

              <DocCard>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">Request</h3>
                <CodeBlock code={`GET https://portal.goaddress.io/api/address/{postcode}`} />
              </DocCard>

              <DocCard>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">Example</h3>
                <CodeBlock code={`GET https://portal.goaddress.io/api/address/NW3 2RT`} />
              </DocCard>

              <DocCard>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">Response</h3>
                <CodeBlock code={responseOne} />
              </DocCard>
            </section>

            <section id="search-addresses" className="space-y-5">
              <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">2. Search Addresses</h2>
              <p className="text-sm text-text-muted sm:text-base">
                Retrieves matched address results from postcode or partial address search terms.
              </p>

              <DocCard>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">Request</h3>
                <CodeBlock
                  code={`GET https://portal.goaddress.io/api/address/search?q={query}\nGET https://portal.goaddress.io/api/address/search?q={query}&postcode={postcode}`}
                />
              </DocCard>

              <DocCard>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">Examples</h3>
                <CodeBlock
                  code={`GET https://portal.goaddress.io/api/address/search?q=100\nGET https://portal.goaddress.io/api/address/search?q=NW3%202RT\nGET https://portal.goaddress.io/api/address/search?q=Hampstead&postcode=NW3%202RT`}
                />
              </DocCard>

              <DocCard>
                <h3 className="mb-3 text-lg font-semibold text-text-primary">Response</h3>
                <CodeBlock code={responseTwo} />
              </DocCard>
            </section>

            <section id="code-examples" className="space-y-5">
              <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">Code Examples</h2>
              <p className="text-sm text-text-muted sm:text-base">
                Example requests for the postcode lookup endpoint in common languages.
              </p>

              <div className="space-y-4">
                {examples.map((example) => (
                  <DocCard key={example.title}>
                    <h3 className="mb-3 text-lg font-semibold text-text-primary">{example.title}</h3>
                    <CodeBlock code={example.code} />
                  </DocCard>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
