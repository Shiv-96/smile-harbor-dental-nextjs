/**
 * Site footer: clinic summary, quick links, hours, contact and social links,
 * plus the copyright line and the demo-site disclaimer.
 */

import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { clinic, navLinks } from "@/data/clinic";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-4 text-[0.95rem]">{clinic.description}</p>
        </div>

        <nav aria-labelledby="footer-links-heading">
          <h2 id="footer-links-heading" className="text-base font-bold text-white">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#appointment" className="hover:text-white hover:underline">
                Book appointment
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-white">Clinic hours</h2>
          <dl className="mt-4 space-y-3">
            {clinic.hours.map((entry) => (
              <div key={entry.days}>
                <dt className="font-semibold text-white">{entry.days}</dt>
                <dd>{entry.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-base font-bold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={clinic.phone.href}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {clinic.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${clinic.email}`}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {clinic.email}
              </a>
            </li>
            <li>
              <a
                href={clinic.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-white"
              >
                <MapPin className="mt-1 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {clinic.address.line1}, {clinic.address.line2}
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </span>
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Social media">
            {clinic.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-brand-800 px-3 py-1.5 text-sm hover:border-brand-200 hover:text-white"
                >
                  {item.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-900">
        <div className="container-page flex flex-col gap-2 pt-6 pb-24 text-sm sm:flex-row sm:justify-between md:pb-6">
          <p>
            © {year} {clinic.name}. All rights reserved.
          </p>
          <p>Sample website for demonstration purposes. Not a real clinic.</p>
        </div>
      </div>
    </footer>
  );
}
