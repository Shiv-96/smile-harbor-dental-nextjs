/**
 * Home page: assembles all sections in order and adds structured data
 * (schema.org Dentist) so search engines understand the clinic details.
 */

import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
import Doctors from "@/components/sections/Doctors";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { SITE_URL, clinic } from "@/data/clinic";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.name,
  description: clinic.description,
  url: SITE_URL,
  telephone: clinic.phone.display,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.line1,
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "₹₹",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Services />
      <Doctors />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <Faq />
      <Appointment />
      <Contact />
    </>
  );
}
