import { BioCard } from "./components/BioCard";
import { SkillsetCard } from "./components/SkillsetCard";
import { WorkHistoryCard } from "./components/WorkHistoryCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { PortfolioCard } from "./components/PortfolioCard";
import { SocialLinksCard } from "./components/SocialLinksCard";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bio Card - spans 2 columns */}
          <div className="lg:col-span-2 lg:row-span-1">
            <BioCard />
          </div>

          {/* Skills & Expertise Card */}
          <div className="lg:col-span-1 lg:row-span-2">
            <SkillsetCard />
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-1">
            <TestimonialCard />
          </div>

          {/* Social Links Card - centered in middle */}
          <div className="lg:col-span-1">
            <SocialLinksCard />
          </div>

          {/* Work History Card */}
          <div className="lg:col-span-1 lg:row-span-1">
            <WorkHistoryCard />
          </div>

          {/* Portfolio Card */}
          <div className="lg:col-span-2">
            <PortfolioCard />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 John Doe. Crafted with passion and code.
          </p>
        </footer>
      </div>
    </div>
  );
}