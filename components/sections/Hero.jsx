/**
 * Hero section: full-width clinic photo with a white "trust card" on top
 * that holds the headline, the two main calls to action and trust indicators.
 * On mobile the card sits below the photo and overlaps it slightly.
 */

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, Star } from "lucide-react";
import { clinic } from "@/data/clinic";
import { images } from "@/data/content";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative bg-brand-50 lg:min-h-[38rem]">
      <div className="relative h-64 sm:h-80 lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft wash on large screens keeps the photo calm behind the card. */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-brand-950/35 to-transparent lg:block" />
      </div>

      <div className="container-page relative -mt-14 pb-14 lg:mt-0 lg:flex lg:min-h-[38rem] lg:items-center lg:py-16">
        <div className="rounded-2xl bg-white p-6 shadow-xl shadow-brand-950/10 sm:p-9 lg:max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-700">
            <span className="size-2 rounded-full bg-accent-600" aria-hidden="true" />
            Accepting new patients in Koregaon Park, Pune
          </p>

          <h1 id="hero-heading" className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Calm, careful dental care for the whole family
          </h1>
          <p className="mt-4 text-lg text-muted">
            Experienced specialists, clear pricing before treatment and evening appointments that
            fit your schedule.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/#appointment" className={buttonPrimary}>
              <CalendarCheck className="size-5" aria-hidden="true" />
              Book appointment
            </Link>
            <a href={clinic.phone.href} className={buttonSecondary}>
              <Phone className="size-5" aria-hidden="true" />
              Call now
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6">
            {clinic.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="order-first flex items-center gap-1 font-display text-xl font-extrabold text-brand-900 sm:text-2xl">
                  {stat.value}
                  {stat.label.includes("rating") && (
                    <Star className="size-4 fill-amber-400 text-amber-500" aria-hidden="true" />
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
