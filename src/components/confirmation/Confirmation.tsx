"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  Bed, 
  MapPin, 
  Phone, 
  Mail, 
  Download, 
  Share2,
  Star,
  Clock,
  Home,
  Plus
} from "lucide-react";

export default function ConfirmationPage() {
  const confirmationNumber = "2219C13972";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-[#174166] to-[#1e4a73] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#174166]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-blue-100 mb-6">
            Your reservation has been successfully processed
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-sm text-blue-100 mb-2">Confirmation Number</p>
            <div className="text-3xl font-bold text-yellow-400 tracking-wider">
              {confirmationNumber}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                  >
                    <Mail className="w-4 h-4" />
                    Email Copy
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reservation Details */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#174166] to-[#1e4a73] text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Reservation Details</h2>
                <p className="text-blue-100">Everything you need to know about your stay</p>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Guest Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#174166]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Guest Name</p>
                        <p className="font-semibold text-gray-900">SK ALI</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Check-in</p>
                        <p className="font-semibold text-gray-900">October 23, 2018</p>
                        <p className="text-xs text-gray-500">After 3:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Check-out</p>
                        <p className="font-semibold text-gray-900">October 24, 2018</p>
                        <p className="text-xs text-gray-500">Before 11:00 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Stay Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900">1 Night</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Guests</p>
                        <p className="font-semibold text-gray-900">1 Adult, 0 Children</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                        <Bed className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Room Type</p>
                        <p className="font-semibold text-gray-900">Non Smoking King</p>
                        <Badge className="bg-green-100 text-green-800 text-xs mt-1">
                          Premium Room
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Room Rate (1 night)</span>
                    <span className="font-semibold">$200.00</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-semibold">$22.00</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">Total Amount</span>
                      <span className="text-2xl font-bold text-[#174166]">$222.00</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      All taxes and fees included • No hidden charges
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Next */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What&rsquo;s Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-[#174166] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Check Your Email</h3>
                      <p className="text-sm text-gray-600">
                        A detailed confirmation email has been sent to your registered email address.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl">
                    <div className="w-8 h-8 bg-yellow-400 text-[#174166] rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Prepare for Check-in</h3>
                      <p className="text-sm text-gray-600">
                        Bring a valid ID and the credit card used for booking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enjoy Your Stay</h3>
                      <p className="text-sm text-gray-600">
                        Our team is ready to make your experience memorable.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hotel Information */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#174166] p-4">
                <h2 className="text-lg font-bold">Hotel Information</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">White Birch Inn</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-600 ml-1">4.0</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">
                        80 Haven Street<br />
                        Winter Haven, FL 33839<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-[#174166] font-medium">(203) 456-4567</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our customer support team is available 24/7 to assist you.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-[#174166] hover:bg-[#1e4a73] text-white h-12 text-base font-semibold rounded-xl"
                onClick={() => (window.location.href = "/")}
              >
                <Plus className="w-5 h-5 mr-2" />
                Make Another Reservation
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-gray-300 hover:border-[#174166] hover:text-[#174166] h-12 text-base font-semibold rounded-xl"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="bg-[#174166] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Thank You for Choosing Us!</h2>
          <p className="text-blue-100">
            We look forward to providing you with an exceptional experience.
          </p>
        </div>
      </div>
    </div>
  );
}