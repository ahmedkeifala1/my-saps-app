"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Scale,
  Users,
  Globe,
  Building,
  ArrowRight,
  Landmark,
  Smartphone,
  Store,
  HandCoins,
  Network,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const milestones = [
  { year: "2020", title: "Foundation Established", description: "SaPS was established as Sierra Leone's national payment switch infrastructure under BSL oversight." },
  { year: "2021", title: "First Bank Integration", description: "Successfully integrated the first commercial banks into the switch network." },
  { year: "2022", title: "Mobile Wallet Launch", description: "Launched wallet interoperability enabling cross-platform transfers." },
  { year: "2023", title: "Instant Payment Go-Live", description: "Deployed real-time payment capabilities across all connected institutions." },
  { year: "2024", title: "QR Payment System", description: "Introduced universal QR code payment system for merchants nationwide." },
  { year: "2025", title: "Regional Expansion", description: "Began cross-border integration initiatives with neighbouring countries." },
];

const values = [
  { icon: Target, title: "Innovation", description: "Continuously advancing payment technology to serve Sierra Leone's evolving financial needs." },
  { icon: Users, title: "Inclusion", description: "Ensuring all Sierra Leoneans have access to secure and efficient payment services." },
  { icon: Scale, title: "Integrity", description: "Maintaining the highest standards of transparency, security, and ethical conduct." },
  { icon: Globe, title: "Interoperability", description: "Building bridges between financial institutions for seamless transactions." },
];

const management = [
  { name: "Ibrahim L. Stevens", role: "Governor, Bank of Sierra Leone", description: "Providing strategic oversight and regulatory guidance for SaPS operations.", photo: "/logos/Ibrahim Stevens.png" },
  { name: "Joseph Ansu Tucker", role: "Deputy Governor, Bank of Sierra Leone", description: "Supporting central bank governance and SaPS strategic initiatives.", photo: "/logos/Joseph Ansu Tucker.png" },
  { name: "Alfred W.B. Samah", role: "Deputy Governor, Bank of Sierra Leone", description: "Overseeing financial systems stability and payment infrastructure policy.", photo: "/logos/Alfred W.B Samah.png" },
  { name: "Albert Foday Boima", role: "Head, National Switch Department", description: "Leading the National Switch Department and day-to-day operations.", photo: "/logos/Albert Foday Boima.jpeg" },
];

