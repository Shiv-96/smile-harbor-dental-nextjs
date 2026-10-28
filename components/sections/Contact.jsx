/**
 * Contact section: emergency strip, clinic hours, contact details and a lazy-loaded map.
 */

import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { clinic } from "@/data/clinic";
import { buttonOnDark } from "@/lib/styles";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-20 sm:pb-24">
      <div className="bg-brand-900 text-white">
        <div className="container-page flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3 text-lg">
            <Siren className="mt-1 size-6 shrink-0 text-accent-100" aria-hidden="true" />
            <span>
              <strong className="font-display">Dental emergency?</strong> Severe pain, swelling or a
              knocked-out tooth: call our emergency line.
            </span>
          </p>
          <a href={clinic.emergencyPhone.href} className={`${buttonOnDark} shrink-0`}>
            <Phone className="size-5" aria-hidden="true" />
            {clinic.emergencyPhone.display}
          </a>
        </div>
      </div>

      <div className="container-page mt-20">
        <SectionHeading
          id="contact-heading"
          eyebrow="Visit us"
          title="Find the clinic"
          intro="Lift access, wheelchair-friendly entrance and paid parking next to the building."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6" data-reveal>
            <div className="rounded-xl bg-brand-50 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Clock className="size-5 text-accent-700" aria-hidden="true" />
                Clinic hours
              </h3>
              <dl className="mt-4 space-y-3">
                {clinic.hours.map((entry) => (
                  <div key={entry.days} className="flex flex-wrap justify-between gap-x-4">
                    <dt className="font-semibold">{entry.days}</dt>
                    <dd className="text-muted">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl bg-brand-50 p-6">
              <h3 className="text-lg font-bold">Contact details</h3>
              <address className="mt-4 space-y-4 not-italic">
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-800"
                >
                  <MapPin className="mt-1 size-5 shrink-0 text-accent-700" aria-hidden="true" />
                  <span>
                    {clinic.address.line1}
                    <br />
                    {clinic.address.line2}
                    <span className="mt-1 block font-semibold text-brand-800 underline">
                      Get directions
                      <span className="sr-only"> (opens Google Maps in a new tab)</span>
                    </span>
                  </span>
                </a>
                <a
                  href={clinic.phone.href}
                  className="flex items-center gap-3 hover:text-brand-800"
                >
                  <Phone className="size-5 shrink-0 text-accent-700" aria-hidden="true" />
                  {clinic.phone.display}
                </a>
                <a
                  href={`mailto:${clinic.email}`}
                  className="flex items-center gap-3 break-all hover:text-brand-800"
                >
                  <Mail className="size-5 shrink-0 text-accent-700" aria-hidden="true" />
                  {clinic.email}
                </a>
              </address>
            </div>
          </div>

          <div
            className="min-h-80 overflow-hidden rounded-xl bg-brand-100 ring-1 ring-line"
            data-reveal
          >
            <iframe
              title={`Map showing the location of ${clinic.name}`}
              src={clinic.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-80 border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
