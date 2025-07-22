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
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment, resetActivity, resetAddOns, resetRooms, setActivityQuantity } from "@/store/slices/counterSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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
    ],
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
    ],
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
    ],
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
    ],
  },
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

// utils/date.ts
export const getDateKey = (date: string) => {
  return new Date(date).toISOString().split("T")[0]; // e.g., "2025-07-24"
};


export default function ActivityBooking() {
  const quantities = useSelector((state: RootState) => state.counter.activityQuantities);
  const dispatch = useAppDispatch();
  const { roomPrice, addOnPrice, activityPrice, totalPrice } = useAppSelector((state) => state.counter);
  const router = useRouter();
  // const [quantities, setQuantities] = useState<
  //   Record<string, Record<string, Record<string, Record<string, number>>>>
  // >({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  // const handleQuantity = (
  //   category: string,
  //   activity: string,
  //   date: string,
  //   timeSlot: string,
  //   delta: number
  // ) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [category]: {
  //       ...prev[category],
  //       [activity]: {
  //         ...prev[category]?.[activity],
  //         [date]: {
  //           ...prev[category]?.[activity]?.[date],
  //           [timeSlot]:
  //             Math.max(0, (prev[category]?.[activity]?.[date]?.[timeSlot] || 0) + delta),
  //         },
  //       },
  //     },
  //   }));
  // };


  const handleQuantity = (
    category: string,
    activityTitle: string,
    date: string,
    timeSlot: string,
    delta: number
  ) => {
    const dateKey = getDateKey(date);

    const activity = activityData[category as keyof typeof activityData]?.activities.find(
      (a) => a.title === activityTitle
    );
    const price = activity?.price || 0;

    // const currentQty =
    //   quantities?.[category]?.[activityTitle]?.[dateKey]?.[timeSlot] || 0;

    if (delta > 0) {
      dispatch(increment({ activityPrice: price }));
    } else if (delta < 0) {
      dispatch(decrement({ activityPrice: price }));
    }

    dispatch(
      setActivityQuantity({
        category,
        title: activityTitle,
        date: dateKey,
        timeSlot,
        delta, // only pass delta, reducer handles addition
      })
    );
  };

  const toggleFavorite = (activityKey: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(activityKey)) {
        newFavorites.delete(activityKey);
      } else {
        newFavorites.add(activityKey);
      }
      return newFavorites;
    });
  };

  // const getTotalBookings = () => {
  //   let total = 0;
  //   Object.values(quantities).forEach((category) => {
  //     Object.values(category).forEach((activity) => {
  //       Object.values(activity).forEach((date) => {
  //         Object.values(date).forEach((qty) => {
  //           total += qty;
  //         });
  //       });
  //     });
  //   });
  //   return total;
  // };

  // const getTotalCost = () => {
  //   let total = 0;
  //   Object.entries(quantities).forEach(([category, categoryData]) => {
  //     Object.entries(categoryData).forEach(([activityTitle, activityBookingData]) => {
  //       const activity = activityData[category as keyof typeof activityData]?.activities.find(
  //         (act) => act.title === activityTitle
  //       );
  //       const price = activity?.price || 0;
  //       Object.values(activityBookingData).forEach((dateData) => {
  //         Object.values(dateData).forEach((qty) => {
  //           total += qty * price;
  //         });
  //       });
  //     });
  //   });
  //   return total;
  // };

  const renderActivityTable = (category: string, activity: Activity) => {
    const activityKey = `${category}-${activity.title}`;

    return (
      <div className="mt-6 overflow-x-auto">
        {/* Activity Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4 p-4 bg-gray-50 rounded-xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr_1fr] gap-4 mb-4">
          <div></div>
          {dates.map((date) => (
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
            <div
              key={timeSlot}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr_1fr] gap-4 items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{timeSlot}</span>
              </div>

              {dates.map((date) => {
                const dateKey = getDateKey(date.value); // format: "yyyy-MM-dd"

                const currentQty =
                  quantities[category]?.[activity.title]?.[dateKey]?.[timeSlot] || 0;


                return (
                  <div key={date.value} className="flex items-center justify-center gap-2 flex-col lg:flex-row lg:flex-wrap">
                    <div className="flex items-center gap-2">
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
                    </div>

                    {currentQty > 0 && (
                      <div className="text-xs text-green-600 font-medium lg:ml-2 lg:mt-0 mt-1">
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
      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Activities */}
        <div className="flex-1">
          <Accordion type="multiple" className="space-y-6">
            {Object.entries(activityData).map(([categoryName, categoryData]) => {
              const CategoryIcon = categoryData.icon;

              return (
                <div key={categoryName} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <AccordionItem value={categoryName} className="border-none">
                    <AccordionTrigger className={`${categoryData.bgColor} hover:shadow-md transition-all duration-200 px-6 py-6 hover:no-underline`}>
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
                      <Accordion type="multiple" className="space-y-4">
                        {categoryData.activities
                          .filter(
                            (activity) =>
                              searchTerm === "" ||
                              activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              activity.description.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                          .map((activity) => (
                            <AccordionItem
                              key={activity.title}
                              value={activity.title}
                              className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                              <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:no-underline">
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

          {/* Pagination Buttons */}
          <div className="mt-6">
            <div className="flex justify-end items-center bg-white p-4 rounded-xl shadow-sm border fixed bottom-0 left-0 md:right-0 lg:right-auto z-50 lg:z-auto lg:rounded-none lg:border-none lg:bg-transparent gap-2">
              <Button
                variant="outline"
                className="border-gray-300 hover:border-gray-400"
                onClick={() => {
                  console.log("Previous clicked");
                  router.push("/addons");
                }}
              >
                ← Previous
              </Button>
              <Button
                className="bg-[#174166] hover:bg-[#1e4a73]"
                onClick={() => {
                  console.log("Next clicked");
                  router.push("/guest");
                }}
              >
                Next →
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Summary */}
        {/* {getTotalBookings() > 0 && ( */}
        <div className="w-full lg:w-[300px] flex-shrink-0">
          <div className="sticky top-20 lg:top-[40%] xl:top-[38%]">
            <div className="bg-white rounded-xl xl:rounded-2xl shadow p-3 xl:p-4 border-t-4 border-yellow-400">
              <div className="flex flex-col gap-1 xl:gap-2 mb-1 xl:mb-2">
                <div className="flex items-center gap-2 xl:gap-3">
                  <div className="w-7 h-7 xl:w-8 xl:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#174166]" />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-medium xl:font-semibold text-gray-900 leading-none">
                      Cart Summary
                    </h3>
                  </div>
                </div>

                {roomPrice > 0 && (
                  <div className="text-left">
                    <div className="text-base xl:text-lg font-semibold text-[#174166]">
                      ${roomPrice.toFixed(2)}
                    </div>
                    <div className="text-xs xl:text-sm text-gray-500">Room cost</div>
                  </div>
                )}

                {addOnPrice > 0 && (
                  <div className="text-left">
                    <div className="text-base xl:text-lg font-semibold text-[#174166]">
                      ${addOnPrice.toFixed(2)}
                    </div>
                    <div className="text-xs xl:text-sm text-gray-500">Total add-ons cost</div>
                  </div>
                )}

                {activityPrice > 0 && (
                  <div className="text-left">
                    <div className="text-base xl:text-lg font-semibold text-[#174166]">
                      ${activityPrice.toFixed(2)}
                    </div>
                    <div className="text-xs xl:text-sm text-gray-500">Total activity cost</div>
                  </div>
                )}

                <div className="text-left">
                  <div className="text-base xl:text-lg font-semibold text-[#174166]">
                    ${totalPrice.toFixed(2)}
                  </div>
                  <div className="text-xs xl:text-sm text-gray-500">Total cost</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {/* <Button
                    variant="outline"
                    className="border-gray-300 hover:border-gray-400 py-1 xl:py-2 text-xs xl:text-sm h-auto"
                    onClick={() => {
                      dispatch(resetActivity());
                    }}
                  >
                    Clear All activity
                </Button> */}
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 py-1 xl:py-2 text-xs xl:text-sm h-auto"
                  onClick={() => {
                    dispatch(resetAddOns());
                    dispatch(resetRooms());
                    dispatch(resetActivity());
                  }}
                >
                  Clear All
                </Button>
                <Button className="bg-[#174166] hover:bg-[#1e4a73] px-3 xl:px-4 py-1 xl:py-2 text-xs xl:text-sm h-auto" onClick={() => {router.push("/guest")}}>
                  Continue to guest form
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* )} */}
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
              className="border-white text-[#174166] hover:bg-white  px-8 py-3 rounded-xl"
            >
              View Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}