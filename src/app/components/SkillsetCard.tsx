import { Code2, Palette, Smartphone, Zap, Figma, Globe, Database, Blocks } from "lucide-react";

const skills = [
  { name: "UI/UX Design", icon: Palette },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Figma", icon: Figma },
  { name: "Tailwind CSS", icon: Blocks },
  { name: "Node.js", icon: Globe },
  { name: "Mobile Design", icon: Smartphone },
  { name: "Web3", icon: Database },
  { name: "Prototyping", icon: Zap },
];

export function SkillsetCard() {
  return (
    <div className="relative rounded-3xl bg-black p-8 border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 h-full overflow-hidden">
      {/* Circular gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#8964d1] to-[#a47ee6] rounded-full opacity-70 blur-3xl pointer-events-none"></div>
      
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