"use client";
import { useState } from "react";
import { Button } from "./Button";

type State = "idle" | "loading" | "success" | "error";

async function submitForm(url: string, form: HTMLFormElement) {
  const data = Object.fromEntries(new FormData(form).entries());
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error("Submission failed");
}

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  return <form className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft" onSubmit={async e => { e.preventDefault(); setState("loading"); try { await submitForm("/api/contact", e.currentTarget); setState("success"); e.currentTarget.reset(); } catch { setState("error"); } }}>
    <div className="grid gap-4 sm:grid-cols-2"><Field name="name" label="Name" /><Field name="email" label="Email" type="email" /></div>
    <Field name="phone" label="Phone" />
    <Field name="message" label="Message" textarea />
    <Button type="submit" className="w-full">{state === "loading" ? "Sending..." : "Send Message"}</Button>
    <Status state={state} success="Thank you. Your message has been received." />
  </form>;
}

export function ServiceRequestForm() {
  const [state, setState] = useState<State>("idle");
  return <form id="service-request" className="grid gap-4 rounded-3xl bg-brand-900 p-6 text-white shadow-soft" onSubmit={async e => { e.preventDefault(); setState("loading"); try { await submitForm("/api/service-request", e.currentTarget); setState("success"); e.currentTarget.reset(); } catch { setState("error"); } }}>
    <h2 className="text-2xl font-bold">Service Request Form</h2>
    <p className="text-sm text-blue-100">Share your requirement and our team will respond with suitable next steps.</p>
    <div className="grid gap-4 sm:grid-cols-2"><Field dark name="name" label="Name" /><Field dark name="email" label="Email" type="email" /></div>
    <Field dark name="company" label="Company" />
    <label className="grid gap-2 text-sm font-medium">Service Needed<select required name="service" className="focus-ring rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white"><option className="text-slate-900">Website Development</option><option className="text-slate-900">Web App Development</option><option className="text-slate-900">Mobile App Development</option></select></label>
    <Field dark name="details" label="Requirement Details" textarea />
    <Button type="submit" className="w-full bg-white text-brand-900 hover:bg-blue-50">{state === "loading" ? "Submitting..." : "Submit Request"}</Button>
    <Status state={state} success="Service request submitted successfully." />
  </form>;
}

function Field({ name, label, type = "text", textarea, dark = false }: { name: string; label: string; type?: string; textarea?: boolean; dark?: boolean }) {
  const inputClass = `focus-ring rounded-xl border px-4 py-3 ${dark ? "border-white/20 bg-white/10 text-white placeholder:text-blue-100" : "border-slate-200 bg-white text-slate-900"}`;
  return <label className="grid gap-2 text-sm font-medium">{label}{textarea ? <textarea required name={name} rows={5} className={inputClass} /> : <input required name={name} type={type} className={inputClass} />}</label>;
}
function Status({ state, success }: { state: State; success: string }) {
  if (state === "success") return <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{success}</p>;
  if (state === "error") return <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">Something went wrong. Please try again or use WhatsApp.</p>;
  return null;
}
