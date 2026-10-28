/**
 * Custom 404 page. The static export writes it to out/404.html,
 * which Netlify serves automatically for unknown URLs.
 */

import Link from "next/link";
import { clinic } from "@/data/clinic";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="py-24 sm:py-32">
      <div className="container-page text-center">
        <p className="font-display text-7xl font-extrabold text-brand-800 sm:text-8xl">404</p>
        <h1 id="not-found-heading" className="mt-4 text-3xl font-extrabold sm:text-4xl">
          We could not find that page
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          The link may be outdated or the page may have moved. You can head back to the home page or
          call us if you need help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonPrimary}>
            Back to home
          </Link>
          <a href={clinic.phone.href} className={buttonSecondary}>
            Call {clinic.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
