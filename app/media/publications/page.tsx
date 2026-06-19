import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, ArrowLeft, BarChart2, FileSearch, BookMarked } from "lucide-react"

const publications = [
  {
    id: 1,
    icon: BarChart2,
    type: "Annual Report",
    title: "SaPS Annual Report 2023",
    description:
      "A comprehensive review of SaPS operations in 2023 — covering transaction volumes, network expansion, financial performance, and the year ahead.",
    date: "January 2024",
    pages: "48 pages",
    featured: true,
  },
  {
    id: 2,
    icon: FileSearch,
    type: "Whitepaper",
    title: "Financial Inclusion Through Interoperability",
    description:
      "An in-depth analysis of how payment interoperability drives financial inclusion in Sub-Saharan Africa, with lessons from the Sierra Leone experience.",
    date: "October 2023",
    pages: "24 pages",
  },
  {
    id: 3,
    icon: BarChart2,
    type: "Statistics",
    title: "Q4 2023 Transaction Statistics Bulletin",
    description:
      "Detailed quarterly statistics on transaction volumes, channel usage, and network availability for Q4 2023.",
    date: "January 2024",
    pages: "12 pages",
  },
  {
    id: 4,
    icon: BookMarked,
    type: "Framework",
    title: "SaPS Regulatory & Operational Framework",
    description:
      "The official governance and operational framework governing participation in the SaPS network, issued under BSL oversight.",
    date: "June 2023",
    pages: "36 pages",
  },
]

const typeColors: Record<string, string> = {
  "Annual Report": "bg-blue-100 text-blue-700",
  Whitepaper: "bg-emerald-100 text-emerald-700",
  Statistics: "bg-amber-100 text-amber-700",
  Framework: "bg-violet-100 text-violet-700",
}

export default function PublicationsPage() {
  const featured = publications.find((p) => p.featured)
  const others = publications.filter((p) => !p.featured)

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
                <BookOpen className="h-3.5 w-3.5" />
                Publications
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Reports &amp; Research
              </h1>
              <p className="mt-5 text-pretty text-lg text-muted-foreground">
                Annual reports, whitepapers, statistical bulletins, and
                frameworks published by SaPS.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Publication */}
        {featured && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-12">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="h-12 w-12" />
                </div>
                <div className="flex-1">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${typeColors[featured.type] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {featured.type}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-foreground">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">
                    {featured.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{featured.date}</span>
                    <span>&middot;</span>
                    <span>{featured.pages}</span>
                  </div>
                  <Button className="mt-6 gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Publications */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              All Publications
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((pub) => (
                <div
                  key={pub.id}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <pub.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`mt-4 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColors[pub.type] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {pub.type}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">
                    {pub.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {pub.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">
                      {pub.date} &middot; {pub.pages}
                    </span>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Download className="h-3.5 w-3.5" />
                      PDF
                    </Button>
                  </div>
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
