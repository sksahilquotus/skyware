"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    User,
    Phone,
    MapPin,
    Globe,
    Home,
    Shield,
    Star,
    CheckCircle2,
    ArrowRight,
    UserPlus,
    LogIn,
    Users,
    Gift,
    Clock,
    Heart
} from "lucide-react";

export default function SignInSignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSignInLoading, setIsSignInLoading] = useState(false);
    const [isSignUpLoading, setIsSignUpLoading] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSignInLoading(true);
        setTimeout(() => setIsSignInLoading(false), 2000);
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSignUpLoading(true);
        setTimeout(() => setIsSignUpLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#174166] via-[#1e4a73] to-[#174166] text-white py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full blur-lg"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    {/* Logo and Icon */}
                    <div className="flex flex-col items-center mb-8">
                        <img
                            src="https://skywaresystems.net/HotelImages/Skyware/SkywareLogo2.png" // <- save your logo to public/logo.png
                            alt="Skyware Hospitality Solutions"
                            className="w-[40%] h-auto mb-4 drop-shadow-md"
                        />
                        {/* <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                            <Users className="w-10 h-10 text-[#174166]" />
                        </div> */}
                    </div>

                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Join Our Community
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Sign in to your existing account or create a new one to unlock exclusive benefits and personalized experiences
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-200">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>Secure & Protected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>50K+ Happy Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Gift className="w-4 h-4" />
                            <span>Exclusive Rewards</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* Existing Customers - Sign In */}
                    <Card className="border-0 shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                        <CardHeader className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-b border-blue-100">
                            <CardTitle className="flex items-center gap-3 text-2xl text-[#174166]">
                                <div className="w-12 h-12 bg-[#174166] rounded-xl flex items-center justify-center">
                                    <LogIn className="w-6 h-6 text-white" />
                                </div>
                                Welcome Back
                            </CardTitle>
                            <p className="text-gray-600 leading-relaxed">Sign in to access your account and continue your journey with us</p>
                        </CardHeader>
                        <CardContent className="p-8 bg-gradient-to-b from-white to-gray-50">
                            <form onSubmit={handleSignIn} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-[#174166]" />
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-[#174166]" />
                                        Password *
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg pr-12 transition-all duration-200"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="remember" />
                                        <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-[#174166] hover:text-[#1e4a73] font-medium transition-colors duration-200">
                                        Forgot Password?
                                    </a>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSignInLoading}
                                    className="w-full h-12 bg-[#174166] hover:bg-[#1e4a73] text-white rounded-lg font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                >
                                    {isSignInLoading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <LogIn className="w-5 h-5" />
                                            Sign In to Account
                                        </>
                                    )}
                                </Button>

                                {/* Social Sign In */}
                                <div className="relative">
                                    <Separator className="my-6" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-white px-4 text-sm text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-lg transition-all duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        Google
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-lg transition-all duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Facebook
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* New Customers - Sign Up */}
                    <Card className="border-0 shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                        <CardHeader className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-b border-yellow-100">
                            <CardTitle className="flex items-center gap-3 text-2xl text-[#174166]">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                                    <UserPlus className="w-6 h-6 text-[#174166]" />
                                </div>
                                Create Account
                            </CardTitle>
                            <p className="text-gray-600 leading-relaxed">Join our community and unlock exclusive benefits and personalized experiences</p>

                            {/* Benefits Preview */}
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <span>Faster checkout</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    <span>Member discounts</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Shield className="w-4 h-4 text-blue-600" />
                                    <span>Secure history</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Gift className="w-4 h-4 text-purple-600" />
                                    <span>Special offers</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 bg-gradient-to-b from-white to-yellow-50">
                            <form onSubmit={handleSignUp} className="space-y-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <User className="w-5 h-5 text-[#174166]" />
                                        Personal Information
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">First Name *</label>
                                            <Input
                                                placeholder="Enter first name"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Last Name *</label>
                                            <Input
                                                placeholder="Enter last name"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-[#174166]" />
                                            Email Address *
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-[#174166]" />
                                            Phone Number *
                                        </label>
                                        <Input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Section */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <Lock className="w-5 h-5 text-[#174166]" />
                                        Security
                                    </h3>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Password *</label>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Create a strong password"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg pr-12 transition-all duration-200"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Confirm Password *</label>
                                        <div className="relative">
                                            <Input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm your password"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg pr-12 transition-all duration-200"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Address Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#174166]" />
                                        Address Information
                                    </h3>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-[#174166]" />
                                            Country *
                                        </label>
                                        <Select>
                                            <SelectTrigger className="h-11 border-gray-300 focus:border-[#174166] rounded-lg transition-all duration-200">
                                                <SelectValue placeholder="Select your country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="india">India</SelectItem>
                                                <SelectItem value="us">United States</SelectItem>
                                                <SelectItem value="uk">United Kingdom</SelectItem>
                                                <SelectItem value="canada">Canada</SelectItem>
                                                <SelectItem value="australia">Australia</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <Home className="w-4 h-4 text-[#174166]" />
                                            Address Line 1 *
                                        </label>
                                        <Input
                                            placeholder="Street address, P.O. box"
                                            className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Address Line 2</label>
                                        <Input
                                            placeholder="Apartment, suite, unit, building, floor, etc."
                                            className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">City *</label>
                                            <Input
                                                placeholder="City"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">State / Province *</label>
                                            <Input
                                                placeholder="State"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Zip / Postal Code *</label>
                                            <Input
                                                placeholder="Zip code"
                                                className="h-11 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Terms and Newsletter */}
                                <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-start space-x-3">
                                        <Checkbox
                                            id="terms"
                                            checked={agreeToTerms}
                                            onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                                            className="mt-1"
                                        />
                                        <div className="space-y-1">
                                            <label htmlFor="terms" className="text-sm font-medium text-gray-700 cursor-pointer">
                                                I agree to the Terms of Service and Privacy Policy *
                                            </label>
                                            <p className="text-xs text-gray-500">
                                                By checking this box, you agree to our terms and conditions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Checkbox
                                            id="newsletter"
                                            checked={newsletter}
                                            onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                                        />
                                        <div className="space-y-1">
                                            <label htmlFor="newsletter" className="text-sm font-medium text-gray-700 cursor-pointer flex items-center gap-2">
                                                <Heart className="w-4 h-4 text-red-500" />
                                                Subscribe to our newsletter
                                            </label>
                                            <p className="text-xs text-gray-500">
                                                Get exclusive offers, updates, and special deals delivered to your inbox.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSignUpLoading || !agreeToTerms}
                                    className="w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-[#174166] rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSignUpLoading ? (
                                        <div className="w-5 h-5 border-2 border-[#174166] border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <UserPlus className="w-5 h-5" />
                                            Create My Account
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-gray-500 text-center">
                                    Already have an account?{" "}
                                    <a href="#" className="text-[#174166] hover:underline font-medium">
                                        Sign in here
                                    </a>
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Thousands</h2>
                        <p className="text-gray-600">Join our growing community of satisfied customers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Secure & Safe</h3>
                            <p className="text-sm text-gray-600">256-bit SSL encryption protects your data</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">50K+ Members</h3>
                            <p className="text-sm text-gray-600">Join our thriving community</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                            <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">4.9/5 Rating</h3>
                            <p className="text-sm text-gray-600">Highly rated by our customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}