"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 px-4 py-10">
      <div className="w-full max-w-3xl space-y-6">
        {/* Confirmation Details */}
        <Card className="p-6 shadow-md rounded-2xl bg-white">
          <h2 className="text-lg font-semibold text-gray-800 text-center mb-3">
            Your Confirmation Number is{" "}
            <span className="text-amber-600">2219C13972</span>
          </h2>
          <p className="text-sm text-gray-600 text-center">
            You will receive an e-mail with full confirmation information.
          </p>
        </Card>

        {/* Reservation Summary */}
        <Card className="p-6 shadow-md rounded-2xl bg-white">
          <h3 className="text-md font-semibold text-amber-700 border-b pb-2 mb-4">
            Reservation Summary
          </h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              <span className="font-medium">Name:</span> SK ALI
            </p>
            <p>
              <span className="font-medium">Arrive:</span> 10/23/2018
            </p>
            <p>
              <span className="font-medium">Depart:</span> 10/24/2018
            </p>
            <p>
              <span className="font-medium">Nights:</span> 1
            </p>
            <p>
              <span className="font-medium">Adults:</span> 1
            </p>
            <p>
              <span className="font-medium">Children:</span> 0
            </p>
            <p>
              <span className="font-medium">Room:</span>{" "}
              <span className="font-semibold">Non Smoking King</span>
            </p>
            <p>
              <span className="font-medium">Total:</span>{" "}
              <span className="text-blue-600 underline cursor-pointer">
                Click 0.00 for price details.
              </span>
            </p>
            <p className="text-xs text-gray-500 pt-1">
              - Applicable Taxes Included
              <br />- Additional charges may apply
            </p>
          </div>
        </Card>

        {/* Hotel Info */}
        <Card className="p-6 shadow-md rounded-2xl bg-white">
          <h3 className="text-md font-semibold text-amber-700 border-b pb-2 mb-4">
            Hotel Information
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p className="font-semibold text-base">White Birch Inn</p>
            <p>80 Haven Street</p>
            <p>Winter Haven, FL 33839 US</p>
            <p>(203) 456-4567</p>
          </div>
        </Card>

        {/* Button */}
        <div className="text-center">
          <Button
            className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium"
            onClick={() => (window.location.href = "/")}
          >
            Make Another Reservation
          </Button>
        </div>
      </div>
    </div>
  );
}
