import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CallToActionCards = () => {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container">
        <h2 className="text-4xl font-normal text-primary mb-10">
          Why Partner With ADSMARKETFX
        </h2>
        <p className="text-lg text-secondary-text max-w-3xl mb-12">
          Premium Traffic Guarantee. Weekly Payments. Dedicated Support. We deliver results that matter—backed by real partnerships, not just promises.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Large card - left side */}
          <div style={{ perspective: '1200px' }}>
            <Link
              href="/about"
              className="group relative flex flex-col justify-between p-10 bg-[#B76E4E] rounded-[2rem] min-h-[600px] overflow-hidden block"
            >
              <div className="absolute inset-0 bg-[#B76E4E]" style={{ transformStyle: 'preserve-3d' }}></div>
              
              <h3 className="relative z-10 text-3xl sm:text-4xl font-medium leading-tight max-w-sm text-white pr-4">
                Rigorous Vetting Process – Only the best affiliates make it through
              </h3>

              <div className="absolute -bottom-[15%] -left-[20%] w-[500px] h-[500px] z-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/ultra-premium-vip-exclusive-membership-c-289f2d88-20251028055745.jpg"
                  alt="Ultra-premium VIP exclusive membership network"
                  width={500}
                  height={500}
                  className="rounded-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>

              <div className="relative z-10 self-end" tabIndex={0}>
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
                  <ArrowRight className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>

          {/* Two smaller cards - right side */}
          <div className="flex flex-col gap-10">
            {/* Card 2 */}
            <div style={{ perspective: '1200px' }}>
              <Link
                href="/partners"
                className="group relative flex flex-col justify-between p-8 sm:p-10 bg-[#00594D] rounded-[2rem] flex-1 overflow-hidden block min-h-[280px]"
              >
                <div className="absolute inset-0 bg-[#00594D]" style={{ transformStyle: 'preserve-3d' }}></div>
                
                <h3 className="relative z-20 text-3xl sm:text-4xl font-medium leading-tight max-w-sm text-white pr-4">
                  Maximum ROI Focus – Every campaign optimized for peak performance
                </h3>

                <div className="absolute bottom-0 left-0 right-0 h-2/3 z-10">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/powerful-roi-optimization-visual-dark-te-a2ffea46-20251028055747.jpg"
                    alt="Powerful ROI optimization with holographic growth curves"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>

                <div className="relative z-20 self-end" tabIndex={0}>
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
                    <ArrowRight className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div style={{ perspective: '1200px' }}>
              <Link
                href="/services"
                className="group relative flex flex-col justify-between p-8 sm:p-10 bg-[#6B7856] rounded-[2rem] flex-1 overflow-hidden block min-h-[280px]"
              >
                <div className="absolute inset-0 bg-[#6B7856]" style={{ transformStyle: 'preserve-3d' }}></div>
                
                <h3 className="relative z-20 text-3xl sm:text-4xl font-medium leading-tight max-w-sm text-white pr-4">
                  Real-Time Analytics &amp; Dedicated Support – Track performance 24/7
                </h3>

                <div className="absolute bottom-0 left-0 right-0 h-2/3 z-10">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/revolutionary-real-time-analytics-dashbo-73ca5f1c-20251028055743.jpg"
                    alt="Revolutionary real-time analytics dashboard with flowing data"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>

                <div className="relative z-20 self-end" tabIndex={0}>
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
                    <ArrowRight className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionCards;