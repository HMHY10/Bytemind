"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90 z-0"></div>

      {/* Blue gradient on the left */}
      <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-accent-blue/20 rounded-full filter blur-[120px] opacity-60 z-0"></div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md inline-block mb-4">
            Benefits
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Improve Operational Efficiency and Create Leverage. Fast.
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deploy AI agents to streamline operations and amplify your business&apos;s efficiency.
            These agents optimize processes, reduce delays, and enhance output, ensuring you gain a
            competitive edge with speed and precision.
          </p>
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat card 1 */}
          <Card className="bg-secondary/30 border-secondary/30 overflow-hidden relative h-[280px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent"></div>
            <CardContent className="p-6 relative h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-4">Operational Cost Reduction</h3>
                <p className="text-muted-foreground mb-6">
                  Reduce operational costs by automating repetitive tasks and streamlining workflows.
                </p>
              </div>

              <div className="text-5xl font-bold text-accent-blue">
                93%
                <div className="text-sm font-normal text-muted-foreground mt-1">
                  Average cost savings
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stat card 2 */}
          <Card className="bg-secondary/30 border-secondary/30 overflow-hidden relative h-[280px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent"></div>
            <CardContent className="p-6 relative h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-4">Increased Productivity</h3>
                <p className="text-muted-foreground mb-6">
                  Boost your team&apos;s productivity by handling mundane tasks automatically.
                </p>
              </div>

              <div className="text-5xl font-bold text-accent-purple">
                200%
                <div className="text-sm font-normal text-muted-foreground mt-1">
                  Average productivity gain
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stat card 3 */}
          <Card className="bg-secondary/30 border-secondary/30 overflow-hidden relative h-[280px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 to-transparent"></div>
            <CardContent className="p-6 relative h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-4">Error Reduction</h3>
                <p className="text-muted-foreground mb-6">
                  Minimize human errors and ensure consistent quality output with AI-powered workflows.
                </p>
              </div>

              <div className="text-5xl font-bold text-accent-teal">
                95%
                <div className="text-sm font-normal text-muted-foreground mt-1">
                  Error reduction rate
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
