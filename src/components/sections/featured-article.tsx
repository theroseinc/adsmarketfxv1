"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="bg-[#FDFCFA] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
            {/* Left Column: Creative Image Card */}
            <div className="relative w-full lg:flex-1 min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 rounded-[20px] sm:rounded-[24px] md:rounded-3xl overflow-hidden group">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/spectacular-abstract-art-showing-revolut-9a5369ad-20251028055745.jpg"
                alt="Spectacular abstract art showing the revolution in performance marketing with explosive transformation from traditional advertising into AI networks"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Column: Text Card */}
            <div className="w-full lg:w-[420px] xl:w-[496px] lg:flex-shrink-0 bg-[#F0F4F9] rounded-[20px] sm:rounded-[24px] md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 border border-black rounded-full text-xs sm:text-[13px] md:text-[14px] font-medium tracking-wider uppercase">
                  Industry Insights
                </span>
                <h4 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium mt-3 sm:mt-4 mb-4 sm:mb-5 md:mb-6 leading-snug text-foreground">
                  The Performance Marketing Revolution: Why Winners Are Ditching Traditional Ads
                </h4>
                <p className="text-base sm:text-[17px] md:text-[18px] text-[#2D2D2D] leading-relaxed">
                  Smart advertisers are abandoning wasteful brand budgets for performance-based models. With AI-driven attribution and real-time optimization, CPA campaigns now deliver 300% better ROI than legacy media. The question isn't whether to pivot—it's whether you'll be late to the party.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-6 sm:mt-8">
                {/* Carousel Dots */}
                <div className="flex items-center gap-2">
                  <button
                    aria-label="View slide 1"
                    className="bg-primary h-2 w-5 sm:w-6 rounded-full"
                  />
                  <button
                    aria-label="View slide 2"
                    className="bg-[#DBE4F6] h-2 w-2 rounded-full"
                  />
                  <button
                    aria-label="View slide 3"
                    className="bg-[#DBE4F6] h-2 w-2 rounded-full"
                  />
                  <button
                    aria-label="View slide 4"
                    className="bg-[#DBE4F6] h-2 w-2 rounded-full"
                  />
                </div>

                {/* Read More Link */}
                <Link href="#" className="flex items-center gap-3 sm:gap-4 group">
                  <span className="text-base sm:text-[17px] md:text-[18px] font-medium text-foreground group-hover:text-primary transition-colors">
                    Read more
                  </span>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;