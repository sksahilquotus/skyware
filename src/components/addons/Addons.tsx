"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ShoppingCart,
  Gift,
  Ticket,
  Coffee,
  Heart,
  Star,
  DollarSign,
  LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment, resetActivity, resetAddOns, resetRooms, setAddOnQuantity } from "@/store/slices/counterSlice";

export function getDayAndDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  const dateNum = date.getDate();

  return `${day} ${dateNum}`;
}

type AddOnItem = {
  title: string;
  description: string;
  price: number;
  icon?: LucideIcon;
  popular?: boolean;
  category?: string;
};

type AddOnCategory = {
  name: string;
  items: AddOnItem[];
  icon: LucideIcon;
  color: string;
};

const addOnData: AddOnCategory[] = [
  {
    name: "Tickets and Services",
    icon: Ticket,
    color: "bg-blue-50 border-blue-200",
    items: [
      {
        title: "Tour Tickets - Adult",
        description: "Adult tour ticket with guided experience and complimentary refreshments",
        price: 20,
        icon: Ticket,
      },
    ],
  },
  {
    name: "Turndown Service",
    icon: Coffee,
    color: "bg-purple-50 border-purple-200",
    items: [
      {
        title: "Chamomile Tea Turndown",
        description: "Used as a sleep aid for centuries. Sip slowly and enjoy with a sweet cookie treat.",
        price: 10,
        icon: Coffee,
      },
      {
        title: "Champagne Cocktail Turndown",
        description: "Champagne Cocktail (Cointreau, bitters, sugar, and prosecco) with Dark Chocolate Truffles.",
        price: 0,
        icon: Star,
        popular: true,
      },
      {
        title: "Kids Stuffed Animal Turndown",
        description: "Gund stuffed animals create the perfect turndown for your little one.",
        price: 15,
        icon: Heart,
      },
    ],
  },
  {
    name: "Welcome Kits",
    icon: Gift,
    color: "bg-yellow-50 border-yellow-200",
    items: [
      {
        title: "Kids Welcome Box",
        description: "Fun basket with crayons, coloring book, rubber ducky, and a plush stuffed animal.",
        price: 30,
        icon: Heart,
        popular: true,
      },
      {
        title: "Pet Welcome Box",
        description: "Homemade treats for your dog: peanut butter bones, muffins, and cheese biscuits.",
        price: 25,
        icon: Heart,
      },
      {
        title: "Welcome Basket",
        description: "Includes champagne, chocolate, gourmet cookies and more.",
        price: 65,
        icon: Gift,
      },
    ],
  },
];

