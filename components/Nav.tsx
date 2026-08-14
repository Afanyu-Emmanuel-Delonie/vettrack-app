"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useActiveSection } from "@/hooks/useActiveSection";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "rw", label: "Kinyarwanda" },
] as const;

// Links that scroll to a section on the home page
const sectionLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#vets", label: "Our Vets" },
] as const;

// Links that go to their own pages
const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const allLinks = [...pageLinks.slice(0, 1), ...sectionLinks, ...pageLinks.slice(1)];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<(typeof languages)[number]>(languages[0]);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const hasHero = pathname === "/" || pathname === "/about" || pathname === "/contact";
  const transparent = hasHero && !scrolled;

  const activeSection = useActiveSection(["services", "pricing", "vets", "faq"]);

  function isActive(href: string) {
    if (href.includes("#")) {
      const id = href.split("#")[1];
      return pathname === "/" && activeSection === id;
    }
    return pathname === href;
  }

  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  // If on home page scroll directly, otherwise navigate then scroll
  function handleSectionClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const hash = href.split("#")[1];
    if (!hash) return;

    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
    // else let the default href="/#section" navigate + scroll
  }

  return (
    <header
      className={`fixed top-0 z-40 h-16 w-full border-b transition-colors duration-300 ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-ink-100 bg-white/90 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight transition-colors ${
            transparent ? "text-white" : "text-brand-700"
          }`}
        >
          VetTrack
        </Link>

        {/* Desktop links */}
        <ul
          className={`hidden items-center gap-8 text-sm font-medium md:flex ${
            transparent ? "text-white/90" : "text-ink-600"
          }`}
        >
          {allLinks.map((link) => {
            const isSection = link.href.includes("#");
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={isSection ? (e) => handleSectionClick(e, link.href) : undefined}
                  className={`relative transition-colors ${
                    active
                      ? transparent ? "text-white" : "text-brand-700"
                      : transparent ? "text-white/70 hover:text-white" : "text-ink-500 hover:text-brand-700"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full ${
                      transparent ? "bg-white" : "bg-brand-600"
                    }`} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language picker */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-label="Change language"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                transparent
                  ? "border-white/40 text-white hover:bg-white/10"
                  : "border-ink-200 text-ink-600 hover:bg-ink-50"
              }`}
            >
              <HiOutlineGlobeAlt className="h-4 w-4" />
              {language.code.toUpperCase()}
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-ink-100 bg-white py-1 text-sm text-ink-700 shadow-lg">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className="block w-full px-4 py-2 text-left hover:bg-ink-50"
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/register"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className={`flex h-9 w-9 items-center justify-center rounded-md border md:hidden ${
            transparent ? "border-white/40" : "border-ink-200"
          }`}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span className={`h-0.5 w-5 ${transparent ? "bg-white" : "bg-ink-700"}`} />
            <span className={`h-0.5 w-5 ${transparent ? "bg-white" : "bg-ink-700"}`} />
            <span className={`h-0.5 w-5 ${transparent ? "bg-white" : "bg-ink-700"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-ink-100 bg-white px-6 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-ink-600">
            {allLinks.map((link) => {
              const isSection = link.href.includes("#");
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={isSection ? (e) => handleSectionClick(e, link.href) : () => setOpen(false)}
                    className={`transition-colors ${
                      active ? "font-semibold text-brand-700" : "text-ink-600 hover:text-brand-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-ink-100 pt-4">
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                    language.code === lang.code
                      ? "border-brand-600 bg-brand-50 text-brand-700"
                      : "border-ink-200 text-ink-600 hover:bg-ink-50"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
