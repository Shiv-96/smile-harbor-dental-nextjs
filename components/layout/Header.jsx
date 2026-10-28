"use client";

/**
 * Sticky site header with desktop navigation and an accessible mobile menu.
 * The mobile menu closes on Escape, on link selection and when the
 * viewport grows to the desktop breakpoint.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { clinic, navLinks } from "@/data/clinic";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef(null);

  // Adds a shadow once the page scrolls, so the header separates from content.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const onBreakpoint = (event) => event.matches && setIsOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onBreakpoint);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow ${
        isScrolled ? "border-line shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 font-display text-[0.95rem] font-semibold text-ink hover:bg-brand-50 hover:text-brand-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phone.href}
            className="hidden items-center gap-2 px-2 font-display font-semibold text-brand-800 hover:text-brand-900 xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {clinic.phone.display}
          </a>
          <Link href="/#appointment" className={`${buttonPrimary} max-sm:hidden`}>
            Book appointment
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-12 place-items-center rounded-lg text-ink hover:bg-brand-50 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!isOpen} className="border-t border-line bg-white lg:hidden">
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 font-display text-lg font-semibold text-ink hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/#appointment" onClick={closeMenu} className={buttonPrimary}>
              Book appointment
            </Link>
            <a href={clinic.phone.href} className={buttonSecondary}>
              <Phone className="size-4" aria-hidden="true" />
              Call {clinic.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
