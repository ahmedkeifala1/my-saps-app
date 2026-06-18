import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentGroups = [
  {
    name: "Card Switch",
    description:
      "Technical documentation for the SaPS Card Switch system, covering all core modules.",
    docs: [
      { name: "SVFE", filename: "card-switch-svfe.pdf", available: false },
      { name: "SVBO", filename: "card-switch-svbo.pdf", available: false },
      { name: "SVFM", filename: "card-switch-svfm.pdf", available: false },
    ],
  },
  {
    name: "IPS",
    description:
      "Documentation for the Instant Payment System, including API references, QR code specs, and server guides.",
    docs: [
      { name: "APIs Documentation", filename: "ips-apis.pdf", available: false },
      { name: "QR Code", filename: "ips-qr-code.pdf", available: false },
      {
        name: "Application Server Documentation",
        filename: "ips-application-server.pdf",
        available: false,
      },
    ],
  },
  {
    name: "International Payment Gateway",
    description:
      "Integration and technical documentation for the SaPS international payment gateway.",
    docs: [
      {
        name: "Integration Guide",
        filename: "intl-gateway-integration.pdf",
        available: false,
      },
    ],
  },
];

export function DocumentsSection() {
  return (
    <section id="documentation" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Technical Documentation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Click any document below to download it. Contact us if you need a
            specific document.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {documentGroups.map((group) => (
            <div
              key={group.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{group.name}</h3>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {group.description}
              </p>

              <ul className="mt-5 flex-1 divide-y divide-border">
                {group.docs.map((doc) => (
                  <li key={doc.filename} className="flex items-center justify-between gap-3 py-2.5">
                    <span
                      className={`text-sm ${
                        doc.available
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {doc.name}
                    </span>
                    {doc.available ? (
                      <a
                        href={`/docs/${doc.filename}`}
                        download
                        className="flex shrink-0 items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <Download className="h-3 w-3" />
                        Download
                      </a>
                    ) : (
                      <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        Coming Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
