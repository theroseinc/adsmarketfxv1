import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { FileText, Video, Headphones, TrendingUp, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources – AdsMarket FX Performance Marketing Hub",
  description: "Access exclusive resources, guides, case studies, and industry insights to maximize your performance marketing success in crypto, forex & DeFi.",
  keywords: ["marketing resources", "affiliate guides", "crypto case studies", "forex marketing tools", "DeFi resources"],
  openGraph: {
    title: "Resources – AdsMarket FX Performance Marketing Hub",
    description: "Access exclusive resources and insights for performance marketing success.",
    type: "website",
  },
};

const resourceCategories = [
  {
    title: "Guides & Tutorials",
    description: "Step-by-step guides to maximize your campaigns and optimize performance across all channels.",
    icon: FileText,
    color: "bg-service-card-blue",
  },
  {
    title: "Video Tutorials",
    description: "Visual walkthroughs of platform features, campaign setup, and optimization strategies.",
    icon: Video,
    color: "bg-service-card-olive",
  },
  {
    title: "Podcast Series",
    description: "Industry insights and conversations with top performers in affiliate marketing.",
    icon: Headphones,
    color: "bg-service-card-terracotta",
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and campaign data from our network of elite partners.",
    icon: TrendingUp,
    color: "bg-service-card-purple",
  },
  {
    title: "Community Forum",
    description: "Connect with fellow affiliates and advertisers to share strategies and insights.",
    icon: Users,
    color: "bg-[#00594D]",
  },
  {
    title: "Market Reports",
    description: "Industry trends, market analysis, and performance benchmarks to stay ahead.",
    icon: Target,
    color: "bg-[#6B7856]",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pb-24">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 sm:mb-8">
              Resources Hub
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
              Everything you need to succeed in performance marketing. Access exclusive guides, case studies, industry insights, and tools to maximize your campaigns.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {resourceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className={`${category.color} rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 text-white min-h-[280px] sm:min-h-[320px] flex flex-col justify-between hover:scale-[1.02] transition-transform`}
                  >
                    <div>
                      <Icon className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8" strokeWidth={1.5} />
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed opacity-90">
                        {category.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 leading-tight">
                Coming Soon
              </h2>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
                We're building a comprehensive resource library for our community. Check back soon for guides, tutorials, case studies, and exclusive industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Get Early Access
                </a>
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
