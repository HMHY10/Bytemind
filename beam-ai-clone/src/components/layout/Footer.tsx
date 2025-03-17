"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Footer navigation items
const footerNavGroups = [
  {
    title: "Platform",
    id: "footer-platform",
    items: [
      { label: "AI Agent Platform", href: "#", id: "link-platform" },
      { label: "AI Agents", href: "#", id: "link-agents" },
      { label: "Agentic Workflows", href: "#", id: "link-workflows" },
      { label: "AgentOS", href: "#", id: "link-agent-os" },
      { label: "Database & Memory", href: "#", id: "link-database" },
      { label: "Integrations", href: "#", id: "link-integrations" },
    ],
  },
  {
    title: "Solutions",
    id: "footer-solutions",
    items: [
      { label: "Customer Service", href: "#", id: "link-customer-service" },
      { label: "Insurance", href: "#", id: "link-insurance" },
      { label: "BPO", href: "#", id: "link-bpo" },
      { label: "Healthcare", href: "#", id: "link-healthcare" },
      { label: "Property Management", href: "#", id: "link-property" },
    ],
  },
  {
    title: "Resources",
    id: "footer-resources",
    items: [
      { label: "Documentation", href: "#", id: "link-docs" },
      { label: "Tutorials", href: "#", id: "link-tutorials" },
      { label: "Blog", href: "#", id: "link-blog" },
      { label: "Case Studies", href: "#", id: "link-case-studies" },
      { label: "Beam Academy", href: "#", id: "link-academy" },
    ],
  },
  {
    title: "Company",
    id: "footer-company",
    items: [
      { label: "About Us", href: "#", id: "link-about" },
      { label: "Careers", href: "#", id: "link-careers" },
      { label: "Press", href: "#", id: "link-press" },
      { label: "Contact", href: "#", id: "link-contact" },
      { label: "Legal", href: "#", id: "link-legal" },
    ],
  },
];

// Social media links
const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", id: "social-twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", id: "social-linkedin" },
  { label: "GitHub", href: "https://github.com", id: "social-github" },
  { label: "Discord", href: "https://discord.com", id: "social-discord" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-secondary/20 border-t border-secondary py-12 md:py-16 relative"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">beam</span>
            </Link>

            <p className="text-muted-foreground mb-5 max-w-md">
              The leading agentic AI platform for businesses seeking to automate complex processes and
              workflows. Build specialized AI agents to handle customer service, data extraction, and more.
            </p>

            <div className="flex space-x-4 mb-5">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`Follow us on ${link.label}`}
                  id={link.id}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              className="hover-bright"
              size="sm"
              aria-label="Subscribe to our newsletter"
            >
              Subscribe to our newsletter
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Navigation groups */}
          {footerNavGroups.map((group) => (
            <div key={group.id} className="lg:col-span-1">
              <h3
                id={group.id}
                className="font-semibold mb-4"
              >
                {group.title}
              </h3>

              <ul className="space-y-2" aria-labelledby={group.id}>
                {group.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                      id={item.id}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-secondary flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            &copy; {currentYear} Beam AI. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-end">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
