import type { Metadata, Viewport } from "next";
import ClientBody from "./ClientBody";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beam AI - Agentic AI Platform for Process Automation",
  description: "Build an intelligent workforce with Beam AI's agentic platform. Automate customer service, data extraction, and complex workflows with AI agents.",
  keywords: "AI agents, artificial intelligence, automation, business process, agentic AI, workflow automation",
  authors: [{ name: "Beam AI" }],
  openGraph: {
    title: "Beam AI - Agentic AI Platform for Process Automation",
    description: "Build an intelligent workforce with Beam AI's agentic platform. Automate customer service, data extraction, and complex workflows with AI agents.",
    url: "https://beam-ai.com",
    siteName: "Beam AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beam AI Platform"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
