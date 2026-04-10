import { trustedByLogos } from "@/lib/constants";

export function TrustedBy() {
  const logos = [...trustedByLogos, ...trustedByLogos];

  return (
    <section id="trusted-by" className="px-6 py-8 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border-color bg-card/70 px-5 py-6 shadow-glow backdrop-blur-sm sm:px-6">
        <p className="text-center text-sm font-medium text-text-muted">
          Trusted by leading companies worldwide
        </p>

        <div
          className="mt-5 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="flex w-max animate-marquee gap-4 pr-4">
            {logos.map((logo, index) => (
              <li
                className="rounded-full border border-border-color bg-primary/80 px-5 py-3 text-sm font-semibold tracking-tight text-text-primary/90"
                key={`${logo}-${index}`}
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
