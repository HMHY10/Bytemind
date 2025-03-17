"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background z-0"></div>
      <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-accent-purple/10 rounded-full filter blur-[150px] opacity-50 z-0"></div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-secondary/10 rounded-2xl p-8 md:p-12 border border-secondary/30 hover-glow">
          <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md inline-block mb-6">
            Get Started
          </div>

          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            Unlock the Power of Agentic Automation
          </h2>

          <p className="text-lg text-muted-foreground md:max-w-2xl mx-auto mb-8">
            Whether you're looking to automate customer service, streamline operations, or gain a
            competitive edge with AI, our platform offers the flexibility and power you need.
            Start your AI transformation journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="hover-scale bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal hover:opacity-90 text-white h-12 px-6"
              aria-label="Request access to the platform"
            >
              Request Access
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="hover-bright border-secondary/50 h-12 px-6"
              aria-label="Schedule a product demo"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-secondary/20 hover-lift">
              <div className="font-bold text-2xl text-accent-purple mb-1">93%</div>
              <div className="text-sm text-muted-foreground">Average operational cost reduction</div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/20 hover-lift">
              <div className="font-bold text-2xl text-accent-blue mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer satisfaction rating</div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/20 hover-lift">
              <div className="font-bold text-2xl text-accent-teal mb-1">2 weeks</div>
              <div className="text-sm text-muted-foreground">Average time to value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
