import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCards } from "@/components/ServiceCards";
import { faqs, site } from "@/lib/site";

export default function HomePage() {
  return <main>
    <section className="gradient-hero section-y">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-700 shadow-sm">IT Services for Small and Medium Businesses</p>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Build faster, smarter digital experiences with {site.shortName}.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Professional website, web app, and mobile app development designed to help growing businesses improve visibility, automate workflows, and win more customers.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/contact#service-request">Request a Service</Button><Button href="/services" variant="secondary">Explore Services</Button></div>
        </div>
        <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2"><Metric number="3+" label="Core Development Services" /><Metric number="100%" label="Responsive Delivery" /><Metric number="SEO" label="Optimized Architecture" /><Metric number="AI" label="Search-ready Content" /></div>
        </div>
      </div>
    </section>
    <section className="section-y"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Services" title="Digital solutions built for business growth" description="Choose a focused service or combine multiple capabilities into one end-to-end digital transformation project." /><ServiceCards /></div></section>
    <section className="bg-brand-50 section-y"><div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-3"><Feature icon={<Zap />} title="Fast Loading" text="Lean layout, optimized assets, modern Next.js rendering, and performance-oriented component structure." /><Feature icon={<ShieldCheck />} title="Secure Foundation" text="Validated forms, secure headers, server-side processing, and environment-based configuration." /><Feature icon={<CheckCircle2 />} title="Accessible UX" text="Semantic HTML, keyboard-friendly controls, readable contrast, and clear navigation patterns." /></div></section>
    <section className="section-y"><div className="container-px mx-auto max-w-4xl"><SectionHeading eyebrow="FAQ" title="Common questions" /> <div className="grid gap-4">{faqs.slice(0,3).map(([q,a]) => <details key={q} className="rounded-2xl border border-slate-100 p-5"><summary className="cursor-pointer font-bold text-slate-950">{q}</summary><p className="mt-3 text-sm leading-6 text-slate-600">{a}</p></details>)}</div></div></section>
    <section className="container-px mx-auto max-w-7xl pb-20"><div className="rounded-[2rem] bg-brand-900 p-8 text-center text-white sm:p-12"><h2 className="text-3xl font-bold">Ready to modernize your digital presence?</h2><p className="mx-auto mt-3 max-w-2xl text-blue-100">Talk to {site.name} about your website, web application, or mobile app requirement.</p><div className="mt-6"><Button href="/contact" className="bg-white text-brand-900 hover:bg-blue-50">Contact Us</Button></div></div></section>
  </main>;
}
function Metric({ number, label }: { number: string; label: string }) { return <div className="rounded-3xl bg-white p-6 shadow-sm"><strong className="block text-3xl font-black text-brand-700">{number}</strong><span className="mt-2 block text-sm text-slate-600">{label}</span></div>; }
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <article className="rounded-3xl bg-white p-7 shadow-soft"><div className="mb-4 text-brand-700">{icon}</div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>; }
