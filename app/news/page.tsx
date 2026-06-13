import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Calendar,
  ArrowRight,
  Newspaper
} from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "SaPS Launches QR Payment Service Nationwide",
    excerpt: "The new QR payment service enables contactless payments at merchants across Sierra Leone, promoting financial inclusion and digital payments.",
    date: "March 15, 2024",
    category: "Product Launch",
    featured: true
  },
  {
    id: 2,
    title: "Bank of Sierra Leone Approves New Instant Payment Regulations",
    excerpt: "New regulations support the expansion of real-time payment services, paving the way for faster, more efficient transactions.",
    date: "March 10, 2024",
    category: "Regulatory"
  },
  {
    id: 3,
    title: "SaPS Connects Fifth Mobile Money Operator",
    excerpt: "QMoney joins the SaPS network, enabling wallet interoperability for its customers and expanding financial inclusion.",
    date: "March 5, 2024",
    category: "Partnership"
  },
  {
    id: 4,
    title: "Transaction Volume Reaches New Record in February",
    excerpt: "SaPS processed over 5 million transactions in February 2024, marking a 40% increase from the previous year.",
    date: "March 1, 2024",
    category: "Milestone"
  },
  {
    id: 5,
    title: "SaPS Developer API v2.0 Released",
    excerpt: "The new API version includes improved performance, additional endpoints, and enhanced documentation for developers.",
    date: "February 25, 2024",
    category: "Technology"
  },
  {
    id: 6,
    title: "SaPS Wins Best Payment Infrastructure Award",
    excerpt: "Recognized for excellence in payment infrastructure development at the African Fintech Awards 2024.",
    date: "February 20, 2024",
    category: "Award"
  }
]

const pressReleases = [
  {
    title: "SaPS Annual Report 2023",
    date: "January 2024",
    type: "PDF"
  },
  {
    title: "Q4 2023 Transaction Statistics",
    date: "January 2024",
    type: "PDF"
  },
  {
    title: "Partnership Announcement: GTBank",
    date: "December 2023",
    type: "PDF"
  }
]

export default function NewsPage() {
  const featuredArticle = newsArticles.find(article => article.featured)
  const otherArticles = newsArticles.filter(article => !article.featured)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                News & Updates
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Stay informed about the latest developments, partnerships, and announcements 
                from SaPS.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {featuredArticle.category}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {featuredArticle.date}
                  </div>
                  <Button variant="outline" className="gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">Latest News</h2>
            
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((article) => (
                <article key={article.id} className="group rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50">
                  <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {article.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              <div className="lg:w-1/3">
                <Newspaper className="mb-4 h-10 w-10 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Press Releases</h2>
                <p className="mt-2 text-muted-foreground">
                  Official announcements and reports from SaPS.
                </p>
              </div>
              <div className="flex-1">
                <div className="space-y-4">
                  {pressReleases.map((release) => (
                    <div
                      key={release.title}
                      className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                    >
                      <div>
                        <h3 className="font-medium text-foreground">{release.title}</h3>
                        <p className="text-sm text-muted-foreground">{release.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download {release.type}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary p-8 text-center md:p-12">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Stay Updated
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                Subscribe to our newsletter for the latest news, product updates, and industry insights.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
