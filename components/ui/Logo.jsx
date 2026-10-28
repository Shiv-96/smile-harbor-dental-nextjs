/**
 * Clinic logo: tooth mark plus wordmark, linking back to the home page.
 */

import Link from "next/link";
import ToothIcon from "@/components/ui/ToothIcon";
import { clinic } from "@/data/clinic";

export default function Logo({ onDark = false }) {
  const nameColor = onDark ? "text-white" : "text-brand-900";
  const subColor = onDark ? "text-brand-100" : "text-accent-700";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${clinic.name}, home`}>
      <span className="grid size-10 place-items-center rounded-lg bg-brand-800 text-white">
        <ToothIcon className="size-6" />
      </span>
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span className={`font-display text-lg font-extrabold ${nameColor}`}>Smile Harbor</span>
        <span className={`mt-1 text-xs font-semibold tracking-widest uppercase ${subColor}`}>
          Dental Care
        </span>
      </span>
    </Link>
  );
}
