import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Users, TrendingUp, DollarSign, LineChart } from "lucide-react";
import Link from "next/link";

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

const services = [
  {
    title: "Vetted Affiliate Network",
    description: "Connect with our exclusive network of pre-screened partners with proven track records in crypto, forex & DeFi.",
    icon: Users,
    color: "bg-[#6B7C4A]",
    href: "/services/affiliate-management",
  },
  {
    title: "In-House Media Buying",
    description: "Professional media buying with expert campaign management and optimization across multiple channels.",
    icon: TrendingUp,
    color: "bg-[#0047FF]",
    href: "/services/media-buying",
  },
  {
    title: "Premium CPA Offers",
    description: "Access exclusive, high-converting CPA campaigns in crypto, forex & DeFi with competitive payouts.",
    icon: DollarSign,
    color: "bg-[#B5663D]",
    href: "/services/cpa-campaigns",
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance with advanced reporting tools and real-time analytics for data-driven decisions.",
    icon: LineChart,
    color: "bg-[#6B7BC4]",
    href: "/services/campaign-optimization",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pb-24">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 sm:mb-8">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
              Comprehensive performance marketing solutions designed to maximize your success in crypto, forex, and DeFi markets.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`${service.color} rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 text-white min-h-[320px] sm:min-h-[360px] flex flex-col justify-between hover:scale-[1.02] transition-transform`}
                  >
                    <div>
                      <Icon className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8" strokeWidth={1.5} />
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
                        {service.title}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors mt-6">
                      <span className="text-lg font-medium">Learn more</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}