import React from "react";
import { ArrowRight } from "lucide-react";

export function BioCard() {
  return (
    <div className="relative p-8 h-full">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
        
        
        <div className="flex-1">
          
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-3">
            Ellysia S. 
          </h1>
          <p className="text-xl text-purple-300 mb-6">Senior Front-End Engineer</p>
          <p className="text-gray-400 leading-relaxed text-md mb-6">
          Frontend Engineer with 15+ years of experience building scalable, user-focused web applications across enterprise and remote environments. 
          I specialize in crafting clean, intuitive interfaces while also leading teams through Agile delivery, bridging the gap between product, design, and engineering to ship high-quality solutions efficiently.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:ellysiahime@gmail.com" className="cta-btn"
            >
              <span className="cta-content">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}