import { Briefcase } from "lucide-react";

const workHistory = [
  {
    company: "TechCorp Inc.",
    position: "Senior Product Designer",
    period: "2023 - Present",
    description:
      "Leading design system development and product strategy for B2B SaaS platform.",
    color: "from-purple-500 to-violet-500",
  },
  {
    company: "StartupXYZ",
    position: "Product Designer & Frontend Developer",
    period: "2021 - 2023",
    description:
      "Built the design team from scratch and developed the company's first mobile app.",
    color: "from-violet-500 to-purple-500",
  },
  {
    company: "Creative Agency Co.",
    position: "UI/UX Designer",
    period: "2019 - 2021",
    description:
      "Designed websites and mobile apps for various clients across different industries.",
    color: "from-purple-500 to-fuchsia-500",
  },
];

export function WorkHistoryCard() {
  return (
    <div className="relative rounded-3xl bg-black p-8 h-full overflow-hidden">
      {/* Gradient from top to bottom */}
      {/* <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#452485] to-black opacity-70 blur-3xl pointer-events-none"></div> */}
      <div className="absolute top-0 left-0 right-0 h-full test-bg"></div>

      <div className="relative z-10">
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
              className="relative pl-6 pb-6 last:pb-0"
            >
              {index !== workHistory.length - 1 && (
                <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              )}
              <div
                className={`absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br ${work.color}`}
              ></div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {work.position}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-400">
                    {work.company}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-sm text-gray-500">
                    {work.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}