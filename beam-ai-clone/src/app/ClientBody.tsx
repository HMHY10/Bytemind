"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </body>
  );
}
