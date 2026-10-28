/**
 * Outline tooth icon drawn to match the stroke style of the Lucide icon set,
 * which does not ship a tooth glyph. Used in the logo and the implants card.
 */

export default function ToothIcon({ className, strokeWidth = 2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M7.5 3C5 3 3.5 5 3.5 7.5c0 2.2.9 3.6 1.6 5.2.7 1.7.9 3.6 1.3 5.6.4 1.9 1 2.7 1.9 2.7 1.1 0 1.5-1.2 1.9-3.1.3-1.6.7-3.2 1.8-3.2s1.5 1.6 1.8 3.2c.4 1.9.8 3.1 1.9 3.1.9 0 1.5-.8 1.9-2.7.4-2 .6-3.9 1.3-5.6.7-1.6 1.6-3 1.6-5.2C20.5 5 19 3 16.5 3c-1.9 0-2.9 1.1-4.5 1.1S9.4 3 7.5 3Z" />
    </svg>
  );
}
