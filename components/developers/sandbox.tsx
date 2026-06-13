import Link from "next/link";
import { ArrowRight, TestTube, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sandbox() {
  return (
    <section
      id="sandbox"
      className="border-y border-border bg-muted/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <TestTube className="mb-6 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Sandbox Environment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Test your integration in a safe environment before going live.
              Our sandbox mirrors production with test accounts and
              simulated responses.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Full API functionality",
                "Test bank accounts and wallets",
                "Simulated transaction responses",
                "No real money involved",
                "Detailed error simulation",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 gap-2" asChild>
              <Link href="/contact">
                Request Sandbox Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex-1">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Sandbox Credentials
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-xs font-medium text-muted-foreground">
                    Base URL
                  </p>
                  <code className="mt-1 block text-sm text-foreground">
                    https://sandbox.saps.sl/api/v2
                  </code>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-xs font-medium text-muted-foreground">
                    Test API Key
                  </p>
                  <code className="mt-1 block text-sm text-foreground">
                    sk_test_xxxxxxxxxx
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
