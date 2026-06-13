import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Lock,
  Eye,
  Server,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All data in transit is encrypted using TLS 1.3, ensuring your transactions are protected from interception.",
    icon: Lock
  },
  {
    title: "24/7 Monitoring",
    description: "Our security operations center monitors all transactions in real-time, detecting and responding to threats immediately.",
    icon: Eye
  },
  {
    title: "Secure Infrastructure",
    description: "Our systems are hosted in Tier 4 data centers with redundant power, cooling, and network connectivity.",
    icon: Server
  },
  {
    title: "Compliance",
    description: "We comply with PCI DSS, ISO 27001, and Bank of Sierra Leone regulations for payment security.",
    icon: FileCheck
  },
  {
    title: "Fraud Detection",
    description: "Advanced machine learning algorithms detect suspicious patterns and prevent fraudulent transactions.",
    icon: AlertTriangle
  },
  {
    title: "Access Controls",
    description: "Multi-factor authentication and role-based access controls protect sensitive operations and data.",
    icon: Shield
  }
]

const certifications = [
  { name: "PCI DSS Level 1", description: "Payment Card Industry Data Security Standard" },
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2 Type II", description: "Service Organization Control" },
  { name: "BSL Compliant", description: "Bank of Sierra Leone Regulations" }
]

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Security & Trust
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Your security is our top priority. SaPS implements industry-leading security 
                measures to protect every transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">How We Protect You</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Multi-layered security approach to safeguard your transactions
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {securityFeatures.map((feature) => (
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

        {/* Certifications */}
        <section className="border-y border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Certifications & Compliance</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We meet the highest industry standards for security and compliance
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="rounded-xl border border-border bg-card p-6 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Security Practices</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We follow a comprehensive security program that includes:
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Regular penetration testing by independent security firms",
                    "Continuous vulnerability scanning and patching",
                    "Employee security awareness training",
                    "Incident response and disaster recovery procedures",
                    "Regular security audits and assessments",
                    "Secure software development lifecycle (SDLC)"
                  ].map((practice) => (
                    <li key={practice} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="rounded-xl border border-border bg-card p-8">
                  <Lock className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Report a Security Issue</h3>
                  <p className="mt-4 text-muted-foreground">
                    If you discover a security vulnerability, please report it to our security team. 
                    We take all reports seriously and will respond promptly.
                  </p>
                  <Button className="mt-6 gap-2" asChild>
                    <Link href="mailto:security@saps.sl">
                      Contact Security Team
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Questions About Security?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Contact us to learn more about how we protect your transactions.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
