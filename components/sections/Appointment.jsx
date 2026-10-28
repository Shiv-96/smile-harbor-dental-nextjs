/**
 * Appointment section: what to expect on the left, the booking form on the right.
 */

import { CircleCheck, Phone } from "lucide-react";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { clinic } from "@/data/clinic";

const steps = [
  "Send your preferred date and time using the form.",
  "Our front desk calls you within working hours to confirm the slot.",
  "You get a reminder message the day before your visit.",
];

export default function Appointment() {
  return (
    <section id="appointment" aria-labelledby="appointment-heading" className="py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHeading
            id="appointment-heading"
            align="left"
            eyebrow="Book a visit"
            title="Request an appointment"
            intro="Choose a time that suits you. A first consultation includes an examination and a written treatment plan."
          />
          <ol className="mt-8 space-y-4">
            {steps.map((step) => (
              <li key={step} className="flex gap-3">
                <CircleCheck
                  className="mt-0.5 size-5 shrink-0 text-accent-700"
                  aria-hidden="true"
                />
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-xl bg-brand-50 p-5">
            Prefer to talk to someone?
            <a
              href={clinic.phone.href}
              className="mt-1 flex items-center gap-2 font-display text-lg font-bold text-brand-800 hover:text-brand-900"
            >
              <Phone className="size-5" aria-hidden="true" />
              {clinic.phone.display}
            </a>
          </p>
        </div>

        <div
          className="rounded-2xl bg-white p-6 shadow-xl shadow-brand-950/10 ring-1 ring-line sm:p-8"
          data-reveal
        >
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
