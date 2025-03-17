"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// These are the main navigation items
const navItems = [
  {
    title: "Platform",
    href: "#",
    submenu: [
      { title: "AI Agent Platform", href: "#" },
      { title: "AI Agents", href: "#" },
      { title: "Agentic Workflows", href: "#" },
      { title: "AgentOS", href: "#" },
      { title: "Database, Memory & Rag", href: "#" },
      { title: "Integrations", href: "#" },
    ],
  },
  {
    title: "AI Agents",
    href: "#",
    submenu: null,
  },
  {
    title: "Solutions",
    href: "#",
    submenu: [
      { title: "Customer Service", href: "#" },
      { title: "Insurance", href: "#" },
      { title: "BPO", href: "#" },
      { title: "Healthcare", href: "#" },
      { title: "Property Management", href: "#" },
      { title: "Custom AI Solutions", href: "#" },
    ],
  },
  {
    title: "Resources",
    href: "#",
    submenu: [
      { title: "Webinars", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Partner Program", href: "#" },
      { title: "Beam Academy", href: "#" },
      { title: "Use Cases", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "AI Native", href: "#" },
    ],
  },
  {
    title: "About",
    href: "#",
    submenu: null,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // Handle scroll events to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-bg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold gradient-text">beam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium hover:text-white transition-colors flex items-center"
              >
                {item.title}
                {item.submenu && (
                  <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                )}
              </Link>

              {item.submenu && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-secondary/90 backdrop-blur-lg rounded-lg shadow-lg p-2 animate-fade-in">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-background/50 rounded-md transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <Link href="#" className="text-sm font-medium hover:text-white">
            Log in
          </Link>
          <Button className="bg-accent hover:bg-accent/80">
            Request Access
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-bg animate-slide-down">
          <div className="container py-4 space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:text-white transition-colors">
                      {item.title}
                      {item.submenu && (
                        <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  {item.submenu && (
                    <DropdownMenuContent className="w-full">
                      {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link href={subItem.href}>{subItem.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
              </div>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                href="#"
                className="px-3 py-2 text-sm font-medium hover:text-white"
              >
                Log in
              </Link>
              <Button className="bg-accent hover:bg-accent/80">
                Request Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
