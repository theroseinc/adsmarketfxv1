"use client";

import type { Metadata } from "next";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Key, Mail, Target, User, DollarSign, Gift, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AffiliatesPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactEmail: "",
    trafficSource: "",
    invitationCode: "",
    audienceDescription: ""
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
          formType: 'Affiliate Application',
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Application submitted successfully! We will review and contact you within 24-48 hours.');
        setFormData({
          fullName: "",
          contactEmail: "",
          trafficSource: "",
          invitationCode: "",
          audienceDescription: ""
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
            <div className="inline-block px-6 py-2 bg-teal-accent/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-teal-accent uppercase tracking-wider">
                For Affiliates & Publishers
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
              Join Our Elite Network
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text max-w-3xl mx-auto">
              Partner with an invite-only network built for top-tier affiliates. Premium offers, real-time analytics, guaranteed payouts.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gradient-to-br from-card via-card to-teal-accent/5 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-teal-accent/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-accent/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-teal-accent" />
                  </div>
                  Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-white border-2 border-border rounded-2xl focus:border-teal-accent focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contactEmail" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required
                      value={formData.contactEmail}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-5 py-4 bg-white border-2 border-border rounded-2xl focus:border-teal-accent focus:outline-none transition-colors text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Traffic & Access */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  Traffic Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="trafficSource" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Primary Traffic Source *
                    </label>
                    <input
                      type="url"
                      id="trafficSource"
                      name="trafficSource"
                      required
                      value={formData.trafficSource}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com or Social Channel URL"
                      className="w-full px-5 py-4 bg-white border-2 border-border rounded-2xl focus:border-teal-accent focus:outline-none transition-colors text-lg"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Website, YouTube channel, social media, or other traffic sources
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="invitationCode" className="text-sm font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                      Invitation Code *
                      <Key className="h-4 w-4 text-teal-accent" />
                    </label>
                    <input
                      type="text"
                      id="invitationCode"
                      name="invitationCode"
                      required
                      value={formData.invitationCode}
                      onChange={handleChange}
                      placeholder="Enter your invite code"
                      className="w-full px-5 py-4 bg-white border-2 border-teal-accent/30 rounded-2xl focus:border-teal-accent focus:outline-none transition-colors text-lg font-mono"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Required for exclusive network access
                    </p>
                  </div>
                </div>
              </div>

              {/* Audience Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-forest-green/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-forest-green" />
                  </div>
                  Audience & Methods
                </h2>

                <div className="space-y-2">
                  <label htmlFor="audienceDescription" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Describe your audience and promotional methods *
                  </label>
                  <textarea
                    id="audienceDescription"
                    name="audienceDescription"
                    required
                    value={formData.audienceDescription}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your audience demographics, traffic volume, promotional channels, content strategy, and what makes your traffic unique..."
                    className="w-full px-5 py-4 bg-white border-2 border-border rounded-2xl focus:border-teal-accent focus:outline-none transition-colors text-lg resize-none"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Include audience size, engagement rates, geographic focus, and niche expertise.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-accent to-primary hover:from-teal-accent/90 hover:to-primary/90 text-white font-semibold py-6 px-8 rounded-full text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Apply for Partnership'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  🔒 Invite-only network. Applications reviewed within 24-48 hours.
                </p>
              </div>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-accent/10 to-teal-accent/5 rounded-2xl p-6 border-2 border-teal-accent/30">
              <div className="h-12 w-12 bg-teal-accent rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Payouts</h3>
              <p className="text-muted-foreground text-sm">
                Industry-leading commission rates with guaranteed on-time payments.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/30">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-muted-foreground text-sm">
                Access crypto, forex & DeFi offers not available on other networks.
              </p>
            </div>
            <div className="bg-gradient-to-br from-forest-green/10 to-forest-green/5 rounded-2xl p-6 border-2 border-forest-green/30">
              <div className="h-12 w-12 bg-forest-green rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Real-time analytics dashboard with conversion tracking and reporting.
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