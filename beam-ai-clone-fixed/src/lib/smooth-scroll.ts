"use client";

import { useEffect } from "react";

// This utility adds smooth scrolling behavior throughout the app
export function useSmoothScroll() {
  useEffect(() => {
    // Skip this effect during SSR
    if (typeof window === "undefined") return;

    // Smooth scroll behavior for all anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    };

    // Add event listener to the document
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}

// Function to scroll to a specific section by ID
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 80,
    behavior: 'smooth'
  });
}
