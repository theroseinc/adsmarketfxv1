"use client";

import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Phone, User, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
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
          formType: 'Contact Form',
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
              Let's Talk Business
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text max-w-3xl mx-auto">
              Ready to scale your campaigns or join an elite network? We're here to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full pl-12 pr-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full pl-12 pr-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-12 pr-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg appearance-none cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="Affiliate Partnership">Affiliate Partnership</option>
                      <option value="Advertiser Campaign">Advertiser Campaign</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your needs, goals, or questions..."
                        className="w-full pl-12 pr-5 py-4 bg-background border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors text-lg resize-none"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-10 text-white">
                <h2 className="text-3xl font-semibold mb-4">Direct Contact</h2>
                <p className="text-white/90 mb-8">
                  Prefer to reach out directly? Choose the best email for your inquiry.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">General Inquiries</h3>
                      <a href="mailto:info@adsmarketfx.com" className="text-white/90 hover:text-white break-all">
                        info@adsmarketfx.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Affiliate Support</h3>
                      <a href="mailto:aff@adsmarketfx.com" className="text-white/90 hover:text-white break-all">
                        aff@adsmarketfx.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Advertiser Support</h3>
                      <a href="mailto:adv@adsmarketfx.com" className="text-white/90 hover:text-white break-all">
                        adv@adsmarketfx.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Partnership Opportunities</h3>
                      <a href="mailto:partners@adsmarketfx.com" className="text-white/90 hover:text-white break-all">
                        partners@adsmarketfx.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-accent/10 rounded-3xl p-8 md:p-10 border-2 border-teal-accent/30">
                <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
                <p className="text-secondary-text mb-4">
                  We typically respond to all inquiries within <span className="font-semibold text-foreground">24 hours</span> during business days.
                </p>
                <p className="text-sm text-muted-foreground">
                  For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}