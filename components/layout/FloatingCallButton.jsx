/**
 * Floating click-to-call button, shown on small screens only,
 * so mobile visitors can phone the clinic from anywhere on the page.
 */

import { Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function FloatingCallButton() {
  return (
    <a
      href={clinic.phone.href}
      className="fixed right-4 bottom-4 z-30 inline-flex min-h-14 items-center gap-2 rounded-full bg-accent-700 px-5 font-display font-bold text-white shadow-lg shadow-brand-950/25 hover:bg-brand-800 md:hidden"
    >
      <Phone className="size-5" aria-hidden="true" />
      Call now
      <span className="sr-only">: {clinic.phone.display}</span>
    </a>
  );
}