const ecosystem = [
  {
    icon: Landmark,
    title: "Commercial Banks",
    description: "Every BSL-licensed commercial bank connected on a single interoperable switch — enabling nationwide card switching, instant transfers, and ACH.",
    stat: "12+",
    statLabel: "Banks Connected",
    gradient: "from-blue-500/15 to-cyan-400/8",
    border: "border-blue-400/30",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Money Operators",
    description: "All mobile wallet providers integrated into one network, enabling wallet-to-bank and wallet-to-wallet transfers regardless of provider.",
    stat: "3",
    statLabel: "MNOs Connected",
    gradient: "from-emerald-500/15 to-green-400/8",
    border: "border-emerald-400/30",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: HandCoins,
    title: "Microfinance Institutions",
    description: "Microfinance banks and savings & loans companies connected to extend affordable financial services to underserved communities across Sierra Leone.",
    stat: "12+",
    statLabel: "MFIs Connected",
    gradient: "from-amber-500/15 to-orange-400/8",
    border: "border-amber-400/30",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Store,
    title: "Merchants & Businesses",
    description: "Thousands of merchants across Sierra Leone enabled to accept QR payments, card payments, and Request-to-Pay from any customer on any platform.",
    stat: "2,000+",
    statLabel: "Merchants Enabled",
    gradient: "from-violet-500/15 to-purple-400/8",
    border: "border-violet-400/30",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Globe,
    title: "International Gateways",
    description: "Cross-border corridors connecting the Sierra Leone network to global remittance channels and regional West African payment schemes.",
    stat: "0",
    statLabel: "Active Corridors",
    gradient: "from-rose-500/15 to-pink-400/8",
    border: "border-rose-400/30",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

// ─── Shared section header ────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-3 bg-primary" />

      {/* ── Who We Are ── */}
      <section id="saps" className="py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Sierra Leone&apos;s National Payment Infrastructure
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About SaPS
              </h1>
              <div className="mt-3 h-1 w-14 rounded bg-primary" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Salone Pɛment Swich (SaPS)</strong> is
                Sierra Leone&apos;s national payment infrastructure — the central switch that
                connects every bank, mobile money operator, and licensed financial institution
                in the country into a single interoperable network.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Operating under the oversight of the Bank of Sierra Leone, SaPS enables
                seamless, secure, and instant payments across all channels, ensuring every
                Sierra Leonean can access modern financial services regardless of their provider.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 sm:max-w-sm">
                {[
                  { value: "2020", label: "Founded" },
                  { value: "15+", label: "Institutions" },
                  { value: "24/7", label: "Availability" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#mission">Our Mission &amp; Vision <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/partners">Become a Participant</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl shadow-xl lg:max-w-md">
              <Image
                src="/saps-campaign-2.jpeg"
                alt="SaPS user completing an instant mobile payment"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section id="mission" className="border-y border-border bg-muted/30 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Vision, Mission &amp; Values"
            subtitle="The principles and purpose that guide everything we do"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/8" />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To provide a secure, efficient, and inclusive national payment infrastructure
                that connects all financial institutions in Sierra Leone, enabling seamless
                transactions and fostering economic growth for all citizens.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/8" />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To be the cornerstone of Sierra Leone&apos;s digital economy — creating a fully
                interoperable payment ecosystem that drives financial inclusion and positions
                the nation as a leader in African fintech innovation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <v.icon className="h-7 w-7" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Journey" subtitle="Key milestones in SaPS development" />
          <div className="relative mt-12 border-l-2 border-border pl-8 sm:ml-12 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[2.5625rem] top-1 h-4 w-4 rounded-full border-4 border-primary bg-background" />
                <span className="text-xs font-bold text-primary">{m.year}</span>
                <h3 className="mt-0.5 text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulatory Framework ── */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Regulatory Framework
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                SaPS operates under the oversight of the Bank of Sierra Leone, adhering to all
                national financial regulations and international standards for payment system
                operators.
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
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-primary/5 p-8">
              <Scale className="h-12 w-12 text-primary" />
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Compliance &amp; Governance
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our governance structure ensures transparent decision-making, risk management,
                and accountability to all stakeholders including the central bank, participating
                institutions, and the public.
              </p>
              <Button className="mt-6" asChild>
                <Link href="/security">
                  Learn About Security
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Management ── */}
      <section id="management" className="py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Management"
            subtitle="Experienced professionals driving SaPS forward"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {management.map((person) => (
              <div key={person.name} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
                  {person.photo ? (
                    <Image src={person.photo} alt={person.name} fill className="object-cover object-top" sizes="96px" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                  )}
                </div>
                <h3 className="mt-4 font-bold text-foreground">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sierra Leone's Financial Ecosystem ── */}
      <section id="ecosystem" className="relative overflow-hidden border-y border-border py-16 sm:py-24 scroll-mt-24">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-background to-secondary/6" />
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
              <Network className="h-3.5 w-3.5" />
              One Switch. Every Institution.
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sierra Leone&apos;s Financial Ecosystem
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SaPS is the invisible thread connecting every financial institution
              in the country — banks, wallets, microfinance, merchants, and
              international gateways — into a single seamless network.
            </p>
          </div>

          {/* Central hub + institution cards */}
          <div className="mt-14">
            {/* Central SaPS hub */}
            <div className="mx-auto mb-8 flex max-w-sm flex-col items-center rounded-2xl border border-primary/30 bg-primary px-8 py-6 text-center shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/15">
                <Zap className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-3 text-xl font-bold text-primary-foreground">SaPS Switch</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">
                The central hub routing every payment instantly and securely
              </p>
              <div className="mt-4 flex divide-x divide-primary-foreground/20">
                {[
                  { v: "99.9%", l: "Uptime" },
                  { v: "1M+", l: "Monthly Txns" },
                  { v: "24/7", l: "Live" },
                ].map((s) => (
                  <div key={s.l} className="px-4 text-center">
                    <div className="text-lg font-bold text-primary-foreground">{s.v}</div>
                    <div className="text-xs text-primary-foreground/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting dots row */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full bg-primary transition-opacity ${
                      i === 4 ? "h-3 w-3 opacity-100" : "h-1.5 w-1.5 opacity-30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Institution type cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {ecosystem.map((item) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.gradient} ${item.border}`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${item.iconBg} ${item.iconColor}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{item.stat}</span>
                    <span className="ml-1.5 text-xs font-medium text-muted-foreground">{item.statLabel}</span>
                  </div>
                  <h3 className="mt-2 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
            >
              View All Participants
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Community Gallery ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="SaPS in the Community"
            subtitle="Real Sierra Leoneans using instant payments every day"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: "/saps-campaign-1.jpeg", caption: "Move your money. Quick. Easy. Anywhere." },
              { src: "/saps-campaign-4.jpeg", caption: "Pay without cash, anywhere in the country." },
              { src: "/saps-campaign-5.jpeg", caption: "Instant payments, wherever you are." },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="relative aspect-4/5">
                  <Image src={img.src} alt={img.caption} fill className="object-cover" sizes="(min-width: 640px) 33vw, 90vw" />
                </div>
                <p className="p-4 text-sm font-medium text-foreground">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join the network that&apos;s transforming Sierra Leone&apos;s financial landscape.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/partners">
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
