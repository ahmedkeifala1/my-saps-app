import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CreditCard,
  Zap,
  Wallet,
  Building2,
  QrCode,
  Shield,
  Clock,
  Users,
  Bell,
  Send,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

const services = [
  {
    icon: CreditCard,
    title: "Card Switch",
    description:
      "Connect all banks and ATMs across Sierra Leone for seamless card transactions.",
    href: "/services/card-switch",
    image: "/logos/cardswitch.png",
  },
  {
    icon: Zap,
    title: "Instant Payment",
    description:
      "Real-time interbank and wallet transfers with alias-based payments.",
    href: "/services/instant-pay",
    image: "/logos/Instant payment.jpg",
  },
  {
    icon: Wallet,
    title: "Wallet Interoperability",
    description:
      "Seamless transfers between mobile wallets and traditional bank accounts.",
    href: "/services/mobile-wallet",
    image: "/logos/Wallet interoperability.jpg",
  },
  {
    icon: Building2,
    title: "Bulk Payments",
    description:
      "Direct credit for salaries and pensions, direct debit for bills and utilities.",
    href: "/services/ach",
    image: "/logos/Bulk Payment.png",
    imageFit: "contain" as const,
  },
  {
    icon: QrCode,
    title: "QR Payment",
    description:
      "Universal QR code system enabling merchants to accept mobile payments easily.",
    href: "/services/qr-payment",
    image: "/logos/QR Payment.jpg",
  },
  {
    icon: Send,
    title: "Request to Pay",
    description:
      "Initiate payment requests that receivers can approve, enabling flexible and secure payment collection.",
    href: "/services/request-to-pay",
    image: "/logos/Request-to-pay-Logo.png",
    imageFit: "contain" as const,
  },
];

const cardGradients = [
  "from-primary/20 to-primary/5",
  "from-secondary/30 to-secondary/5",
  "from-accent/30 to-accent/5",
  "from-primary/15 to-secondary/10",
  "from-secondary/20 to-primary/5",
  "from-accent/20 to-primary/10",
];

const stats = [
  { value: "15+", label: "Financial Institutions" },
  { value: "1M+", label: "Monthly Transactions" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "24/7", label: "Support Available" },
];

const newsItems = [
  {
    title: "SaPS Launches New QR Payment System",
    date: "March 10, 2026",
    excerpt:
      "Merchants can now accept payments through a unified QR code system.",
  },
  {
    title: "Scheduled Maintenance Notice",
    date: "March 8, 2026",
    excerpt:
      "System maintenance scheduled for March 15, 2026 from 2:00 AM to 4:00 AM.",
  },
  {
    title: "New Bank Integration Complete",
    date: "March 5, 2026",
    excerpt:
      "Sierra Leone Commercial Bank has been successfully integrated into the SaPS network.",
  },
];

const partners = [
  { name: "Sierra Leone Commercial Bank", logo: "SLCB" },
  { name: "Rokel Commercial Bank", logo: "RCB" },
  { name: "Ecobank Sierra Leone", logo: "ECO" },
  { name: "Standard Chartered", logo: "SC" },
  { name: "AF Merchant Bank", logo: "AFM" },
  { name: "Zenith Bank", logo: "ZB" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      {/* Profile / About Organization Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About Sierra Leone Payment System
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                SaPS is Sierra Leone&apos;s national payment infrastructure,
                connecting financial institutions across the country to enable
                seamless, secure, and efficient payment transactions for all
                Sierra Leoneans.
              </p>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
                By operating as the central payment hub, we ensure financial
                inclusion, support economic growth, and bring modern payment
                solutions to every corner of Sierra Leone.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="/developers">For Developers</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/saps-campaign-1.jpeg"
                  alt="SaPS campaign"
                  width={400}
                  height={300}
                  className="mx-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Sierra Leone&apos;s Financial Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote Section */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <blockquote className="text-2xl font-semibold leading-relaxed text-foreground sm:text-3xl">
              "To empower Sierra Leone&apos;s economy through modern,
              accessible, and secure payment infrastructure that serves every
              institution, business, and individual across the nation."
            </blockquote>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                👤
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Executive Leadership
                </p>
                <p className="text-sm text-muted-foreground">
                  Sierra Leone Payment System Authority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Product &amp; Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive payment solutions powering Sierra Leone&apos;s
              digital economy
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                {service.image ? (
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
                      service.imageFit === "contain" ? "bg-muted p-8" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`transition-transform group-hover:scale-110 ${
                        service.imageFit === "contain"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${cardGradients[index % cardGradients.length]}`}
                  >
                    <service.icon className="h-16 w-16 text-primary/70 transition-transform group-hover:scale-110" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Solutions / How It Works Section */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple, secure, and instant transaction flow
            </p>
          </div>
          <div className="mt-12">
            <div className="relative">
              {/* Flow Diagram */}
              <div className="grid gap-4 md:grid-cols-5">
                {[
                  { icon: Users, label: "User", sublabel: "Mobile App / Web" },
                  {
                    icon: Building2,
                    label: "Sending Bank",
                    sublabel: "Or Mobile Wallet",
                  },
                  {
                    icon: Shield,
                    label: "SaPS Switch",
                    sublabel: "Secure Processing",
                  },
                  {
                    icon: Building2,
                    label: "Receiving Bank",
                    sublabel: "Or Mobile Wallet",
                  },
                  {
                    icon: Users,
                    label: "Recipient",
                    sublabel: "Account Credited",
                  },
                ].map((step, index) => (
                  <div
                    key={step.label}
                    className="relative flex flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="font-semibold text-foreground">
                        {step.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step.sublabel}
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-primary/30 md:block">
                        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-primary/30" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Real-time Processing",
                description:
                  "Transactions processed in seconds with instant confirmation",
              },
              {
                icon: Shield,
                title: "Bank-grade Security",
                description: "ISO 27001 and PCI DSS compliant infrastructure",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description:
                  "Round-the-clock service with 99.9% uptime guarantee",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-lg bg-card p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Security Info Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Regulatory Framework
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                SaPS operates under the oversight of the Bank of Sierra Leone,
                ensuring full compliance with national payment system
                regulations. Every connected institution operates within a
                clear legal and operational framework designed to protect
                consumers and maintain financial stability across the country.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Security &amp; Compliance
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our infrastructure is built to ISO 27001 and PCI DSS
                standards, with end-to-end encryption, continuous monitoring,
                and fraud detection safeguarding every transaction that flows
                through the switch.
              </p>
              <Link
                href="/security"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Brands Section */}
      <section className="border-y border-border bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by Leading Financial Institutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Partner banks and fintech companies across Sierra Leone rely on
              SaPS
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-lg border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary mx-auto mb-2">
                    {partner.logo}
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/participants">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                News & Alerts
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Latest updates from SaPS
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link href="/news">View All News</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.title} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bell className="h-4 w-4" />
                    {item.date}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <Link
                    href="/news"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Stay Updated
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Subscribe to get the latest news, updates, and announcements
                from SaPS
              </p>
            </div>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Careers & Team Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 p-8 lg:p-12">
              <div className="text-center">
                <div className="text-5xl">👥</div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Building Sierra Leone&apos;s Future
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Join Our Team
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We&apos;re building the payment infrastructure that powers
                Sierra Leone&apos;s economy. If you&apos;re passionate about
                fintech, innovation, and financial inclusion, we want to hear
                from you.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Help us connect people, businesses, and institutions across
                Sierra Leone through world-class payment solutions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/careers">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact HR</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Join Sierra Leone&apos;s Payment Network?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Connect your institution to SaPS and offer your customers
              seamless, secure payment services.
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
