import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Send,
  CheckCircle2,
  Clock,
  Users,
  Bell,
  BarChart3,
  ArrowRight,
  FileText,
} from "lucide-react";

const features = [
  {
    title: "Payment Requests",
    description:
      "Create and send payment requests to customers or merchants with flexible terms.",
    icon: FileText,
  },
  {
    title: "Receiver Approval",
    description:
      "Receivers can review, approve, or decline requests before payment is processed.",
    icon: Users,
  },
  {
    title: "Automatic Reminders",
    description:
      "Set up automatic reminders for unpaid requests at customizable intervals.",
    icon: Bell,
  },
  {
    title: "Transaction Tracking",
    description:
      "Monitor payment status in real-time with complete transaction history.",
    icon: BarChart3,
  },
];

export default function RequestToPayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="h-3 bg-primary" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                  <Send className="h-5 w-5" />
                  <span className="text-sm font-medium">Request to Pay</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Payment Requests Made Simple and Secure
                </h1>
                <p className="mt-6 text-pretty text-lg text-muted-foreground">
                  Request to Pay enables businesses and individuals to initiate
                  payment requests that receivers can approve and process.
                  Perfect for invoicing, subscriptions, and flexible payment
                  collection.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/partners">Create Account</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/developers">Integration Guide</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex max-w-md items-center justify-center">
                  <Image
                    src="/logos/Request-to-pay-Logo.png"
                    alt="Request to Pay"
                    width={500}
                    height={300}
                    className="w-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Four simple steps to manage payment requests
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Create",
                  description:
                    "Create a payment request with amount, description, and due date.",
                },
                {
                  step: "2",
                  title: "Send",
                  description:
                    "Send the request to the receiver via SMS, email, or app notification.",
                },
                {
                  step: "3",
                  title: "Approve",
                  description:
                    "Receiver reviews and approves the payment request in their app.",
                },
                {
                  step: "4",
                  title: "Settle",
                  description:
                    "Payment is processed instantly and funds are transferred securely.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful tools for flexible payment collection
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Businesses */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  For Businesses
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Streamline your invoicing and payment collection process.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Send invoices automatically as payment requests",
                    "Track unpaid invoices at a glance",
                    "Set automatic payment reminders",
                    "Reduce collection cycles and improve cash flow",
                    "Supports subscriptions and recurring payments",
                    "Detailed transaction reporting and reconciliation",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 gap-2" asChild>
                  <Link href="/contact">
                    Register Your Business
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="rounded-xl border border-border bg-card p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Smart Invoicing
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Automated payment requests
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted/50 p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Invoice #SL-001
                      </span>
                      <span className="font-semibold text-foreground">
                        Le 250,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Invoice #SL-002
                      </span>
                      <span className="font-semibold text-foreground">
                        Le 180,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Invoice #SL-003
                      </span>
                      <span className="font-semibold text-foreground">
                        Le 420,500
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Customers */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  For Customers
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Take control of your payments with flexibility and security.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Review payment requests before approving them",
                    "Flexible scheduling - pay when you're ready",
                    "Secure one-time passcode approval",
                    "Complete transaction history and receipts",
                    "Dispute resolution support",
                    "Works with all banks and mobile wallets",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 gap-2" variant="outline" asChild>
                  <Link href="/partners">Download App</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="rounded-xl border border-border bg-card p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Your Requests
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Manage with ease
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg bg-muted/50 p-4">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm font-medium text-foreground">
                        Internet Bill
                      </span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-700 px-2 py-1 rounded">
                        Pending
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm font-medium text-foreground">
                        Water Payment
                      </span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Paid
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-foreground">
                        Subscription
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-700 px-2 py-1 rounded">
                        Approved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Simplify Payment Collection?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Start using Request to Pay to streamline your invoicing and
              payment management today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
