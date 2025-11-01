import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LineChart, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Real-Time Analytics – Performance Tracking & Reporting | AdsMarket FX",
  description: "Track campaign performance with advanced real-time analytics and reporting tools. Make data-driven decisions with comprehensive insights and metrics.",
  keywords: ["real-time analytics", "campaign tracking", "performance reporting", "marketing analytics", "data insights"],
};

const features = [
  "Real-time campaign performance tracking",
  "Advanced reporting dashboard with custom metrics",
  "Conversion tracking and attribution modeling",
  "Traffic quality analysis and fraud detection",
  "ROI calculation and profitability insights",
  "Automated alerts and performance notifications",
];

export default function CampaignOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pb-24">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="container">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-secondary-text hover:text-foreground mb-6 sm:mb-8 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
            
            <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#6B7BC4] flex items-center justify-center flex-shrink-0">
                <LineChart className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                  Real-Time Analytics
                </h1>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
              Track performance with advanced reporting tools and real-time analytics. Make data-driven decisions with comprehensive insights into every aspect of your campaigns.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden mb-12 sm:mb-16 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/campaign-optimization-analytics%2c-periw-f68b8b63-20251014165838.jpg?"
                alt="Real-Time Analytics"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B7BC4]/80 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8 leading-tight">
                  Analytics Features
                </h2>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#6B7BC4] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-base sm:text-lg text-secondary-text leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-[20px] sm:rounded-[24px] p-8 sm:p-10 border border-border">
                <h3 className="text-2xl sm:text-3xl font-medium mb-6">
                  Get Started with Analytics
                </h3>
                <p className="text-base sm:text-lg text-secondary-text mb-8 leading-relaxed">
                  Access powerful analytics tools to track, measure, and optimize your campaigns for maximum performance and ROI.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#6B7BC4] text-white rounded-full text-lg font-medium hover:bg-[#6B7BC4]/90 transition-colors"
                >
                  Learn More
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
