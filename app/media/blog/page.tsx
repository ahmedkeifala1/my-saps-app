import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PenLine, Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How Interoperability Is Reshaping Sierra Leone's Economy",
    excerpt:
      "Payment interoperability breaks down the walls between financial institutions, letting money flow freely. We examine the economic ripple effects for Sierra Leone.",
    author: "SaPS Research Team",
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "Thought Leadership",
    featured: true,
  },
  {
    id: 2,
    title: "The Case for Real-Time Payments in Emerging Markets",
    excerpt:
      "Instant payment infrastructure isn't just a convenience — in markets with high mobile penetration and low banking rates, it's a transformative tool for inclusion.",
    author: "Technology Team",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Fintech Insights",
  },
  {
    id: 3,
    title: "Security First: How SaPS Protects Every Transaction",
    excerpt:
      "From end-to-end encryption to real-time fraud detection, we break down the security layers that safeguard the national payment network.",
    author: "Security Team",
    date: "February 15, 2024",
    readTime: "4 min read",
    category: "Security",
  },
  {
    id: 4,
    title: "Building for Developers: Inside SaPS API v2.0",
    excerpt:
      "Our engineering team walks through the key improvements in the v2.0 API — better performance, clearer documentation, and new capabilities for partners.",
    author: "Engineering Team",
    date: "February 5, 2024",
    readTime: "7 min read",
    category: "Technology",
  },
  {
    id: 5,
    title: "QR Codes and the Future of Merchant Payments in Sierra Leone",
    excerpt:
      "QR-based payments have transformed commerce across Asia and Africa. We look at how SaPS is adapting this technology for the Sierra Leonean market.",
    author: "Product Team",
    date: "January 25, 2024",
    readTime: "5 min read",
    category: "Product",
  },
]

const categoryColors: Record<string, string> = {
  "Thought Leadership": "bg-violet-100 text-violet-700",
  "Fintech Insights": "bg-blue-100 text-blue-700",
  Security: "bg-red-100 text-red-700",
  Technology: "bg-emerald-100 text-emerald-700",
  Product: "bg-amber-100 text-amber-700",
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const others = blogPosts.filter((p) => !p.featured)

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
                <PenLine className="h-3.5 w-3.5" />
                Blog
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Insights &amp; Ideas
              </h1>
              <p className="mt-5 text-pretty text-lg text-muted-foreground">
                Thought leadership, technical deep-dives, and expert commentary
                on payments and fintech in Sierra Leone.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${categoryColors[featured.category] ?? "bg-muted text-muted-foreground"}`}
                >
                  {featured.category}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {featured.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featured.readTime}
                  </div>
                  <span>By {featured.author}</span>
                </div>
                <Button variant="outline" className="mt-6 gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              More Articles
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {others.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50"
                >
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
