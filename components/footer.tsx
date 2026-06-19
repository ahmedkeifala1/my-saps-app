import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Card Switch", href: "/services/card-switch" },
    { name: "Instant Payment", href: "/services/instant-pay" },
    { name: "Wallet Interoperability", href: "/services/mobile-wallet" },
    { name: "Bulk Payments", href: "/services/ach" },
    { name: "QR Payment", href: "/services/qr-payment" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Media Centre", href: "/media" },
    { name: "Careers", href: "/careers" },
    { name: "Security", href: "/security" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Partners", href: "/partners" },
    { name: "Developers", href: "/developers" },
    { name: "API Documentation", href: "/developers#api" },
    { name: "Integration Guide", href: "/developers#integration" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/saps-logo.png"
                  alt="SaPS logo"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-foreground">SaPS</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sierra Leone Payment Switch - Connecting the nation&apos;s
              financial ecosystem through secure, reliable, and innovative
              payment infrastructure.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 flex flex-wrap gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@saps.sl</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+232 22 123 456</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Freetown, Sierra Leone</span>
          </div>
        </div>

        {/* Impact & Mission Section */}
        <div className="mt-12 rounded-lg border border-border bg-muted/50 p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-lg font-semibold text-foreground">
              Our Commitment to Financial Inclusion
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              SaPS is dedicated to building an inclusive financial ecosystem
              where every Sierra Leonean has access to safe, secure, and
              affordable payment services. We believe in empowering communities,
              supporting businesses of all sizes, and driving economic
              prosperity through financial innovation and digital
              transformation.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Through our payment infrastructure, we're enabling financial
              institutions to serve underserved populations, merchants to reach
              new customers, and the nation to participate in the global digital
              economy.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sierra Leone Payment Switch
            (SaPS). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
