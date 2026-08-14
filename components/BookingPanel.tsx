"use client";

import { useState } from "react";
import { HiOutlineCheckCircle, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

type Props = { vetName: string; fee: string; availability: string };

export default function BookingPanel({ vetName, fee, availability }: Props) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return d < t;
  }

  function isSelected(day: number) {
    return selectedDate?.getFullYear() === viewYear &&
      selectedDate?.getMonth() === viewMonth &&
      selectedDate?.getDate() === day;
  }

  function isToday(day: number) {
    return today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day;
  }

  function handleConfirm() {
    if (!selectedDate || !selectedTime) return;
    setConfirmed(true);
  }

  if (confirmed && selectedDate && selectedTime) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-brand-200 bg-brand-50 p-8 text-center">
        <HiOutlineCheckCircle className="h-12 w-12 text-brand-600" />
        <h3 className="font-display text-xl font-semibold text-ink-900">Consultation booked!</h3>
        <p className="text-sm text-ink-500">
          Your appointment with <span className="font-semibold text-ink-900">{vetName}</span> is confirmed for{" "}
          <span className="font-semibold text-ink-900">
            {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </span>{" "}
          at <span className="font-semibold text-ink-900">{selectedTime}</span>.
        </p>
        <p className="text-xs text-ink-400">A confirmation will be sent to your email.</p>
        <button
          type="button"
          onClick={() => { setConfirmed(false); setSelectedDate(null); setSelectedTime(null); setReason(""); }}
          className="mt-2 rounded-full border border-ink-200 px-5 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm">
      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Book a consultation</h3>
        <p className="mt-1 text-sm text-ink-500">Select a date and time that works for you.</p>
      </div>

      {/* Calendar */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <button type="button" onClick={prevMonth} className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-50 hover:text-ink-900">
            <HiOutlineChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold text-ink-900">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button type="button" onClick={nextMonth} className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-50 hover:text-ink-900">
            <HiOutlineChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Day headers */}
        <div className="mb-1 grid grid-cols-7 text-center">
          {DAYS.map((d) => (
            <span key={d} className="py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-400">{d}</span>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-y-1 text-center">
          {Array.from({ length: firstDay }).map((_, i) => <span key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const past = isPast(day);
            const selected = isSelected(day);
            const todayDay = isToday(day);
            return (
              <button
                key={day}
                type="button"
                disabled={past}
                onClick={() => { setSelectedDate(new Date(viewYear, viewMonth, day)); setSelectedTime(null); }}
                className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors
                  ${past ? "cursor-not-allowed text-ink-200" : ""}
                  ${selected ? "bg-brand-600 font-semibold text-white" : ""}
                  ${!past && !selected && todayDay ? "border border-brand-400 font-semibold text-brand-600" : ""}
                  ${!past && !selected && !todayDay ? "text-ink-700 hover:bg-brand-50 hover:text-brand-700" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-900">
            Available times —{" "}
            <span className="font-normal text-ink-500">
              {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
            </span>
          </p>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedTime(slot)}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition-colors
                  ${selectedTime === slot
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-ink-200 text-ink-700 hover:border-brand-400 hover:text-brand-700"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reason */}
      {selectedTime && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="reason" className="text-sm font-medium text-ink-700">
            Reason for consultation <span className="text-ink-400">(optional)</span>
          </label>
          <textarea
            id="reason"
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Describe the animal's symptoms or what you'd like to discuss…"
            className="rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
        </div>
      )}

      {/* Summary + confirm */}
      {selectedDate && selectedTime && (
        <div className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-ink-50 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-500">Date</span>
            <span className="font-medium text-ink-900">
              {selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-500">Time</span>
            <span className="font-medium text-ink-900">{selectedTime}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-500">Consultation fee</span>
            <span className="font-semibold text-ink-900">{fee}</span>
          </div>
          <button
            type="button"
            onClick={handleConfirm}
            className="mt-1 w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Confirm booking
          </button>
        </div>
      )}

      {!selectedDate && (
        <p className="text-center text-xs text-ink-400">Pick a date above to see available times.</p>
      )}
    </div>
  );
}
