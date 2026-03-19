import React from "react";
import { BioCard } from "./components/BioCard";
import { SkillsetCard } from "./components/SkillsetCard";
import { WorkHistoryCard } from "./components/WorkHistoryCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { PortfolioCard } from "./components/PortfolioCard";
import { SocialLinksCard } from "./components/SocialLinksCard";
import { StatsCard } from "./components/StatsCard";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      
      <div className="bento-wrapper">
      <div className="bento-grid">
        <div className="card card-1"><BioCard /></div>
        <div className="card card-2"><StatsCard /></div>
        <div className="card card-3"><SkillsetCard /></div>
        <div className="card card-4"><TestimonialCard /></div>
        <div className="card card-5"><SocialLinksCard /></div>
        <div className="card card-6"><WorkHistoryCard /></div>
        <div className="card card-7"><PortfolioCard /></div>
      </div>
      </div>
    </div>
  );
}