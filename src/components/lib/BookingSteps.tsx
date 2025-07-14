"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

const steps = [
  { name: "Rooms", path: "/rooms" },
  { name: "Add-Ons", path: "/addons" },
  { name: "Activities", path: "/activities" },
  { name: "Guest", path: "/guest" },
  { name: "Confirmation", path: "/confirmation" },
];

const BookingSteps: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center mt-6 border border-orange-300 rounded-md overflow-hidden cursor-pointer">
      {steps.map((step) => {
        const isActive = pathname === step.path;

        return (
          <div
            key={step.name}
            onClick={() => router.push(step.path)}
            className={clsx(
              "w-1/2 sm:w-1/5 text-center py-3 text-xs sm:text-sm font-medium transition-all duration-200",
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
