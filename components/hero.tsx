"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    badge: "Sierra Leone's National Payment Infrastructure",
    title: "Connecting Sierra Leone's Financial Ecosystem",
    description:
      "SaPS enables seamless interbank transfers, mobile wallet interoperability, and secure payment processing for all financial institutions in Sierra Leone.",
    cta: { label: "Learn About SaPS", href: "/about" },
  },
  {
    badge: "Real-Time, Nationwide, Always On",
    title: "Empowering Every Sierra Leonean with Instant Payments",
    description:
      "From alias-based transfers to QR payments and bulk disbursements, SaPS powers the rails that move money instantly across banks and wallets nationwide.",
    cta: { label: "Explore Our Services", href: "/services" },
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-foreground/10 via-primary to-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-transparent via-transparent to-primary/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            {slide.badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">{slide.title}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            {slide.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href={slide.cta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground pl-6 pr-2 py-2 text-sm font-semibold text-primary transition-transform hover:scale-105"
            >
              {slide.cta.label}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/participants">
                Join as Participant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-16 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === active
                  ? "w-8 bg-primary-foreground"
                  : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
