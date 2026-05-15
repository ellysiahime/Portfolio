import React from "react";

export function StatsCard() {
  return (
    <div className="relative p-8 h-full flex items-center justify-center ">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full text-center">
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-none">
              15<span className="align-top text-2xl md:text-3xl">+</span>
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/80">Years experience</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-none">
              900<span className="align-top text-2xl md:text-3xl">+</span>
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/80">Hours delivered</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-none">
              45<span className="align-top text-2xl md:text-3xl">+</span>
            </div>
            <div className="mt-2 text-xs md:text-sm text-white/80">Client projects</div>
          </div>
        </div>

      </div>
    </div>
  );
}