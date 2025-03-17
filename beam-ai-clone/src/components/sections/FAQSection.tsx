"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is agentic AI?",
    answer:
      "Agentic AI refers to artificial intelligence systems that can operate autonomously to achieve specific goals. These systems can perceive their environment, make decisions, and take actions without constant human intervention. In practical terms, agentic AI can automate complex workflows and complete tasks across various business processes.",
    id: "faq-agentic-ai"
  },
  {
    question: "How can AI automation scale operations with intelligent agents?",
    answer:
      "AI automation scales operations by deploying intelligent agents to handle routine and complex tasks without human intervention. These agents can work continuously without breaks, manage multiple tasks simultaneously, learn from interactions to improve over time, and adapt to changing business needs. This allows companies to increase their operational capacity without proportionally increasing staff or costs.",
    id: "faq-scaling-operations"
  },
  {
    question: "What are our AI tools and their benefits?",
    answer:
      "Our AI tools include specialized agents for customer service, data extraction, email categorization, and appointment management. These tools automate repetitive tasks, reduce operational costs by up to 93%, increase productivity by approximately 200%, and minimize human errors by around 95%. Additionally, they provide consistent service quality, 24/7 availability, and the ability to scale operations efficiently.",
    id: "faq-ai-tools"
  },
  {
    question: "What AI courses are available for businesses?",
    answer:
      "We offer comprehensive AI courses through Beam Academy, designed specifically for businesses looking to implement AI solutions. These include 'Introduction to Agentic AI' for beginners, 'AI Implementation Strategies' for managers, 'Technical Integration of AI Agents' for technical teams, and 'AI Governance and Ethics' for leadership. All courses are tailored to specific industry contexts and can be customized for your organization's needs.",
    id: "faq-courses"
  },
  {
    question: "How do multi-agent systems differ from single-agent deployments?",
    answer:
      "Multi-agent systems leverage multiple specialized AI agents working collaboratively, while single-agent deployments rely on one AI agent. Multi-agent systems offer greater task complexity handling, better fault tolerance, specialized expertise in different domains, and improved scalability. They can manage intricate workflows by breaking them down into manageable parts assigned to different agents with specific capabilities.",
    id: "faq-multi-agent"
  },
  {
    question: "What industries benefit most from agentic AI automation?",
    answer:
      "While agentic AI can benefit virtually any industry, those with high-volume, repeatable processes see the greatest impact. These include customer service operations, healthcare administration, insurance claims processing, financial services, legal document review, manufacturing quality control, and logistics management. Industries with significant data processing requirements or customer interaction needs typically achieve substantial ROI from agentic AI implementations.",
    id: "faq-industries"
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
      <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-accent-purple/5 rounded-full filter blur-[150px] opacity-70 z-0"></div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md inline-block mb-4">
            FAQ
          </div>

          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn the answers to common questions about our AI solutions, tools,
            and services, helping you understand how they can benefit your business
            and streamline operations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-secondary/50 bg-secondary/10 rounded-lg px-4 hover-bright data-[state=open]:hover-border-gradient"
                id={item.id}
              >
                <AccordionTrigger
                  className="text-lg font-medium py-4 hover:no-underline"
                  aria-controls={`content-${item.id}`}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground pb-4 animate-fade-in"
                  id={`content-${item.id}`}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a href="#contact" className="text-accent hover:underline hover:text-accent/80 transition-colors">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
