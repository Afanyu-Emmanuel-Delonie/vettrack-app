import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  { href: "https://twitter.com", icon: FaXTwitter, label: "X (Twitter)" },
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
] as const;

const columns = [
  {
    title: "Product",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/vets", label: "Our Vets" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/login", label: "Log in" },
      { href: "/register", label: "Get started" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <span className="text-lg font-semibold tracking-tight text-white">VetTrack</span>
            <p className="mt-3 max-w-xs text-sm text-ink-400">
              Book veterinary consultations, track your animals&apos; health, and reach a vet
              whenever you need one.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2.5 text-ink-400 transition-colors hover:text-brand-400"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-400 hover:text-brand-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} VetTrack. All rights reserved.</p>
          <p>Not a substitute for in-person emergency veterinary care.</p>
        </div>
      </div>
    </footer>
  );
}
