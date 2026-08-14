"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi2";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Is VetTrack a replacement for an in-person vet visit?",
    answer:
      "No. VetTrack is best for routine care, follow-ups, and urgent questions between visits. For emergencies or anything life-threatening, always seek in-person veterinary care.",
  },
  {
    question: "How do video consultations work?",
    answer:
      "After booking, you'll get a link to join a video call with your vet at the scheduled time. You can share photos or videos of the animal beforehand to help the vet prepare.",
  },
  {
    question: "Which animals can I track on VetTrack?",
    answer:
      "Cattle, goats, sheep, poultry, pigs, and more — VetTrack supports 40+ livestock species out of the box.",
  },
  {
    question: "How does disease monitoring work?",
    answer:
      "Vitals and field observations feed into your dashboard in real time. The moment something looks abnormal, you and your vet get an alert — before it spreads through the herd.",
  },
  {
    question: "Can multiple people manage the same farm account?",
    answer:
      "Yes. Invite staff with different access levels, from field workers logging daily activity to managers reviewing reports and approving vet visits.",
  },
  {
    question: "Does VetTrack work with unreliable internet?",
    answer:
      "Yes. The app keeps working offline and syncs your records automatically the moment you're back online — no data entry lost.",
  },
] as const;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const headingRef = useScrollReveal();
  const listRef = useScrollReveal({ start: "top 92%" });

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20">
      <div ref={headingRef} className="reveal mx-auto flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="text-sm leading-6 text-ink-500">
          Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll walk you through it.
        </p>
      </div>

      <div ref={listRef} className="reveal mt-12 flex flex-col divide-y divide-ink-100 border-t border-ink-100">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base font-semibold text-ink-900">{faq.question}</span>
                <HiPlus
                  className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-sm leading-6 text-ink-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
