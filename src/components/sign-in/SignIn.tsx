"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Shield,
    Star,
    CheckCircle2,
    ArrowRight,
    UserPlus,
    LogIn
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#174166] to-[#1e4a73] text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-[#174166]" />
          </div> */}
                    {/* Logo */}
                    <div className="flex flex-col items-center justify-center mb-6">
                        <img
                            src="https://skywaresystems.net/HotelImages/Skyware/SkywareLogo2.png"
                            alt="Skyware Hospitality Solutions"
                            className="w-[40%] h-auto drop-shadow-md"
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
                    <p className="text-xl text-blue-100">
                        Sign in to your account or create a new one to get started
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Existing Customers - Sign In */}
                    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                            <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                                <LogIn className="w-6 h-6" />
                                Existing Customers
                            </CardTitle>
                            <p className="text-gray-600">Welcome back! Please sign in to your account</p>
                        </CardHeader>
                        <CardContent className="p-8">
                            <form onSubmit={handleSignIn} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Password *
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="h-12 border-gray-300 focus:border-[#174166] focus:ring-[#174166] rounded-lg pr-12"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="remember"
                                            checked={rememberMe}
                                            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                        />
                                        <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-[#174166] hover:text-[#1e4a73] font-medium">
                                        Forgot Password?
                                    </a>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-[#174166] hover:bg-[#1e4a73] text-white rounded-lg font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <LogIn className="w-5 h-5" />
                                            Sign In
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
                                        className="h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-lg"
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
                                        className="h-12 border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-lg"
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

                    {/* New Customers - Create Account */}
                    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b">
                            <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                                <UserPlus className="w-6 h-6" />
                                New Customers
                            </CardTitle>
                            <p className="text-gray-600">Join us today and enjoy exclusive benefits</p>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                {/* Benefits List */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Why create an account?</h3>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-700">Faster checkout process</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Star className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700">Exclusive member discounts</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                                <Shield className="w-4 h-4 text-purple-600" />
                                            </div>
                                            <span className="text-gray-700">Secure booking history</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                                <Mail className="w-4 h-4 text-orange-600" />
                                            </div>
                                            <span className="text-gray-700">Special offers & updates</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Special Offer */}
                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-[#174166]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Star className="w-6 h-6" />
                                        <span className="font-bold text-lg">Special Offer!</span>
                                    </div>
                                    <p className="text-sm font-medium">
                                        Get 10% off your first booking when you create an account today!
                                    </p>
                                </div>

                                {/* Create Account Button */}
                                <Button
                                    className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-[#174166] rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    onClick={() => router.push("/sign-up")}
                                >
                                    <UserPlus className="w-5 h-5" />
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </Button>

                                <p className="text-xs text-gray-500 text-center">
                                    By creating an account, you agree to our{" "}
                                    <a href="#" className="text-[#174166] hover:underline">Terms of Service</a>
                                    {" "}and{" "}
                                    <a href="#" className="text-[#174166] hover:underline">Privacy Policy</a>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Security Notice */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900">Secure & Protected</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <Lock className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">256-bit SSL Encryption</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">PCI DSS Compliant</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">Trusted by 50,000+ users</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}