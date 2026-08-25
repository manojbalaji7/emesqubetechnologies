import Link from "next/link";
import { site, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 font-black">EQ</span><strong>{site.name}</strong></div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">{site.description}</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Services</h2>
          <ul className="space-y-2 text-sm text-slate-300">{services.map(s => <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Contact</h2>
          <address className="not-italic text-sm leading-6 text-slate-300">{site.location}<br />{site.email}<br />{site.phone}</address>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
