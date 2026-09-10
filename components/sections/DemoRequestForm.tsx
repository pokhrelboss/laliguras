"use client";

import React, { useState } from "react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { DemoInterest } from "@/types";
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const DemoRequestForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interest, setInterest] = useState<DemoInterest>("Request a Demo");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const interestOptions = [
    { value: "Request a Demo", label: "Request a Demo" },
    { value: "Training Partnership", label: "Training Partnership" },
    { value: "Enterprise Training", label: "Enterprise Training" },
    { value: "General Inquiry", label: "General Inquiry" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please provide your full name.";
    }

    if (!organization.trim() || organization.trim().length < 2) {
      newErrors.organization = "Please provide your organization or company name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail.trim() || !emailRegex.test(workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid work email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          organization,
          workEmail,
          phoneNumber,
          interest,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit demo request.");
      }

      setStatus("success");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(message);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setFullName("");
    setOrganization("");
    setWorkEmail("");
    setPhoneNumber("");
    setInterest("Request a Demo");
    setMessage("");
    setErrors({});
    setStatus("idle");
    setServerError(null);
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#B4E5CE] shadow-md text-center space-y-5 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-[#EBF9F1] border border-[#B4E5CE] text-[#0E6245] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#0A1914]">
            Demo Request Received!
          </h3>
          <p className="text-sm text-[#3D4F47] max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{fullName}</strong>. Our safety solutions team has received your inquiry for <strong>{organization}</strong>. We will review your requirements and reach out within 1 business day.
          </p>
        </div>
        <div className="p-4 bg-[#F8FAF8] rounded-xl border border-[#E1E7E3] text-xs text-[#52665C] max-w-md mx-auto">
          A confirmation note has been routed to <strong>{workEmail}</strong>.
        </div>
        <div className="pt-2">
          <Button variant="outline" size="sm" onClick={resetForm}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#E1E7E3] shadow-lg">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1914]">
          Request a Demonstration
        </h3>
        <p className="text-xs sm:text-sm text-[#52665C]">
          Fill in the details below and our team will get in touch shortly.
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-[#FDF2F4] border border-[#F5C7CE] text-[#831526] flex items-start gap-3 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Error</p>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Full Name"
            placeholder="e.g. Sijan Bhandari"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
            disabled={status === "loading"}
          />
          <Input
            label="Organization / Company"
            placeholder="e.g. Acme Logistics Pvt. Ltd."
            required
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            error={errors.organization}
            disabled={status === "loading"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Work Email"
            type="email"
            placeholder="sijan@company.com"
            required
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
            error={errors.workEmail}
            disabled={status === "loading"}
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+977 9801234567"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={status === "loading"}
          />
        </div>

        <Select
          label="Your Primary Interest"
          required
          options={interestOptions}
          value={interest}
          onChange={(e) => setInterest(e.target.value as DemoInterest)}
          disabled={status === "loading"}
        />

        <Textarea
          label="Message or Specific Requirements (Optional)"
          placeholder="Tell us about your team size, workplace hazards of concern, or training timeline..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "loading"}
        />

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={status === "loading"}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full justify-center shadow-md"
          >
            {status === "loading" ? "Submitting Request..." : "Send Request"}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-[#64766E] pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0E6245]" />
          <span>Your corporate data is handled securely and never shared.</span>
        </div>
      </form>
    </div>
  );
};
