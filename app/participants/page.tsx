"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Smartphone,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const participantTypes = [
  {
    title: "Commercial Banks",
    description:
      "Full-service banks licensed by the Bank of Sierra Leone to provide banking services.",
    icon: Building2,
    services: [
      "Card Switch",
      "Instant Payment",
      "Wallet Interoperability",
      "ACH",
    ],
    requirements: [
      "Licensed by Bank of Sierra Leone",
      "Core banking system integration capability",
      "Compliance with SaPS technical specifications",
      "Dedicated IT team for integration support",
    ],
  },
  {
    title: "Mobile Money Operators",
    description:
      "Licensed mobile financial service providers connecting millions of customers.",
    icon: Smartphone,
    services: ["Wallet Interoperability", "QR Payment", "Instant Payment"],
    requirements: [
      "Mobile money license from Bank of Sierra Leone",
      "API integration capability",
      "Minimum customer base requirements",
      "Operational support team",
    ],
  },
  {
    title: "Payment Service Providers",
    description:
      "Third-party providers offering payment processing and aggregation services.",
    icon: CreditCard,
    services: ["QR Payment", "Card Acceptance", "Payment Gateway"],
    requirements: [
      "Payment service provider license",
      "PCI DSS compliance",
      "Technical integration capability",
      "Customer support infrastructure",
    ],
  },
  {
    title: "Fintech Companies",
    description:
      "Innovative technology-driven companies providing financial services and solutions.",
    icon: Zap,
    services: [
      "Instant Payment",
      "QR Payment",
      "Request to Pay",
      "Payment APIs",
    ],
    requirements: [
      "Fintech license or regulatory approval",
      "API integration capability",
      "Strong technical infrastructure",
      "Compliance with SaPS standards",
    ],
  },
];

const currentParticipants = [
  {
    section: "Card Switch",
    description:
      "Commercial banks connected to Sierra Leone's national card switch infrastructure.",
    subcategories: [
      {
        label: null,
        participants: [
          { name: "Sierra Leone Commercial Bank", abbreviation: "SLCB", logo: "/logos/slcb-logo.png" },
          { name: "Rokel Commercial Bank", abbreviation: "RCB", logo: "/logos/rokel.jpg" },
          { name: "Guarantee Trust Bank", abbreviation: "GTB", logo: null },
          { name: "Access Bank", abbreviation: "ACCESS", logo: "/logos/accessbank.jpg" },
          { name: "Ecobank", abbreviation: "ECO BANK", logo: null },
          { name: "Zenith Bank", abbreviation: "ZENITH", logo: "/logos/Zenith Bank.jpg" },
          { name: "Sky Bank", abbreviation: "SKY BANK", logo: null },
          { name: "Bloom Bank", abbreviation: "BLOOM", logo: "/logos/bloom.png" },
          { name: "United Bank for Africa", abbreviation: "UBA", logo: null },
          { name: "Vista Bank", abbreviation: "VISTA", logo: null },
          { name: "First Bank of Sierra Leone", abbreviation: "FBSL", logo: null },
          { name: "Commerce and Mortgage Bank", abbreviation: "CMB", logo: null },
        ],
      },
    ],
  },
  {
    section: "Instant Payment",
    description:
      "Institutions connected to the SaPS Instant Payment System across all categories.",
    subcategories: [
      {
        label: "Banks",
        participants: [
          { name: "Sierra Leone Commercial Bank", abbreviation: "SLCB", logo: "/logos/slcb-logo.png" },
          { name: "Rokel Commercial Bank", abbreviation: "RCB", logo: "/logos/rokel.jpg" },
          { name: "Guarantee Trust Bank", abbreviation: "GTB", logo: null },
          { name: "Access Bank", abbreviation: "ACCESS", logo: "/logos/accessbank.jpg" },
        ],
      },
      {
        label: "Mobile Money Operators",
        participants: [
          { name: "Orange Money", abbreviation: "ORANGE", logo: null },
          { name: "Africell Money", abbreviation: "AFRICELL", logo: null },
          { name: "QMoney", abbreviation: "QMONEY", logo: null },
        ],
      },
      {
        label: "Fintechs",
        participants: [],
      },
      {
        label: "Micro Finance",
        participants: [],
      },
      {
        label: "Bureau",
        participants: [],
      },
    ],
  },
  {
    section: "International Payments Gateway",
    description:
      "Institutions connected to the SaPS international payment gateway.",
    subcategories: [],
  },
];

