"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [
  { name: "Card Switch", href: "/services/card-switch" },
  { name: "Instant Payment", href: "/services/instant-pay" },
  { name: "Wallet Interoperability", href: "/services/mobile-wallet" },
  { name: "Bulk Payments", href: "/services/ach" },
  { name: "QR Payment", href: "/services/qr-payment" },
  { name: "Request to Pay", href: "/services/request-to-pay" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Participants", href: "/participants" },
  { name: "Developers", href: "/developers" },
  { name: "Security", href: "/security" },
  { name: "News", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              <Image
                src="/saps-logo.png"
                alt="SaPS logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden text-base font-bold leading-tight text-foreground sm:block">
              Salone Pɛment Swich
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`px-3 py-2 text-base font-medium transition-colors hover:text-secondary ${
                isActive("/")
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-base font-medium transition-colors hover:text-secondary ${
                isActive("/about")
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown - Custom Implementation */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-base font-medium transition-colors hover:text-secondary ${
                  isActive("/services")
                    ? "text-secondary"
                    : "text-foreground"
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md border border-border bg-popover p-1 shadow-lg">
                  <Link
                    href="/services"
                    className="block rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-base font-medium transition-colors hover:text-secondary ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/participants">Join SaPS</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${
                isActive("/") ? "text-secondary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${
                isActive("/about") ? "text-secondary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${
                isActive("/services") ? "text-secondary" : "text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block rounded-md px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-muted ${
                  isActive(link.href) ? "text-secondary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/participants" onClick={() => setIsOpen(false)}>
                  Join SaPS
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
