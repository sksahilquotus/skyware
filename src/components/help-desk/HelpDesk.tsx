"use client";

import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Phone,
    Mail,
    MessageCircle,
    Search,
    HelpCircle,
    Clock,
    Shield,
    Star,
    CheckCircle2,
    BookOpen,
    Users,
    CreditCard,
    Calendar,
    Gift,
    PawPrint,
    Headphones,
    Globe,
    ArrowLeft
} from "lucide-react";
import { useRouter } from 'next/navigation';

const faqData = [
    {
        id: "booking",
        question: "How do I make a booking?",
        answer: "Search for hotels using our intuitive search bar, select your preferred dates and room type, review the details, and proceed to our secure checkout to confirm your reservation. You'll receive instant confirmation via email.",
        icon: BookOpen,
        category: "Booking",
        popular: true
    },
    {
        id: "cancel",
        question: "Can I cancel or change my booking?",
        answer: "Yes! You can easily cancel or modify your booking through the 'My Bookings' section in your account. Cancellation policies vary by hotel, and we'll show you the terms before you confirm any changes.",
        icon: Calendar,
        category: "Booking"
    },
    {
        id: "payment",
        question: "What payment methods are accepted?",
        answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), UPI payments, net banking, digital wallets (PayPal, Apple Pay, Google Pay), and buy-now-pay-later options.",
        icon: CreditCard,
        category: "Payment",
        popular: true
    },
    {
        id: "refunds",
        question: "When will I receive my refund?",
        answer: "Refunds are typically processed within 5-7 business days after cancellation confirmation. The exact timing may vary depending on your bank or payment method. You'll receive email updates throughout the process.",
        icon: Shield,
        category: "Payment"
    },
    {
        id: "confirmation",
        question: "Where can I find my booking confirmation?",
        answer: "Your booking confirmation is sent immediately to your email after successful payment. You can also access it anytime in your account under 'My Bookings' or by using our booking lookup tool.",
        icon: CheckCircle2,
        category: "Booking"
    },
    {
        id: "special-requests",
        question: "Can I request early check-in or late check-out?",
        answer: "Absolutely! You can make special requests during booking or contact the hotel directly. Popular requests include early check-in, late check-out, room preferences, and accessibility needs. Approval depends on availability.",
        icon: Clock,
        category: "Hotel Services"
    },
    {
        id: "guest-limit",
        question: "Is there a guest limit per room?",
        answer: "Each room type has a specified maximum occupancy for safety and comfort. This information is clearly displayed during booking. Exceeding the limit may result in additional charges or require booking extra rooms.",
        icon: Users,
        category: "Hotel Services"
    },
    {
        id: "support",
        question: "How do I contact support for urgent help?",
        answer: "For immediate assistance, use our 24/7 live chat feature or call our dedicated support hotline. Our trained agents can help with booking issues, payment problems, or emergency travel situations.",
        icon: Headphones,
        category: "Support",
        popular: true
    },
    {
        id: "offers",
        question: "Do you offer any discounts or coupons?",
        answer: "Yes! We regularly offer seasonal promotions, member-exclusive discounts, early bird specials, and last-minute deals. Subscribe to our newsletter and follow us on social media for the latest offers.",
        icon: Gift,
        category: "Offers"
    },
    {
        id: "pets",
        question: "Are pets allowed in hotels?",
        answer: "Pet policies vary by hotel. Look for the 'Pet-Friendly' badge on hotel listings or use our pet-friendly filter during search. Some hotels may charge additional fees for pets.",
        icon: PawPrint,
        category: "Hotel Services"
    }
];

const categories = ["All", "Booking", "Payment", "Hotel Services", "Support", "Offers"];

