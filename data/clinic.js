/**
 * Clinic details shared across the site (header, contact section, footer, metadata).
 * All data is fictional and exists only for this demo website.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://smile-harbor-dental.netlify.app";

const address = {
  line1: "2nd Floor, Harbor Point, Lane 6",
  line2: "Koregaon Park, Pune, Maharashtra 411001",
};

const mapsQuery = encodeURIComponent("Koregaon Park, Pune, Maharashtra 411001");

export const clinic = {
  name: "Smile Harbor Dental Care",
  description:
    "Gentle, modern dental care in Koregaon Park, Pune. Cleaning, whitening, braces, implants, root canal and children's dentistry under one roof.",
  phone: { display: "+91 20 1234 5678", href: "tel:+912012345678" },
  emergencyPhone: { display: "+91 20 1234 5600", href: "tel:+912012345600" },
  email: "hello@smileharbor.example",
  address,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  hours: [
    { days: "Monday to Saturday", time: "9:30 AM to 8:00 PM" },
    { days: "Sunday", time: "10:00 AM to 2:00 PM" },
  ],
  // Social profiles are placeholders that point to each platform's home page.
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
  stats: [
    { value: "15+", label: "Years of experience" },
    { value: "12,000+", label: "Patients treated" },
    { value: "4.9/5", label: "Average Google rating" },
  ],
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];
