import { Landmark, Smartphone, Puzzle, Store } from "lucide-react";

const useCases = [
  {
    icon: Landmark,
    title: "Banks & Financial Institutions",
    description:
      "Connect your core banking system to the national switch for instant interbank transfers, account validation, and ATM/POS interoperability.",
    apis: ["Instant Payment API", "Account Lookup API", "ACH Batch API"],
  },
  {
    icon: Smartphone,
    title: "Mobile Money Operators",
    description:
      "Give subscribers seamless wallet-to-bank and wallet-to-wallet transfers across every connected institution in Sierra Leone.",
    apis: ["Wallet Transfer API", "Transaction Status API"],
  },
  {
    icon: Puzzle,
    title: "Fintech & Payment Apps",
    description:
      "Embed instant payments, account verification, and QR-based checkout directly into your product without building bank integrations yourself.",
    apis: ["QR Payment API", "Account Lookup API", "Instant Payment API"],
  },
  {
    icon: Store,
    title: "Merchants & Aggregators",
    description:
      "Accept payments from any bank or mobile wallet through a single QR code or POS integration, with real-time settlement confirmation.",
    apis: ["QR Payment API", "Transaction Status API"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for Every Integration
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whatever you&apos;re building, there&apos;s a SaPS API for it
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <useCase.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {useCase.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {useCase.apis.map((api) => (
                  <span
                    key={api}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {api}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
