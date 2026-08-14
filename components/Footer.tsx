import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

const socials = [
  { href: "https://facebook.com/vettrack", icon: FaFacebookF, label: "Facebook" },
  { href: "https://instagram.com/vettrack", icon: FaInstagram, label: "Instagram" },
  { href: "https://twitter.com/vettrack", icon: FaXTwitter, label: "X (Twitter)" },
  { href: "https://linkedin.com/company/vettrack", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://wa.me/250780721800", icon: FaWhatsapp, label: "WhatsApp" },
] as const;

const quickLinks = [
  { href: "/#services", label: "Services" },
  { href: "/auth", label: "Customer Portal" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/#vets", label: "Book Consultation" },
] as const;

const contactInfo = [
  { icon: HiOutlineMapPin, text: "Nyagatare, Rwanda", href: "https://www.google.com/maps?q=Nyagatare,Rwanda" },
  { icon: HiOutlinePhone, text: "+250 78 072 1800", href: "tel:+250780721800" },
  { icon: HiOutlineEnvelope, text: "info@vettrack.rw", href: "mailto:info@vettrack.rw" },
] as const;

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Emergency Contact", time: "24/7" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold tracking-tight text-white">VetTrack</span>
            <p className="text-sm leading-6 text-ink-400">
              Revolutionizing animal health with innovative tracking, consultation, and care solutions for livestock and pets.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink-400 transition-colors hover:border-brand-500 hover:text-brand-400"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ink-400 transition-colors hover:text-brand-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact Info</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Business Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Business Hours</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white/60">{day}</span>
                  <span className="text-sm text-ink-400">{time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} VetTrack. All rights reserved.</p>
          <p>Not a substitute for in-person emergency veterinary care.</p>
        </div>
      </div>
    </footer>
  );
}
