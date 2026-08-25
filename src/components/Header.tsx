"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "./Button";

const nav = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Testimonials", "/testimonials"], ["FAQ", "/faq"], ["Contact Us", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg" aria-label={`${site.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-lg font-black text-white">EQ</span>
          <span className="leading-tight"><strong className="block text-slate-950">{site.name}</strong><span className="text-xs text-slate-500">IT Services</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} className="text-sm font-medium text-slate-700 hover:text-brand-700" href={href}>{label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Button href="/contact#service-request">Request Service</Button></div>
        <button className="focus-ring rounded-lg p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="container-px border-t border-slate-100 bg-white py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-3">
            {nav.map(([label, href]) => <Link key={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50" href={href}>{label}</Link>)}
            <Button href="/contact#service-request">Request Service</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
