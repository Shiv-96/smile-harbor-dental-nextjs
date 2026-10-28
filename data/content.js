/**
 * Page content for the home page sections.
 * Keeping copy and data here lets the section components stay focused on layout.
 * Prices are indicative demo values in Indian rupees, not real quotes.
 */

import {
  Baby,
  Clock,
  Droplets,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  ShieldPlus,
  Smile,
  Sparkles,
} from "lucide-react";
import ToothIcon from "@/components/ui/ToothIcon";

// Photos are hosted on the Unsplash CDN (see README for credits).
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    alt: "Bright, modern dental treatment room with a patient chair and equipment",
  },
  clinic: {
    src: "https://images.unsplash.com/photo-1643660527071-52e37cf7c7ea",
    alt: "Clean treatment room with a blue dental chair and sterilized equipment",
  },
};

export const services = [
  {
    title: "Cleaning and scaling",
    description:
      "Professional removal of plaque and tartar, followed by polishing to keep gums healthy.",
    price: 1200,
    Icon: Droplets,
  },
  {
    title: "Teeth whitening",
    description: "In-clinic whitening supervised by a dentist, with shade checks before and after.",
    price: 6000,
    Icon: Sparkles,
  },
  {
    title: "Braces and aligners",
    description:
      "Metal, ceramic and clear aligner options planned with digital scans and regular reviews.",
    price: 35000,
    Icon: Smile,
  },
  {
    title: "Dental implants",
    description: "Replacement of missing teeth with titanium implants and natural-looking crowns.",
    price: 28000,
    Icon: ToothIcon,
  },
  {
    title: "Root canal treatment",
    description: "Rotary root canal treatment under local anaesthesia to save an infected tooth.",
    price: 4500,
    Icon: ShieldPlus,
  },
  {
    title: "Pediatric dentistry",
    description: "Friendly check-ups, fluoride care and sealants for children in a calm setting.",
    price: 600,
    Icon: Baby,
  },
];

export const doctors = [
  {
    name: "Dr. Ananya Rao",
    qualification: "BDS, MDS (Orthodontics)",
    specialty: "Braces and clear aligners",
    experience: "14 years",
    photo: {
      src: "https://images.unsplash.com/photo-1758691462651-611d730c5272",
      alt: "Portrait of Dr. Ananya Rao smiling at her desk",
    },
  },
  {
    name: "Dr. Vikram Mehta",
    qualification: "BDS, MDS (Prosthodontics)",
    specialty: "Implants and smile restoration",
    experience: "17 years",
    photo: {
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
      alt: "Portrait of Dr. Vikram Mehta in a white shirt",
    },
  },
  {
    name: "Dr. Priya Nair",
    qualification: "BDS, MDS (Pedodontics)",
    specialty: "Children's dentistry",
    experience: "9 years",
    photo: {
      src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31",
      alt: "Portrait of Dr. Priya Nair holding a stethoscope",
    },
  },
];

export const features = [
  {
    title: "Modern equipment",
    description:
      "Digital X-rays with low radiation, intraoral cameras and 3D scans for precise planning.",
    Icon: Microscope,
  },
  {
    title: "Strict sterilization",
    description:
      "Class B autoclave sterilization, sealed instrument pouches and single-use disposables.",
    Icon: ShieldCheck,
  },
  {
    title: "Comfort-first treatment",
    description: "Local anaesthesia, gentle techniques and clear explanations at every step.",
    Icon: HeartHandshake,
  },
  {
    title: "Flexible timings",
    description:
      "Open until 8 PM on weekdays and on Sunday mornings, so care fits around your day.",
    Icon: Clock,
  },
];

export const testimonials = [
  {
    quote:
      "The team explained every step of my root canal before starting. I felt informed and at ease throughout the visits.",
    name: "Meera K.",
    treatment: "Root canal treatment",
  },
  {
    quote:
      "My son was nervous about his first check-up. Dr. Nair took her time and he now asks when the next visit is.",
    name: "Rohan D.",
    treatment: "Pediatric check-up",
  },
  {
    quote:
      "Booking an evening slot was easy, the clinic was spotless and the cost was clear before treatment began.",
    name: "Fatima S.",
    treatment: "Cleaning and scaling",
  },
  {
    quote:
      "The aligner plan was shared with me on screen, including the number of reviews. No surprises along the way.",
    name: "Arjun P.",
    treatment: "Clear aligners",
  },
];

export const pricing = [
  { treatment: "Consultation and check-up", visits: "1 visit", price: 500 },
  { treatment: "Digital X-ray (single tooth)", visits: "Same visit", price: 300 },
  { treatment: "Cleaning and scaling", visits: "1 visit", price: 1200 },
  { treatment: "Tooth-coloured filling", visits: "1 visit", price: 1500 },
  { treatment: "Tooth extraction (simple)", visits: "1 visit", price: 1200 },
  { treatment: "Root canal treatment (per tooth)", visits: "1 to 3 visits", price: 4500 },
  { treatment: "Ceramic crown", visits: "2 visits", price: 6000 },
  { treatment: "In-clinic teeth whitening", visits: "1 visit", price: 6000 },
  { treatment: "Dental implant with crown", visits: "3 to 4 visits", price: 28000 },
  { treatment: "Metal braces (full treatment)", visits: "Monthly reviews", price: 35000 },
  {
    treatment: "Clear aligners (full treatment)",
    visits: "Reviews every 6 to 8 weeks",
    price: 75000,
  },
];

export const insurers = [
  "Star Health",
  "HDFC ERGO",
  "Niva Bupa",
  "ICICI Lombard",
  "Care Health",
  "Bajaj General",
];

export const faqs = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Walk-ins are welcome, but booking ahead means shorter waiting times. Use the appointment form or call us and we will confirm a slot.",
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "The procedure is done under local anaesthesia, so most patients feel pressure rather than pain. Some tenderness for a few days afterwards is common and usually settles with the care advice we give you.",
  },
  {
    question: "How often should I get my teeth cleaned?",
    answer:
      "Most adults benefit from a professional cleaning every six months. Your dentist may suggest a different interval based on your gum health.",
  },
  {
    question: "From what age do you see children?",
    answer:
      "We recommend a first visit by your child's first birthday or within six months of the first tooth appearing. Early visits help children get comfortable with the dentist.",
  },
  {
    question: "Does health insurance cover dental treatment?",
    answer:
      "Many health policies in India cover dental care only after an accident or under an OPD add-on. Share your policy details at the front desk and we will help you with the paperwork for eligible claims.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept UPI, debit and credit cards, net banking and cash. No-cost EMI is available on select treatments such as aligners and implants.",
  },
  {
    question: "How do you sterilize instruments?",
    answer:
      "Instruments are cleaned, sealed in pouches and sterilized in a Class B autoclave. Items such as needles, gloves and suction tips are single-use.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call our emergency line for severe pain, swelling, a knocked-out tooth or bleeding that does not stop. If you have trouble breathing or swallowing, go to the nearest hospital emergency department.",
  },
];
