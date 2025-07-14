"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Star,
  Heart,
  Plus,
  Minus,
  ShoppingCart,
  Sparkles,
  Waves,
  Zap,
  Flower2,
  Fish,
  Search,
  Filter,
  ChevronDown
} from "lucide-react";

const timeSlots = [
  "10:30 AM - 11:30 AM",
  "11:30 AM - 12:30 PM",
  "12:30 PM - 01:30 PM",
  "01:30 PM - 02:30 PM",
  "02:30 PM - 03:30 PM",
  "03:30 PM - 04:30 PM",
  "04:30 PM - 05:30 PM",
  "05:30 PM - 06:30 PM",
  "06:30 PM - 07:30 PM",
  "07:30 PM - 08:30 PM",
];

const dates = [
  { label: "Tue 23", value: "2025-07-23", fullDate: "July 23, 2025" },
  { label: "Wed 24", value: "2025-07-24", fullDate: "July 24, 2025" },
];

const activityData = {
  "Wellness & Spa": {
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 border-purple-200",
    activities: [
      {
        title: "Mud Bath on Half",
        price: 50,
        duration: "60 min",
        description: "Rejuvenating mud therapy for skin detox and relaxation",
        rating: 4.8,
        popular: true,
        icon: Waves,
      },
      {
        title: "Women's Hot Bath",
        price: 40,
        duration: "45 min",
        description: "Relaxing hot spring experience in private setting",
        rating: 4.6,
        icon: Sparkles,
      },
      {
        title: "Men's Hot Bath",
        price: 40,
        duration: "45 min",
        description: "Therapeutic hot spring session for ultimate relaxation",
        rating: 4.5,
        icon: Sparkles,
      },
    ]
  },
  "Massage Therapy": {
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 border-blue-200",
    activities: [
      {
        title: "Swedish Massage",
        price: 85,
        duration: "50 min",
        description: "Classic relaxation massage with gentle, flowing strokes",
        rating: 4.9,
        popular: true,
        icon: Zap,
      },
      {
        title: "Swedish Massage Extended",
        price: 120,
        duration: "80 min",
        description: "Extended Swedish massage for deeper relaxation",
        rating: 4.8,
        popular: false,
        icon: Zap,
      },
      {
        title: "Hot Stone Massage",
        price: 105,
        duration: "50 min",
        description: "Therapeutic massage using heated volcanic stones",
        rating: 4.7,
        popular: false,
        icon: Sparkles,
      },
      {
        title: "Hot Stone Extended",
        price: 155,
        duration: "80 min",
        description: "Extended hot stone therapy for ultimate relaxation",
        rating: 4.8,
        popular: false,
        icon: Sparkles,
      },
      {
        title: "Therapeutic Massage",
        price: 120,
        duration: "50 min",
        description: "Deep tissue massage for muscle tension relief",
        rating: 4.6,
        popular: false,
        icon: Zap,
      },
      {
        title: "Therapeutic Extended",
        price: 170,
        duration: "80 min",
        description: "Extended therapeutic session for chronic pain relief",
        rating: 4.7,
        popular: false,
        icon: Zap,
      },
    ]
  },
  "Facial Treatments": {
    icon: Flower2,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 border-green-200",
    activities: [
      {
        title: "Glow Facial",
        price: 130,
        duration: "75 min",
        description: "Brightening facial for radiant, glowing skin",
        rating: 4.9,
        popular: true,
        icon: Flower2,
      },
      {
        title: "Refresh Facial",
        price: 100,
        duration: "60 min",
        description: "Hydrating facial treatment for all skin types",
        rating: 4.5,
        icon: Flower2,
        popular: false,
      },
    ]
  },
  "Adventure Activities": {
    icon: Fish,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 border-orange-200",
    activities: [
      {
        title: "Half Day Fishing",
        price: 250,
        duration: "4 hours",
        description: "Guided fishing experience with equipment included",
        rating: 4.4,
        icon: Fish,
        popular: false,
      },
    ]
  }
};

type Activity = {
  title: string;
  price: number;
  duration: string;
  description: string;
  rating: number;
  icon: React.ElementType;
  popular?: boolean;
};


