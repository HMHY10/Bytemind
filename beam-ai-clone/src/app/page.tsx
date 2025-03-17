"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AIAgentsSection from "@/components/sections/AIAgentsSection";
import AgenticWorkflowSection from "@/components/sections/AgenticWorkflowSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import MultiAgentSection from "@/components/sections/MultiAgentSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { CookieConsent } from "@/components/ui/cookie-consent";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        <div
          id="content"
          className="flex-grow"
          role="main"
          aria-label="Main content"
        >
          <HeroSection />
          <AIAgentsSection />
          <AgenticWorkflowSection />
          <BenefitsSection />
          <MultiAgentSection />
          <CaseStudiesSection />
          <FAQSection />
          <CTASection />
        </div>

        <Footer />
      </div>

      <CookieConsent />
    </main>
  );
}
