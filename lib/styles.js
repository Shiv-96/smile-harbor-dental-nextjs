/**
 * Shared Tailwind class strings for buttons, so every call to action
 * looks and behaves the same across sections.
 */

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 font-display text-base font-semibold transition-colors duration-200";

export const buttonPrimary = `${buttonBase} bg-brand-800 text-white hover:bg-brand-900`;

export const buttonSecondary = `${buttonBase} border border-brand-200 bg-white text-brand-800 hover:border-brand-800 hover:bg-brand-50`;

export const buttonOnDark = `${buttonBase} bg-white text-brand-900 hover:bg-brand-100`;
