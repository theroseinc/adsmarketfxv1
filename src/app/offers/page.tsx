import type { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";

export const metadata: Metadata = {
  title: "Premium CPA Offers for Crypto, Forex & DeFi – AdsMarket FX",
  description: "Access exclusive, high-converting CPA offers and campaigns across crypto, forex & DeFi. AdsMarket FX connects top advertisers with vetted affiliates through data-driven performance solutions.",
  keywords: ["CPA offers", "crypto CPA network", "forex performance campaigns", "DeFi affiliate programs"],
  openGraph: {
    title: "Premium CPA Offers for Crypto, Forex & DeFi – AdsMarket FX",
    description: "Access exclusive, high-converting CPA offers and campaigns across crypto, forex & DeFi.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium CPA Offers for Crypto, Forex & DeFi – AdsMarket FX",
    description: "Access exclusive, high-converting CPA offers and campaigns across crypto, forex & DeFi.",
  },
};

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-8">
          Premium CPA Offers
        </h1>
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl text-secondary-text mb-6">
            Access exclusive, high-converting CPA offers and campaigns across crypto, forex & DeFi.
          </p>
          <p className="text-lg text-secondary-text mb-6">
            AdsMarket FX connects top advertisers with vetted affiliates through data-driven performance solutions designed to maximize conversions and revenue.
          </p>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
