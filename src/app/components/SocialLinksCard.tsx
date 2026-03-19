import { Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
];

export function SocialLinksCard() {
  return (
    <div className="relative rounded-3xl bg-black p-8 border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 h-full flex items-center justify-center overflow-hidden">
      {/* Circular gradient from middle to outer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_#8964d1_0%,_transparent_70%)] opacity-70 pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Let's Connect</h3>
        <div className="flex gap-4 justify-center">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/50 text-gray-400 ${social.color} transition-all duration-300 group hover:scale-105`}
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