export default function AddOns() {
  const dispatch = useAppDispatch();
  const { roomPrice, addOnPrice, activityPrice, totalPrice, checkInDate, checkOutDate } = useAppSelector((state) => state.counter);
  const dates = [
    { label: getDayAndDate(checkInDate || ""), value: "2025-07-23", fullDate: checkInDate },
    { label: getDayAndDate(checkOutDate || ""), value: "2025-07-24", fullDate: checkOutDate },
  ];
  const router = useRouter();
  const quantities = useAppSelector((state) => state.counter.addOnQuantities);

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "Tickets and Services": true,
    "Turndown Service": true,
    "Welcome Kits": true,
  });

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleQuantity = (itemTitle: string, date: string, delta: number) => {
    const currentQty = quantities[itemTitle]?.[date] || 0;
    const newQty = Math.max(0, currentQty + delta);

    const itemPrice = addOnData
      .flatMap((category) => category.items)
      .find((item) => item.title === itemTitle)?.price || 0;

    const priceDelta = (newQty - currentQty) * itemPrice;

    dispatch(
      setAddOnQuantity({
        title: itemTitle,
        date,
        quantity: newQty,
        price: itemPrice,
      })
    );

    if (priceDelta > 0) {
      dispatch(increment({ addOnPrice: priceDelta }));
    } else if (priceDelta < 0) {
      dispatch(decrement({ addOnPrice: Math.abs(priceDelta) }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Add-ons Section */}
          <div className="flex-1">
            <div className="h-[calc(100vh-200px)] overflow-y-auto pr-4 scrollbar-hidden">
              {addOnData.map((category) => {
                const CategoryIcon = category.icon;
                const isOpen = openCategories[category.name];

                return (
                  <div key={category.name} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div
                      className={`${category.color} cursor-pointer transition-all duration-200 hover:shadow-md`}
                      onClick={() => toggleCategory(category.name)}
                    >
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <CategoryIcon className="w-6 h-6 text-[#174166]" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
                            <p className="text-sm text-gray-600">
                              {category.items.length} item{category.items.length > 1 ? "s" : ""} available
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">
                            {isOpen ? "Hide" : "Show"} options
                          </span>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 text-gray-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="p-6 space-y-4">
                        {category.items.map((item) => {
                          const ItemIcon = item.icon;
                          const hasQuantity = Object.values(quantities[item.title] || {}).some(
                            (qty) => qty > 0
                          );

                          return (
                            <Card
                              key={item.title}
                              className={`transition-all duration-200 hover:shadow-md border-2 ${hasQuantity
                                  ? "border-yellow-400 bg-yellow-50"
                                  : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                              <CardContent className="p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6 items-center">
                                  <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                      {ItemIcon && (
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                          <ItemIcon className="w-5 h-5 text-[#174166]" />
                                        </div>
                                      )}
                                      <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                                          {item.popular && (
                                            <Badge className="bg-yellow-400 text-[#174166] text-xs px-2 py-0.5 whitespace-nowrap">
                                              Popular
                                            </Badge>
                                          )}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-2 ml-13">
                                      <DollarSign className="w-4 h-4 text-green-600" />
                                      <span className="text-lg font-bold text-green-600">
                                        {item.price === 0 ? "Free" : `$${item.price.toFixed(2)}`}
                                      </span>
                                      {item.price > 0 && (
                                        <span className="text-sm text-gray-500">per item</span>
                                      )}
                                    </div>
                                  </div>

                                  {dates.map((date) => {
                                    const currentQty = quantities[item.title]?.[date.value] || 0;

                                    return (
                                      <div key={date.value} className="flex flex-col items-center gap-3">
                                        <div className="text-sm font-medium text-gray-700">{date.label}</div>
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-[#174166] hover:text-white transition-all duration-200"
                                            onClick={() => {
                                              handleQuantity(item.title, date.value, -1);
                                              console.log(`Decremented ${item.title} for ${date.value}`);
                                            }}
                                            disabled={currentQty === 0}
                                          >
                                            <Minus className="w-3 h-3" />
                                          </Button>

                                          <div className="w-12 text-center">
                                            <span className="text-lg font-semibold text-gray-900">{currentQty}</span>
                                          </div>

                                          <Button
                                            size="sm"
                                            variant="outline"
                                            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:border-[#174166] hover:bg-[#174166] hover:text-white transition-all duration-200"
                                            onClick={() => handleQuantity(item.title, date.value, 1)}
                                          >
                                            <Plus className="w-3 h-3" />
                                          </Button>
                                        </div>

                                        {currentQty > 0 && (
                                          <div className="text-xs text-green-600 font-medium">
                                            ${(currentQty * item.price).toFixed(2)}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* <div className="mt-6">
                <div className="flex justify-end items-center bg-white p-4 rounded-xl shadow-sm border fixed bottom-0 left-0 right-0 lg:right-auto z-50 lg:z-auto lg:rounded-none lg:border-none lg:bg-transparent gap-2">
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:border-gray-400"
                    onClick={() => {
                      console.log("Previous clicked");
                      router.push("/");
                    }}
                  >
                    ← Previous
                  </Button>
                  <Button
                    className="bg-[#174166] hover:bg-[#1e4a73]"
                    onClick={() => {
                      console.log("Next clicked");
                      router.push("/activities");
                    }}
                  >
                    Next →
                  </Button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right: Summary Sidebar */}
          <div className="w-full lg:w-[300px] flex-shrink-0">
            <div className="">
              <div className="bg-white rounded-xl shadow p-3 border-t-4 border-yellow-400">
                <div className="flex flex-col gap-1  mb-1">
                  <div className="flex items-center gap-2 ">
                    <div className="w-7 h-7  bg-yellow-400 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-3.5 h-3.5  text-[#174166]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 leading-none">
                        Cart Summary
                      </h3>
                    </div>
                  </div>

                  {roomPrice > 0 && (
                    <div className="text-left">
                      <div className="text-base font-semibold text-[#174166]">
                        ${roomPrice.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500">Room cost</div>
                    </div>
                  )}

                  {addOnPrice > 0 && (
                    <div className="text-left">
                      <div className="text-base font-semibold text-[#174166]">
                        ${addOnPrice.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500">Total add-ons cost</div>
                    </div>
                  )}

                  {activityPrice > 0 && (
                    <div className="text-left">
                      <div className="text-base font-semibold text-[#174166]">
                        ${activityPrice.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500">Total activity cost</div>
                    </div>
                  )}

                  <div className="text-left">
                    <div className="text-base font-semibold text-[#174166]">
                      ${totalPrice.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">Total cost</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:border-gray-400 py-1 text-xs h-auto"
                    onClick={() => {
                      console.log("Resetting add-ons");
                      dispatch(resetAddOns());
                    }}
                  >
                    Clear All Add-ons
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:border-gray-400 py-1  text-xs h-auto"
                    onClick={() => {
                      console.log("Resetting add-ons");
                      dispatch(resetAddOns());
                      dispatch(resetRooms());
                      dispatch(resetActivity());
                    }}
                  >
                    Clear All
                  </Button>
                  <Button
                    className="bg-[#174166] hover:bg-[#1e4a73] px-3 py-1 text-xs h-auto"
                    onClick={() => router.push("/activities")}
                  >
                    Continue to Activities
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-0.5">
              <div className="flex justify-end items-center  p-4 gap-2">
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400"
                  onClick={() => {
                    console.log("Previous clicked");
                    router.push("/");
                  }}
                >
                  ← Previous
                </Button>
                <Button
                  className="bg-[#174166] hover:bg-[#1e4a73]"
                  onClick={() => {
                    console.log("Next clicked");
                    router.push("/activities");
                  }}
                >
                  Next →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}