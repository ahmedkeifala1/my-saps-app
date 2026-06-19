"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutLinks = [
  { name: "SaPS", href: "/about#saps" },
  { name: "Our Vision, Mission & Values", href: "/about#mission" },
  { name: "Management", href: "/about#management" },
  { name: "Our Network", href: "/about#ecosystem" },
  { name: "Contact Us", href: "/contact" },
];

const partnerLinks = [
  { name: "Card Switch", href: "/partners?section=card-switch" },
  { name: "IPS", href: "/partners?section=ips" },
  { name: "International Payment Gateway", href: "/partners?section=international-gateway" },
];

const services = [
  { name: "Card Switch", href: "/services/card-switch" },
  { name: "Instant Payment", href: "/services/instant-pay" },
  { name: "Wallet Interoperability", href: "/services/mobile-wallet" },
  { name: "Bulk Payments", href: "/services/ach" },
  { name: "QR Payment", href: "/services/qr-payment" },
  { name: "Request to Pay", href: "/services/request-to-pay" },
];

const mediaLinks = [
  { name: "News Articles", href: "/media/news" },
  { name: "Press Releases", href: "/media/press-releases" },
  { name: "Publications", href: "/media/publications" },
  { name: "Blog", href: "/media/blog" },
  { name: "Newsletters", href: "/media/newsletters" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeAll = () => {
    setAboutOpen(false);
    setServicesOpen(false);
    setPartnersOpen(false);
    setMediaOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (aboutRef.current && !aboutRef.current.contains(target)) setAboutOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(target)) setServicesOpen(false);
      if (partnersRef.current && !partnersRef.current.contains(target)) setPartnersOpen(false);
      if (mediaRef.current && !mediaRef.current.contains(target)) setMediaOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownLinkClass =
    "block rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center gap-4">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              <Image src="/saps-logo.png" alt="SaPS logo" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <span className="hidden whitespace-nowrap text-base font-bold text-foreground sm:block">
              Salone Pɛment Swich
            </span>
          </Link>

          {/* ── Desktop Navigation + CTA grouped right ── */}
          <div className="ml-auto hidden items-center lg:flex">
          <nav className="flex items-center gap-0">

            {/* Home */}
            <Link
              href="/"
              className={`px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive("/") ? "text-secondary" : "text-foreground"}`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false); setMediaOpen(false); }}
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive("/about") ? "text-secondary" : "text-foreground"}`}
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 w-60 rounded-md border border-border bg-popover p-1 shadow-lg">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={dropdownLinkClass}
                      onClick={closeAll}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false); setMediaOpen(false); }}
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive("/services") ? "text-secondary" : "text-foreground"}`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md border border-border bg-popover p-1 shadow-lg">
                  <Link href="/services" className={dropdownLinkClass} onClick={closeAll}>
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className={dropdownLinkClass} onClick={closeAll}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Partners Dropdown */}
            <div className="relative" ref={partnersRef}>
              <button
                type="button"
                onClick={() => { setPartnersOpen(!partnersOpen); setAboutOpen(false); setServicesOpen(false); setMediaOpen(false); }}
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive("/partners") ? "text-secondary" : "text-foreground"}`}
              >
                Partners
                <ChevronDown className={`h-4 w-4 transition-transform ${partnersOpen ? "rotate-180" : ""}`} />
              </button>
              {partnersOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 w-60 rounded-md border border-border bg-popover p-1 shadow-lg">
                  {partnerLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLinkClass} onClick={closeAll}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Static links */}
            {[
              { name: "Developers", href: "/developers" },
              { name: "Security", href: "/security" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive(link.href) ? "text-secondary" : "text-foreground"}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Media Dropdown */}
            <div className="relative" ref={mediaRef}>
              <button
                type="button"
                onClick={() => { setMediaOpen(!mediaOpen); setAboutOpen(false); setServicesOpen(false); }}
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive("/media") ? "text-secondary" : "text-foreground"}`}
              >
                Media
                <ChevronDown className={`h-4 w-4 transition-transform ${mediaOpen ? "rotate-180" : ""}`} />
              </button>
              {mediaOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 w-52 rounded-md border border-border bg-popover p-1 shadow-lg">
                  <Link href="/media" className={dropdownLinkClass} onClick={closeAll}>
                    Media Centre
                  </Link>
                  <div className="my-1 h-px bg-border" />
                  {mediaLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownLinkClass} onClick={closeAll}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { name: "Careers", href: "/careers" },
              { name: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 text-sm font-medium transition-colors hover:text-secondary ${isActive(link.href) ? "text-secondary" : "text-foreground"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-3 pl-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/participants">Join SaPS</Link>
            </Button>
          </div>
          </div>{/* end desktop right group */}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      {isOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">

            <Link href="/" className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive("/") ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
              Home
            </Link>

            {/* About + sub-items */}
            <Link href="/about" className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive("/about") ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
            {aboutLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            {/* Services + sub-items */}
            <Link href="/services" className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive("/services") ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
              Services
            </Link>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block rounded-md px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setIsOpen(false)}>
                {s.name}
              </Link>
            ))}

            {/* Partners + sub-items */}
            <Link href="/partners" className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive("/partners") ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
              Partners
            </Link>
            {partnerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            {[
              { name: "Developers", href: "/developers" },
              { name: "Security", href: "/security" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive(link.href) ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}

            {/* Media + sub-items */}
            <Link href="/media" className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive("/media") ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
              Media
            </Link>
            {mediaLinks.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            {[
              { name: "Careers", href: "/careers" },
              { name: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${isActive(link.href) ? "text-secondary" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-2 pt-4">
              <Button type="button" variant="outline" asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </Button>
              <Button type="button" asChild className="w-full">
                <Link href="/participants" onClick={() => setIsOpen(false)}>Join SaPS</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
