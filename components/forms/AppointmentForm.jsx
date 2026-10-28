"use client";

/**
 * Appointment request form submitted to Netlify Forms.
 *
 * How it works:
 * - Netlify detects the form from the static copy in public/__forms.html at deploy time.
 * - With JavaScript, fields are validated here and the data is posted to
 *   /__forms.html with fetch, then the visitor is sent to /thank-you/.
 * - Without JavaScript, the browser's built-in validation runs and the form
 *   posts natively, and Netlify shows the /thank-you/ page.
 * - The hidden "bot-field" is a honeypot: real visitors never fill it,
 *   so Netlify discards submissions where it has a value.
 */

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleAlert, Send } from "lucide-react";
import { FORM_NAME, SUNDAY_SLOT_RANGE, serviceOptions, timeSlots } from "@/data/appointment";
import { clinic } from "@/data/clinic";
import { formatTime, getLocalDateString } from "@/lib/format";
import { buttonPrimary } from "@/lib/styles";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

// Indian mobile numbers: 10 digits starting with 6 to 9, optionally prefixed with +91, 91 or 0.
const PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MESSAGE_LIMIT = 500;

function validate(values, today) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const phoneDigits = values.phone.replace(/[\s-]/g, "");
  if (!phoneDigits) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_PATTERN.test(phoneDigits)) {
    errors.phone = "Enter a valid 10-digit mobile number, for example 98765 43210.";
  }

  if (values.email && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address, for example name@example.com.";
  }

  if (!values.service) {
    errors.service = "Please choose a service.";
  }

  if (!values.date) {
    errors.date = "Please choose a preferred date.";
  } else if (today && values.date < today) {
    errors.date = "Please choose today or a future date.";
  }

  if (!values.time) {
    errors.time = "Please choose a preferred time.";
  } else if (values.date) {
    // Parse as local midnight so the weekday matches the visitor's calendar.
    const isSunday = new Date(`${values.date}T00:00:00`).getDay() === 0;
    const outsideSundayHours =
      values.time < SUNDAY_SLOT_RANGE.from || values.time > SUNDAY_SLOT_RANGE.to;
    if (isSunday && outsideSundayHours) {
      errors.time =
        "On Sundays we are open 10:00 AM to 2:00 PM. Please pick a slot in that window.";
    }
  }

  if (values.message.length > MESSAGE_LIMIT) {
    errors.message = `Please keep your message under ${MESSAGE_LIMIT} characters.`;
  }

  return errors;
}

export default function AppointmentForm() {
  const router = useRouter();
  const formRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "error"
  const [today, setToday] = useState("");

  // The date limit and custom validation depend on the browser, so they are set after hydration.
  useEffect(() => {
    setToday(getLocalDateString());
    if (formRef.current) formRef.current.noValidate = true;
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    // After the first submit attempt, errors update live as the visitor fixes them.
    if (hasSubmitted) setErrors(validate(nextValues, today));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setHasSubmitted(true);

    const nextErrors = validate(values, today);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(initialValues).find((field) => nextErrors[field]);
    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const body = new URLSearchParams(new FormData(event.currentTarget)).toString();
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  };

  // Shared accessibility attributes for each field and its error message.
  const fieldProps = (name) => ({
    id: `appointment-${name}`,
    name,
    value: values[name],
    onChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `appointment-${name}-error` : undefined,
  });

  const inputClass = (name) =>
    `mt-1.5 block min-h-12 w-full rounded-lg border bg-white px-3.5 py-2.5 text-ink placeholder:text-slate-500 focus:border-brand-700 ${
      errors[name] ? "border-red-700" : "border-slate-500"
    }`;

  const errorText = (name) =>
    errors[name] && (
      <p
        id={`appointment-${name}-error`}
        className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-red-700"
      >
        <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        {errors[name]}
      </p>
    );

  return (
    <form
      ref={formRef}
      name={FORM_NAME}
      method="POST"
      action="/thank-you/"
      onSubmit={onSubmit}
      className="grid gap-5 sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot field: visually hidden and skipped by keyboard and screen readers. */}
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="appointment-name" className="font-semibold">
          Full name{" "}
          <span className="text-red-700" aria-hidden="true">
            *
          </span>
        </label>
        <input
          {...fieldProps("name")}
          type="text"
          autoComplete="name"
          required
          className={inputClass("name")}
        />
        {errorText("name")}
      </div>

      <div>
        <label htmlFor="appointment-phone" className="font-semibold">
          Phone number{" "}
          <span className="text-red-700" aria-hidden="true">
            *
          </span>
        </label>
        <input
          {...fieldProps("phone")}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="98765 43210"
          required
          className={inputClass("phone")}
        />
        {errorText("phone")}
      </div>

      <div>
        <label htmlFor="appointment-email" className="font-semibold">
          Email <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          {...fieldProps("email")}
          type="email"
          autoComplete="email"
          className={inputClass("email")}
        />
        {errorText("email")}
      </div>

      <div>
        <label htmlFor="appointment-service" className="font-semibold">
          Service{" "}
          <span className="text-red-700" aria-hidden="true">
            *
          </span>
        </label>
        <select {...fieldProps("service")} required className={inputClass("service")}>
          <option value="">Choose a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorText("service")}
      </div>

      <div>
        <label htmlFor="appointment-date" className="font-semibold">
          Preferred date{" "}
          <span className="text-red-700" aria-hidden="true">
            *
          </span>
        </label>
        <input
          {...fieldProps("date")}
          type="date"
          min={today || undefined}
          required
          className={inputClass("date")}
        />
        {errorText("date")}
      </div>

      <div>
        <label htmlFor="appointment-time" className="font-semibold">
          Preferred time{" "}
          <span className="text-red-700" aria-hidden="true">
            *
          </span>
        </label>
        <select {...fieldProps("time")} required className={inputClass("time")}>
          <option value="">Choose a time</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {formatTime(slot)}
            </option>
          ))}
        </select>
        {errorText("time")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="appointment-message" className="font-semibold">
          Message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          {...fieldProps("message")}
          rows={4}
          maxLength={MESSAGE_LIMIT + 50}
          placeholder="Tell us about any pain, concerns or questions."
          className={inputClass("message")}
        />
        <p className="mt-1 text-right text-sm text-muted">
          {values.message.length}/{MESSAGE_LIMIT}
        </p>
        {errorText("message")}
      </div>

      <div className="sm:col-span-2">
        <div aria-live="polite">
          {status === "error" && (
            <p className="mb-4 rounded-lg border border-red-700 bg-red-50 p-4 font-semibold text-red-800">
              Sorry, we could not send your request. Please try again or call us on{" "}
              <a href={clinic.phone.href} className="underline">
                {clinic.phone.display}
              </a>
              .
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`${buttonPrimary} w-full sm:w-auto disabled:opacity-70`}
        >
          <Send className="size-5" aria-hidden="true" />
          {status === "submitting" ? "Sending request..." : "Request appointment"}
        </button>
        <p className="mt-3 text-sm text-muted">
          Fields marked * are required. We will call you to confirm the exact time.
        </p>
      </div>
    </form>
  );
}
