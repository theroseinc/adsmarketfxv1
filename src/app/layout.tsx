import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AdsMarket FX – Invite-Only Performance Marketing Network for Crypto, Forex & DeFi",
  description: "Join AdsMarket FX, the exclusive invite-only performance marketing network trusted by elite affiliates and top-tier campaigns in crypto, forex & DeFi. Access premium CPA offers, real-time analytics, dual-traffic ecosystem & dedicated support to scale your ROI.",
  keywords: ["performance marketing network", "crypto affiliate marketing", "forex CPA offers", "DeFi affiliate programs", "invite-only network"],
  openGraph: {
    title: "AdsMarket FX – Invite-Only Performance Marketing Network for Crypto, Forex & DeFi",
    description: "Join AdsMarket FX, the exclusive invite-only performance marketing network trusted by elite affiliates and top-tier campaigns in crypto, forex & DeFi.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsMarket FX – Invite-Only Performance Marketing Network for Crypto, Forex & DeFi",
    description: "Join AdsMarket FX, the exclusive invite-only performance marketing network trusted by elite affiliates and top-tier campaigns in crypto, forex & DeFi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AdsMarket FX",
    "url": "https://adsmarketfx.com",
    "logo": "https://adsmarketfx.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/adsmarketfx",
      "https://x.com/adsmarketfx"
    ],
    "description": "AdsMarket FX is an invite-only performance marketing network specializing in crypto, forex, and DeFi campaigns, connecting elite affiliates with top-tier advertisers worldwide."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}