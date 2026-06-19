"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Search,
  MessageCircle,
  CreditCard,
  Zap,
  Globe,
  HelpCircle,
} from "lucide-react";
import Fuse from "fuse.js";

const faqCategories = [
  {
    id: "saps",
    name: "SaPS FAQs",
    icon: HelpCircle,
    description: "General questions about SaPS and how it works",
    questions: [
      {
        question: "What is SaPS?",
        answer:
          "SaPS (Salone Pɛment Swich) is Sierra Leone's national payment infrastructure. It connects banks, mobile money operators, and other financial institutions, enabling seamless interoperable payments — including card switching, instant transfers, wallet interoperability, bulk payments, and QR payments — across the country.",
      },
      {
        question: "Who owns and operates SaPS?",
        answer:
          "SaPS is owned and operated as a national infrastructure entity under the oversight of the Bank of Sierra Leone (BSL). It serves all licensed financial institutions in the country as a neutral, shared utility.",
      },
      {
        question: "Who regulates SaPS?",
        answer:
          "SaPS operates under the supervision of the Bank of Sierra Leone (BSL), the central bank of Sierra Leone. We comply with all national payment system regulations and maintain the highest standards of security and operational excellence.",
      },
      {
        question: "How do I become a SaPS participant?",
        answer:
          "To become a participant, your institution must be licensed by the Bank of Sierra Leone. Contact our partnership team through the Contact page or email partnerships@saps.sl to begin the onboarding process. You will receive a participation agreement, technical specifications, and go-live support.",
      },
      {
        question: "What types of institutions can connect to SaPS?",
        answer:
          "Commercial banks, microfinance institutions, mobile money operators, savings and loans companies, fintech companies, and other Bank of Sierra Leone-licensed financial service providers can connect to SaPS.",
      },
      {
        question: "Is SaPS available 24/7?",
        answer:
          "Yes. SaPS payment services operate 24 hours a day, 7 days a week, 365 days a year. Our technical operations centre monitors the switch around the clock to ensure continuous availability.",
      },
      {
        question: "What are SaPS business support hours?",
        answer:
          "Our business support team is available Monday to Friday, 8:00 AM – 5:00 PM (Sierra Leone time). Technical operations support is available 24/7 for participant institutions.",
      },
      {
        question: "How does SaPS promote financial inclusion?",
        answer:
          "By connecting all financial institutions on a single interoperable network, SaPS makes it possible for any Sierra Leonean — regardless of which bank or mobile wallet they use — to send and receive money to any account. This breaks down barriers and brings formal financial services to more people across the country.",
      },
    ],
  },
  {
    id: "card-switch",
    name: "Card Switch",
    icon: CreditCard,
    description: "ATM and POS interoperability across Sierra Leone",
    questions: [
      {
        question: "What is the SaPS Card Switch?",
        answer:
          "The SaPS Card Switch is the national card processing infrastructure that connects all bank ATMs and POS (Point of Sale) terminals in Sierra Leone. It allows any bank-issued debit or prepaid card to be used at any connected ATM or merchant terminal, regardless of which bank issued the card.",
      },
      {
        question: "Which card schemes does SaPS Card Switch support?",
        answer:
          "The SaPS Card Switch supports domestic card schemes as well as international schemes including Visa, Mastercard, and UnionPay on connected terminals. All BSL-licensed banks issuing cards are eligible to participate.",
      },
      {
        question: "Can I use my bank card at any ATM in Sierra Leone?",
        answer:
          "Yes. Through the SaPS Card Switch, your debit card issued by any participating bank can be used at any ATM or POS terminal in the SaPS network, giving you nationwide access to cash and payment services.",
      },
      {
        question: "What transactions can I perform at an ATM through SaPS?",
        answer:
          "At SaPS-connected ATMs you can: withdraw cash, check your account balance, change your PIN, perform mini account statements, and in some cases make fund transfers. Available services may vary by terminal.",
      },
      {
        question: "Why was my card declined at an ATM?",
        answer:
          "Card declines can occur for several reasons: insufficient funds, an incorrect PIN, a card that has not been activated for network use, a card that has been blocked, or a temporary communication issue. Contact your issuing bank's customer service for account-specific assistance.",
      },
      {
        question: "What fees apply when I use another bank's ATM?",
        answer:
          "Inter-bank ATM fees are set by each participating bank. SaPS charges a small interchange fee for processing the transaction. Your bank will disclose applicable fees in its terms and conditions or on its fee schedule.",
      },
      {
        question: "How do banks connect their ATMs to SaPS?",
        answer:
          "Participating banks integrate their ATM or POS networks by connecting to the SaPS host through ISO 8583-compliant messaging over a secure dedicated link. Our technical team provides full onboarding support and certification testing.",
      },
      {
        question: "Is card transaction data secure?",
        answer:
          "Yes. All card transactions routed through SaPS are protected by PCI DSS-compliant processing, end-to-end encryption, and tokenisation. SaPS does not store sensitive card data beyond what is required for transaction settlement.",
      },
    ],
  },
  {
    id: "instant-payment",
    name: "Instant Payment System",
    icon: Zap,
    description: "Real-time interbank and wallet transfers",
    questions: [
      {
        question: "What is the SaPS Instant Payment System?",
        answer:
          "The SaPS Instant Payment System (SaPIP) is a real-time payment rail that enables immediate fund transfers between any two accounts in the SaPS network — whether bank-to-bank, bank-to-wallet, or wallet-to-bank — available around the clock.",
      },
      {
        question: "How quickly does an instant payment reach the recipient?",
        answer:
          "SaPIP transfers are processed in real-time, typically completing within a few seconds. Both the sender and recipient receive immediate confirmation, and the funds are available in the recipient's account straight away.",
      },
      {
        question: "What is alias-based payment?",
        answer:
          "Alias-based payment lets you send money using a recipient's mobile phone number, email address, or national ID number instead of a full account number. SaPS resolves the alias to the linked account behind the scenes, making payments faster and reducing errors.",
      },
      {
        question: "Is there a transaction limit for instant payments?",
        answer:
          "Transaction limits are set by the Bank of Sierra Leone's regulatory guidelines and may be further customised by each participating institution. Your bank or mobile money provider will communicate the applicable limits for your account tier.",
      },
      {
        question: "Can I use the Instant Payment System to pay merchants?",
        answer:
          "Yes. Through Request to Pay and QR payment features built on SaPIP, customers can pay merchants instantly at the point of sale or remotely, with funds transferred in real-time from the payer's account to the merchant's account.",
      },
      {
        question: "What happens if an instant payment fails?",
        answer:
          "If a SaPIP transaction cannot be completed — due to an invalid account, system timeout, or other reason — the payment is automatically reversed and the funds are returned to the sender's account. Your institution's app or SMS notification will confirm the reversal.",
      },
      {
        question: "Does SaPIP support bulk salary payments?",
        answer:
          "Bulk credit transfers (for salaries, pensions, and mass disbursements) are handled through the SaPS ACH (Automated Clearing House) service, which is distinct from SaPIP. Both services are available to participating institutions. Contact us for details on bulk payment onboarding.",
      },
      {
        question: "How do developers integrate with SaPIP?",
        answer:
          "SaPIP integration is done via RESTful APIs using ISO 20022-compliant messaging. Participating institutions receive API credentials, sandbox access, and full documentation through the SaPS Developer Portal. Visit /developers for more information.",
      },
    ],
  },
  {
    id: "international-gateway",
    name: "International Payment Gateway",
    icon: Globe,
    description: "Cross-border payments and remittances",
    questions: [
      {
        question: "What is the SaPS International Payment Gateway?",
        answer:
          "The SaPS International Payment Gateway is the cross-border component of the national switch, connecting Sierra Leone's domestic payment infrastructure to international networks. It enables inbound and outbound remittances, foreign currency settlements, and integration with regional and global payment schemes.",
      },
      {
        question: "Which international corridors are currently supported?",
        answer:
          "SaPS is actively expanding international connectivity. Current corridors include remittance links to the United Kingdom, United States, and neighbouring West African countries through partnerships with international money transfer operators and regional switch networks. Contact us for the latest list of supported corridors.",
      },
      {
        question: "Can Sierra Leoneans abroad send money home through SaPS?",
        answer:
          "Yes. Through SaPS-connected remittance partners, diaspora Sierra Leoneans can send money directly to any bank account or mobile wallet within the SaPS network. Funds are credited in real-time or within minutes, depending on the sending corridor.",
      },
      {
        question: "What currencies are supported for international transfers?",
        answer:
          "Inbound transfers can be received in USD, GBP, EUR, and other major currencies and are settled in Sierra Leonean Leones (SLL) at the prevailing exchange rate. Your receiving bank will apply its foreign exchange policy at the point of credit.",
      },
      {
        question: "Are international payments through SaPS regulated?",
        answer:
          "Yes. All cross-border transactions through the SaPS gateway are processed in accordance with Bank of Sierra Leone foreign exchange regulations, AML/CFT requirements, and international compliance standards including FATF guidelines.",
      },
      {
        question: "How do I receive an international remittance?",
        answer:
          "To receive funds sent via a SaPS-connected remittance channel, you simply need a bank account or registered mobile wallet at a participating institution. Share your account details or mobile alias with the sender, and the funds will be credited automatically once the transfer is processed.",
      },
      {
        question: "How does SaPS ensure compliance on international transfers?",
        answer:
          "Every international transfer processed through the gateway goes through automated sanctions screening, AML transaction monitoring, and identity verification in line with BSL and international standards. Suspicious transactions are flagged for review before settlement.",
      },
      {
        question: "Can businesses use the gateway for cross-border trade payments?",
        answer:
          "Yes. Businesses can use the SaPS International Payment Gateway for import and export trade settlements, subject to Bank of Sierra Leone foreign exchange regulations. Interested businesses should contact their bank, which acts as the gateway participant.",
      },
    ],
  },
];

