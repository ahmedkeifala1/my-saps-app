import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  CreditCard, 
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Building2
} from "lucide-react"

const features = [
  {
    title: "Cross-Bank ATM Access",
    description: "Customers can withdraw cash from any participating bank's ATM using their debit card, regardless of their home bank.",
    icon: Building2
  },
  {
    title: "Universal POS Acceptance",
    description: "Merchants accept cards from all participating banks through a single POS terminal, simplifying operations.",
    icon: CreditCard
  },
  {
    title: "Real-Time Authorization",
    description: "Instant transaction authorization ensures quick and seamless payment experiences for customers.",
    icon: Zap
  },
  {
    title: "Enhanced Security",
    description: "Advanced fraud detection, EMV chip support, and encryption protect every transaction.",
    icon: Shield
  }
]

const benefits = [
  "Increased ATM network coverage for customers",
  "Higher transaction volumes for banks",
  "Reduced infrastructure costs through shared networks",
  "Improved customer satisfaction",
  "Real-time transaction monitoring",
  "Comprehensive reporting and analytics"
]

export default function CardSwitchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-blue-600">
                  <CreditCard className="h-5 w-5" />
                  <span className="text-sm font-medium">Card Switch Service</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  National ATM & POS Interoperability
                </h1>
                <p className="mt-6 text-pretty text-lg text-muted-foreground">
                  SaPS Card Switch enables seamless interoperability between all ATMs and POS terminals 
                  across Sierra Leone, allowing customers to use their cards at any participating bank&apos;s 
                  ATM or merchant terminal.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/participants">Join the Network</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="aspect-square max-w-md rounded-2xl bg-blue-500/10 p-8">
                  <div className="flex h-full items-center justify-center">
                    <CreditCard className="h-48 w-48 text-blue-600/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A simple, secure process for every card transaction
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                { step: "1", title: "Card Inserted", description: "Customer inserts or taps their card at any ATM or POS terminal" },
                { step: "2", title: "Route to SaPS", description: "Transaction is securely routed through the SaPS switch" },
                { step: "3", title: "Bank Authorization", description: "Customer's bank authorizes the transaction in real-time" },
                { step: "4", title: "Complete", description: "Transaction is completed and both parties are notified" }
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Key Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Enterprise-grade capabilities for modern payment processing
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
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
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Benefits for Participants</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Joining the SaPS Card Switch network provides significant advantages for financial institutions.
                </p>
                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 gap-2" asChild>
                  <Link href="/participants">
                    Become a Participant
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="rounded-xl border border-border bg-card p-8">
                  <Globe className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">National Coverage</h3>
                  <p className="mt-4 text-muted-foreground">
                    With SaPS Card Switch, your customers gain access to the entire national ATM and POS 
                    network, while you benefit from increased transaction volumes and shared infrastructure costs.
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
              Ready to Join the Network?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Connect your institution to Sierra Leone&apos;s national card switch infrastructure.
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
