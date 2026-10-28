"use client";

/**
 * FAQ accordion following the WAI-ARIA accordion pattern:
 * - each question is a <button> inside a heading, with aria-expanded and aria-controls
 * - each answer is a labelled region that is hidden when collapsed
 * - Arrow Up/Down, Home and End move focus between questions
 */

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const buttonRefs = useRef([]);

  const toggle = (index) => setOpenIndex((current) => (current === index ? -1 : index));

  const onKeyDown = (event, index) => {
    const lastIndex = faqs.length - 1;
    const targets = {
      ArrowDown: index === lastIndex ? 0 : index + 1,
      ArrowUp: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    };
    if (event.key in targets) {
      event.preventDefault();
      buttonRefs.current[targets[event.key]]?.focus();
    }
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-brand-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions patients often ask" />

          <div
            className="mt-10 divide-y divide-line overflow-hidden rounded-xl bg-white ring-1 ring-line"
            data-reveal
          >
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-question-${index}`;
              const panelId = `faq-answer-${index}`;

              return (
                <div key={item.question}>
                  <h3 className="text-base sm:text-lg">
                    <button
                      ref={(element) => (buttonRefs.current[index] = element)}
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-bold text-ink hover:bg-brand-50 sm:px-6"
                    >
                      {item.question}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-brand-800 transition-transform motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 pb-5 text-muted sm:px-6"
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
