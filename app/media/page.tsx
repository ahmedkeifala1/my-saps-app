import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Newspaper,
  FileText,
  BookOpen,
  PenLine,
  Mail,
  ArrowRight,
  Calendar,
  Bell,
} from "lucide-react"

const mediaCategories = [
  {
    icon: Newspaper,
    title: "News Articles",
    description:
      "Latest announcements, product launches, partnerships, and milestones from SaPS.",
    href: "/media/news",
    count: "6 Articles",
    color: "from-blue-500/15 to-cyan-400/8 border-blue-400/25",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FileText,
    title: "Press Releases",
    description:
      "Official statements and regulatory announcements issued by SaPS.",
    href: "/media/press-releases",
    count: "3 Releases",
    color: "from-violet-500/15 to-purple-400/8 border-violet-400/25",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: BookOpen,
    title: "Publications",
    description:
      "Annual reports, whitepapers, and research documents from SaPS.",
    href: "/media/publications",
    count: "4 Documents",
    color: "from-emerald-500/15 to-green-400/8 border-emerald-400/25",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: PenLine,
    title: "Blog",
    description:
      "Insights, thought leadership, and expert commentary on fintech in Sierra Leone.",
    href: "/media/blog",
    count: "5 Posts",
    color: "from-amber-500/15 to-orange-400/8 border-amber-400/25",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Mail,
    title: "Newsletters",
    description:
      "Subscribe to or browse archived SaPS newsletters and industry updates.",
    href: "/media/newsletters",
    count: "Monthly",
    color: "from-rose-500/15 to-pink-400/8 border-rose-400/25",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
]

const recentHighlights = [
  {
    category: "News",
    title: "SaPS Launches QR Payment Service Nationwide",
    date: "March 15, 2024",
    href: "/media/news",
  },
  {
    category: "Press Release",
    title: "Bank of Sierra Leone Approves New Instant Payment Regulations",
    date: "March 10, 2024",
    href: "/media/press-releases",
  },
  {
    category: "Blog",
    title: "How Interoperability Is Reshaping Sierra Leone's Economy",
    date: "March 8, 2024",
    href: "/media/blog",
  },
  {
    category: "Publication",
    title: "SaPS Annual Report 2023",
    date: "January 2024",
    href: "/media/publications",
  },
]

export default function MediaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="h-3 bg-primary" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-secondary/8 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
                <Bell className="h-3.5 w-3.5" />
                Stay Informed
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                SaPS Media Centre
              </h1>
              <p className="mt-5 text-pretty text-lg text-muted-foreground">
                Your hub for news, official statements, publications, and
                insights from Sierra Leone&apos;s national payment
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              Browse by Category
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find exactly what you&apos;re looking for
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mediaCategories.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cat.color}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ${cat.iconBg} ${cat.iconColor}`}
                  >
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-foreground">
                      {cat.title}
                    </h3>
                    <span className="rounded-full bg-background/70 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {cat.count}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Highlights */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              Recent Highlights
            </h2>
            <p className="mt-2 text-muted-foreground">
              The latest across all media categories
            </p>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
              {recentHighlights.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-muted/50"
                >
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-1.5 truncate text-base font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary p-8 text-center md:p-12">
              <Mail className="mx-auto h-10 w-10 text-primary-foreground/80" />
              <h2 className="mt-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Never Miss an Update
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                Subscribe to the SaPS newsletter for monthly news, product
                updates, and industry insights delivered to your inbox.
              </p>
              <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </form>
              <p className="mt-3 text-xs text-primary-foreground/50">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
