import { Shield } from "lucide-react";

const authMethods = [
  {
    method: "API Keys",
    description: "Server-to-server authentication using secret keys",
  },
  {
    method: "OAuth 2.0",
    description: "Token-based authentication for user-facing apps",
  },
  {
    method: "Webhooks",
    description: "Signed webhook payloads for event notifications",
  },
  {
    method: "TLS 1.3",
    description: "All communications encrypted in transit",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="border-y border-border bg-muted/30 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <Shield className="mb-6 h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Security & Authentication
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              All API requests require authentication. We support multiple
              authentication methods to suit your integration needs.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            {authMethods.map((item) => (
              <div
                key={item.method}
                className="rounded-lg border border-border bg-card p-4"
              >
                <h3 className="font-semibold text-foreground">
                  {item.method}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
