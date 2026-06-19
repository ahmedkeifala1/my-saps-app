"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  Target,
  Zap,
  Award,
  Heart,
  Globe,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: Target,
    title: "Professional Growth",
    description:
      "Training budget, mentorship programs, and clear career progression paths.",
  },
  {
    icon: Zap,
    title: "Competitive Salary",
    description:
      "Industry-competitive compensation packages with performance bonuses.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with talented teams in an inclusive, supportive environment.",
  },
  {
    icon: Globe,
    title: "Remote Options",
    description: "Flexible work arrangements to maintain work-life balance.",
  },
  {
    icon: Award,
    title: "Impact & Purpose",
    description:
      "Contribute to financial inclusion and transform lives in Sierra Leone.",
  },
];

const values = [
  {
    title: "Financial Inclusion",
    description:
      "We believe everyone deserves access to safe, reliable payment services.",
  },
  {
    title: "Innovation",
    description:
      "We continuously push boundaries to create better payment solutions.",
  },
  {
    title: "Trust",
    description:
      "Security and reliability are at the heart of everything we build.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in our products, service, and teamwork.",
  },
];

const applicationSteps = [
  {
    step: "1",
    title: "Apply Online",
    description:
      "Submit your resume and cover letter through our application portal.",
  },
  {
    step: "2",
    title: "Initial Screening",
    description: "Our HR team reviews your application and qualifications.",
  },
  {
    step: "3",
    title: "Technical Interview",
    description: "Discuss your skills and experience with our team.",
  },
  {
    step: "4",
    title: "Final Round",
    description: "Meet with leadership and discuss role expectations.",
  },
  {
    step: "5",
    title: "Offer",
    description: "Receive a competitive offer and join our team!",
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="h-3 bg-primary" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center mx-auto">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm font-medium">Join Our Team</span>
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Shape the Future of Payments in Sierra Leone
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Join a team of innovators and changemakers building financial
                inclusion. We're looking for talented individuals who are
                passionate about technology and social impact.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="#vacancies">View Vacancies</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="mailto:careers@saps.sl">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work at SaPS */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Why Work at SaPS?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We offer more than just a job—we offer a mission and a community
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
                >
                  <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vacancies Placeholder */}
        <section
          id="vacancies"
          className="border-y border-border bg-muted/30 py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-12 text-center">
                <Briefcase className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  We're Not Hiring Right Now
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We don't have any open positions at the moment. However, we're
                  always interested in hearing from talented individuals. Submit
                  your resume and we'll keep you in mind for future
                  opportunities!
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Check back soon for exciting career opportunities at SaPS
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="mailto:careers@saps.sl?subject=General%20Application">
                        Submit Your Resume
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section
          id="apply"
          className="border-t border-border bg-muted/30 py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Our Interview Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We keep it simple and straightforward
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5 mb-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-2xl rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to Join Us?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check our vacancies section above or submit your resume. We
                review applications on a rolling basis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#vacancies">View Vacancies</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="mailto:careers@saps.sl">Email Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At SaPS, we believe that great products come from great teams.
                  We foster an environment where innovation thrives, diversity
                  is celebrated, and every voice is heard.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We're committed to building products that serve Sierra Leone
                  and creating opportunities for our team members to grow both
                  professionally and personally.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      Diverse and inclusive team
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      Continuous learning opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      Collaborative work environment
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      Impact-driven mission
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-background p-12 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-32 w-32 text-primary/30 mx-auto mb-6" />
                  <p className="text-2xl font-bold text-foreground mb-2">
                    50+ Team Members
                  </p>
                  <p className="text-muted-foreground">
                    Growing team of passionate innovators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
