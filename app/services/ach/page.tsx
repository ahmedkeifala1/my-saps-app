import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CheckCircle2,
  FileSpreadsheet,
  Calendar,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";

const useCases = [
  {
    title: "Payroll Processing",
    description:
      "Disburse salaries to hundreds or thousands of employees across multiple banks in a single batch.",
    icon: Users,
  },
  {
    title: "Vendor Payments",
    description:
      "Pay suppliers and vendors efficiently with scheduled batch payments.",
    icon: Building2,
  },
  {
    title: "Direct Debits",
    description:
      "Collect recurring payments like loan repayments, insurance premiums, and subscriptions.",
    icon: Calendar,
  },
  {
    title: "Government Disbursements",
    description:
      "Distribute social payments, pensions, and grants to beneficiaries nationwide.",
    icon: FileSpreadsheet,
  },
];

export default function ACHPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-purple-600">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Bulk Payments</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Efficient Batch Payment Processing
                </h1>
                <p className="mt-6 text-pretty text-lg text-muted-foreground">
                  Automated Clearing House services for high-volume,
                  batch-processed payments. Ideal for payroll, supplier
                  payments, and recurring transactions.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/participants">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/developers">API Documentation</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex max-w-md items-center justify-center">
                  <Image
                    src="/logos/Bulk Payment.png"
                    alt="Bulk Payments"
                    width={400}
                    height={400}
                    className="w-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Use Cases
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Bulk Payments supports a variety of high-volume payment scenarios
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                How Bulk Payments Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Simple, efficient batch payment processing
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Submit Batch",
                  description:
                    "Upload your payment file containing multiple transactions through our secure portal or API.",
                },
                {
                  step: "2",
                  title: "Processing",
                  description:
                    "SaPS validates, routes, and processes all transactions in scheduled clearing cycles.",
                },
                {
                  step: "3",
                  title: "Settlement",
                  description:
                    "Funds are settled between participating banks, and detailed reports are provided.",
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

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Why Use Bulk Payments?
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Process thousands of payments in a single batch",
                    "Lower per-transaction costs compared to real-time payments",
                    "Scheduled processing for predictable cash flow",
                    "Comprehensive reporting and reconciliation",
                    "Support for both credits and debits",
                    "Secure, reliable processing infrastructure",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 gap-2" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="rounded-xl border border-border bg-card p-8">
                  <Clock className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Processing Schedule
                  </h3>
                  <p className="mt-4 text-muted-foreground">
                    Bulk payment batches are processed during scheduled clearing
                    cycles throughout the day. Submit your payment files before
                    the cutoff time for same-day processing, or schedule for
                    future dates.
                  </p>
                  <div className="mt-6 space-y-2 text-sm">
                    <p className="text-foreground">
                      <strong>Morning Cycle:</strong> 9:00 AM cutoff
                    </p>
                    <p className="text-foreground">
                      <strong>Afternoon Cycle:</strong> 2:00 PM cutoff
                    </p>
                    <p className="text-foreground">
                      <strong>Evening Cycle:</strong> 5:00 PM cutoff
                    </p>
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
              Streamline Your Bulk Payments
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Contact us to learn how ACH can help your organization manage
              high-volume payments efficiently.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
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
