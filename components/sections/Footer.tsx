const productLinks = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Documentation", href: "/docs" },
  { label: "Changelog", href: "https://goaddress.io/changelog", external: true },
];

const companyLinks = [
  { label: "About", href: "https://goaddress.io/about", external: true },
  { label: "Blog", href: "https://goaddress.io/blog", external: true },
  { label: "Enterprise", href: "/#enterprise" },
  { label: "Careers", href: "https://goaddress.io/careers", external: true },
  { label: "Contact", href: "mailto:support@goaddress.io" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "https://goaddress.io/privacy", external: true },
  { label: "Terms of Service", href: "https://goaddress.io/terms", external: true },
];

function GitHubIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path
        d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.46-1.18-1.12-1.49-1.12-1.49-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.85.09-.67.35-1.1.64-1.35-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.04-2.67-.1-.26-.45-1.29.1-2.69 0 0 .85-.27 2.8 1.02a9.7 9.7 0 0 1 5.1 0c1.95-1.3 2.8-1.02 2.8-1.02.55 1.4.2 2.43.1 2.69.65.69 1.04 1.58 1.04 2.67 0 3.85-2.34 4.68-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path
        d="M18.4 3h3.1l-6.8 7.8L23 21h-6.8l-5.3-6.1L5.5 21H2.4l7.4-8.5L1 3h7l4.7 5.4L18.4 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path fill="currentColor" d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5ZM5.2 8.76h3.5V21H5.2V8.76Z" />
      <path fill="currentColor" d="M10.48 8.76h3.35v1.68h.05c.47-.88 1.62-1.81 3.33-1.81 3.56 0 4.2 2.34 4.2 5.39V21h-3.5v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-1.99 1.35-1.99 2.74V21h-3.71V8.76Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-color px-6 pb-8 pt-16 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold text-text-primary">
              <span>GoAddress</span>
              <span className="h-2.5 w-2.5 rounded-full bg-accent-mint" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-text-muted">The UK&apos;s most reliable postcode API.</p>
            <a className="mt-4 inline-block text-sm font-medium text-text-primary transition-colors hover:text-accent-mint" href="mailto:support@goaddress.io">
              support@goaddress.io
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-text-primary"
                    href={link.href}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-text-primary"
                    href={link.href}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-text-primary">Legal + Social</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-text-primary"
                    href={link.href}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 text-text-muted">
              <a className="rounded-full border border-border-color p-3 transition-colors hover:border-accent-blue hover:text-white" href="https://github.com/goaddress-io" rel="noopener noreferrer" target="_blank">
                <GitHubIcon />
              </a>
              <a className="rounded-full border border-border-color p-3 transition-colors hover:border-accent-blue hover:text-white" href="https://x.com/goaddressio" rel="noopener noreferrer" target="_blank">
                <TwitterIcon />
              </a>
              <a className="rounded-full border border-border-color p-3 transition-colors hover:border-accent-blue hover:text-white" href="https://www.linkedin.com/company/goaddress-io" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border-color pt-6 text-center text-sm text-text-muted">
          © 2026 GoAddress. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
