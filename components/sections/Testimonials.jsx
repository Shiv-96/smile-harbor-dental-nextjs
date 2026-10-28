/**
 * Patient stories: short, experience-focused testimonials.
 * Copy describes the visit experience only, with no promised medical outcomes.
 */

import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section aria-labelledby="stories-heading" className="bg-brand-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="stories-heading"
          eyebrow="Patient stories"
          title="What our patients say about their visits"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <li key={item.name} data-reveal>
              <figure className="h-full rounded-xl bg-white p-7 shadow-sm ring-1 ring-line">
                <Quote className="size-7 text-accent-600" aria-hidden="true" />
                <blockquote className="mt-4 text-lg text-ink">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <span className="block font-display font-bold text-ink">{item.name}</span>
                  <span className="text-sm text-muted">{item.treatment}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted">
          Individual experiences vary. Names are shortened to protect patient privacy.
        </p>
      </div>
    </section>
  );
}
