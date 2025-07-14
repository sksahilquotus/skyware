"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";

// Types
type AddOnItem = {
  title: string;
  description: string;
  price: number;
};

type AddOnCategory = {
  name: string;
  items: AddOnItem[];
};

const dates = [
  { label: "Tue 23", value: "2025-07-23" },
  { label: "Wed 24", value: "2025-07-24" },
];

const addOnData: AddOnCategory[] = [
  {
    name: "Tickets and Services",
    items: [
      {
        title: "Tour Tickets - Adult",
        description: "Adult tour ticket",
        price: 20,
      },
    ],
  },
  {
    name: "Turndown Service",
    items: [
      {
        title: "Chamomile Tea Turndown",
        description:
          "Used as a sleep aid for centuries. Sip slowly and enjoy with a sweet cookie treat.",
        price: 10,
      },
      {
        title: "Champagne Cocktail Turndown",
        description:
          "Champagne Cocktail (Cointreau, bitters, sugar, and prosecco) with Dark Chocolate Truffles.",
        price: 0,
      },
      {
        title: "Kids Stuffed Animal Turndown",
        description: "Gund stuffed animals create the perfect turndown for your little one.",
        price: 15,
      },
    ],
  },
  {
    name: "Welcome Kits",
    items: [
      {
        title: "Kids Welcome Box",
        description:
          "Fun basket with crayons, coloring book, rubber ducky, and a plush stuffed animal.",
        price: 30,
      },
      {
        title: "Pet Welcome Box",
        description:
          "Homemade treats for your dog: peanut butter bones, muffins, and cheese biscuits.",
        price: 25,
      },
      {
        title: "Welcome Basket",
        description:
          "Includes champagne, chocolate, gourmet cookies and more.",
        price: 65,
      },
    ],
  },
];

export default function AddOns() {
  const [quantities, setQuantities] = useState<Record<string, Record<string, number>>>({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

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

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Customize Your Stay</h1>
      {/* Header Row */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 text-muted-foreground px-2">
        <div></div>
        {dates.map((d) => (
          <div key={d.value} className="text-sm text-center">
            {d.label}
          </div>
        ))}
      </div>
      {addOnData.map((category) => (
        <div key={category.name}>
          <div
            className="flex justify-between items-center cursor-pointer bg-gray-100 dark:bg-gray-800 p-4 rounded-md"
            onClick={() => toggleCategory(category.name)}
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            {openCategories[category.name] ? <ChevronUp /> : <ChevronDown />}
          </div>

          {openCategories[category.name] && (
            <div className="space-y-4 mt-4">
              {category.items.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 items-center">
                    {/* Left: Info */}
                    <div>
                      <h3 className="text-base font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <span className="text-sm font-semibold mt-1 block">
                        {item.price === 0 ? "Free" : `₹${item.price.toFixed(2)}`}
                      </span>
                    </div>

                    {/* Right: Quantity selectors per date */}
                    {dates.map((d) => (
                      <div key={d.value} className="flex justify-center items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleQuantity(item.title, d.value, -1)}
                        >
                          -
                        </Button>
                        <span className="w-6 text-center">
                          {quantities[item.title]?.[d.value] || 0}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleQuantity(item.title, d.value, 1)}
                        >
                          +
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          <Separator className="my-6" />
        </div>
      ))}
    </div>
  );
}
