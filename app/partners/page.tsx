"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  ChevronRight,
  ChevronDown,
  CreditCard,
  Zap,
  Globe,
  Building2,
  Smartphone,
  CircuitBoard,
  Landmark,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const cardSwitchPartners = [
  { name: "Sierra Leone Commercial Bank", abbr: "SLCB", logo: "/logos/slcb-logo.png" },
  { name: "Rokel Commercial Bank", abbr: "RCB", logo: "/logos/rokel.jpg" },
  { name: "Guarantee Trust Bank", abbr: "GTB", logo: null },
  { name: "Access Bank", abbr: "ACCESS", logo: "/logos/accessbank.jpg" },
  { name: "Ecobank Sierra Leone", abbr: "ECOBANK", logo: null },
  { name: "Zenith Bank", abbr: "ZENITH", logo: "/logos/Zenith Bank.jpg" },
  { name: "Sky Bank", abbr: "SKY BANK", logo: null },
  { name: "Bloom Bank", abbr: "BLOOM", logo: "/logos/bloom.png" },
  { name: "United Bank for Africa", abbr: "UBA", logo: null },
  { name: "Vista Bank", abbr: "VISTA", logo: null },
  { name: "First Bank of Sierra Leone", abbr: "FBSL", logo: null },
  { name: "Commerce and Mortgage Bank", abbr: "CMB", logo: null },
];

const ipsPartners = {
  "Commercial Banks": [
    { name: "Sierra Leone Commercial Bank", abbr: "SLCB", logo: "/logos/slcb-logo.png" },
    { name: "Rokel Commercial Bank", abbr: "RCB", logo: "/logos/rokel.jpg" },
    { name: "Guarantee Trust Bank", abbr: "GTB", logo: null },
    { name: "Access Bank", abbr: "ACCESS", logo: "/logos/accessbank.jpg" },
    { name: "Ecobank Sierra Leone", abbr: "ECOBANK", logo: null },
    { name: "Zenith Bank", abbr: "ZENITH", logo: "/logos/Zenith Bank.jpg" },
    { name: "Sky Bank", abbr: "SKY BANK", logo: null },
    { name: "Bloom Bank", abbr: "BLOOM", logo: "/logos/bloom.png" },
    { name: "United Bank for Africa", abbr: "UBA", logo: null },
    { name: "Vista Bank", abbr: "VISTA", logo: null },
    { name: "First Bank of Sierra Leone", abbr: "FBSL", logo: null },
    { name: "Commerce and Mortgage Bank", abbr: "CMB", logo: null },
  ],
  "Mobile Money Operators": [
    { name: "Orange Money", abbr: "ORANGE", logo: null },
    { name: "Africell Money", abbr: "AFRICELL", logo: null },
    { name: "QMoney", abbr: "QMONEY", logo: null },
  ],
  "Fintechs": [
    { name: "Monime", abbr: "MONIME", logo: null },
  ],
  "Microfinance Institutions": [],
};

const ipsSubSections = Object.keys(ipsPartners) as Array<keyof typeof ipsPartners>;

// ─── Participant card ──────────────────────────────────────────────────────────

function PartnerCard({ name, abbr, logo }: { name: string; abbr: string; logo: string | null }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:shadow-md">
      {logo ? (
        <div className="relative mb-3 h-14 w-28">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
            sizes="112px"
          />
        </div>
      ) : (
        <div className="mb-3 flex h-14 w-28 items-center justify-center rounded-lg bg-primary/10">
          <span className="text-xs font-bold text-primary">{abbr}</span>
        </div>
      )}
      <p className="text-xs font-medium text-foreground">{name}</p>
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-14">
      <p className="text-sm text-muted-foreground">Coming Soon</p>
    </div>
  );
}

// ─── Section views ─────────────────────────────────────────────────────────────

function CardSwitchView({ query }: { query: string }) {
  const filtered = cardSwitchPartners.filter(
    (p) =>
      !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.abbr.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <CreditCard className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Card Switch</h2>
      </div>
      <div className="mb-6 h-1 w-12 rounded bg-primary" />
      <p className="mb-8 text-sm text-muted-foreground">
        Commercial banks connected to Sierra Leone&apos;s national card switch
        infrastructure, enabling nationwide ATM and POS interoperability.
      </p>
      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => <PartnerCard key={p.name} {...p} />)}
        </div>
      )}
    </div>
  );
}

