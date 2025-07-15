import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  Star,
  Award,
  Shield,
  Clock,
  ChevronRight,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterProps {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, address, phone, email, year }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'About Us', href: '' },
    { name: 'Our Rooms', href: '/' },
    { name: 'Amenities', href: '' },
    { name: 'Contact Us', href: '' },
    { name: 'Reviews', href: '' },
    { name: 'Gallery', href: '' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '' },
    { name: 'Terms of Service', href: '' },
    { name: 'Cancellation Policy', href: '' },
    { name: 'Accessibility', href: '' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#174166] via-[#1e4a73] to-[#174166] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{companyName}</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Experience luxury and comfort at our premium hotel. Creating memorable stays since 1995.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-100 leading-relaxed">{address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-sm text-blue-100 hover:text-yellow-400 transition-colors duration-200">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-sm text-blue-100 hover:text-yellow-400 transition-colors duration-200">
                  {email}
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-blue-100">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-blue-100">Award Winner</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-blue-100 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Support & Policies</h3>
            <ul className="space-y-3 mb-6">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href} 
                    className="text-sm text-blue-100 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* 24/7 Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">24/7 Support</span>
              </div>
              <p className="text-xs text-blue-100">
                Our team is available around the clock to assist you.
              </p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Stay Connected</h3>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-sm text-blue-100 mb-4">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-yellow-400 focus:ring-yellow-400"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#174166] font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Heart className="w-4 h-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-yellow-400">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-100 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-white/20`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-blue-100">
                © {year} {companyName}. All Rights Reserved.
              </p>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-blue-200">SSL Secured</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-blue-200">
              <span>Made with ❤️ for our guests</span>
              <span>•</span>
              <span>Premium Hotel Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;