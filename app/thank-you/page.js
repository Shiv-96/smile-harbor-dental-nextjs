/**
 * Thank-you page shown after a successful appointment request.
 * Excluded from search results because it has no standalone value.
 */

import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { clinic } from "@/data/clinic";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

export const metadata = {
  title: "Request received",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section aria-labelledby="thank-you-heading" className="bg-brand-50 py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-xl shadow-brand-950/10 sm:p-12">
          <CircleCheck className="mx-auto size-14 text-accent-700" aria-hidden="true" />
          <h1 id="thank-you-heading" className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Thank you, your request is in
          </h1>
          <p className="mt-4 text-lg text-muted">
            Our front desk will call you to confirm your appointment, usually within a few working
            hours. For anything urgent, please call us directly.
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
      </div>
    </section>
  );
}
