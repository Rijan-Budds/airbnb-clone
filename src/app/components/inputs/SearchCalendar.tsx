"use client";

import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface MonthViewProps {
  monthOffset: number;
  range: DateRange;
  onDateSelect: (date: Date) => void;
}

const MonthView = ({ monthOffset, range, onDateSelect }: MonthViewProps) => {
  const now = new Date();
  // Normalize today to avoid time issues
  now.setHours(0, 0, 0, 0);

  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth() + monthOffset,
    1
  );
  const monthName = targetDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth() + 1,
    0
  ).getDate();
  const startDay = targetDate.getDay(); // 0 is Sunday

  const days = [];
  // Empty slots for days before start of month
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}-1`} className="w-full h-10" />);
    days.push(<div key={`empty-${i}-2`} className="w-full h-12" />);
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      i
    );
    const currentDateMs = currentDate.getTime();

    const startMs = range.startDate ? range.startDate.getTime() : null;
    const endMs = range.endDate ? range.endDate.getTime() : null;

    const isStart = startMs === currentDateMs;
    const isEnd = endMs === currentDateMs;
    const inRange =
      startMs && endMs && currentDateMs > startMs && currentDateMs < endMs;

    const showRightLine = isStart && endMs;
    const showLeftLine = isEnd && startMs;

    days.push(
      <div
        key={i}
        className={`relative w-full h-12 flex items-center justify-center cursor-pointer p-0 ${inRange ? "bg-neutral-100" : ""}`}
        onClick={() => onDateSelect(currentDate)}
      >
        {/* Background Lines for Start/End */}
        {showRightLine && (
          <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-neutral-100 z-0" />
        )}
        {showLeftLine && (
          <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-neutral-100 z-0" />
        )}

        {/* The Circle/Number */}
        <div
          className={`
                    w-12 h-12 flex items-center justify-center rounded-full text-sm font-medium relative z-10 transition
                    ${isStart || isEnd ? "bg-black text-white" : "hover:bg-neutral-100"}
                    ${inRange ? "hover:bg-neutral-200" : ""}
               `}
        >
          {i}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-center font-semibold text-neutral-800">
        {monthName}
      </h3>
      <div className="grid grid-cols-7 text-center w-full">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-xs text-neutral-500 font-light mb-2">
            {day}
          </div>
        ))}
        {days}
      </div>
    </div>
  );
};

const SearchCalendar = () => {
  const [monthIndex, setMonthIndex] = useState(0);
  const isAtCurrentMonth = monthIndex === 0;

  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const handleDateSelect = (date: Date) => {
    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: date, endDate: null });
    } else {
      // We have a start date, no end date
      if (date.getTime() < range.startDate.getTime()) {
        // New start date
        setRange({ startDate: date, endDate: null });
      } else {
        // Valid end date
        setRange({ ...range, endDate: date });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between select-none w-full">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setMonthIndex((prev) => Math.max(prev - 1, 0))}
          disabled={isAtCurrentMonth}
          className={`rounded px-3 py-1 transition
    ${isAtCurrentMonth ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
  `}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <button
          onClick={() => setMonthIndex((prev) => prev + 1)}
          className="hover:bg-gray-100 rounded px-3 py-1"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <MonthView
        monthOffset={monthIndex}
        range={range}
        onDateSelect={handleDateSelect}
      />

      <div className="border-r-[1px] hidden md:block"></div>

      <MonthView
        monthOffset={monthIndex + 1}
        range={range}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
};

export default SearchCalendar;
