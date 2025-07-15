"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  CheckCircle2,
  Lock,
  Globe,
  Home,
  MessageSquare,
  Calendar,
  Star
} from "lucide-react";

export default function CheckoutForm() {
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
    comments: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#174166] to-[#1e4a73] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-8 h-8 text-[#174166]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Complete Your Booking</h1>
          <p className="text-xl text-blue-100">
            Just a few more details to secure your reservation
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${step <= currentStep
                    ? 'bg-[#174166] text-white'
                    : 'bg-gray-200 text-gray-500'
                  }`}>
                  {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-4 rounded transition-all duration-200 ${step < currentStep ? 'bg-[#174166]' : 'bg-gray-200'
                    }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}: {
                currentStep === 1 ? "Personal Information" :
                  currentStep === 2 ? "Address & Contact" :
                    "Payment & Confirmation"
              }
            </p>
          </div>
        </div>

        <form className="space-y-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                  <User className="w-6 h-6" />
                  Personal Information
                </CardTitle>
                <p className="text-gray-600">Tell us about yourself</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                    placeholder="Enter your email address"
                    required
                  />
                  <p className="text-xs text-gray-500">We&rsquo;ll send your confirmation to this email</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Address Information */}
          {currentStep === 2 && (
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                  <MapPin className="w-6 h-6" />
                  Address Information
                </CardTitle>
                <p className="text-gray-600">Where should we send your confirmation?</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Country *
                  </Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-[#174166] rounded-lg">
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

                <div className="space-y-2">
                  <Label htmlFor="address1" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Address Line 1 *
                  </Label>
                  <Input
                    id="address1"
                    value={formData.address1}
                    onChange={(e) => handleInputChange('address1', e.target.value)}
                    className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                    placeholder="Street address, P.O. box"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address2" className="text-sm font-medium text-gray-700">
                    Address Line 2
                  </Label>
                  <Input
                    id="address2"
                    value={formData.address2}
                    onChange={(e) => handleInputChange('address2', e.target.value)}
                    className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                    placeholder="Apartment, suite, unit, building, floor, etc."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                      State / Province *
                    </Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-sm font-medium text-gray-700">
                      Zip / Postal Code *
                    </Label>
                    <Input
                      id="zip"
                      value={formData.zip}
                      onChange={(e) => handleInputChange('zip', e.target.value)}
                      className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                      placeholder="Zip code"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment Information */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b">
                  <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                    <CreditCard className="w-6 h-6" />
                    Payment Information
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
                    <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Credit Card Number *
                    </Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Expiry Date *
                      </Label>
                      <Input
                        id="expiry"
                        value={formData.expiry}
                        onChange={(e) => handleInputChange('expiry', e.target.value)}
                        className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                        placeholder="MM/YYYY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        CVV *
                      </Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                  <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                    <MessageSquare className="w-6 h-6" />
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                      className="mt-1"
                    />
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
                    <Label htmlFor="comments" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Special Requests or Comments
                    </Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => handleInputChange('comments', e.target.value)}
                      className="min-h-[100px] border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg resize-none"
                      placeholder="Any special requests, dietary requirements, or additional information..."
                    />
                    <p className="text-xs text-gray-500">
                      Optional: Let us know if you have any special requirements for your stay.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-8 py-3 border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-xl w-full sm:w-auto"
            >
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-[#174166] hover:bg-[#1e4a73] text-white rounded-xl font-semibold w-full sm:w-auto"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-[#174166] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
              >
                Complete Booking
              </Button>
            )}
          </div>

        </form>

        {/* Security Notice */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Secure Booking</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">SSL Encrypted</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Trusted by 10,000+ guests</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Instant confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}