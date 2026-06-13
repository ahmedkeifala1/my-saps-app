import { Code2, Key, Shield, Network, Webhook, RefreshCw, FlaskConical } from "lucide-react";

const flowSteps = [
  { icon: Code2, label: "Your App", sublabel: "API request" },
  { icon: Key, label: "Authenticate", sublabel: "API key / OAuth" },
  { icon: Shield, label: "SaPS Gateway", sublabel: "Validation & routing" },
  { icon: Network, label: "Switch Network", sublabel: "Banks & wallets" },
  { icon: Webhook, label: "Response", sublabel: "Sync reply + webhook" },
];

const highlights = [
  {
    icon: RefreshCw,
    title: "Sync & Async Responses",
    description:
      "Get an immediate API response for the request itself, plus a signed webhook event when the transaction settles.",
  },
  {
    icon: Key,
    title: "Idempotency Keys",
    description:
      "Every write request accepts an idempotency key, so retries on network failures never create duplicate transactions.",
  },
  {
    icon: FlaskConical,
    title: "Sandbox Parity",
    description:
      "The sandbox mirrors production behavior exactly — the same endpoints, payloads, and error codes, with simulated funds.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            What happens behind the scenes when you call a SaPS API
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-4 md:grid-cols-5">
            {flowSteps.map((step, index) => (
              <div
                key={step.label}
                className="relative flex flex-col items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-center">
                  <div className="font-semibold text-foreground">
                    {step.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {step.sublabel}
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-primary/30 md:block">
                    <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
