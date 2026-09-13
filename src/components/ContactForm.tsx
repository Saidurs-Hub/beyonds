import { useState } from "react";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const INQUIRY_TYPES = [
  "Investment",
  "Partnership",
  "Accelerator Support",
  "General Get in Touch",
  "General Inquiry",
  "Quote Request",
  "Technical Support",
  "Demo Request",
  "Partnership Inquiry",
  "Feedback",
];

const schema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }).max(100, { message: "Name must be under 100 characters" }),
  email: z.string().trim().nonempty({ message: "Email is required" }).email({ message: "Enter a valid email address" }).max(255),
  organization: z.string().trim().max(150, { message: "Organization must be under 150 characters" }),
  inquiryType: z.string().refine((v) => INQUIRY_TYPES.includes(v), { message: "Select an inquiry type" }),
  message: z.string().trim().nonempty({ message: "Message is required" }).max(4000, { message: "Message must be under 4000 characters" }),
});

type FormValues = z.infer<typeof schema>;

const initialValues: FormValues = {
  name: "",
  email: "",
  organization: "",
  inquiryType: "",
  message: "",
};

const fieldClass =
  "w-full rounded-lg border border-border/25 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-accent/70 focus:bg-white/10";

const labelClass = "block text-[11px] tracking-[0.2em] uppercase text-foreground/40 mb-2";

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const setField = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-inquiry", { body: parsed.data });
      if (error) throw error;
      setSubmitted(true);
      setValues(initialValues);
    } catch (err) {
      console.error("Inquiry submission failed:", err);
      toast({
        title: "Message not sent",
        description: "Something went wrong. Please try again or email reach@beyonds.ventures.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-border/20 rounded-xl p-8 md:p-10 max-w-2xl space-y-4">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40">
            <Check className="w-5 h-5 text-accent" />
          </span>
          <div>
            <p className="text-foreground text-sm" style={{ fontFamily: "var(--font-body)" }}>Thank you, your message has been sent.</p>
            <p className="text-foreground/50 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>We will get back to you shortly.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-[11px] tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-border/20 rounded-xl p-8 md:p-10 max-w-2xl space-y-6 hover:border-border/40 transition-colors"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" className={fieldClass} value={values.name} onChange={(e) => setField("name", e.target.value)} placeholder="Your name" maxLength={100} />
          {errors.name && <p className="text-destructive text-xs mt-2">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" className={fieldClass} value={values.email} onChange={(e) => setField("email", e.target.value)} placeholder="you@company.com" maxLength={255} />
          {errors.email && <p className="text-destructive text-xs mt-2">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="organization">Organization <span className="normal-case tracking-normal text-foreground/25">(optional)</span></label>
        <input id="organization" className={fieldClass} value={values.organization} onChange={(e) => setField("organization", e.target.value)} placeholder="Company or institution" maxLength={150} />
        {errors.organization && <p className="text-destructive text-xs mt-2">{errors.organization}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="inquiryType">Inquiry Type</label>
        <select
          id="inquiryType"
          className={`${fieldClass} appearance-none cursor-pointer`}
          value={values.inquiryType}
          onChange={(e) => setField("inquiryType", e.target.value)}
        >
          <option value="" className="bg-background">Select an option</option>
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type} className="bg-background">{type}</option>
          ))}
        </select>
        {errors.inquiryType && <p className="text-destructive text-xs mt-2">{errors.inquiryType}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea id="message" rows={5} className={`${fieldClass} resize-y`} value={values.message} onChange={(e) => setField("message", e.target.value)} placeholder="How can we help?" maxLength={4000} />
        {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-3 rounded-full border border-border/30 px-8 py-3 text-[11px] tracking-[0.25em] uppercase text-foreground/80 hover:text-foreground hover:border-accent/60 transition-colors disabled:opacity-50"
      >
        {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
        {submitting ? "Sending" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
