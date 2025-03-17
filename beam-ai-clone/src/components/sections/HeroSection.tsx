"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Array of tech company names for the logo section
const companyLogos = [
  { name: "OpenAI", logoText: "OpenAI" },
  { name: "Stability AI", logoText: "Stability AI" },
  { name: "Anthropic", logoText: "anthropic" },
  { name: "Databricks", logoText: "Databricks" },
  { name: "Cohere", logoText: "cohere" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background z-[-1]"></div>

      {/* Background dot pattern - optional */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:20px_20px] z-[-1]"></div>

      {/* Container */}
      <div className="container-wide relative z-10">
        {/* Promotional banner */}
        <Link
          href="#"
          className="inline-block bg-secondary/50 border border-secondary/70 rounded-full px-4 py-1 text-sm mb-8 hover:bg-secondary/70 transition-colors"
        >
          <span className="font-medium">Exclusive Webinars: March 2025</span>
          <span className="ml-2 bg-accent px-2 py-0.5 rounded-full text-xs font-medium">Sign Up</span>
        </Link>

        {/* Hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hire Self-Learning
              <span className="gradient-text"> AI Agents </span>
              to Run Your Operations
            </h1>

            <p className="text-lg text-muted-foreground md:max-w-lg">
              Meet the leading agentic AI platform for Agentic Process Automation.
              Used by Fortune 500 companies and scale-ups, the platform automates
              workflows with an advanced AI agent platform to reduce operational
              cost and create leverage.
            </p>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-12 px-6">
              Request Access
            </Button>
          </div>

          {/* Hero image/visualization */}
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden glass-bg border border-secondary/50">
              {/* This is a placeholder for the dashboard visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-accent-teal/20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>

              {/* Dashboard UI elements - simplified version */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-accent-purple/70"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-blue/70"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-teal/70"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/70"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary/70"></div>
                </div>
              </div>

              <div className="absolute top-16 left-4 right-4 grid grid-cols-4 gap-2">
                <div className="col-span-1 h-24 bg-secondary/50 rounded-md"></div>
                <div className="col-span-3 h-24 bg-secondary/30 rounded-md"></div>
                <div className="col-span-2 h-24 bg-secondary/40 rounded-md"></div>
                <div className="col-span-2 h-24 bg-secondary/20 rounded-md"></div>
                <div className="col-span-4 h-36 bg-secondary/30 rounded-md mt-2"></div>
                <div className="col-span-2 h-28 bg-secondary/40 rounded-md"></div>
                <div className="col-span-2 h-28 bg-secondary/20 rounded-md"></div>
              </div>

              {/* Glowing accent elements */}
              <div className="absolute top-[30%] right-[20%] w-24 h-24 rounded-full bg-accent-blue/10 filter blur-xl"></div>
              <div className="absolute bottom-[30%] left-[20%] w-32 h-32 rounded-full bg-accent-purple/10 filter blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Logos section */}
        <div className="mt-20">
          <p className="text-sm font-medium text-muted-foreground mb-8 text-center">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                {/* Styled company name as "logo" */}
                <div className={`text-xl font-bold ${
                  index % 3 === 0 ? 'text-accent-blue' :
                  index % 3 === 1 ? 'text-accent-purple' : 'text-accent-teal'
                }`}>
                  {company.logoText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
