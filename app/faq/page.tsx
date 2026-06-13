"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    questions: [
      {
        question: "What is SaPS?",
        answer:
          "SaPS (Sierra Leone Payment Switch) is the national payment infrastructure that connects banks, mobile money operators, and other financial institutions in Sierra Leone. We enable interoperable payments including card switching, instant transfers, wallet interoperability, ACH, and QR payments.",
      },
      {
        question: "Who regulates SaPS?",
        answer:
          "SaPS operates under the supervision of the Bank of Sierra Leone (BSL), the central bank of Sierra Leone. We comply with all relevant regulations and maintain the highest standards of security and operational excellence.",
      },
      {
        question: "How do I become a SaPS participant?",
        answer:
          "To become a participant, your institution must be licensed by the Bank of Sierra Leone. Contact our partnership team through the Contact page or email partnerships@saps.sl to begin the onboarding process.",
      },
    ],
  },
  {
    name: "Services",
    questions: [
      {
        question: "What services does SaPS offer?",
        answer:
          "SaPS offers five core services: Card Switch (ATM/POS interoperability), Instant Payment (real-time bank transfers), Wallet Interoperability (mobile money to bank transfers), ACH (bulk payments), and QR Payment (scan-to-pay merchant payments).",
      },
      {
        question: "Can I use my bank card at any ATM in Sierra Leone?",
        answer:
          "Yes! Through the SaPS Card Switch service, you can use your debit card at any ATM or POS terminal connected to the SaPS network, regardless of which bank issued your card.",
      },
      {
        question: "How fast are instant payments?",
        answer:
          "SaPIP (SaPS Instant Payment) transfers are processed in real-time, typically completing within seconds. The service is available 24/7/365.",
      },
      {
        question:
          "Can I transfer money from my mobile wallet to a bank account?",
        answer:
          "Yes! Our Wallet Interoperability service enables transfers between mobile money wallets and bank accounts. Simply initiate the transfer through your mobile money app or banking app.",
      },
    ],
  },
  {
    name: "Technical",
    questions: [
      {
        question: "How do I integrate with SaPS APIs?",
        answer:
          "To integrate with SaPS APIs, you need to first become an approved participant. Once approved, you'll receive API credentials and access to our sandbox environment. Visit our Developer Portal for comprehensive documentation and code samples.",
      },
      {
        question: "What API formats does SaPS support?",
        answer:
          "SaPS APIs are RESTful and support JSON format. We provide SDKs for JavaScript/Node.js, Python, Java, and PHP to simplify integration.",
      },
      {
        question: "Is there a sandbox environment for testing?",
        answer:
          "Yes, we provide a full sandbox environment that mirrors production. You can test all API endpoints with test accounts and simulated responses without processing real transactions.",
      },
      {
        question: "What security standards does SaPS follow?",
        answer:
          "SaPS is PCI DSS Level 1 certified, ISO 27001 compliant, and SOC 2 Type II certified. We use TLS 1.3 encryption for all communications and implement multi-factor authentication for all access.",
      },
    ],
  },
  {
    name: "Support",
    questions: [
      {
        question: "How do I report a transaction issue?",
        answer:
          "For transaction issues, first contact your bank or mobile money provider. If they cannot resolve the issue, they can escalate to SaPS through our participant support channel. For urgent issues, participants can contact our 24/7 operations center.",
      },
      {
        question: "What are SaPS operating hours?",
        answer:
          "SaPS payment services operate 24/7/365. Our business support team is available Monday-Friday 8:00 AM - 5:00 PM, and our technical operations center operates around the clock.",
      },
      {
        question: "How do I report a security concern?",
        answer:
          "Security concerns should be reported immediately to security@saps.sl. For suspected fraud, contact your bank or mobile money provider first, then they can coordinate with SaPS if needed.",
      },
    ],
  },
];

// Flattened index for fuzzy search across every question and answer
const searchIndex = faqCategories.flatMap((category) =>
  category.questions.map((item) => ({
    category: category.name,
    question: item.question,
    answer: item.answer,
  })),
);

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "question", weight: 2 },
    { name: "answer", weight: 1 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
});

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim();
    if (!query) return faqCategories;

    const matches = new Set(
      fuse
        .search(query)
        .map((result) => `${result.item.category}::${result.item.question}`),
    );

    return faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter((q) =>
          matches.has(`${category.name}::${q.question}`),
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Find answers to common questions about SaPS services,
                integration, and support.
              </p>

              {/* Search */}
              <div className="relative mx-auto mt-8 max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {filteredCategories.length === 0 ? (
              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                  No questions found matching &quot;{searchQuery}&quot;
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category) => (
                  <div key={category.name}>
                    <h2 className="mb-6 text-2xl font-bold text-foreground">
                      {category.name}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((item, index) => {
                        const key = `${category.name}-${index}`;
                        const isOpen = openItems[key];

                        return (
                          <div
                            key={key}
                            className="rounded-lg border border-border bg-card"
                          >
                            <button
                              onClick={() => toggleItem(key)}
                              className="flex w-full items-center justify-between px-6 py-4 text-left"
                            >
                              <span className="font-medium text-foreground">
                                {item.question}
                              </span>
                              <ChevronDown
                                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="border-t border-border px-6 py-4">
                                <p className="text-muted-foreground">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Info Box */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Questions Beyond the FAQ
                </h3>
                <p className="text-muted-foreground">
                  The FAQs above address our most common inquiries. However,
                  SaPS can answer a wide range of questions related to the
                  National Switch that aren't specifically covered here. Whether
                  your question is about payment flows, regulatory matters,
                  technical specifications, integration support, or any other
                  aspect of the National Switch, our expert team is ready to
                  help you find the answer.
                </p>
              </div>

              {/* Contact Box */}
              <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-12">
                <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Still Have Questions?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Can't find what you're looking for? Our team is here to help
                  with any questions related to SaPS and the National Switch.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/developers">Developer Docs</Link>
                  </Button>
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
