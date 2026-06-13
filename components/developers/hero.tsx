import Link from "next/link";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const codeExample = `// Initialize SaPS client
const saps = new SaPSClient({
  apiKey: process.env.SAPS_API_KEY,
  environment: 'sandbox'
});

// Create an instant payment
const payment = await saps.instantPayment.create({
  sourceAccount: '1234567890',
  destinationAccount: '0987654321',
  amount: 500000, // in cents
  currency: 'SLL',
  reference: 'Invoice #12345',
  narration: 'Payment for services'
});

console.log(payment.transactionId);
// => "TXN-2024-001234567"`;

export function Hero() {
  return (
    <section className="border-b border-border bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-medium">Developer Portal</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Build with SaPS APIs
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Integrate Sierra Leone&apos;s national payment infrastructure
              into your applications. RESTful APIs, comprehensive
              documentation, and a sandbox environment for testing.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="#quick-start">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Access</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground">
                  example.js
                </span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-foreground">{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
