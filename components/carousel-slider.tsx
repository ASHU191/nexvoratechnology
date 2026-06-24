"use client";

import { ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSliderProps {
  items: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: boolean;
  navigation?: boolean;
}

export function CarouselSlider({
  items,
  slidesPerView = 1,
  spaceBetween = 12,
  pagination = true,
  navigation = false,
}: CarouselSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Calculate translate distance (simple 100% per slide)
  const translateDistance = currentIndex * 100;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${translateDistance}%)`,
            gap: `${spaceBetween}px`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {navigation && (
        <>
          <Button
            onClick={handlePrev}
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight />
          </Button>
        </>
      )}

      {/* Pagination Dots */}
      {pagination && (
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-cyan-600" : "bg-steel-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
