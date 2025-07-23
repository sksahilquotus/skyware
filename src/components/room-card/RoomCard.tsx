"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { deselectRoom, increment, selectRoom } from "@/store/slices/counterSlice";

type RoomCardProps = {
  title: string;
  images: string[];
  maxGuests: number;
  beds: number;
  price: number;
  total: number;
};

export const RoomCard = ({
  title,
  images,
  maxGuests,
  beds,
  price,
  total,
}: RoomCardProps) => {
  const [deselectDialogOpen, setDeselectDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const {addOnPrice, activityPrice, selectedRoomTitles } = useAppSelector((state) => state.counter);
  const router = useRouter();
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  // const [isSelected, setIsSelected] = useState(false);
  const isSelected = selectedRoomTitles.includes(title);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const amenities = [
    "Non-smoking",
    "Maid service",
    "Hairdryer",
    '43" HD TV',
    "Private bathroom",
    "Cable television",
    "Interior corridors",
    "Safe in Room",
    "Iron in Room",
    "Free Wifi",
    "Voice mail",
    "Alarm clock",
    "AM/FM radio",
    "Air conditioning",
    "All news channel",
    "Telephone",
    "Wake-up calls",
  ];

  return (
    <>
      <Card className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={images[currentIndex]}
              alt={`${title} image`}
              width={600}
              height={300}
              className="object-cover w-full h-[200px] sm:h-[250px] rounded-md cursor-pointer"
              onClick={() => setModalOpen(true)}
            />
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-center text-gray-500 mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-500 text-sm mb-1">
                Max Guests: {maxGuests} | Beds: {beds}
              </p>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                Luxurious guest room with modern amenities including Wi-Fi,
                sleeper sofa, marble bathroom, and more.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-1 text-sm text-gray-700 mb-2">
                {(showAllAmenities ? amenities : amenities.slice(0, 6)).map(
                  (item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  )
                )}
              </div>

              <Button
                variant="ghost"
                className="text-[#174166] p-0 h-auto text-sm"
                onClick={() => setShowAllAmenities(!showAllAmenities)}
              >
                {showAllAmenities ? "Show less" : "Show more"}
              </Button>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-gray-500 text-sm">Best Rate:</p>
                <p className="text-lg font-semibold">${price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                  Total: ${total.toFixed(2)}
                </p>
              </div>

              {!isSelected ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full sm:w-auto px-4 bg-[#174166]">
                      Select
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader>
                      <DialogTitle>Confirm Selection</DialogTitle>
                    </DialogHeader>

                    <div className="text-gray-700 mb-4 space-y-1">
                      <p>
                        Are you sure you want to select <strong>{title}</strong>?
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: <strong>${price.toFixed(2)}</strong>
                      </p>
                      <p className="text-sm text-gray-600">
                        Total: <strong>${total.toFixed(2)}</strong>
                      </p>
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          className="bg-[#174166]"
                          onClick={() => {
                            // setIsSelected(true);
                            router.push("/addons");
                            dispatch(
                              increment({
                                addOnPrice: addOnPrice,
                                activityPrice: activityPrice,
                              })
                            );
                            dispatch(selectRoom({ title, price: total }));
                          }}
                        >
                          Confirm
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>

                </Dialog>
              ) : (
                <Button className="w-full sm:w-auto px-4 bg-orange-400" onClick={() => {
                  // dispatch(
                  //   increment({
                  //     addOnPrice: addOnPrice,
                  //     activityPrice: activityPrice,
                  //   })
                  // );
                  setDeselectDialogOpen(true)
                 
                }}>
                  Selected · ${price.toFixed(2)}
                </Button>
              )}

            </div>
          </div>
        </div>
      </Card>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="w-full max-w-7xl p-0 bg-transparent border-none">
          <DialogHeader>
            <DialogTitle className="sr-only">Room Image Viewer</DialogTitle>
          </DialogHeader>

          <div className="relative w-full h-[90vh] bg-black rounded-xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt="Room image"
              fill
              className="object-contain w-full h-full"
              priority
            />

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-sm rounded-md shadow"
            >
              Close
            </button>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/60 px-2 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={deselectDialogOpen} onOpenChange={setDeselectDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Deselect Room</DialogTitle>
          </DialogHeader>

          <div className="text-gray-700 mb-4 space-y-1">
            <p>
              Are you sure you want to <strong>deselect</strong> <em>{title}</em>?
            </p>
            <p className="text-sm text-gray-600">
              This will remove the room and deduct <strong>${price.toFixed(2)}</strong> from your total.
            </p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                className="bg-[#174166]"
                onClick={() => {
                  dispatch(deselectRoom({ title, price: price }));
                }}
              >
                Deselect
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
