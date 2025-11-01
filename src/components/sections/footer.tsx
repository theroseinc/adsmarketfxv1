import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const AdsMarketFXLogoWhite = () =>
<div className="flex items-center gap-3">
    <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center flex-shrink-0">
      <Image
      alt="AdsMarket FX Logo"
      width={56}
      height={56}
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/photo_2025-02-22_06-44-15-2-1760616885888.jpg"
      className="rounded-full object-cover" />

    </div>
    <span className="text-2xl sm:text-3xl font-medium text-pure-white">AdsMarket FX</span>
  </div>;


const contactInfo = [
{
  title: 'General Inquiries',
  email: 'info@adsmarketfx.com'
},
{
  title: 'Affiliate Support',
  email: "aff@adsmarketfx.com"
},
{
  title: 'Advertiser Support',
  email: "adv@adsmarketfx.com"
},
{
  title: 'Partnership Opportunities',
  email: 'partners@adsmarketfx.com'
}];


const navLinks = [
{ name: 'Services', href: '/services' },
{ name: 'Our Principles', href: '/our-principles' },
{ name: 'About', href: '/about' },
{ name: 'Journal', href: '/community' },
{ name: 'Contact', href: '/contact' }];


const legalLinks = [
{ name: 'Privacy Policy', href: '/privacy-policy' },
{ name: 'Terms and Conditions', href: '/terms-and-conditions' }];


const socialLinks = [
{ name: 'Instagram', href: 'https://www.instagram.com/adsmarketfx/', icon: Instagram },
{ name: 'Facebook', href: 'https://www.facebook.com/adsmarketfx', icon: Facebook },
{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/adsmarketfx', icon: Linkedin },
{ name: 'Twitter', href: 'https://twitter.com/adsmarketfx', icon: Twitter }];



const Footer = () => {
  return (
    <footer className="bg-charcoal text-footer-text rounded-t-[24px] sm:rounded-t-[32px] overflow-hidden">
      <div className="container pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 sm:gap-y-12 lg:gap-x-8">
          
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-500">
              ADSMarketFX is an invite-only performance marketing network connecting elite affiliates with high-converting crypto and forex offers. We deliver transparency, premium support, and consistent ROI, because we are;
            </p>
            <p className="text-3xl sm:text-5xl font-display font-medium leading-tight text-pure-white mt-6">
              Built for Results. Designed for Scale.
            </p>
          </div>
          
          <div className="lg:col-span-4">
            <h3 className="text-xl font-medium text-pure-white mb-6">Contact Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm sm:text-base">
              {contactInfo.map((contact, index) =>
              <div key={index} className="space-y-2">
                  <p className="font-medium text-gray-300 text-sm">{contact.title}</p>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-gray-400 hover:text-pure-white transition-colors block break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) =>
              <li key={link.name}>
                  <Link href={link.href} className="text-xs sm:text-sm text-gray-500 hover:text-pure-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between gap-6 sm:gap-0">
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) =>
              <li key={link.name}>
                  <Link href={link.href} className="text-sm sm:text-base text-gray-400 hover:text-pure-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
            <p className="text-sm sm:text-base text-gray-400">&copy; 2025 ADSMarketFX</p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-[#4A4A4A] flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="text-center md:text-left order-3 md:order-1">
            <p className="text-xs sm:text-sm text-gray-400">Performance Marketing Network</p>
            <p className="text-base sm:text-lg text-pure-white font-medium">Innovative Finance. Intelligent Marketing.</p>
          </div>
          
          <div className="order-1 md:order-2">
            <AdsMarketFXLogoWhite />
          </div>
          
          <div className="order-2 md:order-3 flex items-center gap-x-3 sm:gap-x-4">
            {socialLinks.map((social) =>
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-400 hover:text-pure-white transition-colors p-2 -m-2">

                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;