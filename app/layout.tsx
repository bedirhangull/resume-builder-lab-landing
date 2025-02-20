import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        {/* Google Tag Manager */}
        <Script
          type="text/plain"
          data-cookie-consent="tracking"
          id="google-analytics-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9Z97CMZWRH"
        />
        <Script
          type="text/plain"
          data-cookie-consent="tracking"
          id="google-analytics-config"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-9Z97CMZWRH');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Cookie Consent by FreePrivacyPolicy.com */}
        <Script
          src="//www.freeprivacypolicy.com/public/cookie-consent/4.2.0/cookie-consent.js"
          strategy="beforeInteractive"
        />
        <Script id="cookie-consent-config" strategy="beforeInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              cookieconsent.run({
                "notice_banner_type": "headline",
                "consent_type": "express",
                "palette": "light",
                "language": "en",
                "page_load_consent_levels": ["strictly-necessary"],
                "notice_banner_reject_button_hide": false,
                "preferences_center_close_button_hide": true,
                "page_refresh_confirmation_buttons": true,
                "website_name": "https://www.resumebuilderlab.com/",
                "website_privacy_policy_url": "https://www.resumebuilderlab.com/privacy-policy"
              });
            });
          `}
        </Script>
        <noscript>
          {"Cookie Consent by "}
          <a href="https://www.freeprivacypolicy.com/">Free Privacy Policy Generator</a>
        </noscript>
        {/* End Cookie Consent */}

        <link rel="icon" href="./favicon.ico" />

        {/* Google Analytics with cookie consent attributes */}
        <Script
          type="text/plain"
          data-cookie-consent="tracking"
          id="google-analytics-script"
          strategy="afterInteractive"
        >
          {`
            window.GoogleAnalyticsObject = function() {
              const ga = document.createElement('script');
              ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-9Z97CMZWRH';
              ga.async = true;
              document.head.appendChild(ga);
              
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-9Z97CMZWRH');
            };
          `}
        </Script>

        {/* Google Analytics and Tag Manager */}
        <GoogleAnalytics gaId="G-9Z97CMZWRH" />
        <GoogleTagManager gtmId="GTM-P54PSJ93" />

        {/* Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P54PSJ93"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}