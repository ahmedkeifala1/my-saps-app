import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, Download, ArrowLeft, ExternalLink } from "lucide-react"

const pressReleases = [
  {
    id: 1,
    title: "SaPS Launches Nationwide QR Payment System",
    date: "March 15, 2024",
    summary:
      "SaPS officially announces the nationwide rollout of its unified QR payment system, enabling merchants across Sierra Leone to accept digital payments.",
    type: "PDF",
    featured: true,
  },
  {
    id: 2,
    title: "Bank of Sierra Leone Approves New Instant Payment Regulations",
    date: "March 10, 2024",
    summary:
      "The Bank of Sierra Leone has issued new regulatory guidelines supporting real-time interbank transactions via the SaPS network.",
    type: "PDF",
  },
  {
    id: 3,
    title: "SaPS Annual Report 2023",
    date: "January 2024",
    summary:
      "Full year 2023 performance review including transaction volumes, network growth, and strategic milestones achieved by SaPS.",
    type: "PDF",
  },
  {
    id: 4,
    title: "Q4 2023 Transaction Statistics",
    date: "January 2024",
    summary:
      "Quarterly statistical bulletin covering transaction volumes, value processed, and network availability metrics for Q4 2023.",
    type: "PDF",
  },
  {
    id: 5,
    title: "Partnership Announcement: GTBank Sierra Leone",
    date: "December 2023",
    summary:
      "SaPS welcomes GTBank Sierra Leone as a new network participant, extending the reach of real-time payments to GTBank customers.",
    type: "PDF",
  },
]

export default function PressReleasesPage() {
  const featured = pressReleases.find((r) => r.featured)
  const others = pressReleases.filter((r) => !r.featured)

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
                <FileText className="h-3.5 w-3.5" />
                Press Releases
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Official Statements
              </h1>
              <p className="mt-5 text-pretty text-lg text-muted-foreground">
                Download official press releases, regulatory announcements, and
                formal statements issued by SaPS.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Release */}
        {featured && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
                  Latest Release
                </span>
                <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {featured.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {featured.date}
                  </span>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    Download {featured.type}
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read Online
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Releases */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              All Press Releases
            </h2>
            <div className="mt-8 space-y-4">
              {others.map((release) => (
                <div
                  key={release.id}
                  className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <FileText className="h-3.5 w-3.5" />
                      {release.date} &middot; {release.type}
                    </div>
                    <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                      {release.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {release.summary}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Enquiries */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              Media Enquiries
            </h2>
            <p className="mt-4 text-muted-foreground">
              For press enquiries, interview requests, or official statements,
              please contact the SaPS communications team.
            </p>
            <Button className="mt-6" size="lg" asChild>
              <Link href="/contact">Contact Communications</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
