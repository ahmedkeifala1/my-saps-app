import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Zap,
  Smartphone,
  Building2,
  QrCode,
  ArrowRight,
  CheckCircle2,
  Send,
} from "lucide-react";

const services = [
  {
    id: "card-switch",
    name: "Card Switch",
    shortDescription: "National ATM & POS interoperability across all banks",
    description:
      "Our Card Switch service enables seamless interoperability between all ATMs and POS terminals across Sierra Leone. Customers can use their cards at any participating bank's ATM or merchant terminal.",
    icon: CreditCard,
    features: [
      "Cross-bank ATM withdrawals",
      "Universal POS acceptance",
      "Real-time authorization",
      "Fraud detection & prevention",
      "24/7 transaction monitoring",
    ],
    color: "bg-blue-500/10 text-blue-600",
    media: {
      type: "image" as const,
      src: "/saps-campaign-3.jpeg",
      alt: "SaPS partner banks and the Bank of Sierra Leone — Card Switch connects ATMs and POS terminals nationwide",
    },
  },
  {
    id: "instant-pay",
    name: "Instant Payment",
    shortDescription: "Real-time bank-to-bank transfers 24/7",
    description:
      "SaPIP (SaPS Instant Payment) enables real-time, irrevocable fund transfers between bank accounts. Send money instantly, any time of day, any day of the week.",
    icon: Zap,
    features: [
      "24/7/365 availability",
      "Instant settlement",
      "Irrevocable transfers",
      "Low transaction fees",
      "Mobile & online access",
    ],
    color: "bg-amber-500/10 text-amber-600",
    media: {
      type: "video" as const,
      src: "/Saps-video.mp4",
    },
  },
  {
    id: "mobile-wallet",
    name: "Wallet Interoperability",
    shortDescription: "Connect mobile money wallets with bank accounts",
    description:
      "Bridge the gap between mobile money and traditional banking. Transfer funds seamlessly between mobile wallets and bank accounts, enabling true financial inclusion.",
    icon: Smartphone,
    features: [
      "Wallet-to-bank transfers",
      "Bank-to-wallet transfers",
      "Cross-wallet transfers",
      "Unified payment experience",
      "Real-time processing",
    ],
    color: "bg-primary/10 text-primary",
    media: {
      type: "image" as const,
      src: "/saps-campaign-5.jpeg",
      alt: "A motorbike rider using SaPS to send and receive instant mobile wallet payments",
    },
  },
  {
    id: "ach",
    name: "Bulk Payments",
    shortDescription: "Efficient batch processing for salaries & bills",
    description:
      "Automated Clearing House services for high-volume, batch-processed payments. Ideal for payroll, supplier payments, and recurring transactions.",
    icon: Building2,
    features: [
      "Salary disbursements",
      "Bulk vendor payments",
      "Direct debits",
      "Scheduled processing",
      "Detailed reporting",
    ],
    color: "bg-purple-500/10 text-purple-600",
    media: {
      type: "image" as const,
      src: "/saps-campaign-1.jpeg",
      alt: "Sierra Leonean market traders celebrating after receiving an instant payment through SaPS",
    },
  },
  {
    id: "qr-payment",
    name: "QR Payment",
    shortDescription: "Scan-to-pay merchant payments made simple",
    description:
      "QR-code based payment system enabling contactless, secure payments at merchant locations. Simple for customers, efficient for merchants.",
    icon: QrCode,
    features: [
      "Contactless payments",
      "Merchant QR codes",
      "Customer QR codes",
      "Instant confirmation",
      "Low merchant fees",
    ],
    color: "bg-rose-500/10 text-rose-600",
    media: {
      type: "image" as const,
      src: "/saps-campaign-4.jpeg",
      alt: "A market vendor accepting a contactless QR payment through SaPS",
    },
  },
  {
    id: "request-to-pay",
    name: "Request to Pay",
    shortDescription: "Flexible payment collection made secure and easy",
    description:
      "Request to Pay enables businesses and individuals to initiate payment requests that receivers can approve and process. Perfect for invoicing, subscriptions, and flexible payment collection.",
    icon: Send,
    features: [
      "Payment request initiation",
      "Receiver approval workflow",
      "Flexible payment terms",
      "Automatic reminders",
      "Transaction history & tracking",
    ],
    color: "bg-primary/10 text-primary",
    media: {
      type: "image" as const,
      src: "/saps-campaign-2.jpeg",
      alt: "A SaPS user reviewing a payment request and completing an instant mobile-to-bank transfer",
    },
  },
];

const serviceHighlights = [
  { value: "6", label: "Core Services" },
  { value: "24/7/365", label: "Always Available" },
  { value: "15+", label: "Connected Institutions" },
  { value: "<5s", label: "Average Settlement" },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Built on Sierra Leone&apos;s National Payment Switch
              </div>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Comprehensive payment infrastructure solutions connecting
                banks, mobile money operators, and merchants across Sierra
                Leone. From instant transfers to nationwide card
                interoperability, SaPS powers the rails that move money
                safely and in real time, every hour of every day.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Whether you&apos;re a bank plugging into the national switch,
                a mobile money operator extending wallet services, or a
                merchant accepting digital payments, our services are built
                to be secure, scalable, and easy to integrate &mdash; all
                under the oversight of the Bank of Sierra Leone.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {serviceHighlights.map((stat) => (
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
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {service.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="gap-2">
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                      {service.media.type === "video" ? (
                        <video
                          className="h-full w-full object-cover"
                          src={service.media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                        />
                      ) : (
                        <Image
                          src={service.media.src}
                          alt={service.media.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Connect to SaPS?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Join Sierra Leone&apos;s growing payment ecosystem. Contact us to
              learn how your institution can benefit from our services.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/participants">Become a Participant</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
