const apis = [
  {
    name: "Instant Payment API",
    description: "Real-time bank-to-bank transfers with instant settlement.",
    version: "v2.1",
    status: "Stable",
  },
  {
    name: "Wallet Transfer API",
    description: "Mobile wallet to bank and wallet-to-wallet transfers.",
    version: "v1.5",
    status: "Stable",
  },
  {
    name: "QR Payment API",
    description: "Generate and process QR code payments.",
    version: "v1.2",
    status: "Stable",
  },
  {
    name: "ACH Batch API",
    description: "Submit and manage bulk payment batches.",
    version: "v2.0",
    status: "Stable",
  },
  {
    name: "Account Lookup API",
    description:
      "Validate account numbers and retrieve account holder information.",
    version: "v1.0",
    status: "Stable",
  },
  {
    name: "Transaction Status API",
    description: "Query transaction status and retrieve detailed information.",
    version: "v1.3",
    status: "Stable",
  },
];

export function ApiSection() {
  return (
    <section id="apis" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Available APIs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            RESTful APIs for all SaPS services
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apis.map((api) => (
            <div
              key={api.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground">{api.name}</h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {api.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {api.description}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Version: {api.version}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
