/**
 * Small formatting helpers shared by sections and the appointment form.
 */

const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Formats a number as Indian rupees, for example 35000 -> "₹35,000". */
export function formatRupees(amount) {
  return rupeeFormatter.format(amount);
}

/** Converts a 24-hour "HH:MM" string to a readable 12-hour label, for example "14:00" -> "2:00 PM". */
export function formatTime(value) {
  const [hours, minutes] = value.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

/** Returns today's date as "YYYY-MM-DD" in the visitor's local time zone. */
export function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
