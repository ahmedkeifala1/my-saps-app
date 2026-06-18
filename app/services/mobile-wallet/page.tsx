import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  CheckCircle2,
  ArrowLeftRight,
  Building2,
  Users,
  ArrowRight,
  Wallet,
} from "lucide-react";

const transferTypes = [
  {
    title: "Wallet to Bank",
    description:
      "Transfer funds from your mobile money wallet directly to any bank account in Sierra Leone.",
    icon: Building2,
  },
  {
    title: "Bank to Wallet",
    description:
      "Move money from your bank account to your mobile wallet for easy mobile payments.",
    icon: Smartphone,
  },
  {
    title: "Wallet to Wallet",
    description:
      "Send money between different mobile money providers seamlessly.",
    icon: ArrowLeftRight,
  },
  {
    title: "Merchant Payments",
    description:
      "Pay merchants accepting any mobile wallet, regardless of your provider.",
    icon: Users,
  },
];

export default function MobileWalletPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Wallet Interoperability
                  </span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Connecting Wallets & Banks
                </h1>
                <p className="mt-6 text-pretty text-lg text-muted-foreground">
                  Bridge the gap between mobile money and traditional banking.
                  Transfer funds seamlessly between mobile wallets and bank
                  accounts, enabling true financial inclusion for all Sierra
                  Leoneans.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/participants">Partner With Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex max-w-md items-center justify-center">
                  <Image
                    src="/logos/Wallet interoperability.jpg"
                    alt="Wallet Interoperability"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer Types */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Transfer Options
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Multiple ways to move money between wallets and bank accounts
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {transferTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Inclusion */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <Wallet className="mb-6 h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Driving Financial Inclusion
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Wallet interoperability is key to financial inclusion in
                  Sierra Leone. By connecting mobile money services with
                  traditional banking, we enable millions of people to
                  participate in the formal financial system.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Access banking services without a bank account",
                    "Receive salaries and remittances directly to wallets",
                    "Pay bills and make purchases anywhere",
                    "Build financial history and creditworthiness",
                    "Participate in the digital economy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <p className="text-4xl font-bold text-primary">5M+</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Mobile Money Users
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <p className="text-4xl font-bold text-primary">10+</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connected Providers
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <p className="text-4xl font-bold text-primary">24/7</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Availability
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <p className="text-4xl font-bold text-primary">&lt;30s</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Transfer Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Partners */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                For Mobile Money Operators
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join the SaPS network and expand your service offerings
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Expanded Reach",
                  description:
                    "Connect your users to all banks and other mobile money providers in Sierra Leone.",
                },
                {
                  title: "New Revenue",
                  description:
                    "Generate additional transaction fees from interoperability services.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Benefit from our technical expertise and integration support.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/participants">
                  Become a Partner
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Bridge the Financial Divide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Partner with SaPS to bring wallet interoperability to your
              customers.
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
