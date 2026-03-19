import React from "react";
import { Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
];

export function SocialLinksCard() {
  return (
    <div className="relative p-8 h-full flex items-center justify-center ">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Let's Connect</h3>
        <div className="grid grid-cols-2 gap-4 justify-items-center max-w-xs mx-auto">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={`${social.label}-${idx}`}
                href={social.href}
                className={`flex flex-col items-center gap-2 p-2  ${social.color} transition-all duration-300 group hover:scale-105`}
              >
                <Icon className="w-7 h-7" />
                <span className="text-sm">{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}