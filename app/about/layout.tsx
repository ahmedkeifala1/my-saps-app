import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SaPS - Sierra Leone Payment Switch",
  description:
    "Learn about SaPS, Sierra Leone's national payment switch infrastructure. Our mission, vision, history, leadership, and organisational structure.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
