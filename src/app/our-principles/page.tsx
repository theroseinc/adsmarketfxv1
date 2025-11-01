import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Principles – AdsMarket FX Performance Marketing Values",
  description: "Discover the core principles that drive AdsMarket FX: innovation, transparency, elite partnerships, and data-driven performance in crypto, forex & DeFi marketing.",
  keywords: ["performance marketing principles", "crypto marketing values", "forex network ethics", "DeFi partnership standards"],
  openGraph: {
    title: "Our Principles – AdsMarket FX Performance Marketing Values",
    description: "Discover the core principles that drive AdsMarket FX in performance marketing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Principles – AdsMarket FX Performance Marketing Values",
    description: "Discover the core principles that drive AdsMarket FX in performance marketing.",
  },
};

const principles = [
  {
    title: "Dual-Traffic Ecosystem",
    description: "Where elite affiliates meet battle-tested media buyers. We've cracked the code on blending organic partnerships with laser-focused paid acquisition. The result? Traffic that converts at scale while maintaining pristine quality standards your brand deserves.",
    icon: Target,
    color: "bg-service-card-terracotta",
    stats: ["250+ Verified Affiliates", "15M+ Monthly Impressions", "Tier-1 GEO Focus"]
  },
  {
    title: "Data-Driven Performance",
    description: "Algorithms that think faster than markets move. Our AI-powered optimization engine dissects every click, scroll, and conversion in real-time—automatically shifting budgets to winning campaigns while killing underperformers before they drain your ROI.",
    icon: TrendingUp,
    color: "bg-service-card-blue",
    stats: ["Real-Time Analytics", "AI-Powered Optimization", "Sub-Second Reporting"]
  },
  {
    title: "Partner Empowerment",
    description: "We don't just pay you—we arm you with weapons. Exclusive offers, white-glove support, and payouts that actually arrive on time. Join a network where top performers get VIP treatment, custom funnels, and the kind of intel that separates six-figure months from seven-figure years.",
    icon: Users,
    color: "bg-service-card-olive",
    stats: ["Weekly Payouts", "Dedicated Managers", "Custom Creatives"]
  },
  {
    title: "Premium Traffic at Scale",
    description: "Flood your funnels with traffic that actually clicks Buy. We tap tier-1 GEOs across native, display, push, and pop—delivering millions of qualified eyeballs daily. Every visitor pre-filtered through military-grade fraud detection. Quality meets volume. Finally.",
    icon: Zap,
    color: "bg-service-card-purple",
    stats: ["Multi-Channel Sources", "Fraud Detection", "98% Success Rate"]
  },
];

export default function OurPrinciplesPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pb-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container">
            <div className="max-w-5xl">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Foundation
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 sm:mb-8">
                The Principles That Drive Performance
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
                At AdsMarket FX, we've built the performance marketing network that affiliates trust and advertisers depend on. These four principles guide everything we do—from partner vetting to payout processing.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Principle Card */}
        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden mb-12 sm:mb-16 lg:mb-20 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-primary via-primary/90 to-teal-accent">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <div className="max-w-4xl">
                  <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <span className="text-sm font-semibold text-white uppercase tracking-wider">
                      Our Core Belief
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                    Performance Marketing Should Work For Everyone
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-8">
                    Not just the platforms. Not just the advertisers. We built AdsMarket FX to be the network where affiliates thrive, advertisers scale, and transparency isn't a buzzword—it's the default.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                      <div className="text-3xl font-bold text-white">$50M+</div>
                      <div className="text-sm text-white/80">Revenue Generated</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                      <div className="text-3xl font-bold text-white">5.8x</div>
                      <div className="text-sm text-white/80">Average ROI</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                      <div className="text-3xl font-bold text-white">98%</div>
                      <div className="text-sm text-white/80">Partner Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {principles.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <div
                    key={principle.title}
                    className={`${principle.color} rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 text-white min-h-[320px] sm:min-h-[360px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <div>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
                        {principle.title}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 mb-6">
                        {principle.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-white/20">
                      {principle.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <span className="text-sm font-medium opacity-90">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-secondary-text mb-10 leading-relaxed">
                Join a network where principles aren't just posted on a page—they're embedded in every campaign, every payout, every partnership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/advertisers"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 group"
                >
                  Launch a Campaign
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/affiliates"
                  className="inline-flex items-center justify-center border-2 border-foreground text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-foreground hover:text-background transition-all hover:scale-105 group"
                >
                  Become an Affiliate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}