export default function ActivityBooking() {
  const [quantities, setQuantities] = useState<
    Record<string, Record<string, Record<string, Record<string, number>>>>
  >({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const handleQuantity = (category: string, activity: string, date: string, timeSlot: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [activity]: {
          ...prev[category]?.[activity],
          [date]: {
            ...prev[category]?.[activity]?.[date],
            [timeSlot]: Math.max(0, (prev[category]?.[activity]?.[date]?.[timeSlot] || 0) + delta)
          }
        }
      }
    }));
  };

  const toggleFavorite = (activityKey: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(activityKey)) {
        newFavorites.delete(activityKey);
      } else {
        newFavorites.add(activityKey);
      }
      return newFavorites;
    });
  };

  const getTotalBookings = () => {
    let total = 0;
    Object.values(quantities).forEach(categoryData => {
      Object.values(categoryData).forEach(activityData => {
        Object.values(activityData).forEach(dateData => {
          Object.values(dateData).forEach(qty => {
            total += qty;
          });
        });
      });
    });
    return total;
  };

  const getTotalCost = () => {
    let total = 0;
    Object.entries(quantities).forEach(([category, categoryData]) => {
      Object.entries(categoryData).forEach(([activityTitle, activityBookingData]) => {
        const activity = activityData[category as keyof typeof activityData]?.activities.find(act => act.title === activityTitle);
        const price = activity?.price || 0;
        Object.values(activityBookingData).forEach(dateData => {
          Object.values(dateData).forEach(qty => {
            total += qty * price;
          });
        });
      });
    });
    return total;
  };


  const renderActivityTable = (category: string, activity: Activity) => {
    const activityKey = `${category}-${activity.title}`;

    return (
      <div className="mt-6">
        {/* Activity Header */}
        <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <activity.icon className="w-5 h-5 text-[#174166]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold text-gray-900">{activity.title}</h4>
                {activity.popular && (
                  <Badge className="bg-yellow-400 text-[#174166] hover:bg-yellow-500 text-xs">
                    Popular
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{activity.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{activity.duration}</span>
                </div>
                <div className="text-lg font-bold text-[#174166]">
                  ${activity.price}
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleFavorite(activityKey)}
            className="text-gray-400 hover:text-red-500"
          >
            <Heart className={`w-5 h-5 ${favorites.has(activityKey) ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>

        {/* Date Headers */}
        <div className="grid grid-cols-[200px_1fr_1fr] gap-4 mb-4">
          <div></div>
          {dates.map(date => (
            <div key={date.value} className="text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                <div className="text-sm font-semibold text-[#174166]">{date.label}</div>
                <div className="text-xs text-gray-500">{date.fullDate}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="space-y-2">
          {timeSlots.map((timeSlot) => (
            <div key={timeSlot} className="grid grid-cols-[200px_1fr_1fr] gap-4 items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{timeSlot}</span>
              </div>

              {dates.map(date => {
                const currentQty = quantities[category]?.[activity.title]?.[date.value]?.[timeSlot] || 0;

                return (
                  <div key={date.value} className="flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-[#174166] hover:text-white"
                      onClick={() => handleQuantity(category, activity.title, date.value, timeSlot, -1)}
                      disabled={currentQty === 0}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>

                    <div className="w-12 text-center">
                      <span className="text-sm font-semibold text-gray-900">{currentQty}</span>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-[#174166] hover:text-white"
                      onClick={() => handleQuantity(category, activity.title, date.value, timeSlot, 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>

                    {currentQty > 0 && (
                      <div className="ml-2 text-xs text-green-600 font-medium">
                        ${(currentQty * activity.price).toFixed(2)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#174166] mb-3">
              Book Your Perfect Activities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover amazing experiences and wellness treatments. Select your preferred time slots for each day of your stay.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 rounded-2xl p-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-200 focus:border-[#174166] rounded-xl h-12"
              />
            </div>
            <Button
              variant="outline"
              className="border-gray-300 hover:border-[#174166] hover:text-[#174166] rounded-xl px-6 h-12"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Accordion type="multiple" className="space-y-6" defaultValue={Object.keys(activityData)}>
          {Object.entries(activityData).map(([categoryName, categoryData]) => {
            const CategoryIcon = categoryData.icon;

            return (
              <div key={categoryName} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionItem value={categoryName} className="border-none">
                  <AccordionTrigger className={`${categoryData.bgColor} hover:shadow-md transition-all duration-200 px-6 py-6`}>
                    <div className="flex items-center gap-4 w-full justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${categoryData.color} rounded-xl flex items-center justify-center shadow-md`}>
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h2 className="text-xl font-bold text-gray-900">{categoryName}</h2>
                          <p className="text-sm text-gray-600">
                            {categoryData.activities.length} experience{categoryData.activities.length > 1 ? 's' : ''} available
                          </p>
                        </div>
                      </div>

                    </div>
                  </AccordionTrigger>


                  <AccordionContent className="px-6 pb-6">
                    <Accordion type="multiple" className="space-y-4" defaultValue={categoryData.activities.map(act => act.title)}>
                      {categoryData.activities
                        .filter(activity =>
                          searchTerm === "" ||
                          activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          activity.description.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((activity) => (
                          <AccordionItem key={activity.title} value={activity.title} className="border border-gray-200 rounded-xl overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                              <div className="flex items-center justify-between w-full mr-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <activity.icon className="w-4 h-4 text-[#174166]" />
                                  </div>
                                  <div className="text-left">
                                    <div className="flex items-center gap-2">
                                      <span className="font-semibold text-gray-900">{activity.title}</span>
                                      {activity.popular && (
                                        <Badge className="bg-yellow-400 text-[#174166] hover:bg-yellow-500 text-xs">
                                          Popular
                                        </Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                      <span>{activity.duration}</span>
                                      <span>•</span>
                                      <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span>{activity.rating}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <div className="text-lg font-bold text-[#174166]">${activity.price}</div>
                                  <div className="transition-transform duration-300 data-[state=open]:rotate-180">
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                  </div>
                                </div>
                              </div>
                            </AccordionTrigger>


                            <AccordionContent className="p-4">
                              {renderActivityTable(categoryName, activity)}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>

        {/* Booking Summary */}
        {getTotalBookings() > 0 && (
          <Card className="mt-8 border-t-4 border-yellow-400 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-[#174166]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Booking Summary</h3>
                    <p className="text-sm text-gray-600">{getTotalBookings()} booking{getTotalBookings() > 1 ? 's' : ''} selected</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#174166]">
                    ${getTotalCost().toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500">Total cost</div>
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400"
                  onClick={() => setQuantities({})}
                >
                  Clear All
                </Button>
                <Button className="bg-[#174166] hover:bg-[#1e4a73] px-8">
                  Continue to Guest Info
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#174166] text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Planning Your Activities?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our concierge team can help you create the perfect itinerary for your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#174166] font-semibold px-8 py-3 rounded-xl"
            >
              Contact Concierge
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#174166] px-8 py-3 rounded-xl"
            >
              View Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}