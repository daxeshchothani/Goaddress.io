"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.1,
      },
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (href: string) => {
    if (!href.startsWith("#")) {
      window.location.href = href;
      setMobileOpen(false);
      return;
    }

    if (pathname !== "/") {
      window.location.href = `/${href}`;
      setMobileOpen(false);
      return;
    }

    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-white/5 bg-black/60 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          aria-label={`${siteConfig.name} home`}
          className="flex items-center"
          onClick={() => handleNavigate("#home")}
          type="button"
        >
          <Image
            alt={`${siteConfig.name} logo`}
            className="h-auto w-[176px] sm:w-[196px]"
            height={526}
            priority
            src="/assets/goaddress-logo.svg"
            width={2048}
          />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              (pathname === "/docs" && link.sectionId === "docs") ||
              (link.href.startsWith("#") && activeSection === link.sectionId);

            return (
              <a
                key={link.label}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary"
                }`}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(link.href);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/register" variant="primary" className="px-6 py-3 text-sm">
            Get Free API Key
          </Button>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-color bg-card text-text-primary md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          type="button"
        >
          {mobileOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border-color bg-primary/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  (pathname === "/docs" && link.sectionId === "docs") ||
                  (link.href.startsWith("#") && activeSection === link.sectionId);

                return (
                  <a
                    key={link.label}
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-accent-blue/40 bg-accent-blue/10 text-text-primary"
                        : "border-border-color bg-card text-text-muted"
                    }`}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button href="/register" variant="primary" className="mt-2 w-full">
                Get Free API Key
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