export default function HelpPage() {
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");


    const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const popularFAQs = faqData.filter(faq => faq.popular);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="relative">
                <Button
                    onClick={() => router.back()}
                    variant="outline"
                    className="absolute top-4 left-4 z-50 hidden sm:flex items-center bg-white/70 backdrop-blur-md text-[#174166] hover:bg-yellow-400 hover:text-white border border-gray-300 shadow-md rounded-full px-4 py-2"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>
            </div>


            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#174166] via-[#1e4a73] to-[#174166] text-white py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full blur-lg"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <HelpCircle className="w-12 h-12 text-[#174166]" />
                    </div>
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Help Center
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                        Find answers to your questions, get booking assistance, and discover everything you need for a perfect stay
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-1" />
                        <Input
                            placeholder="Search for help topics, booking questions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400 rounded-xl text-lg"
                        />
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-200">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>Secure & Trusted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>Expert Assistance</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Popular Questions */}
                        {searchTerm === "" && selectedCategory === "All" && (
                            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 border-b">
                                    <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                                        <Star className="w-6 h-6 text-yellow-500" />
                                        Popular Questions
                                    </CardTitle>
                                    <p className="text-gray-600">Most frequently asked questions by our guests</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {popularFAQs.map((faq) => {
                                            const IconComponent = faq.icon;
                                            return (
                                                <div
                                                    key={faq.id}
                                                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-200 hover:border-yellow-400"
                                                    onClick={() => {
                                                        const element = document.getElementById(`faq-${faq.id}`);
                                                        element?.scrollIntoView({ behavior: 'smooth' });
                                                    }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <IconComponent className="w-5 h-5 text-yellow-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900 mb-1">{faq.question}</h3>
                                                            <p className="text-sm text-gray-600 line-clamp-2">{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Category Filter */}
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                                <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                                    <BookOpen className="w-6 h-6" />
                                    Browse by Category
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {categories.map((category) => (
                                        <Button
                                            key={category}
                                            variant={selectedCategory === category ? "default" : "outline"}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`rounded-full transition-all duration-200 ${selectedCategory === category
                                                ? "bg-[#174166] hover:bg-[#1e4a73] text-white"
                                                : "border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                                                }`}
                                        >
                                            {category}
                                            {category !== "All" && (
                                                <Badge variant="secondary" className="ml-2 text-xs">
                                                    {faqData.filter(faq => faq.category === category).length}
                                                </Badge>
                                            )}
                                        </Button>
                                    ))}
                                </div>

                                {/* FAQ Accordion */}
                                <div className="space-y-4">
                                    {filteredFAQs.length > 0 ? (
                                        <Accordion type="multiple" className="space-y-4">
                                            {filteredFAQs.map((faq) => {
                                                const IconComponent = faq.icon;
                                                return (
                                                    <AccordionItem
                                                        key={faq.id}
                                                        value={faq.id}
                                                        id={`faq-${faq.id}`}
                                                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
                                                    >
                                                        <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 transition-all duration-200">
                                                            <div className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-4 text-left">
                                                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                        <IconComponent className="w-5 h-5 text-[#174166]" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                                                                            {faq.popular && (
                                                                                <Badge className="bg-yellow-400 text-[#174166] hover:bg-yellow-500 text-xs">
                                                                                    Popular
                                                                                </Badge>
                                                                            )}
                                                                        </div>
                                                                        <p className="text-sm text-gray-500">{faq.category}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-6 pb-6 bg-gray-50">
                                                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                );
                                            })}
                                        </Accordion>
                                    ) : (
                                        <div className="text-center py-12">
                                            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                                            <p className="text-gray-600 mb-4">
                                                Try adjusting your search terms or browse different categories
                                            </p>
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    setSearchTerm("");
                                                    setSelectedCategory("All");
                                                }}
                                                className="border-gray-300 hover:border-[#174166] hover:text-[#174166]"
                                            >
                                                Clear Filters
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Support */}
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b">
                                <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                                    <Headphones className="w-6 h-6" />
                                    Contact Support
                                </CardTitle>
                                <p className="text-gray-600">Get personalized help from our team</p>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                                            <Phone className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Call Us</h3>
                                            <p className="text-sm text-gray-600">Immediate assistance</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-[#174166]">+91 98765 43210</p>
                                    <p className="text-xs text-gray-500">Available 24/7</p>
                                </div>

                                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                                            <Mail className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email Support</h3>
                                            <p className="text-sm text-gray-600">Detailed assistance</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-[#174166]">support@hotelbooking.com</p>
                                    <p className="text-xs text-gray-500">Response within 2 hours</p>
                                </div>

                                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                                            <MessageCircle className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Live Chat</h3>
                                            <p className="text-sm text-gray-600">Instant messaging</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <p className="text-sm font-medium text-green-600">Online now</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        {/* <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                                <CardTitle className="flex items-center gap-3 text-xl text-[#174166]">
                                    <Zap className="w-6 h-6" />
                                    Quick Actions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-3">
                                {[
                                    { icon: BookOpen, text: "View My Bookings", href: "/" },
                                    { icon: Calendar, text: "Modify Reservation", href: "/" },
                                    { icon: CreditCard, text: "Payment Issues", href: "/" },
                                    { icon: Home, text: "Hotel Policies", href: "/" },
                                    { icon: Gift, text: "Current Offers", href: "/" }
                                ].map((link, index) => {
                                    const IconComponent = link.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#174166] hover:shadow-md transition-all duration-200 group"
                                        >
                                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#174166] group-hover:text-white transition-all duration-200">
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#174166] transition-colors duration-200">
                                                {link.text}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#174166] transition-colors duration-200" />
                                        </a>
                                    );
                                })}
                            </CardContent>
                        </Card> */}

                        {/* Status Card */}
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">All Systems Operational</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Our booking platform is running smoothly
                                </p>
                                <div className="flex items-center justify-center gap-2 text-xs text-green-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Last updated: Just now</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#174166] text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Our support team is here to assist you with any questions or concerns
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-yellow-400 hover:bg-yellow-500 text-[#174166] font-semibold px-8 py-3 rounded-xl"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Start Live Chat
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-[#174166] hover:bg-white px-8 py-3 rounded-xl"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Support
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}