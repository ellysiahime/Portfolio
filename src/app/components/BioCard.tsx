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
          <p className="text-xl text-purple-300 mb-6">Senior Software Engineer</p>
          <p className="text-gray-300 leading-relaxed text-md mb-6">
          Senior Software Engineer with 15+ years of experience delivering scalable web applications and leading technical initiatives across enterprise and remote teams. Brings strong expertise in modern web technologies, system design, and front-end architecture, with a focus on performance, usability, and long-term maintainability. Experienced in guiding teams, aligning stakeholders, and driving high-quality software delivery from concept to production.
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