/**
 * Pricing and insurance: a table of common treatments with indicative prices
 * and the list of insurers the clinic helps patients claim with.
 */

import { BadgeCheck } from "lucide-react";
import { insurers, pricing } from "@/data/content";
import { formatRupees } from "@/lib/format";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing and insurance"
          title="Transparent pricing, shared before treatment"
          intro="Prices below are starting points. Your dentist confirms the final cost after an examination, before any work begins."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* The wrapper scrolls horizontally on very narrow screens instead of breaking the layout. */}
          <div
            className="overflow-x-auto rounded-xl ring-1 ring-line lg:col-span-2"
            data-reveal
            tabIndex={0}
            role="region"
            aria-label="Treatment prices table"
          >
            <table className="w-full min-w-[32rem] text-left">
              <caption className="sr-only">
                Indicative starting prices for common treatments, in Indian rupees
              </caption>
              <thead className="bg-brand-800 font-display text-sm text-white">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    Treatment
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">
                    Typical visits
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-right font-semibold">
                    Starting from
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {pricing.map((row) => (
                  <tr key={row.treatment} className="even:bg-brand-50/60">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-ink">
                      {row.treatment}
                    </th>
                    <td className="px-5 py-3.5 text-muted">{row.visits}</td>
                    <td className="px-5 py-3.5 text-right font-display font-bold text-brand-900">
                      {formatRupees(row.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside
            aria-labelledby="insurance-heading"
            className="rounded-xl bg-brand-50 p-7"
            data-reveal
          >
            <h3 id="insurance-heading" className="text-xl font-bold">
              Insurance we work with
            </h3>
            <p className="mt-2 text-muted">
              We help with paperwork for eligible claims under these insurers.
            </p>
            <ul className="mt-5 space-y-3">
              {insurers.map((name) => (
                <li key={name} className="flex items-center gap-3 font-semibold text-ink">
                  <BadgeCheck className="size-5 shrink-0 text-accent-700" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-brand-200 pt-4 text-sm text-muted">
              Dental coverage depends on your policy. Many plans cover dental care only after an
              accident or with an OPD add-on. No-cost EMI is available on select treatments.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
