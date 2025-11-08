"use client";

import Link from "next/link";
import Image from "next/image";

const CallToActionCards = () => {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-normal text-foreground mb-6">
          Why Partner With ADSMARKETFX
        </h2>
        <p className="text-base sm:text-lg text-secondary-text max-w-3xl mb-12">
          Premium Traffic Guarantee. Weekly Payments. Dedicated Support. We deliver results that matter—backed by real partnerships, not just promises.
        </p>

        <div className="hidden lg:flex flex-col gap-4 w-full">
          {/* Card 1: Our Foundation */}
          <Link href="/our-principles" className="block group">
            <article className="relative bg-[var(--color-pure-white)] rounded-[20px] overflow-hidden border border-[var(--color-border)] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 p-5">
                {/* Left Dot */}
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary-text)] flex-shrink-0"></div>

                {/* Image Thumbnail */}
                <div className="relative w-16 h-16 rounded-[12px] overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-terracotta)] to-[var(--color-olive-green)]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03717330-1ca2-4a48-a77e-4f44e386c500-colabs-com-au/assets/images/next-244901-M49EM8-scaled.jpg"
                    alt="Our Foundation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[14px] font-medium text-[var(--color-medium-gray)]">Foundation</span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[var(--color-foreground)] flex items-center justify-between group-hover:text-[var(--color-primary)] transition-colors">
                    Our Foundation
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </h3>
                </div>

                {/* Right Dot */}
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary-text)] flex-shrink-0"></div>
              </div>
            </article>
          </Link>

          {/* Card 2: Leaderboard */}
          <Link href="/leaderboard" className="block group">
            <article className="relative bg-[var(--color-pure-white)] rounded-[20px] overflow-hidden border border-[var(--color-border)] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 p-5">
                {/* Left Dot */}
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0"></div>

                {/* Icon Thumbnail */}
                <div className="relative w-16 h-16 rounded-[12px] overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-primary)] to-[#0052FF] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[14px] font-medium text-[var(--color-medium-gray)] flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                      </svg>
                      Rankings
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[var(--color-foreground)] flex items-center justify-between group-hover:text-[var(--color-primary)] transition-colors">
                    Leaderboard
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </h3>
                </div>

                {/* Right Dot */}
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0"></div>
              </div>
            </article>
          </Link>

          {/* Card 3: Partners */}
          <Link href="/partners" className="block group">
            <article className="relative bg-[var(--color-pure-white)] rounded-[20px] overflow-hidden border border-[var(--color-border)] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 p-5">
                {/* Left Dot */}
                <div className="w-2 h-2 rounded-full bg-[var(--color-forest-green)] flex-shrink-0"></div>

                {/* Image Thumbnail */}
                <div className="relative w-16 h-16 rounded-[12px] overflow-hidden flex-shrink-0 bg-gradient-to-br from-[var(--color-forest-green)] to-[var(--color-olive-green)]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/powerful-roi-optimization-visual-dark-te-a2ffea46-20251028055747.jpg"
                    alt="Maximum ROI"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[14px] font-medium text-[var(--color-medium-gray)]">Performance</span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[var(--color-foreground)] flex items-center justify-between group-hover:text-[var(--color-primary)] transition-colors">
                    Maximum ROI Focus
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </h3>
                </div>

                {/* Right Dot */}
                <div className="w-2 h-2 rounded-full bg-[var(--color-forest-green)] flex-shrink-0"></div>
              </div>
            </article>
          </Link>
        </div>

        {/* Mobile/Tablet View - Original Cards */}
        <div className="grid grid-cols-1 lg:hidden gap-6">
          <Link
            href="/our-principles"
            className="group relative flex flex-col justify-between p-8 bg-[var(--color-terracotta)] rounded-[2rem] min-h-[300px] overflow-hidden"
          >
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium leading-tight text-white">
              Our Foundation – Rigorous Vetting Process
            </h3>
            <div className="relative z-10 self-end">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href="/leaderboard"
            className="group relative flex flex-col justify-between p-8 bg-[var(--color-primary)] rounded-[2rem] min-h-[300px] overflow-hidden"
          >
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium leading-tight text-white">
              Leaderboard – Top Performers
            </h3>
            <div className="relative z-10 self-end">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href="/partners"
            className="group relative flex flex-col justify-between p-8 bg-[var(--color-forest-green)] rounded-[2rem] min-h-[300px] overflow-hidden"
          >
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium leading-tight text-white">
              Maximum ROI Focus – Optimized Performance
            </h3>
            <div className="relative z-10 self-end">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionCards;