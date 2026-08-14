import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  id?: string;
};

export default function ServiceCard({ icon, title, description, id }: ServiceCardProps) {
  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
