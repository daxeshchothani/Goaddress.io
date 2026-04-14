"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type TabKey = "javascript" | "python" | "php" | "curl";

const codeSamples: Record<TabKey, string> = {
  javascript: `const response = await fetch(
  'https://api.goaddress.io/v1/lookup?postcode=SW1A1AA&api_key=YOUR_KEY'
);
const data = await response.json();
console.log(data.addresses);`,
  python: `import requests
response = requests.get(
    'https://api.goaddress.io/v1/lookup',
    params={'postcode': 'SW1A1AA', 'api_key': 'YOUR_KEY'}
)
print(response.json())`,
  php: `$url = 'https://api.goaddress.io/v1/lookup?postcode=SW1A1AA&api_key=YOUR_KEY';
$response = file_get_contents($url);
$data = json_decode($response, true);
print_r($data['addresses']);`,
  curl: `curl -X GET \
  'https://api.goaddress.io/v1/lookup?postcode=SW1A1AA&api_key=YOUR_KEY' \
  -H 'Accept: application/json'`,
};

const tabs: { key: TabKey; label: string; language: string }[] = [
  { key: "javascript", label: "JavaScript", language: "javascript" },
  { key: "python", label: "Python", language: "python" },
  { key: "php", label: "PHP", language: "php" },
  { key: "curl", label: "cURL", language: "bash" },
];

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("javascript");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSamples[activeTab]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="integration">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">Integration</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Integrate in minutes
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">Works with every language and framework.</p>
      </div>

      <div className="mt-12 rounded-[2rem] border border-border-color bg-card/80 shadow-glow">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-color px-5 py-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "bg-accent-blue text-white" : "text-text-muted hover:bg-slate-100 hover:text-text-primary"
                  }`}
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <button
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-accent-blue hover:bg-slate-50"
            onClick={handleCopy}
            type="button"
          >
            {copied ? "Copied! ✓" : "Copy code"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="p-2 sm:p-4"
            exit={{ opacity: 0, y: 8 }}
            initial={{ opacity: 0, y: 8 }}
            key={activeTab}
            transition={{ duration: 0.25 }}
          >
            <SyntaxHighlighter
              customStyle={{
                margin: 0,
                borderRadius: "1.5rem",
                border: "1px solid #dbe2ef",
                background: "#f8fafc",
                padding: "1.5rem",
                fontSize: "0.92rem",
                lineHeight: 1.8,
              }}
              language={tabs.find((tab) => tab.key === activeTab)?.language ?? "javascript"}
              showLineNumbers={false}
              style={oneLight}
              wrapLongLines
            >
              {codeSamples[activeTab]}
            </SyntaxHighlighter>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
