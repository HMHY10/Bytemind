"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  // On mount, check if consent already given
  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      // Only show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="bg-secondary/90 backdrop-blur-md border-t border-secondary p-4 md:p-6 shadow-lg dark:bg-secondary/95">
        <div className="container-wide">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3
                id="cookie-consent-title"
                className="text-lg font-semibold mb-2"
              >
                Cookie Consent
              </h3>
              <p
                id="cookie-consent-description"
                className="text-sm text-muted-foreground mb-4"
              >
                We use cookies to enhance your browsing experience, serve personalized ads or content,
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                Read our <a href="#" className="text-accent underline hover:text-accent/80">Cookie Policy</a> and
                <a href="#" className="text-accent underline hover:text-accent/80 ml-1">Privacy Policy</a> for more information.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="default"
                  className="bg-accent hover:bg-accent/90 hover-scale"
                  onClick={acceptAll}
                  aria-label="Accept all cookies"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  className="hover-bright"
                  onClick={acceptNecessary}
                  aria-label="Accept only necessary cookies"
                >
                  Necessary Only
                </Button>
                <Button
                  variant="link"
                  className="text-accent"
                  onClick={acceptNecessary}
                  aria-label="Customize cookie preferences"
                >
                  Customize Preferences
                </Button>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={acceptNecessary}
              className="mt-1"
              aria-label="Close cookie consent banner"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
