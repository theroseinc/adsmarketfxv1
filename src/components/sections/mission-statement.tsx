import Link from "next/link";

const MissionStatement = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-6xl px-10 transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex flex-col items-start">
          <h2 className="text-foreground font-display text-[3rem] font-normal leading-[1.2] tracking-[-0.01em]">
            Elite Affiliates. Premium Traffic. Maximum ROI.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl">
            ADSMARKETFX is an invite-only performance marketing network connecting vetted affiliates with high-converting crypto, forex, and DeFi campaigns. Our dual-traffic ecosystem combines elite affiliate partners with in-house media buying for guaranteed quality and results.
          </p>
          <div className="mt-12">
            <Link href="/about" className="inline-block rounded-full border border-ring bg-transparent px-6 py-3 text-sm font-medium text-foreground cursor-pointer transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-lg hover:scale-105 active:scale-95">
              Why Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;