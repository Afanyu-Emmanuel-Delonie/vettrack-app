import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

const offices = [
  {
    name: "Nyagatare Main Hospital",
    address: "EN 32 Ave street, Nyagatare City",
    phone: "+250 78 072 1800",
    tel: "tel:+250780721800",
    directions: "https://www.google.com/maps?q=Nyagatare,Rwanda",
  },
  {
    name: "Kigali Branch",
    address: "45 Veterinary Street, Kigali",
    phone: "+250 78 051 9960",
    tel: "tel:+250780519960",
    directions: "https://www.google.com/maps?q=Kigali,Rwanda",
  },
  {
    name: "Kayonza Branch",
    address: "78 Livestock Avenue, Kayonza",
    phone: "+250 78 072 1800",
    tel: "tel:+250780721800",
    directions: "https://www.google.com/maps?q=Kayonza,Rwanda",
  },
] as const;

export default function Offices() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        Our offices
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-ink-500">
        Visit us at any of our locations across Rwanda.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {offices.map((office) => (
          <div
            key={office.name}
            className="flex flex-col gap-4 rounded-3xl border border-brand-200 bg-white p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <HiOutlineMapPin className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-ink-900">{office.name}</h3>
              <p className="mt-1 text-sm text-ink-500">{office.address}</p>
            </div>

            <a
              href={office.tel}
              className="flex items-center gap-2 text-sm text-ink-600 hover:text-brand-700"
            >
              <HiOutlinePhone className="h-4 w-4 shrink-0" />
              {office.phone}
            </a>

            <a
              href={office.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto rounded-full border border-brand-200 px-4 py-2 text-center text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
