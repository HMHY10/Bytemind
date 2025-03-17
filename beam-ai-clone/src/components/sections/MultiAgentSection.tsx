"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    icon: "🌐",
    title: "Web Intelligence",
    description: "AI agents that can browse the web, gather information, and provide valuable insights.",
  },
  {
    icon: "📄",
    title: "Document Processing",
    description: "Automatically extract, analyze, and process data from various document formats.",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    description: "Connect multiple agents to create seamless end-to-end business process automation.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description: "Connect with your existing tools and systems through robust API integration capabilities.",
  },
];

export default function MultiAgentSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-bl from-accent-purple/5 via-transparent to-transparent"></div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="flex items-center mb-6">
          <div className="text-sm font-medium text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-md">
            Multi-Agent
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
          Empowering Autonomous Agents to Work Together
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-16">
          Why rely on a single agent when you can utilize the power of many? Beam&apos;s agentic AI
          systems integrate multiple agents for more comprehensive and cohesive automation strategy,
          boosting productivity across all levels of your organization.
        </p>

        {/* Multi-agent visualization */}
        <div className="relative mb-20 h-[400px] bg-secondary/20 rounded-lg p-8 overflow-hidden">
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-accent-purple/20 p-2 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-accent-purple/30 flex items-center justify-center text-xl font-bold">
                Hub
              </div>
            </div>
          </div>

          {/* Connection lines - simplified */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] rounded-full border border-dashed border-accent-blue/20"></div>
            <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-accent-purple/20"></div>
            <div className="absolute w-[40%] h-[40%] rounded-full border border-dashed border-accent-teal/20"></div>
          </div>

          {/* Agent nodes - simplified */}
          <div className="absolute top-[15%] left-[30%] w-16 h-16 rounded-full bg-accent-blue/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-blue/30 flex items-center justify-center">A1</div>
          </div>

          <div className="absolute top-[70%] left-[25%] w-16 h-16 rounded-full bg-accent-purple/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-purple/30 flex items-center justify-center">A2</div>
          </div>

          <div className="absolute top-[20%] right-[20%] w-16 h-16 rounded-full bg-accent-teal/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-teal/30 flex items-center justify-center">A3</div>
          </div>

          <div className="absolute top-[60%] right-[30%] w-16 h-16 rounded-full bg-accent-blue/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-blue/30 flex items-center justify-center">A4</div>
          </div>

          <div className="absolute top-[40%] left-[10%] w-16 h-16 rounded-full bg-accent-teal/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-teal/30 flex items-center justify-center">A5</div>
          </div>

          <div className="absolute top-[40%] right-[10%] w-16 h-16 rounded-full bg-accent-purple/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-accent-purple/30 flex items-center justify-center">A6</div>
          </div>

          {/* Glowing effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-purple/5 to-transparent"></div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, index) => (
            <Card key={index} className="bg-secondary/20 border-secondary/30 backdrop-blur-sm hover:bg-secondary/30 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
