import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";
export const metadata = { title: "FAQ" };
export default function FAQPage(){return <main className="section-y"><div className="container-px mx-auto max-w-4xl"><SectionHeading eyebrow="FAQ" title="Frequently asked questions"/><div className="grid gap-4">{faqs.map(([q,a])=><details key={q} className="rounded-2xl border border-slate-100 p-5 shadow-sm"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-3 text-sm leading-6 text-slate-600">{a}</p></details>)}</div></div></main>}
