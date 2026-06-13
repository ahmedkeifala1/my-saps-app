import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const sdks = [
  {
    name: "JavaScript / Node.js",
    version: "2.3.0",
    command: "npm install @saps/sdk",
  },
  {
    name: "Python",
    version: "1.8.0",
    command: "pip install saps-sdk",
  },
  {
    name: "Java",
    version: "1.5.0",
    command: "Maven / Gradle",
  },
  {
    name: "PHP",
    version: "1.2.0",
    command: "composer require saps/sdk",
  },
];

const requestCode = `import { SaPSClient } from '@saps/sdk';

const saps = new SaPSClient({
  apiKey: process.env.SAPS_API_KEY,
  environment: 'sandbox'
});

const payment = await saps.instantPayment.create({
  sourceAccount: '1234567890',
  destinationAccount: '0987654321',
  amount: 500000,
  currency: 'SLL'
});

console.log(payment.transactionId);`;

export function QuickStart() {
  return (
    <section
      id="quick-start"
      className="border-y border-border bg-muted/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Quick Start
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Go from sign-up to your first API call in minutes
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Step 1 */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Get API Credentials
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Request developer access and receive a sandbox API key
                    instantly — no waiting required to start building.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="shrink-0" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  Install an SDK
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use an official client library for your language, or call
                  the REST API directly.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {sdks.map((sdk) => (
                    <div
                      key={sdk.name}
                      className="rounded-lg border border-border bg-muted/50 p-4"
                    >
                      <Terminal className="h-5 w-5 text-primary" />
                      <p className="mt-3 text-sm font-medium text-foreground">
                        {sdk.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        v{sdk.version}
                      </p>
                      <code className="mt-3 block truncate text-xs text-muted-foreground">
                        {sdk.command}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  Make Your First Request
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Send a test transaction in the sandbox — same shape as a
                  production request, with no real money involved.
                </p>
                <div className="mt-6 overflow-hidden rounded-lg border border-border bg-muted/50">
                  <pre className="overflow-x-auto p-4 text-sm">
                    <code className="text-foreground">{requestCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
