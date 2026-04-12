export const siteConfig = {
  name: "GoAddress",
  url: "https://goaddress.io",
  tagline: "UK postcode and address lookup API for modern SaaS products.",
};

export const navLinks = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Features", href: "#features", sectionId: "features" },
  { label: "Pricing", href: "#pricing", sectionId: "pricing" },
  { label: "Docs", href: "#docs", sectionId: "docs" },
  { label: "Contact", href: "#api-key", sectionId: "api-key" },
];

export const heroCopy = {
  badge: "★ 4.8 · Trusted by 1,863 developers",
  title: "The UK's Fastest Postcode API",
  subtitle:
    "Lookup any UK address in milliseconds. Trusted by 1,800+ developers worldwide.",
  trustLine: "No credit card required · 50 free lookups/day · Cancel anytime",
  primaryCta: "Get Free API Key",
  secondaryCta: "View Docs →",
};

export const trustedByLogos = [
  "M&S",
  "Vodafone",
  "EE",
  "Asda",
  "Next",
  "Hubrion",
  "AWS",
  "Salesforce",
  "Azure",
  "Zapier",
  "Google Cloud",
  "HubSpot",
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Sign up",
    description: "Get your free API key in under 30 seconds. No credit card needed.",
  },
  {
    step: "02",
    title: "Make a request",
    description: "Send a simple GET request with any UK postcode.",
  },
  {
    step: "03",
    title: "Get results",
    description: "Receive clean, structured address data instantly.",
  },
];

export const requestExample =
  "GET https://api.goaddress.io/v1/postcode/SW1A%201AA?api_key=your_api_key";

export const responseExample = [
  { key: "postcode", value: "SW1A 1AA" },
  { key: "street", value: "Downing Street" },
  { key: "town", value: "Westminster" },
  { key: "city", value: "London" },
  { key: "county", value: "Greater London" },
  { key: "country", value: "United Kingdom" },
  { key: "lat", value: "51.5034" },
  { key: "lng", value: "-0.1276" },
];

export const demoResponseTemplate = {
  postcode: "SW1A 1AA",
  street: "Downing Street",
  town: "Westminster",
  city: "London",
  county: "Greater London",
  country: "United Kingdom",
  lat: "51.5034",
  lng: "-0.1276",
};

export const stats = [
  { value: 4.8, label: "Rating", suffix: "★", decimals: 1 },
  { value: 1863, label: "Developers", suffix: "+", decimals: 0 },
  { value: 99.99, label: "Uptime", suffix: "%", decimals: 2 },
  { text: "Daily", label: "Data Refresh" },
];

export const PLANS = [
  {
    id: "free",
    name: "Free Trial",
    daily: 50,
    monthly: 0,
    yearly: 0,
    features: [
      "50 Full Address Look-ups per day",
      "Basic Support",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "200",
    name: "200/day",
    daily: 200,
    monthly: 5.7,
    yearly: 68,
    features: [
      "200 Full Address Look-ups per day",
      "Priority Email Support",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "500",
    name: "500/day",
    daily: 500,
    monthly: 9.8,
    yearly: 117,
    features: [
      "500 Full Address Look-ups per day",
      "Priority Email Support",
      "API Access",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "1000",
    name: "1000/day",
    daily: 1000,
    monthly: 16.2,
    yearly: 194,
    features: [
      "1,000 Full Address Look-ups per day",
      "Priority Support",
      "API Access",
      "Allowed on multiple sites and applications",
    ],
    popular: true,
  },
  {
    id: "2000",
    name: "2000/day",
    daily: 2000,
    monthly: 19.9,
    yearly: 239,
    features: [
      "2,000 Full Address Look-ups per day",
      "Priority Email Support",
      "API Access",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "2500",
    name: "2500/day",
    daily: 2500,
    monthly: 22.5,
    yearly: 270,
    features: [
      "2,500 Full Address Look-ups per day",
      "Dedicated Support",
      "API Access + Webhooks",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "5000",
    name: "5000/day",
    daily: 5000,
    monthly: 32.4,
    yearly: 389,
    features: [
      "5,000 Full Address Look-ups per day",
      "Dedicated Support",
      "API Access + Webhooks",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "10000",
    name: "10,000/day",
    daily: 10000,
    monthly: 64.8,
    yearly: 778,
    features: [
      "10,000 Full Address Look-ups per day",
      "Dedicated Support",
      "API Access + Webhooks",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "15000",
    name: "15,000/day",
    daily: 15000,
    monthly: 97.2,
    yearly: 1166,
    features: [
      "15,000 Full Address Look-ups per day",
      "Dedicated Account Manager",
      "Custom Integration Support",
      "99.9% Uptime SLA",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "20000",
    name: "20,000/day",
    daily: 20000,
    monthly: 129.6,
    yearly: 1555,
    features: [
      "20,000 Full Address Look-ups per day",
      "Dedicated Account Manager",
      "Custom Integration + Training",
      "99.9% Uptime SLA",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
  {
    id: "30000",
    name: "30,000/day",
    daily: 30000,
    monthly: 194.4,
    yearly: 2333,
    features: [
      "30,000 Full Address Look-ups per day",
      "Enterprise Support",
      "Custom Rate Limits",
      "Onboarding & Training",
      "Allowed on multiple sites and applications",
    ],
    popular: false,
  },
] as const;

export const pricingPlans = PLANS;

export const planData = PLANS;

export const contactCopy = {
  title: "Ready to ship postcode lookups?",
  subtitle: "Start with the free tier, then scale when your product does.",
  primaryCta: "Get Free API Key",
  secondaryCta: "Read the Docs",
};
