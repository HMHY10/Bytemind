"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AgenticWorkflowSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px] z-0"></div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="flex items-center mb-6">
          <div className="text-sm font-medium text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-md">
            Agentic Workflows
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-2xl">
          A Learning System to Optimize and Automate Workflows. It&apos;s Possible.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <Link href="#" className="block group">
              <Card className="bg-secondary/30 border-secondary/30 hover:border-accent-purple/40 transition-all duration-300 h-full">
                <CardContent className="p-6 flex space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent-purple/40"></div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Human Resources
                    </h3>
                    <h4 className="text-lg font-semibold mb-4 group-hover:text-accent-purple transition-colors">
                      Employee Onboarding
                    </h4>

                    <p className="text-sm text-muted-foreground mb-4">
                      Handle new hire onboarding tasks like document collection and HR profile creation automatically to save time.
                    </p>

                    <div className="border-t border-secondary/50 pt-4">
                      <h5 className="text-xs font-medium mb-2">Agentic Actions</h5>
                      <ul className="space-y-2">
                        <li className="text-xs text-muted-foreground">
                          Collect required documents and information.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Verify the authenticity of documents and validate credentials.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Create employee profiles in the system.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Send onboarding schedules, policies, and other resources to new hires.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="#" className="block group">
              <Card className="bg-secondary/30 border-secondary/30 hover:border-accent-teal/40 transition-all duration-300 h-full">
                <CardContent className="p-6 flex space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent-teal/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent-teal/40"></div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Sales
                    </h3>
                    <h4 className="text-lg font-semibold mb-4 group-hover:text-accent-teal transition-colors">
                      Sales Proposal Generation
                    </h4>

                    <p className="text-sm text-muted-foreground mb-4">
                      Generate tailored sales proposals in minutes with AI agents for Sales Proposal Generation, reducing manual effort and accelerating your sales cycle.
                    </p>

                    <div className="border-t border-secondary/50 pt-4">
                      <h5 className="text-xs font-medium mb-2">Agentic Actions</h5>
                      <ul className="space-y-2">
                        <li className="text-xs text-muted-foreground">
                          Gather all relevant information about the client through a web search.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Analyze the gathered client information and tailor the Unique Selling Propositions.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Compile the drafted proposal into a Google Document for easy sharing.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Send an email to the client with the document link, ensuring streamlined communication.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex flex-col space-y-6">
            <Link href="#" className="block group">
              <Card className="bg-secondary/30 border-secondary/30 hover:border-accent-blue/40 transition-all duration-300 h-full">
                <CardContent className="p-6 flex space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent-blue/40"></div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Customer Service
                    </h3>
                    <h4 className="text-lg font-semibold mb-4 group-hover:text-accent-blue transition-colors">
                      General Customer Support
                    </h4>

                    <p className="text-sm text-muted-foreground mb-4">
                      Manage customer inquiries efficiently with AI agents for General Customer Support, providing timely support and resolving common issues.
                    </p>

                    <div className="border-t border-secondary/50 pt-4">
                      <h5 className="text-xs font-medium mb-2">Agentic Actions</h5>
                      <ul className="space-y-2">
                        <li className="text-xs text-muted-foreground">
                          Analyze the content of the customer query and apply instructions based on the supporting information.
                        </li>
                        <li className="text-xs text-muted-foreground">
                          Send the generated response to the customer.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className="h-full flex items-center">
              <div className="space-y-8 p-6">
                <h3 className="text-xl font-semibold">
                  AI agents, powered by agentic workflows, leverage advanced learning systems to autonomously identify and automate essential tasks.
                </h3>

                <p className="text-muted-foreground">
                  This dynamic adaptability keeps operations smooth and responsive to changing demands.
                </p>

                <Button variant="outline" className="group">
                  See all workflows
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
