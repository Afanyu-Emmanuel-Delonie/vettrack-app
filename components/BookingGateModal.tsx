"use client";

import Link from "next/link";
import { useEffect } from "react";

type BookingGateModalProps = {
  open: boolean;
  onClose: () => void;
  vetName?: string;
};

export default function BookingGateModal({ open, onClose, vetName }: BookingGateModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-slate-900">Create a free account to book</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {vetName
            ? `Sign up to book a consultation with ${vetName} and manage it from your portal.`
            : "Sign up to book a consultation and manage it from your portal."}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/register"
            className="rounded-full bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Create an account
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            I already have an account
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="text-center text-sm text-slate-500 hover:text-slate-700"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
