"use client";

import { useState } from "react";
import BookingGateModal from "@/components/BookingGateModal";

type BookConsultationButtonProps = {
  vetName: string;
  className?: string;
};

export default function BookConsultationButton({ vetName, className }: BookConsultationButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Book a consultation
      </button>
      <BookingGateModal open={open} onClose={() => setOpen(false)} vetName={vetName} />
    </>
  );
}
