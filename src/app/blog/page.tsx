import type { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";

export const metadata: Metadata = {
  title: "Insights & News – Performance Marketing in Crypto, Forex & DeFi | AdsMarket FX",
  description: "Stay ahead with AdsMarket FX insights on affiliate trends, CPA strategies, and performance marketing in crypto, forex, and DeFi. Learn from industry experts.",
  keywords: ["performance marketing blog", "crypto affiliate trends", "forex CPA insights", "DeFi marketing news"],
  openGraph: {
    title: "Insights & News – Performance Marketing in Crypto, Forex & DeFi | AdsMarket FX",
    description: "Stay ahead with AdsMarket FX insights on affiliate trends, CPA strategies, and performance marketing in crypto, forex, and DeFi.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & News – Performance Marketing in Crypto, Forex & DeFi | AdsMarket FX",
    description: "Stay ahead with AdsMarket FX insights on affiliate trends, CPA strategies, and performance marketing.",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-8">
          Insights & News
        </h1>
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl text-secondary-text mb-6">
            Stay ahead with expert insights on performance marketing.
          </p>
          <p className="text-lg text-secondary-text mb-6">
            Explore the latest affiliate trends, CPA strategies, and performance marketing developments in crypto, forex, and DeFi. Learn from industry experts and stay informed about the evolving landscape of digital marketing.
          </p>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
