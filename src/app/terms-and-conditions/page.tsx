import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
            Terms and Conditions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Last Updated: January 1, 2025
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                By accessing or using ADSMarketFX's platform and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not access or use our services. ADSMarketFX operates an invite-only performance marketing network connecting affiliates with crypto and forex offers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                2. Eligibility and Account Registration
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">2.1 Eligibility Requirements</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-2">
                    To use our services, you must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Receive an invitation to join our network</li>
                    <li>Complete our vetting process successfully</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">2.2 Account Security</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breaches.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                3. Services Description
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                ADSMarketFX provides a performance marketing network platform that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                <li>Connects elite affiliates with high-converting crypto and forex offers</li>
                <li>Provides tracking, reporting, and analytics tools</li>
                <li>Facilitates commission payments between advertisers and affiliates</li>
                <li>Offers campaign optimization and support services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                4. Affiliate Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">4.1 Promotion Guidelines</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-2">
                    Affiliates must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                    <li>Promote offers only through approved marketing methods</li>
                    <li>Provide accurate and truthful information about advertised products</li>
                    <li>Not engage in fraudulent, deceptive, or illegal activities</li>
                    <li>Comply with all applicable advertising laws and regulations</li>
                    <li>Not bid on trademarked terms without explicit permission</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">4.2 Prohibited Activities</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-2">
                    Affiliates are strictly prohibited from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                    <li>Cookie stuffing or incentivized traffic</li>
                    <li>Click fraud or generating artificial traffic</li>
                    <li>Using bots, scripts, or automated tools to generate actions</li>
                    <li>Misleading or false advertising</li>
                    <li>Spamming or unsolicited communications</li>
                    <li>Violating intellectual property rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">4.3 Commissions and Payments</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    Commission rates are specified for each offer. Payments are processed according to the payment schedule defined in your agreement. We reserve the right to withhold payments for suspected fraudulent activity pending investigation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                5. Advertiser Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">5.1 Offer Requirements</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    Advertisers must provide accurate offer details, tracking links, and promotional materials. All offers must comply with applicable laws and regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">5.2 Payment Obligations</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    Advertisers agree to pay agreed-upon commissions for valid conversions. Payment terms will be specified in individual agreements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                All content, trademarks, logos, and intellectual property on our platform are owned by ADSMarketFX or our licensors. You may not use our intellectual property without prior written permission. Affiliates and advertisers grant us a limited license to use their content and trademarks solely for providing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                7. Data and Tracking
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                Our platform uses cookies and tracking technologies to monitor campaign performance. By using our services, you consent to this tracking. All data collection and usage are subject to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                8. Compliance and Regulatory Requirements
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                All users must comply with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                <li>Anti-money laundering (AML) and know-your-customer (KYC) regulations</li>
                <li>Financial services regulations in their jurisdiction</li>
                <li>Data protection and privacy laws (GDPR, CCPA, etc.)</li>
                <li>Advertising standards and consumer protection laws</li>
                <li>Cryptocurrency and forex trading regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                9. Termination and Suspension
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                We reserve the right to suspend or terminate your account at any time for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-secondary-text">
                <li>Violation of these Terms and Conditions</li>
                <li>Fraudulent or illegal activities</li>
                <li>Non-payment of fees or commissions</li>
                <li>Inactivity for extended periods</li>
                <li>Any reason at our sole discretion</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mt-4">
                Upon termination, all outstanding payments may be forfeited, and access to the platform will be revoked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                10. Disclaimers and Limitation of Liability
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">10.1 Service Availability</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    We provide our services on an "as is" and "as available" basis. We do not guarantee uninterrupted or error-free service and are not liable for any downtime or technical issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">10.2 Financial Risks</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    Trading in forex and cryptocurrency involves significant risk. We are not responsible for any financial losses incurred through offers promoted on our platform. Users should conduct their own due diligence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">10.3 Limitation of Liability</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                    To the maximum extent permitted by law, ADSMarketFX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                11. Indemnification
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                You agree to indemnify and hold harmless ADSMarketFX, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the jurisdiction specified in our agreement. You waive the right to participate in class action lawsuits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                We reserve the right to modify these Terms and Conditions at any time. We will notify users of material changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                14. Governing Law
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text">
                These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which ADSMarketFX is registered, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-4">
                15. Contact Information
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-secondary-text mb-4">
                For questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="bg-card rounded-2xl p-6 space-y-2">
                <p className="text-base sm:text-lg text-secondary-text">
                  <strong>Email:</strong> info@adsmarketfx.com
                </p>
                <p className="text-base sm:text-lg text-secondary-text">
                  <strong>Subject:</strong> Terms and Conditions Inquiry
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
