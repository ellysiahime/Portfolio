import React from "react";

const socials = [
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ellyshia-suciawan/"},
  { icon: "email", label: "Email", href: "mailto:ellysiahime@gmail.com"},
  { icon: "github", label: "GitHub", href: "https://github.com/ellysiahime"},
  { icon: "upwork", label: "Upwork", href: "https://www.upwork.com/freelancers/~01e212eec24fdecb95"},
];

export function SocialLinksCard() {
  return (
    <div className="relative p-8 h-full flex items-center justify-center ">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">Let's Connect</h2>
        <div className="grid grid-cols-2 gap-8 justify-items-center max-w-xs mx-auto">
          {socials.map((social) => {
            return (
              <a
                href={social.href} target="_blank"
                className={`flex flex-col bg-white rounded-full p-2 items-center gap-2 p-2 hover:text-fuchsia-400 transition-all duration-300 group hover:scale-105`}
              >
                <img
                  src={`/icons/${social.icon}.png`} alt={social.label}
                  className="w-8 h-8"
                />
                
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}