function IPSView({ query }: { query: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <Zap className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Instant Payment System (IPS)</h2>
      </div>
      <div className="mb-6 h-1 w-12 rounded bg-primary" />
      <p className="mb-8 text-sm text-muted-foreground">
        Institutions connected to the SaPS Instant Payment System, enabling
        real-time transfers across banks, mobile wallets, fintechs, and
        microfinance institutions.
      </p>
      <div className="space-y-10">
        {ipsSubSections.map((sub) => {
          const items = ipsPartners[sub].filter(
            (p) =>
              !query ||
              p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.abbr.toLowerCase().includes(query.toLowerCase()),
          );
          return (
            <div key={sub}>
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {sub === "Commercial Banks" && <Building2 className="h-3.5 w-3.5" />}
                {sub === "Mobile Money Operators" && <Smartphone className="h-3.5 w-3.5" />}
                {sub === "Fintechs" && <CircuitBoard className="h-3.5 w-3.5" />}
                {sub === "Microfinance Institutions" && <Landmark className="h-3.5 w-3.5" />}
                {sub}
              </h3>
              <div className="mb-4 h-px bg-border" />
              {items.length === 0 && ipsPartners[sub].length === 0 ? (
                <ComingSoon />
              ) : items.length === 0 ? (
                <p className="text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {items.map((p) => <PartnerCard key={p.name} {...p} />)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GatewayView() {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <Globe className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">International Payment Gateway</h2>
      </div>
      <div className="mb-6 h-1 w-12 rounded bg-primary" />
      <p className="mb-8 text-sm text-muted-foreground">
        Partners connected to the SaPS International Payment Gateway, enabling
        cross-border remittances and foreign currency settlement into Sierra Leone.
      </p>
      <ComingSoon />
    </div>
  );
}

// ─── Sidebar config ────────────────────────────────────────────────────────────

const sections = [
  { id: "card-switch", label: "Card Switch", icon: CreditCard },
  { id: "ips", label: "IPS", icon: Zap },
  { id: "international-gateway", label: "International Payment Gateway", icon: Globe },
] as const;

type SectionId = (typeof sections)[number]["id"];

const titles: Record<SectionId, string> = {
  "card-switch": "Card Switch",
  "ips": "Instant Payment System (IPS)",
  "international-gateway": "International Payment Gateway",
};

// ─── Page ──────────────────────────────────────────────────────────────────────

function PartnersPageInner() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<SectionId>(
    () => (searchParams.get("section") as SectionId) ?? "card-switch",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [partnersOpen, setPartnersOpen] = useState(true);

  useEffect(() => {
    const s = (searchParams.get("section") as SectionId) ?? "card-switch";
    setActiveSection(s);
  }, [searchParams]);

  const currentTitle = titles[activeSection];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Blue accent bar */}
      <div className="h-3 bg-primary" />

      {/* Two-panel body */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-72">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Navigation */}
            <nav className="overflow-hidden rounded-lg border border-border bg-card">
              {/* Partners expandable */}
              <div>
                <button
                  type="button"
                  onClick={() => setPartnersOpen(!partnersOpen)}
                  className="flex w-full items-center justify-between border-b border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
                >
                  Partners
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${partnersOpen ? "rotate-180" : ""}`} />
                </button>
                {partnersOpen && (
                  <ul className="bg-muted/30">
                    {sections.map((s) => {
                      const isActive = s.id === activeSection;
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => { setActiveSection(s.id); setSearchQuery(""); }}
                            className={`flex w-full items-center gap-2 py-3 pl-5 pr-4 text-left text-sm transition-colors hover:bg-muted/60 ${isActive ? "font-semibold text-primary" : "text-foreground"}`}
                          >
                            <s.icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                            <span className="flex-1">{s.label}</span>
                            {isActive && <ChevronRight className="h-3 w-3 text-primary" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </nav>

            {/* Contact card */}
            <div className="mt-5 space-y-2.5 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
              <h3 className="font-semibold text-foreground">Become a Partner</h3>
              <p>Interested in connecting to the SaPS network? Get in touch with our partnerships team.</p>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>partnerships@saps.sl</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>+232 22 123 456</span>
              </div>
              <Button size="sm" className="mt-2 w-full" asChild>
                <Link href="/contact">Apply Now <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
              </Button>
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0 flex-1">
            {activeSection === "card-switch" && <CardSwitchView query={searchQuery} />}
            {activeSection === "ips" && <IPSView query={searchQuery} />}
            {activeSection === "international-gateway" && <GatewayView />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function PartnersPage() {
  return (
    <Suspense>
      <PartnersPageInner />
    </Suspense>
  );
}
