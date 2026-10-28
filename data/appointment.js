/**
 * Options and rules for the appointment form.
 * Kept separate from data/content.js so the client-side form bundle
 * does not pull in the icon components used by the page sections.
 */

export const FORM_NAME = "appointment";

export const serviceOptions = [
  "Cleaning and scaling",
  "Teeth whitening",
  "Braces and aligners",
  "Dental implants",
  "Root canal treatment",
  "Pediatric dentistry",
  "General check-up",
  "Not sure yet",
];

/** Appointment start times in 24-hour "HH:MM" format. */
export const timeSlots = [
  "09:30",
  "10:30",
  "11:30",
  "12:30",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

/** On Sundays the clinic is open 10 AM to 2 PM, so only these start times fit. */
export const SUNDAY_SLOT_RANGE = { from: "10:00", to: "13:00" };
