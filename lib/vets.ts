export type Vet = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  photo: string;
  credentials: string;
  languages: string;
  consultationFee: string;
  availability: string;
};

export const vets: Vet[] = [
  {
    slug: "theophile-niyonizeye",
    name: "Dr. Theophile Niyonizeye",
    specialty: "Large Animal Medicine",
    bio: "Focused on cattle, goats, and sheep health across Rwanda's dairy and beef farms — from routine checkups to complex field diagnostics.",
    photo: "/img/team/ceo.png",
    credentials: "DVM",
    languages: "Kinyarwanda, English, French",
    consultationFee: "RWF 5,000",
    availability: "Mon – Fri, 8:00 AM – 6:00 PM",
  },
  {
    slug: "benitte-ikuzwe",
    name: "Dr. Benitte Ikuzwe",
    specialty: "Veterinary Technician",
    bio: "Supports diagnostics and day-to-day animal care, helping farmers catch problems early with hands-on field assessments.",
    photo: "/img/team/managing-dirrector.png",
    credentials: "Licensed Veterinary Technician",
    languages: "Kinyarwanda, English",
    consultationFee: "RWF 4,000",
    availability: "Mon – Fri, 8:00 AM – 6:00 PM",
  },
  {
    slug: "gerard-sano",
    name: "Dr. Gerard Sano",
    specialty: "Reproduction & Breeding",
    bio: "Specializes in livestock fertility, calving support, and breeding programs for dairy and beef herds.",
    photo: "/img/team/finance.png",
    credentials: "DVM",
    languages: "Kinyarwanda, English",
    consultationFee: "RWF 5,000",
    availability: "Mon – Sat, 8:00 AM – 5:00 PM",
  },
  {
    slug: "charline-rutagengwa",
    name: "Dr. Charline Rutagengwa",
    specialty: "Animal Tracking Systems",
    bio: "Helps farms set up and interpret real-time location and health tracking, turning device data into decisions vets can act on.",
    photo: "/img/team/marketing.png",
    credentials: "DVM",
    languages: "Kinyarwanda, English",
    consultationFee: "RWF 5,000",
    availability: "Mon – Fri, 8:00 AM – 6:00 PM",
  },
];

export function getVetBySlug(slug: string) {
  return vets.find((vet) => vet.slug === slug);
}
