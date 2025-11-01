import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Last Updated: January 1, 2025
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                1. Introduction
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                ADSMarketFX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our performance marketing network platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-2">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                    <li>Name, email address, and contact information</li>
                    <li>Company name and business details</li>
                    <li>Payment and billing information</li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">2.2 Usage Information</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, operating system, referral URLs, page views, and access times.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">2.3 Performance Data</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    For affiliates and advertisers, we collect campaign performance metrics, conversion data, click-through rates, and other analytics necessary to operate our network.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To track and analyze campaign performance</li>
                <li>To communicate with you about your account and our services</li>
                <li>To detect and prevent fraud or unauthorized activities</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                <li><strong>With Partners:</strong> Between affiliates and advertisers as necessary for campaign operations</li>
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                5. Data Security
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                We use cookies, pixels, and similar tracking technologies to collect usage information, analyze trends, track conversions, and improve our services. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                <li>Access and obtain a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                8. Data Retention
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or for legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                12. Contact Us
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-card rounded-2xl p-6 space-y-2">
                <p className="text-base sm:text-lg text-secondary-text">
                  <strong>Email:</strong> info@adsmarketfx.com
                </p>
                <p className="text-base sm:text-lg text-secondary-text">
                  <strong>Subject:</strong> Privacy Policy Inquiry
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
