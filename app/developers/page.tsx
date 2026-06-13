import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/developers/hero";
import { ApiSection } from "@/components/developers/api-section";
import { QuickStart } from "@/components/developers/quick-start";
import { HowItWorks } from "@/components/developers/how-it-works";
import { Sandbox } from "@/components/developers/sandbox";
import { UseCases } from "@/components/developers/use-cases";
import { Security } from "@/components/developers/security";
import { CTA } from "@/components/developers/cta";

export default function DevelopersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ApiSection />
        <QuickStart />
        <HowItWorks />
        <Sandbox />
        <UseCases />
        <Security />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
