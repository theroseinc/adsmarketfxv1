"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Newsletter Subscription',
          email
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(`Thank you for subscribing! You'll receive updates at ${email}`);
        setEmail('');
      } else {
        toast.error(result.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div 
          className="bg-[#0047FF] text-white rounded-[2rem] py-20 px-6 sm:px-12 lg:px-24 overflow-hidden" 
          style={{ 
            opacity: 1, 
            transform: 'scale(1.01)', 
            boxShadow: 'rgba(0, 71, 255, 0.4) 0px 30px 60px' 
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 
              className="font-display text-[40px] leading-[1.2] font-normal tracking-[-0.01em] md:text-5xl md:leading-tight" 
              style={{ opacity: 1, transform: 'none' }}
            >
              Stay Connected.<br />Get the Latest Updates.
            </h3>
            <form className="mt-10" style={{ opacity: 1, transform: 'none' }} onSubmit={handleSubmit}>
              <div className="relative flex items-center">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full h-[72px] rounded-full bg-white text-black text-lg placeholder:text-neutral-500 px-8 border-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#0047FF] file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 border py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  placeholder="Your Email Address"
                  required
                />
                <div tabIndex={0} style={{ boxShadow: 'rgba(0, 0, 0, 0.204) 0px 0px 0.38018px' }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Subscribe"
                    className="absolute right-2.5 bg-black text-white rounded-full w-14 h-14 hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs size-9"
                  >
                    <ArrowRight className="w-6 h-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </form>
            <p 
              className="mt-6 text-base font-body text-white/90 max-w-md mx-auto" 
              style={{ opacity: 1 }}
            >
              Subscribe for industry insights, exclusive offers, and performance marketing updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;