const searchIndex = faqCategories.flatMap((cat) =>
  cat.questions.map((q) => ({
    categoryId: cat.id,
    categoryName: cat.name,
    question: q.question,
    answer: q.answer,
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
  const [activeCategory, setActiveCategory] = useState("saps");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentCategory =
    faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0];

  const searchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return null;
    return fuse.search(q).map((r) => r.item);
  }, [searchQuery]);

  const displayedQuestions = searchResults
    ? currentCategory.questions.filter((q) =>
        searchResults.some(
          (r) =>
            r.categoryId === currentCategory.id && r.question === q.question,
        ),
      )
    : currentCategory.questions;

  const globalSearchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return [];
    return fuse.search(q).map((r) => r.item);
  }, [searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Blue accent bar */}
        <div className="h-3 bg-primary" />

        {/* Two-panel Layout */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">

            {/* ── LEFT SIDEBAR ── */}
            <aside className="w-full shrink-0 lg:w-72">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Category Navigation */}
              <nav className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="border-b border-border bg-muted/50 px-4 py-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Categories
                  </p>
                </div>
                <ul className="divide-y divide-border">
                  {faqCategories.map((cat) => {
                    const isActive = cat.id === activeCategory;
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveCategory(cat.id);
                            setSearchQuery("");
                            setOpenItems({});
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm transition-colors hover:bg-muted/60 ${
                            isActive
                              ? "bg-primary/10 font-semibold text-primary"
                              : "text-foreground"
                          }`}
                        >
                          <cat.icon
                            className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <span className="flex-1">{cat.name}</span>
                          {isActive && (
                            <ChevronRight className="h-3.5 w-3.5 text-primary" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Still have questions card */}
              <div className="mt-6 rounded-lg border border-border bg-card p-4">
                <MessageCircle className="h-7 w-7 text-primary" />
                <h3 className="mt-2 font-semibold text-foreground">
                  Still have questions?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Our team is ready to help with anything not covered here.
                </p>
                <Button size="sm" className="mt-3 w-full" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </aside>

            {/* ── RIGHT CONTENT ── */}
            <div className="min-w-0 flex-1">

              {/* Global search results across all categories */}
              {searchQuery.trim() && globalSearchResults.length > 0 ? (
                <div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">
                      {globalSearchResults.length}
                    </span>{" "}
                    result{globalSearchResults.length !== 1 ? "s" : ""} for &ldquo;
                    {searchQuery}&rdquo; across all categories
                  </p>

                  {faqCategories.map((cat) => {
                    const catResults = globalSearchResults.filter(
                      (r) => r.categoryId === cat.id,
                    );
                    if (catResults.length === 0) return null;
                    return (
                      <div key={cat.id} className="mb-8">
                        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                          <cat.icon className="h-5 w-5 text-primary" />
                          {cat.name}
                        </h2>
                        <div className="space-y-2">
                          {catResults.map((result) => {
                            const key = `search-${cat.id}-${result.question}`;
                            const isOpen = openItems[key];
                            return (
                              <div
                                key={key}
                                className="rounded-lg border border-border bg-card"
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleItem(key)}
                                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                                >
                                  <span className="font-medium text-foreground">
                                    {result.question}
                                  </span>
                                  <ChevronRight
                                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                                      isOpen ? "rotate-90" : ""
                                    }`}
                                  />
                                </button>
                                {isOpen && (
                                  <div className="border-t border-border px-5 py-4">
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                      {result.answer}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : searchQuery.trim() && globalSearchResults.length === 0 ? (
                <div className="rounded-lg border border-border bg-card p-10 text-center">
                  <Search className="mx-auto h-10 w-10 text-muted-foreground/50" />
                  <p className="mt-4 text-lg font-semibold text-foreground">
                    No results found
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    No FAQs match &ldquo;{searchQuery}&rdquo;. Try different
                    keywords or{" "}
                    <button
                      type="button"
                      className="text-primary underline"
                      onClick={() => setSearchQuery("")}
                    >
                      clear the search
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <>
                  {/* Category intro */}
                  <div className="mb-6 rounded-lg border border-border bg-muted/40 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <currentCategory.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-foreground">
                          {currentCategory.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {currentCategory.description} &middot;{" "}
                          {currentCategory.questions.length} questions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className="space-y-2">
                    {displayedQuestions.map((item, index) => {
                      const key = `${activeCategory}-${index}`;
                      const isOpen = openItems[key];
                      return (
                        <div
                          key={key}
                          className="overflow-hidden rounded-lg border border-border bg-card"
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(key)}
                            className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted/40 transition-colors"
                          >
                            <span className="font-medium text-foreground">
                              {item.question}
                            </span>
                            <ChevronRight
                              className={`ml-4 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="border-t border-border bg-muted/20 px-5 py-4">
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom info box */}
                  <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
                    <h3 className="font-semibold text-foreground">
                      Questions Beyond the FAQ
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The FAQs above address the most common enquiries for{" "}
                      {currentCategory.name}. SaPS can answer a wide range of
                      questions about the National Switch not specifically
                      covered here — whether about payment flows, regulatory
                      matters, technical specifications, or integration support.
                      Our expert team is ready to help.
                    </p>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
