"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Case study data
const caseStudies = [
  {
    category: "Healthcare",
    title: "Avi Medical: Automating Healthcare and Customer Service",
    description:
      "Avi Medical implemented AI agents to manage patient inquiries and schedule appointments, resulting in a 78% reduction in response time and a 92% increase in patient satisfaction scores.",
    metrics: [
      { label: "Response Time Reduction", value: "78%" },
      { label: "Patient Satisfaction Increase", value: "92%" },
      { label: "Staff Hours Saved Weekly", value: "120+" },
    ],
    href: "#",
  },
  {
    category: "Customer Support",
    title: "German Manufacturing Company: Order Processing",
    description:
      "A leading German manufacturer deployed our AI agents to streamline order processing, reducing manual data entry by 93% and cutting processing time from days to minutes.",
    metrics: [
      { label: "Manual Data Entry Reduction", value: "93%" },
      { label: "Processing Time Decrease", value: "97%" },
      { label: "Error Rate Reduction", value: "89%" },
    ],
    href: "#",
  },
  {
    category: "Services",
    title: "Chemical Company: BPO Replacement",
    description:
      "A chemical company replaced its business process outsourcing with Beam AI agents, automating document processing and customer inquiries while reducing operational costs by 65%.",
    metrics: [
      { label: "Cost Reduction", value: "65%" },
      { label: "Processing Volume Increase", value: "240%" },
      { label: "Customer Satisfaction Score", value: "4.8/5" },
    ],
    href: "#",
  },
  {
    category: "Insurance",
    title: "Dutch Insurance Provider: Automating Claims Processing",
    description:
      "A Dutch insurance provider implemented our AI agents to automate claims processing, reducing the average processing time from 7 days to under 2 hours and improving accuracy.",
    metrics: [
      { label: "Processing Time Reduction", value: "96%" },
      { label: "Accuracy Improvement", value: "27%" },
      { label: "Claims Processed Daily", value: "5.8x" },
    ],
    href: "#",
  },
];

// Industry categories
const categories = ["All", ...new Set(caseStudies.map(study => study.category))];

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent"></div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md inline-block mb-4">
            Case Studies
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Specific AI: One Platform for All Your Needs
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore how AI delivers tangible results in diverse scenarios. From optimizing workflows
            to driving innovation, see concise examples of how our technology addresses specific
            challenges and enhances performance across various fields.
          </p>

          {/* Category tabs */}
          <Tabs defaultValue="All" className="max-w-md mx-auto">
            <TabsList className="bg-secondary/20 p-1 mb-8">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-accent data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredStudies.map((study, index) => (
            <Link key={index} href={study.href} className="group h-full">
              <Card className="h-full bg-secondary/30 border-secondary/30 hover:border-accent/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-2 py-1 rounded w-fit mb-4">
                    {study.category}
                  </div>

                  <h3 className="text-lg font-semibold mb-4 group-hover:text-accent-blue transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {study.description}
                  </p>

                  <div className="border-t border-secondary/50 pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-accent">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="group">
            See all case studies
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
