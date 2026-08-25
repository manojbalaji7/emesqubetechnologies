import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { services } from "@/lib/site";

export async function generateStaticParams(){ return services.map(s => ({ slug: s.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { const service = services.find(s => s.slug === params.slug); return { title: service?.title || "Service" }; }
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug); if(!service) notFound();
  return <main className="section-y"><div className="container-px mx-auto max-w-5xl"><p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-600">Service</p><h1 className="text-4xl font-black text-slate-950">{service.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{service.summary}</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{service.bullets.map(b => <li key={b} className="rounded-2xl border border-slate-100 p-5 font-medium shadow-sm">{b}</li>)}</ul><div className="mt-10"><Button href="/contact#service-request">Request this Service</Button></div></div></main>;
}
