/**
 * "Why choose us" section: clinic photo beside four reasons to trust the clinic.
 */

import Image from "next/image";
import { features, images } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="py-20 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-100" data-reveal>
          <Image
            src={images.clinic.src}
            alt={images.clinic.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading
            id="why-heading"
            align="left"
            eyebrow="Why choose us"
            title="Care built around safety and comfort"
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map(({ title, description, Icon }) => (
              <li key={title} data-reveal>
                <span className="grid size-11 place-items-center rounded-lg bg-accent-50 text-accent-700">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
