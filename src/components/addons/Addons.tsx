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
  LucideIcon
} from "lucide-react";

// Types
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

const dates = [
  { label: "Tue 23", value: "2025-07-23", fullDate: "July 23, 2025" },
  { label: "Wed 24", value: "2025-07-24", fullDate: "July 24, 2025" },
];

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
  const [quantities, setQuantities] = useState<Record<string, Record<string, number>>>({});
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
    setQuantities((prev) => ({
      ...prev,
      [itemTitle]: {
        ...prev[itemTitle],
        [date]: Math.max(0, (prev[itemTitle]?.[date] || 0) + delta),
      },
    }));
  };

  const getTotalItems = () => {
    let total = 0;
    Object.values(quantities).forEach(dateQuantities => {
      Object.values(dateQuantities).forEach(qty => {
        total += qty;
      });
    });
    return total;
  };

  const getTotalPrice = () => {
    let total = 0;
    addOnData.forEach(category => {
      category.items.forEach(item => {
        const itemQuantities = quantities[item.title] || {};
        Object.values(itemQuantities).forEach(qty => {
          total += qty * item.price;
        });
      });
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#174166] mb-3">
              Enhance Your Stay
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Add special touches to make your experience unforgettable. Select add-ons for each day of your stay.
            </p>
          </div>

         
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#174166]" />
              <span className="text-sm font-medium text-gray-600">Select dates for your add-ons</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
              <div className="hidden md:block"></div>
              {dates.map((date) => (
                <div key={date.value} className="text-center">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="text-lg font-semibold text-[#174166]">{date.label}</div>
                    <div className="text-sm text-gray-500">{date.fullDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {addOnData.map((category) => {
            const CategoryIcon = category.icon;
            const isOpen = openCategories[category.name];

            return (
              <div key={category.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Category Header */}
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
                          {category.items.length} item{category.items.length > 1 ? 's' : ''} available
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">
                        {isOpen ? 'Hide' : 'Show'} options
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

                {/* Category Items */}
                {isOpen && (
                  <div className="p-6 space-y-4">
                    {category.items.map((item) => {
                      const ItemIcon = item.icon;
                      const hasQuantity = Object.values(quantities[item.title] || {}).some(qty => qty > 0);

                      return (
                        <Card
                          key={item.title}
                          className={`transition-all duration-200 hover:shadow-md border-2 ${hasQuantity ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          <CardContent className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6 items-center">
                              {/* Item Info */}
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  {ItemIcon && (
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <ItemIcon className="w-5 h-5 text-[#174166]" />
                                    </div>
                                  )}
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                      {item.popular && (
                                        <Badge className="bg-yellow-400 text-[#174166] hover:bg-yellow-500 text-xs">
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

                              {/* Quantity Controls */}
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
                                        onClick={() => handleQuantity(item.title, date.value, -1)}
                                        disabled={currentQty === 0}
                                      >
                                        <Minus className="w-3 h-3" />
                                      </Button>

                                      <div className="w-12 text-center">
                                        <span className="text-lg font-semibold text-gray-900">
                                          {currentQty}
                                        </span>
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
        </div>

        {/* Summary Section */}
        {getTotalItems() > 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border-t-4 border-yellow-400">
            {/* Wrapper: stack on mobile, flex-row on medium+ */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              {/* Left Section */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-[#174166]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Add-Ons Summary</h3>
                  <p className="text-sm text-gray-600">
                    {getTotalItems()} item{getTotalItems() > 1 ? 's' : ''} selected
                  </p>
                </div>
              </div>

              {/* Right Section: aligns right on md+, centers on mobile */}
              <div className="text-left md:text-right">
                <div className="text-2xl font-bold text-[#174166]">
                  ${getTotalPrice().toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">Total add-ons cost</div>
              </div>
            </div>

            {/* Buttons Section: stack on mobile, row on larger */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button
                variant="outline"
                className="border-gray-300 hover:border-gray-400 w-full sm:w-auto"
                onClick={() => setQuantities({})}
              >
                Clear All
              </Button>
              <Button className="bg-[#174166] hover:bg-[#1e4a73] px-8 w-full sm:w-auto">
                Continue to Activities
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}