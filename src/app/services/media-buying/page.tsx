import { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "In-House Media Buying – Expert Campaign Management | AdsMarket FX",
  description: "Professional media buying services with expert campaign management and optimization. Maximize ROI across multiple channels with data-driven strategies.",
  keywords: ["media buying", "campaign management", "paid advertising", "performance marketing optimization"],
};

const features = [
  "Expert campaign setup and management",
  "Multi-channel advertising optimization",
  "A/B testing and creative optimization",
  "Budget allocation and bid management",
  "Real-time performance monitoring",
  "Detailed reporting and analytics",
];

export default function MediaBuyingPage() {
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0047FF] flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                  In-House Media Buying
                </h1>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-text max-w-3xl leading-relaxed">
              Professional media buying with expert campaign management and optimization. Our team leverages data-driven strategies to maximize your ROI across all channels.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden mb-12 sm:mb-16 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/media-buying-advertising-platforms%2c-vi-454e4ff7-20251014165847.jpg?"
                alt="In-House Media Buying"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0047FF]/80 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8 leading-tight">
                  What We Offer
                </h2>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0047FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-base sm:text-lg text-secondary-text leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-[20px] sm:rounded-[24px] p-8 sm:p-10 border border-border">
                <h3 className="text-2xl sm:text-3xl font-medium mb-6">
                  Launch Your Campaign
                </h3>
                <p className="text-base sm:text-lg text-secondary-text mb-8 leading-relaxed">
                  Let our media buying experts handle your campaigns from setup to optimization. Get started today and see measurable results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#0047FF] text-white rounded-full text-lg font-medium hover:bg-[#0047FF]/90 transition-colors"
                >
                  Contact Us
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
