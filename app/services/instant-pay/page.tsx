import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  CheckCircle2,
  Clock,
  Shield,
  Smartphone,
  ArrowRight,
  RefreshCw
} from "lucide-react"

const features = [
  {
    title: "24/7 Availability",
    description: "Send and receive money any time of day, any day of the year. No banking hours restrictions.",
    icon: Clock
  },
  {
    title: "Instant Settlement",
    description: "Funds are transferred and settled in real-time, typically within seconds.",
    icon: Zap
  },
  {
    title: "Irrevocable Transfers",
    description: "Once confirmed, transfers cannot be reversed, providing certainty for both parties.",
    icon: RefreshCw
  },
  {
    title: "Multi-Channel Access",
    description: "Initiate transfers via mobile banking, internet banking, or at bank branches.",
    icon: Smartphone
  }
]

const useCases = [
  {
    title: "Person-to-Person",
    description: "Send money to family and friends instantly, even across different banks."
  },
  {
    title: "Business Payments",
    description: "Pay suppliers, contractors, and employees with immediate fund availability."
  },
  {
    title: "Bill Payments",
    description: "Pay utilities, school fees, and other bills without delays."
  },
  {
    title: "Emergency Transfers",
    description: "Send urgent funds when time is critical, available 24/7."
  }
]

export default function InstantPayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-amber-600">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-medium">SaPIP - Instant Payment</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Real-Time Bank Transfers, 24/7
                </h1>
                <p className="mt-6 text-pretty text-lg text-muted-foreground">
                  SaPIP (SaPS Instant Payment) enables real-time, irrevocable fund transfers between 
                  bank accounts. Send money instantly, any time of day, any day of the week.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/participants">Join the Network</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/developers">Developer Docs</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-square max-w-md rounded-2xl bg-amber-500/10 p-8">
                  <div className="flex h-full items-center justify-center">
                    <Zap className="h-48 w-48 text-amber-600/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Key Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Modern payment infrastructure for instant fund transfers
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Use Cases</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SaPIP supports a wide range of payment scenarios
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
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
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Choose SaPIP?</h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Transfers complete in seconds, not days",
                    "Available 24 hours a day, 365 days a year",
                    "Lower fees compared to traditional wire transfers",
                    "Secure, encrypted transactions",
                    "Real-time notifications and confirmations",
                    "Seamless integration with existing banking systems"
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
                  <Shield className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Bank-Grade Security</h3>
                  <p className="mt-4 text-muted-foreground">
                    Every SaPIP transaction is protected by multiple layers of security, including 
                    end-to-end encryption, fraud detection, and compliance with international 
                    payment security standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Enable Instant Payments for Your Customers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Join the SaPIP network and offer your customers real-time payment capabilities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