export default function ParticipantsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Join the SaPS Network
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Connect your institution to Sierra Leone&apos;s national payment
                infrastructure and unlock new opportunities for your customers.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Apply to Join</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#requirements">View Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: "15+", label: "Participants", icon: Users },
                { value: "5", label: "Services", icon: Globe },
                { value: "99.9%", label: "Uptime", icon: Shield },
                { value: "24/7", label: "Support", icon: CheckCircle2 },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Participant Types */}
        <section id="requirements" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Who Can Join?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SaPS welcomes various types of financial institutions
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {participantTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="flex-1">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <type.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {type.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {type.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="font-semibold text-foreground">
                          Available Services
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {type.services.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 rounded-lg bg-muted/50 p-6">
                      <h4 className="font-semibold text-foreground">
                        Requirements
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {type.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-3 text-sm"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Participants */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Current Participants
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Financial institutions already connected to the SaPS network
              </p>
            </div>

            <div className="mt-12 space-y-16">
              {currentParticipants.map((group) => (
                <div key={group.section}>
                  {/* Section header */}
                  <div className="mb-8 border-b border-border pb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {group.section}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>

                  {/* No subcategories = Coming Soon */}
                  {group.subcategories.length === 0 && (
                    <div className="flex items-center justify-center rounded-xl border border-dashed border-border bg-card py-12">
                      <p className="text-sm text-muted-foreground">
                        Coming Soon
                      </p>
                    </div>
                  )}

                  {/* Subcategories */}
                  <div className="space-y-10">
                    {group.subcategories.map((sub) => (
                      <div key={sub.label ?? group.section}>
                        {sub.label && (
                          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            {sub.label}
                          </h4>
                        )}

                        {sub.participants.length === 0 ? (
                          <div className="flex items-center justify-center rounded-xl border border-dashed border-border bg-card py-8">
                            <p className="text-sm text-muted-foreground">
                              Coming Soon
                            </p>
                          </div>
                        ) : (
                          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {sub.participants.map((participant) => (
                              <div
                                key={participant.name}
                                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
                              >
                                {participant.logo ? (
                                  <div className="relative mb-4 h-16 w-32">
                                    <Image
                                      src={participant.logo}
                                      alt={participant.name}
                                      fill
                                      className="object-contain"
                                      onError={(e) => {
                                        const el = e.currentTarget.parentElement;
                                        if (el) {
                                          el.innerHTML = `<div class="flex h-16 w-full items-center justify-center rounded-lg bg-primary/10"><span class="text-sm font-bold text-primary">${participant.abbreviation}</span></div>`;
                                        }
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div className="mb-4 flex h-16 w-32 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-sm font-bold text-primary">
                                      {participant.abbreviation}
                                    </span>
                                  </div>
                                )}
                                <p className="text-sm font-medium text-foreground">
                                  {participant.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Onboarding Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Simple steps to join the SaPS network
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Application",
                  description:
                    "Submit your application with required documentation",
                },
                {
                  step: "2",
                  title: "Evaluation",
                  description:
                    "SaPS reviews your application and compliance status",
                },
                {
                  step: "3",
                  title: "Integration",
                  description:
                    "Technical integration and testing with SaPS systems",
                },
                {
                  step: "4",
                  title: "Go Live",
                  description:
                    "Launch services and start processing transactions",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Join?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Contact us to start the onboarding process and connect to Sierra
              Leone&apos;s payment infrastructure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/developers">Developer Resources</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
