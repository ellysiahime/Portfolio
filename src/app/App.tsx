import React from "react";
import { useState } from "react"
import { BioCard } from "./components/BioCard";
import { SkillsetCard } from "./components/SkillsetCard";
import { WorkHistoryCard } from "./components/WorkHistoryCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { PortfolioCard } from "./components/PortfolioCard";
import { SocialLinksCard } from "./components/SocialLinksCard";
import { StatsCard } from "./components/StatsCard";
import { GlowWrapper } from "./components/GlowWrapper";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <div className="bento-wrapper">
      <div className="bento-grid">
        <GlowWrapper className="card card-1"><BioCard /></GlowWrapper>
        <GlowWrapper className="card card-2"><StatsCard /></GlowWrapper>
        <GlowWrapper className="card card-3"><SkillsetCard /></GlowWrapper>
        <GlowWrapper className="card card-4"><TestimonialCard /></GlowWrapper>
        <GlowWrapper className="card card-5"><SocialLinksCard /></GlowWrapper>
        <GlowWrapper className="card card-6"><WorkHistoryCard /></GlowWrapper>
        <GlowWrapper className="card card-7"><PortfolioCard /></GlowWrapper>
      </div>
      </div>
    </div>
  );
}