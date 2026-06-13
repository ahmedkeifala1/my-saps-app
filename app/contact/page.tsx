"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    title: "Address",
    details: [
      "SaPS Headquarters",
      "30 Siaka Stevens Street",
      "Freetown, Sierra Leone",
    ],
    icon: MapPin,
  },
  {
    title: "Phone",
    details: ["+232 22 123 456", "+232 22 789 012"],
    icon: Phone,
  },
  {
    title: "Email",
    details: ["info@saps.sl", "support@saps.sl"],
    icon: Mail,
  },
  {
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
    ],
    icon: Clock,
  },
];

const departments = [
  { name: "General Inquiries", email: "info@saps.sl" },
  { name: "Technical Support", email: "support@saps.sl" },
  { name: "Partnership Inquiries", email: "partnerships@saps.sl" },
  { name: "Developer Support", email: "developers@saps.sl" },
  { name: "Media & Press", email: "media@saps.sl" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Have questions about SaPS services? We&apos;re here to help.
                Reach out to our team and we&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16 lg:flex-row">
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Visit us or reach out through any of these channels.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.details.map((detail, index) => (
                          <p
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Department Emails */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-foreground">
                    Department Contacts
                  </h3>
                  <div className="mt-4 space-y-3">
                    {departments.map((dept) => (
                      <div
                        key={dept.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">
                          {dept.name}
                        </span>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-primary hover:underline"
                        >
                          {dept.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex-1">
                <div className="rounded-xl border border-border bg-card p-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below and we&apos;ll respond within 24
                    hours.
                  </p>

                  {isSubmitted ? (
                    <div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Send className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Thank you for contacting us. We&apos;ll get back to you
                        shortly.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            organization: "",
                            subject: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="organization"
                            className="block text-sm font-medium text-foreground"
                          >
                            Organization
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-foreground"
                          >
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="partnership">
                              Partnership Inquiry
                            </option>
                            <option value="technical">Technical Support</option>
                            <option value="developer">Developer Support</option>
                            <option value="media">Media & Press</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex h-96 items-center justify-center bg-muted">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-lg font-medium text-foreground">
                    SaPS Headquarters
                  </p>
                  <p className="text-muted-foreground">
                    30 Siaka Stevens Street, Freetown
                  </p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link
                      href="https://maps.google.com/?q=Freetown,Sierra+Leone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
