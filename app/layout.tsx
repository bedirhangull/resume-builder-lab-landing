import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from '@next/third-parties/google';
import TermlyCMP from "@/components/ui/TermlyCMP";
import "./globals.css";

export const metadata = {
  title: "Resume Builder Lab",
  description: "Generate a resume with AI and get hired faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./favicon.ico" />

        {/* Google Analytics and Google Tag Manager */}
        <GoogleAnalytics gaId="G-9Z97CMZWRH" />
        <GoogleTagManager gtmId="GTM-P54PSJ93" />

        {/* Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased"
      >
        {/* Termly Consent Manager */}
        <TermlyCMP websiteUUID="2fa77797-b640-4408-bc73-b4c173485603" />
        <a href="#" className="termly-display-preferences">Consent Preferences</a>
        {children}
      </body>
    </html>
  );
}
