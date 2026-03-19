import React from "react";
import { Briefcase } from "lucide-react";

const workHistory = [
  {
    company: "PETRONAS Digital Sdn Bhd",
    position: "Senior Software Engineer",
    period: "2020 - 2025",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    company: "Wiya Technologies Sdn Bhd",
    position: "Front-End Team Lead",
    period: "2016 - 2020",
    color: "from-violet-500 to-purple-500",
  },
  {
    company: "Upwork.com",
    position: "Freelance Web / UI / Front-End Developer",
    period: "2009 - 2016",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    company: "Barclays / Google / ContineoMedia / Hewlett-Packard",
    position: "Various Roles in Singapore",
    period: "2011 - 2015",
    color: "from-purple-500 to-fuchsia-500",
  },
];

export function WorkHistoryCard() {
  return (
    <div className="relative p-8 h-full">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8964d1] to-black opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Briefcase className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Work History
          </h2>
        </div>

        <div className="space-y-6">
          {workHistory.map((work, index) => (
            <div
              key={index}
              className="relative pl-6 pb-3 last:pb-0"
            >
              {index !== workHistory.length - 1 && (
                <div className="absolute left-2 top-2 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              )}
              <div
                className={`absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br ${work.color}`}
              ></div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {work.position}
                </h3>
                <p className="text-purple-400">
                  {work.company}
                </p> 
                <p className="text-sm text-gray-500">
                  {work.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}