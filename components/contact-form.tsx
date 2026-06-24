"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/lib/site-data";
import { initializeEmailJS, sendContactEmail, type ContactFormData } from "@/lib/email-service";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    const result = await sendContactEmail(data);

    if (result.success) {
      setMessage({ type: "success", text: "✓ Message sent successfully! We'll contact you soon." });
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage({ type: "error", text: "✗ Failed to send message. Please try again." });
    }

    setIsLoading(false);
  }

  return (
    <div className="grid gap-6">
      {/* Contact Info Section */}
      <div className="grid gap-4">
        <div className="flex items-start gap-4 rounded-lg bg-navy-900 p-4">
          <div className="flex size-10 items-center justify-center rounded-md bg-navy-800 shrink-0">
            <Mail className="size-5 text-cyan-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600">Email</p>
            <p className="mt-1 font-bold text-white break-all">{contactInfo.email}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg bg-navy-900 p-4">
          <div className="flex size-10 items-center justify-center rounded-md bg-navy-800 shrink-0">
            <Phone className="size-5 text-cyan-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600">Phone</p>
            <p className="mt-1 font-bold text-white break-all">+92 {contactInfo.phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg bg-navy-900 p-4">
          <div className="flex size-10 items-center justify-center rounded-md bg-navy-800 shrink-0">
            <MapPin className="size-5 text-cyan-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600">Coverage</p>
            <p className="mt-1 font-bold text-white">Pakistan nationwide support</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg bg-navy-900 p-4">
          <div className="flex size-10 items-center justify-center rounded-md bg-navy-800">
            <MessageSquare className="size-5 text-cyan-600" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600">Response</p>
            <p className="mt-1 font-bold text-white">Consultation and quote requests</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form id="inquiry" onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-steel-200 bg-white p-5 shadow-enterprise sm:p-6">
        {message && (
          <div
            className={`rounded-md p-4 text-sm font-semibold ${
              message.type === "success"
                ? "bg-green-50 text-green-900"
                : "bg-red-50 text-red-900"
            }`}
          >
            {message.text}
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-navy-900">
            Name
            <Input name="name" placeholder="Your name" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy-900">
            Company
            <Input name="company" placeholder="Company name" required />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-navy-900">
            Email
            <Input name="email" type="email" placeholder="name@company.com" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy-900">
            Phone
            <Input name="phone" type="tel" placeholder="+92" required />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Service Required
          <Select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Enterprise Hardware Procurement</option>
            <option>Network Infrastructure</option>
            <option>Server & Storage Solutions</option>
            <option>Cybersecurity Solutions</option>
            <option>Data Center Solutions</option>
            <option>Managed IT Services</option>
            <option>Annual Maintenance Contract</option>
            <option>SLA-Based Technical Support</option>
            <option>Cloud & Backup Solutions</option>
            <option>IT Consultancy</option>
          </Select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Message
          <Textarea
            name="message"
            placeholder="Tell us about your infrastructure, users, locations, timeline, and support requirements."
            required
            className={compact ? "min-h-[110px]" : undefined}
          />
        </label>
        <Button 
          variant="cyan" 
          size="lg" 
          type="submit" 
          className="w-full sm:w-fit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit Business Inquiry"}
          {!isLoading && <ArrowRight />}
        </Button>
      </form>
    </div>
  );
}
