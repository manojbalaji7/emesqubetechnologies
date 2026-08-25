import { ContactForm, ServiceRequestForm } from "@/components/Forms";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
export const metadata = { title: "Contact Us" };
export default function ContactPage(){return <main className="section-y"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Contact Us" title="Start your digital project" description="Send a message, submit a service request, or connect on WhatsApp."/><div className="grid gap-8 lg:grid-cols-2"><ContactForm/><div className="grid gap-6"><ServiceRequestForm/><div className="rounded-3xl border border-slate-100 p-6"><h2 className="text-xl font-bold">Business Contact</h2><p className="mt-3 text-sm leading-6 text-slate-600">{site.location}<br/>{site.email}<br/>{site.phone}</p></div></div></div></div></main>}
