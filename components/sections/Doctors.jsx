/**
 * Doctors section: three profile cards with photo, qualification,
 * specialty and years of experience.
 */

import Image from "next/image";
import { doctors } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-heading" className="bg-brand-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="doctors-heading"
          eyebrow="Meet the team"
          title="Specialists who take time to listen"
          intro="Each of our dentists holds a postgraduate degree in their field and works with you on a treatment plan you understand."
        />

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {doctors.map((doctor) => (
            <li
              key={doctor.name}
              data-reveal
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-line"
            >
              <div className="relative aspect-[4/3] bg-brand-100">
                <Image
                  src={doctor.photo.src}
                  alt={doctor.photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="mt-1 font-semibold text-accent-700">{doctor.qualification}</p>
                <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
                  <div>
                    <dt className="text-muted">Specialty</dt>
                    <dd className="mt-0.5 font-semibold text-ink">{doctor.specialty}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Experience</dt>
                    <dd className="mt-0.5 font-semibold text-ink">{doctor.experience}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
