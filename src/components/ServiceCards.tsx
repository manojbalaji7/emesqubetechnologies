import Link from "next/link";
import { ArrowRight, Code2, Globe2, Smartphone } from "lucide-react";
import { services } from "@/lib/site";

const icons = [Globe2, Code2, Smartphone];
export function ServiceCards() {
  return <div className="grid gap-6 md:grid-cols-3">
    {services.map((service, i) => { const Icon = icons[i]; return <article key={service.slug} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition hover:-translate-y-1">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700"><Icon /></div>
      <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Learn more <ArrowRight size={16} /></Link>
    </article>; })}
  </div>;
}
