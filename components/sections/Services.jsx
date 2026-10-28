/**
 * Services section: six treatment cards with an icon, a short description
 * and an indicative "starting from" price.
 */

import { services } from "@/data/content";
import { formatRupees } from "@/lib/format";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          eyebrow="Our services"
          title="Complete dental care under one roof"
          intro="From routine cleanings to implants, every treatment starts with a clear explanation of your options and costs."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, price, Icon }) => (
            <li
              key={title}
              data-reveal
              className="flex flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-brand-950/5"
            >
              <span className="grid size-12 place-items-center rounded-lg bg-brand-50 text-brand-800">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-muted">{description}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm text-muted">
                Starting from{" "}
                <span className="font-display text-lg font-bold text-brand-900">
                  {formatRupees(price)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
