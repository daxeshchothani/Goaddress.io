import { SectionWrapper } from "@/components/ui/SectionWrapper";

const integrations = ["Salesforce", "AWS", "Google Cloud", "Zapier", "HubSpot", "Azure"];

function IntegrationIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M4 8h8M8 4v8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Integrations() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">Integrations</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Works with your existing stack
        </h2>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <div
            className="flex items-center gap-3 rounded-lg border border-[#2A2A3A] px-6 py-4 text-text-muted transition-colors hover:border-accent-blue hover:text-white"
            key={integration}
          >
            <IntegrationIcon />
            <span className="text-sm font-medium">{integration}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
