import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#' },
      { label: 'FAQ', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: 'mailto:hello@nearli.com' },
      { label: 'Seller Guide', href: '/seller-guide' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Cookie Policy', href: '/legal/cookie-policy' },
      { label: 'Refund Policy', href: '/legal/refunds' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#000000] text-[#999]">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-xl font-bold tracking-tight text-white font-[family-name:var(--font-barlow)]">
                NEARLI
              </span>
            </div>
            <p className="text-sm text-[#e3e3e6] leading-relaxed mb-8 max-w-xs">
              Empowering small businesses and solo entrepreneurs to reach customers beyond their immediate network.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#e3e3e6]" />
                <a href="mailto:oyedejienoch@gmail.com" className="text-[#e3e3e6] hover:text-white transition-colors">
                  oyedejienoch@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-md tracking-widest uppercase">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[#e3e3e6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-md tracking-widest uppercase">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[#e3e3e6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-md tracking-widest uppercase">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[#e3e3e6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#e3e3e6]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-[#e3e3e6]">
              © 2026 Nearli. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-[#333] hover:border-[#6B6B8A] flex items-center justify-center transition-colors text-[#e3e3e6] hover:text-white"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}