import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { BookOpen, Newspaper, Podcast, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Journal – AdsMarket FX Insights & Resources",
  description: "Stay informed with AdsMarket FX community journal. Access industry insights, performance marketing trends, affiliate success stories, and expert analysis in crypto, forex & DeFi.",
  keywords: ["performance marketing journal", "crypto insights", "forex trends", "DeFi community", "affiliate marketing resources"],
  openGraph: {
    title: "Community Journal – AdsMarket FX Insights & Resources",
    description: "Stay informed with AdsMarket FX community journal and industry insights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Journal – AdsMarket FX Insights & Resources",
    description: "Stay informed with AdsMarket FX community journal and industry insights.",
  },
};

const contentTypes = [
  {
    title: "Articles & Insights",
    description: "In-depth analysis and expert perspectives on performance marketing trends, strategies, and industry developments.",
    icon: BookOpen,
    color: "bg-service-card-blue",
  },
  {
    title: "Industry News",
    description: "Stay updated with the latest news and developments in crypto, forex, and DeFi affiliate marketing.",
    icon: Newspaper,
    color: "bg-service-card-olive",
  },
  {
    title: "Podcasts",
    description: "Tune into conversations with industry leaders, successful affiliates, and marketing experts.",
    icon: Podcast,
    color: "bg-service-card-terracotta",
  },
  {
    title: "Case Studies",
    description: "Real-world success stories and performance data from campaigns across our network.",
    icon: Video,
    color: "bg-service-card-purple",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pb-24">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 sm:mb-8">
              Community Journal
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
              Explore insights, trends, and resources from the AdsMarket FX community. Stay ahead in performance marketing with expert analysis and real-world success stories.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
              {contentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className={`${type.color} rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 text-white min-h-[280px] sm:min-h-[320px] flex flex-col`}
                  >
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8" strokeWidth={1.5} />
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
                      {type.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
                      {type.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-card rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 text-center border border-border">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
                Coming Soon
              </h2>
              <p className="text-lg sm:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed">
                We're building a comprehensive resource hub for our community. Check back soon for articles, podcasts, case studies, and more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
