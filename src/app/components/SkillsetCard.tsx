import React from "react";
import { Code2, Palette, Smartphone, Zap, Figma, Globe, Database, Blocks } from "lucide-react";

const skills = [
  { name: "Next.js", icon: Code2 },
  { name: "React", icon: Code2 },
  { name: "Angular", icon: Code2 },
  { name: "Javascript", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Blocks },
  { name: "WordPress", icon: Globe },
  { name: "Node.js", icon: Globe },
  { name: "REST API", icon: Smartphone },
  { name: "Supabase", icon: Database },
  { name: "PHP & MySQL", icon: Zap },
  { name: "Figma", icon: Figma },
  { name: "Notion", icon: Figma },
  { name: "Git", icon: Zap },
  { name: "Azure DevOps", icon: Figma },
  { name: "AWS", icon: Zap },
  { name: "UI/UX", icon: Palette },
  { name: "Agile Delivery", icon: Palette },
  { name: "Software Development", icon: Palette },
  { name: "Scrum Facilitation", icon: Palette },
  { name: "Stakeholder Management", icon: Palette },
  { name: "Metrics & Reporting", icon: Palette },
  { name: "Team Leadership", icon: Palette },
  { name: "Distributed Team", icon: Palette },
  // { name: "Team Leadership", icon: Palette },
  // { name: "Distributed Team", icon: Palette },
];

export function SkillsetCard() {
  return (
    <div className="relative p-8 h-full">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Zap className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Skills & Expertise</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
              >
                <Icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}