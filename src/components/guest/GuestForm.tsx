"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  Shield,
  CheckCircle2,
  Lock,
  Globe,
  Home,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    terms: false,
    comments: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const countries = [
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${step <= currentStep
                    ? "bg-[#174166] text-white"
                    : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {step < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < totalSteps && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded transition-all duration-200 ${step < currentStep ? "bg-[#174166]" : "bg-gray-200"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}: {currentStep === 1 ? "Personal Information" : "Payment & Confirmation"}
            </p>
          </div>
        </div>

        <form className="space-y-8">
          {/* Step 1: Personal + Address + Contact Info */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                  <User className="w-6 h-6" /> Personal Information
                </CardTitle>
                <p className="text-gray-600">Tell us about yourself and your address</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <User className="w-4 h-4" /> First Name *
                    </Label>
                    <Input id="firstName" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <User className="w-4 h-4" /> Last Name *
                    </Label>
                    <Input id="lastName" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4" /> Email Address *
                    </Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4" /> Phone Number *
                    </Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Globe className="w-4 h-4" /> Country *
                  </Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger className="w-[100%] h-[100%] border-gray-300 focus:border-[#174166] rounded-lg">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="address1" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Home className="w-4 h-4" /> Address Line 1 *
                    </Label>
                    <Input id="address1" value={formData.address1} onChange={(e) => handleInputChange("address1", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address2" className="text-sm font-medium text-gray-700">Address Line 2</Label>
                    <Input id="address2" value={formData.address2} onChange={(e) => handleInputChange("address2", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700">City *</Label>
                    <Input id="city" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium text-gray-700">State *</Label>
                    <Input id="state" value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-sm font-medium text-gray-700">Zip *</Label>
                    <Input id="zip" value={formData.zip} onChange={(e) => handleInputChange("zip", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Payment Info */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b">
                  <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                    <CreditCard className="w-6 h-6" /> Payment Information
                  </CardTitle>
                  <p className="text-gray-600">Secure payment processing</p>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-2 p-4 bg-green-50 rounded-lg border border-green-200">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-700 font-medium">
                      Your payment information is encrypted and secure
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <CreditCard className="w-4 h-4" /> Card Number *
                    </Label>
                    <Input id="cardNumber" value={formData.cardNumber} onChange={(e) => handleInputChange("cardNumber", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Calendar className="w-4 h-4" /> Expiry Date *
                      </Label>
                      <Input
                        id="expiry"
                        value={formData.expiry}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, ""); // Only digits
                          if (value.length > 6) value = value.slice(0, 6); // Max 6 digits
                          if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
                          handleInputChange("expiry", value);
                        }}
                        placeholder="MM/YYYY"
                        className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Lock className="w-4 h-4" /> CVV *
                      </Label>
                      <Input id="cvv" value={formData.cvv} onChange={(e) => handleInputChange("cvv", e.target.value)} className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg" required maxLength={4} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                  <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                    <MessageSquare className="w-6 h-6" /> Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" checked={formData.terms} onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)} className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="terms" className="text-sm font-medium text-gray-700 cursor-pointer">
                        I agree to the terms and conditions *
                      </Label>
                      <p className="text-xs text-gray-500">
                        By checking this box, you agree to our terms of service and privacy policy.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comments" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <MessageSquare className="w-4 h-4" /> Comments
                    </Label>
                    <Textarea id="comments" value={formData.comments} onChange={(e) => handleInputChange("comments", e.target.value)} className="min-h-[100px] border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg resize-none" placeholder="Special requests or additional notes..." />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-6">
            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1} className="px-8 py-3 border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-xl w-full sm:w-auto">
              Previous
            </Button>
            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep} className="px-8 py-3 bg-[#174166] hover:bg-[#1e4a73] text-white rounded-xl font-semibold w-full sm:w-auto">
                Continue
              </Button>
            ) : (
              <Button type="submit" className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-[#174166] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto" onClick={() => router.push("/confirmation")}>
                Complete Booking
              </Button>
            )}
          </div>
        </form>
      </div>
      <div className="mt-6">
        <div className="flex justify-end items-center bg-white p-4 rounded-xl shadow-sm border fixed bottom-0 left-0 right-0 lg:right-auto z-50 lg:z-auto lg:rounded-none lg:border-none lg:bg-transparent gap-2">
          <Button
            variant="outline"
            className="border-gray-300 hover:border-gray-400"
            onClick={() => {
              console.log("Previous clicked");
              router.push("/activities");
            }}
          >
            ← Previous
          </Button>
          {currentStep < totalSteps ? (
            <Button type="button" onClick={nextStep} className="px-8 py-3 bg-[#174166] hover:bg-[#1e4a73] text-white rounded-xl font-semibold w-full sm:w-auto">
              Continue
            </Button>
          ) : (
            <Button type="submit" className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-[#174166] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto" onClick={() => router.push("/confirmation")}>
              Complete Booking
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}