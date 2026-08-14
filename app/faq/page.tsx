import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — VetTrack",
  description: "Answers to common questions about booking, pricing, and how VetTrack works.",
};

const faqs = [
  {
    question: "Is VetTrack a replacement for my regular vet?",
    answer:
      "No. VetTrack is best for questions, follow-ups, and routine care between or alongside visits to an in-person clinic. For emergencies, always seek in-person or emergency veterinary care.",
  },
  {
    question: "How do video consultations work?",
    answer:
      "After booking, you'll get a link to join a video call with your vet at the scheduled time. You can share photos or videos of your animal beforehand to help the vet prepare.",
  },
  {
    question: "Can I get a prescription through VetTrack?",
    answer:
      "Yes, where appropriate. Your vet will review your animal's history and symptoms and can issue or renew a prescription if a video consultation is sufficient for that decision.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "You can cancel or reschedule any booking from your portal up to two hours before the appointment at no charge.",
  },
  {
    question: "Which animals can I add to my account?",
    answer:
      "Most household pets, including dogs, cats, small mammals, birds, and reptiles. Some specialists only see certain species — this is noted on their profile.",
  },
  {
    question: "Do you offer in-person visits?",
    answer:
      "For services like vaccinations and diagnostics, we schedule you with a partner clinic near you, and the results are added to your VetTrack record automatically.",
  },
] as const;

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Frequently asked questions
      </h1>

      <dl className="mt-10 flex flex-col divide-y divide-slate-200">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <dt className="text-base font-semibold text-slate-900">{faq.question}</dt>
            <dd className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
