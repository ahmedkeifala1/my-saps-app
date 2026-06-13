import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Building,
  Scale,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About SaPS - Sierra Leone Payment Switch",
  description:
    "Learn about SaPS, Sierra Leone's national payment switch infrastructure. Our mission, vision, history, and organizational structure.",
};

const milestones = [
  {
    year: "2020",
    title: "Foundation Established",
    description:
      "SaPS was established as Sierra Leone's national payment switch infrastructure.",
  },
  {
    year: "2021",
    title: "First Bank Integration",
    description:
      "Successfully integrated the first commercial banks into the switch network.",
  },
  {
    year: "2022",
    title: "Mobile Wallet Launch",
    description:
      "Launched wallet interoperability enabling cross-platform transfers.",
  },
  {
    year: "2023",
    title: "Instant Payment Go-Live",
    description:
      "Deployed real-time payment capabilities across all connected institutions.",
  },
  {
    year: "2024",
    title: "QR Payment System",
    description:
      "Introduced universal QR code payment system for merchants nationwide.",
  },
  {
    year: "2025",
    title: "Regional Expansion",
    description:
      "Began cross-border integration initiatives with neighboring countries.",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Continuously advancing payment technology to serve Sierra Leone's evolving financial needs.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Ensuring all Sierra Leoneans have access to secure and efficient payment services.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "Maintaining the highest standards of transparency, security, and ethical conduct.",
  },
  {
    icon: Globe,
    title: "Interoperability",
    description:
      "Building bridges between financial institutions for seamless transactions.",
  },
];

const communityGallery = [
  {
    src: "/saps-campaign-1.jpeg",
    alt: "Sierra Leonean market traders celebrating an instant mobile payment with SaPS",
    caption: "Move your money. Quick. Easy. Anywhere.",
  },
  {
    src: "/saps-campaign-4.jpeg",
    alt: "Market vendors completing a cashless purchase using SaPS",
    caption: "Pay without cash, anywhere in the country.",
  },
  {
    src: "/saps-campaign-5.jpeg",
    alt: "A motorbike rider sending and receiving instant payments through SaPS",
    caption: "Instant payments, wherever you are.",
  },
];

const leadership = [
  {
    name: "Ibrahim L. Stevens",
    role: "Governor, Bank of Sierra Leone",
    description:
      "Providing strategic oversight and regulatory guidance for SaPS operations.",
  },
  {
    name: "Joseph Ansu Tucker",
    role: "Deputy Governor, Bank of Sierra Leone",
    description:
      "Supporting central bank governance and SaPS strategic initiatives.",
  },
  {
    name: "Alfred W.B. Samah",
    role: "Deputy Governor, Bank of Sierra Leone",
    description:
      "Overseeing financial systems stability and payment infrastructure policy.",
  },
  {
    name: "Albert Foday Boima",
    role: "Deputy Director (Head of Department) National Switch Department",
    description:
      "Leading the National Switch Department and day-to-day operations.",
  },
];

const heroStats = [
  { value: "2020", label: "Founded" },
  { value: "15+", label: "Institutions" },
  { value: "24/7", label: "Availability" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Sierra Leone&apos;s National Payment Infrastructure
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About SaPS
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Sierra Leone Payment Switch is the national infrastructure
                connecting all financial institutions, enabling seamless,
                secure, and instant payments across the country.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Operating under the oversight of the Bank of Sierra Leone, we
                connect banks, mobile money operators, and fintechs into a
                single interoperable network, bringing modern, reliable
                payment services to every corner of the nation.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 sm:mx-auto sm:max-w-md lg:mx-0">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="#mission-vision">
                    Our Mission &amp; Vision
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/participants">Become a Participant</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl lg:max-w-md">
              <Image
                src="/saps-campaign-2.jpeg"
                alt="A SaPS user completing an instant mobile-to-bank transfer on his phone"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <CardContent className="relative p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To provide a secure, efficient, and inclusive national payment
                  infrastructure that connects all financial institutions in
                  Sierra Leone, enabling seamless transactions and fostering
                  economic growth for all citizens.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <CardContent className="relative p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Our Vision
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To be the cornerstone of Sierra Leone&apos;s digital economy,
                  creating a fully interoperable payment ecosystem that drives
                  financial inclusion and positions the nation as a leader in
                  African fintech innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              SaPS in the Community
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real Sierra Leoneans using instant payments every day
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {communityGallery.map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 90vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key milestones in SaPS development
            </p>
          </div>
          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <span className="text-sm font-bold text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experienced professionals driving SaPS forward
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <Card key={person.name} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {person.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Regulatory Framework
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                SaPS operates under the oversight of the Bank of Sierra Leone,
                adhering to all national financial regulations and international
                standards for payment system operators.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Bank of Sierra Leone Payment System Act",
                  "National Payment Systems Regulations",
                  "Anti-Money Laundering Compliance",
                  "Data Protection Standards",
                  "International Settlement Standards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <Scale className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Compliance & Governance
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our governance structure ensures transparent decision-making,
                  risk management, and accountability to all stakeholders
                  including the central bank, participating institutions, and
                  the public.
                </p>
                <Button className="mt-6" asChild>
                  <Link href="/security">
                    Learn About Security
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join the network that&apos;s transforming Sierra Leone&apos;s
              financial landscape.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/participants">
                  Become a Participant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
