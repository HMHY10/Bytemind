"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// The different types of AI agents
const agentTypes = [
  {
    title: "Data Extraction Agent",
    description: "Extract structured data from unstructured sources like documents, emails, and images.",
    icon: "📊",
    color: "from-accent-purple to-accent-blue",
    benefit: "85% reduction in processing time",
    id: "agent-data-extraction"
  },
  {
    title: "Customer Service Agent",
    description: "Handle customer inquiries, provide support, and resolve issues 24/7 without human intervention.",
    icon: "💬",
    color: "from-accent-blue to-accent-teal",
    benefit: "67% cost reduction + higher satisfaction",
    id: "agent-customer-service"
  },
  {
    title: "Workflow Automation Agent",
    description: "Orchestrate complex business processes and workflows across multiple applications and systems.",
    icon: "⚙️",
    color: "from-accent-teal to-accent-green",
    benefit: "90% faster process execution",
    id: "agent-workflow"
  },
  {
    title: "Content Generation Agent",
    description: "Create, edit, and optimize various types of content based on specific guidelines and requirements.",
    icon: "📝",
    color: "from-accent-green to-accent-purple",
    benefit: "83% reduction in content creation time",
    id: "agent-content"
  },
];

export default function AIAgentsSection() {
  return (
    <section
      id="ai-agents"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="ai-agents-heading"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-accent-purple/5 to-transparent rounded-full filter blur-[150px] z-0"></div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md inline-block mb-4">
            AI Agents
          </div>

          <h2
            id="ai-agents-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Building Blocks of Intelligent Operations
          </h2>

          <p className="text-muted-foreground">
            Our specialized AI agents are designed to automate specific tasks and processes,
            delivering unmatched efficiency and accuracy. These agents work independently
            or together as part of agentic workflows to handle complex business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {agentTypes.map((agent, index) => (
            <Card
              key={index}
              className="border border-secondary/50 bg-secondary/10 backdrop-blur-sm hover-lift hover-border-gradient"
              id={agent.id}
              aria-labelledby={`agent-title-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-full mb-4 bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl`}>
                    {agent.icon}
                  </div>

                  <h3
                    id={`agent-title-${index}`}
                    className="text-xl font-semibold mb-3 smooth-transition-all"
                  >
                    {agent.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {agent.description}
                  </p>

                  <div className="bg-secondary/30 p-3 rounded-md text-sm font-medium text-accent">
                    {agent.benefit}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            All AI agents are built on our proprietary technology that combines advanced language models,
            machine learning, and specialized algorithms to deliver superior performance compared to
            traditional automation solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
