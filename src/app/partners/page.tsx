import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Handshake, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner with AdsMarket FX – Grow Together in Performance Marketing",
  description: "Join AdsMarket FX as a strategic partner. Build long-term relationships with our exclusive network of elite affiliates, advertisers, and industry leaders in crypto, forex & DeFi.",
  keywords: ["partnership opportunities", "performance marketing partners", "crypto partnerships", "forex affiliate partnerships"],
  openGraph: {
    title: "Partner with AdsMarket FX – Grow Together in Performance Marketing",
    description: "Join AdsMarket FX as a strategic partner and grow together in performance marketing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with AdsMarket FX – Grow Together in Performance Marketing",
    description: "Join AdsMarket FX as a strategic partner and grow together in performance marketing.",
  },
};

const benefits = [
  {
    title: "Exclusive Network Access",
    description: "Connect with elite affiliates, advertisers, and industry leaders in our invite-only ecosystem.",
    icon: Users,
  },
  {
    title: "Performance-Driven Results",
    description: "Leverage data-driven insights and real-time analytics to maximize ROI and scale campaigns.",
    icon: TrendingUp,
  },
  {
    title: "Targeted Campaigns",
    description: "Reach highly qualified audiences in crypto, forex, and DeFi markets with precision targeting.",
    icon: Target,
  },
  {
    title: "Strategic Collaboration",
    description: "Build long-term partnerships with dedicated support and resources to ensure mutual success.",
    icon: Handshake,
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pb-24">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 sm:mb-8">
              Partner With Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
              Join AdsMarket FX as a strategic partner and grow together through our exclusive performance marketing network. We connect industry leaders with unparalleled opportunities in crypto, forex, and DeFi.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-10 sm:mb-14">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-card rounded-[20px] sm:rounded-[24px] p-8 sm:p-10 border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-medium mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-base sm:text-lg text-secondary-text leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="bg-primary rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
                Ready to Partner?
              </h2>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our partnership team to explore collaboration opportunities and start growing together.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
