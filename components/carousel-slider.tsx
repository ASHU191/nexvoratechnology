"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
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
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Calculate translate distance (simple 100% per slide)
  // translate in pixels to account for gaps between slides and support slidesPerView
  const slideWidth = containerWidth ? containerWidth / slidesPerView : 0;
  const translateDistance = slideWidth ? currentIndex * (slideWidth + spaceBetween) : 0;

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      // The visible frame is the parent (overflow-hidden wrapper) width
      const frame = el.parentElement as HTMLElement | null;
      const w = frame ? frame.clientWidth : el.clientWidth;
      setContainerWidth(w);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [spaceBetween]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
    // capture pointer to continue receiving events
    try {
      containerRef.current?.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || startX.current === null) return;
    // we don't do live dragging UI, only detect swipe on pointer up
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current || startX.current === null) return;
    const delta = e.clientX - startX.current;
    const threshold = 50; // px
    if (delta > threshold) {
      handlePrev();
    } else if (delta < -threshold) {
      handleNext();
    }
    isDragging.current = false;
    startX.current = null;
    try {
      containerRef.current?.releasePointerCapture(e.pointerId);
    } catch (_) {}
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex transition-transform duration-500 ease-out touch-pan-y"
          style={{
            transform: `translateX(-${translateDistance}px)`,
            gap: `${spaceBetween}px`,
            touchAction: "pan-y",
            willChange: "transform",
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: slideWidth || "100%" }}>
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
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
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
