export default function CommunityCta() {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="bg-[#EBEBEB] rounded-[24px] sm:rounded-[32px] py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16">
          <div className="container mx-auto flex flex-col items-center px-10 text-center">
            <h2 
              className="mb-6 max-w-[1000px] text-5xl font-normal leading-[1.1] tracking-[-0.02em] md:text-[64px]" 
              style={{ opacity: 1, transform: 'none' }}
            >
              Join the Network. Scale Beyond Limits.
            </h2>
            <p 
              className="mb-10 max-w-2xl text-lg text-muted-foreground" 
              style={{ opacity: 1, transform: 'none' }}
            >
              ADSMarketFX is an invite-only performance marketing network connecting elite affiliates with high-converting crypto and forex offers. We deliver transparency, premium support, and consistent ROI—because real growth requires real partnerships.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 items-center" 
              style={{ opacity: 1, transform: 'none' }}
            >
              <div tabIndex={0}>
                <a 
                  className="btn inline-block rounded-full bg-black px-[30px] py-3 text-white transition-colors duration-300 hover:bg-black/80" 
                  href="/advertisers"
                >
                  Join as Advertiser
                </a>
              </div>
              <div tabIndex={0}>
                <a 
                  className="btn inline-block rounded-full border border-black bg-transparent px-[30px] py-3 text-black transition-colors duration-300 hover:bg-black hover:text-white" 
                  href="/affiliates"
                >
                  Join as Publisher
                </a>
              </div>
            </div>
            <p 
              className="mt-8 text-sm text-muted-foreground italic" 
              style={{ opacity: 1 }}
            >
              Your success starts with the right connections — and we only work with the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}