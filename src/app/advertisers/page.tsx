"use client";

import type { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Mail, User, Target, BarChart3, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdvertisersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    companyWebsite: "",
    campaignGoals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Advertiser Application',
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Application submitted successfully! We will contact you within 24-48 hours.');
        setFormData({
          fullName: "",
          companyName: "",
          workEmail: "",
          companyWebsite: "",
          campaignGoals: ""
        });
      } else {
        toast.error(result.message || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                For Advertisers
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
              Launch Your Next Campaign
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text max-w-3xl mx-auto">
              Connect with high-quality traffic sources and verified affiliates. Experience performance-driven advertising that delivers measurable results.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Company Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-accent/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-teal-accent" />
                  </div>
                  Contact Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="workEmail" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="companyWebsite" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Company Website *
                    </label>
                    <input
                      type="url"
                      id="companyWebsite"
                      name="companyWebsite"
                      required
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className="w-full px-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Campaign Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-forest-green/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-forest-green" />
                  </div>
                  Campaign Details
                </h2>

                <div className="space-y-2">
                  <label htmlFor="campaignGoals" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Tell us about your campaign goals *
                  </label>
                  <textarea
                    id="campaignGoals"
                    name="campaignGoals"
                    required
                    value={formData.campaignGoals}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your target audience, budget range, KPIs, and what success looks like for your campaigns..."
                    className="w-full px-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg resize-none"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Share details about your target markets, expected volumes, and campaign objectives.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Advertiser Application'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Our team will review your application and get back to you within 24-48 hours.
                </p>
              </div>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Traffic</h3>
              <p className="text-muted-foreground text-sm">
                Access verified affiliates and high-quality traffic sources for maximum ROI.
              </p>
            </div>
            <div className="bg-teal-accent/5 rounded-2xl p-6 border border-teal-accent/20">
              <div className="h-12 w-12 bg-teal-accent rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Track every conversion with detailed reporting and insights.
              </p>
            </div>
            <div className="bg-forest-green/5 rounded-2xl p-6 border border-forest-green/20">
              <div className="h-12 w-12 bg-forest-green rounded-full flex items-center justify-center mb-4">
                <HeadphonesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground text-sm">
                Work with experienced account managers who understand your goals.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}