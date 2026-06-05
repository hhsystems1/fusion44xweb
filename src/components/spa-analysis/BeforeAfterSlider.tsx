"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, x)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, x)));
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Real Results
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Before <span className="text-accent">&amp;</span> After
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Slide to see the difference Fusion 44X makes in spa water clarity.
          </p>
        </div>
        <div
          className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-white/10 bg-surface touch-none"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-foreground-secondary">After image</p>
          </div>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-accent">Before image</p>
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
              <svg className="h-5 w-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-4 4m0 0l4 4m-4-4h16" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-1 text-xs text-white">
            Before
          </div>
          <div className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-3 py-1 text-xs text-white">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
