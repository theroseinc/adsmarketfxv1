import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Our Principles', href: '/our-principles' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' }];


  const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms and Conditions', href: '/terms-and-conditions' }];


  return (
    <footer className="bg-[#2B2B2B] text-[#E5E5E5] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 rounded-t-[24px] sm:rounded-t-[32px] md:rounded-t-[40px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          
          {/* Column 1: Acknowledgment */}
          <div className="lg:col-span-3">
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 break-words">
              We acknowledge the Traditional Custodians of the lands on which we work, the Boon Wurrung and Wurundjeri peoples of the Kulin Nation, and pay our respects to their Elders past, present and emerging.
            </p>
          </div>
          
          {/* Column 2: Contact Addresses */}
          <div className="lg:col-span-4">
            <div className="space-y-4 sm:space-y-6">
              <div className="overflow-hidden">
                <h4 className="text-sm sm:text-base font-medium text-pure-white mb-2 truncate">AdsMarket FX Headquarters</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-words">
                  Level 5, 123 Marketing Street<br />
                  Sydney, NSW 2000, Australia<br />
                  <a href="tel:+61299998888" className="hover:text-pure-white transition-colors">+61 2 9999 8888</a>
                </p>
              </div>
              
              <div className="overflow-hidden">
                <h4 className="text-sm sm:text-base font-medium text-pure-white mb-2 truncate">AdsMarket FX Europe</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-words">
                  10 Performance Drive<br />
                  London, EC2A 4BX, United Kingdom<br />
                  <a href="tel:+442079460000" className="hover:text-pure-white transition-colors">+44 20 7946 0000</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Column 3: Navigation Links */}
          <div className="lg:col-span-2">
            <ul className="space-y-2 sm:space-y-3 overflow-hidden">
              {navLinks.map((link) =>
              <li key={link.name}>
                  <Link href={link.href} className="text-xs sm:text-sm text-gray-500 hover:text-pure-white transition-colors break-words line-clamp-1">
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          
          {/* Column 4: Legal Links */}
          <div className="lg:col-span-3">
            <ul className="space-y-2 sm:space-y-3 overflow-hidden">
              {legalLinks.map((link) =>
              <li key={link.name}>
                  <Link href={link.href} className="text-xs sm:text-sm text-gray-500 hover:text-pure-white transition-colors break-words line-clamp-1">
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
            
            <p className="text-xs text-gray-500 mt-6 sm:mt-8 break-words !w-full !h-4 !whitespace-pre-line">
              {' '}
              <span className="text-gray-400 hover:text-pure-white transition-colors cursor-pointer !whitespace-pre-line">

              </span>
            </p>
          </div>
        </div>
        
        {/* Bottom Row: Logo, Social, Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-gray-700">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-pure-white hover:text-gray-300 transition-colors whitespace-nowrap">
              ADSMARKETFX
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pure-white transition-colors flex-shrink-0">

              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pure-white transition-colors flex-shrink-0">

              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pure-white transition-colors flex-shrink-0">

              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
            © 2025 ADSMARKETFX
          </div>
        </div>
      </div>
    </footer>);

}