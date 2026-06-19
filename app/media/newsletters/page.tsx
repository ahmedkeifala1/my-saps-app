import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Download, ArrowLeft, CheckCircle2 } from "lucide-react"

const archivedNewsletters = [
  {
    id: 1,
    title: "SaPS Newsletter — March 2024",
    summary:
      "QR payment nationwide launch, new bank integration, and Q1 2024 transaction highlights.",
    date: "March 2024",
  },
  {
    id: 2,
    title: "SaPS Newsletter — February 2024",
    summary:
      "Developer API v2.0 launch, African Fintech Awards win, and upcoming regulatory updates.",
    date: "February 2024",
  },
  {
    id: 3,
    title: "SaPS Newsletter — January 2024",
    summary:
      "2023 year in review, annual report release, and network expansion targets for 2024.",
    date: "January 2024",
  },
  {
    id: 4,
    title: "SaPS Newsletter — December 2023",
    summary:
      "GTBank partnership announcement, holiday hours, and Q4 performance update.",
    date: "December 2023",
  },
  {
    id: 5,
    title: "SaPS Newsletter — November 2023",
    summary:
      "Instant payment adoption milestones, security feature updates, and team spotlights.",
    date: "November 2023",
  },
]

const benefits = [
  "Monthly payment industry updates",
  "SaPS product and feature announcements",
  "Regulatory news from the Bank of Sierra Leone",
  "Fintech trends across West Africa",
  "Upcoming events and partner news",
]

export default function NewslettersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="h-3 bg-primary" />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/media"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Media Centre
            </Link>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
                <Mail className="h-3.5 w-3.5" />
                Newsletters
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Stay in the Loop
              </h1>
              <p className="mt-5 text-pretty text-lg text-muted-foreground">
                Subscribe to the SaPS monthly newsletter or browse archived
                editions for news, updates, and industry insights.
              </p>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Subscribe to Our Newsletter
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Join thousands of financial professionals, businesses, and
                  developers who rely on SaPS updates. Delivered monthly, no
                  spam.
                </p>
                <ul className="mt-6 space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">
                  Get the SaPS Newsletter
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter your email and we&apos;ll add you to our monthly list.
                </p>
                <form className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Amara"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Koroma"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="amara@example.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Organisation (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Your bank or company"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Subscribe Now
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Archived Editions */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              Archived Editions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Browse and download past newsletter editions
            </p>
            <div className="mt-8 space-y-4">
              {archivedNewsletters.map((nl) => (
                <div
                  key={nl.id}
                  className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <h3 className="font-semibold text-foreground">
                        {nl.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {nl.summary}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 gap-1.5">
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
