"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

const steps = [
  { name: "Rooms", path: "/" },
  { name: "Add-Ons", path: "/addons" },
  { name: "Activities", path: "/activities" },
  { name: "Guest", path: "/guest" },
  { name: "Confirmation", path: "/confirmation" },
];

const BookingSteps: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 mt-6 border border-orange-300 rounded-md overflow-hidden cursor-pointer">
      {steps.map((step, index) => {
        const isActive = pathname === step.path;

        // Conditionally apply col-span-2 to the last item if total steps is odd
        const isLastOdd =
          steps.length % 2 === 1 && index === steps.length - 1;

        return (
          <div
            key={step.name}
            onClick={() => router.push(step.path)}
            className={clsx(
              "text-center py-3 text-xs sm:text-sm font-medium transition-all duration-200",
              isLastOdd ? "col-span-2 sm:col-span-1" : "", // 🛠️ Span full width only on small screens
              isActive
                ? "bg-[#174166] text-white"
                : "bg-orange-300 text-white hover:bg-orange-400"
            )}
          >
            {step.name}
          </div>
        );
      })}
    </div>
  );
};

export default BookingSteps;
