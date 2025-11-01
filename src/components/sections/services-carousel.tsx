"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Vetted Affiliate Network",
    description: "Pre-screened partners with proven track records",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/affiliate-network-connections%2c-glowing-c8d92b94-20251014165832.jpg?",
    color: "#6B7C4A",
    href: "/services/affiliate-management",
  },
  {
    title: "In-House Media Buying",
    description: "Expert campaign management and optimization",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/media-buying-advertising-platforms%2c-vi-454e4ff7-20251014165847.jpg?",
    color: "#0047FF",
    href: "/services/media-buying",
  },
  {
    title: "Premium CPA Offers",
    description: "High-converting campaigns in crypto, forex & DeFi",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/cryptocurrency-cpa-campaigns-visualizati-15560793-20251014165822.jpg?",
    color: "#B5663D",
    href: "/services/cpa-campaigns",
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance with advanced reporting tools",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/campaign-optimization-analytics%2c-periw-f68b8b63-20251014165838.jpg?",
    color: "#6B7BC4",
    href: "/services/campaign-optimization",
  },
];

export default function ServicesCarousel() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container">
        <div className="-mx-10">
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-10 pb-5 px-10 scrollbar-hide">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex-shrink-0 snap-start"
                style={{ perspective: "1000px", opacity: 1, transform: "none" }}
              >
                <div
                  className="relative w-[480px] h-[320px] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden text-white group"
                  style={{ 
                    transformStyle: "preserve-3d",
                    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px",
                    transform: "none",
                    backgroundColor: service.color
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-[280px] h-[280px] rounded-bl-full rounded-tr-[32px] overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Image
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      fill
                      className="transition-all duration-700 ease-out group-hover:brightness-110 object-cover"
                      sizes="100vw"
                      src={service.image}
                    />
                    <div 
                      className="absolute inset-0 mix-blend-color pointer-events-none"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <Link href={service.href} className="w-3/5 block">
                      <h4
                        className="font-display font-medium text-[32px] leading-tight text-white"
                        style={{ transform: "none" }}
                      >
                        {service.title}
                      </h4>
                      <p className="text-white/80 text-sm mt-2">{service.description}</p>
                    </Link>
                    <Link
                      href={service.href}
                      aria-label={`Learn more about ${service.title}`}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-white text-lg font-body">Learn More</span>
                      <div tabIndex={0}>
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                          <svg
                            width="15"
                            height="14"
                            viewBox="0 0 15 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.38672 12.5L13.6133 1.5M13.6133 1.5V11.1M13.6133 1.5H3.01328"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}