import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCards } from "@/components/ServiceCards";
export const metadata = { title: "Services" };
export default function ServicesPage(){return <main className="section-y"><div className="container-px mx-auto max-w-7xl"><SectionHeading eyebrow="Services" title="Website, web app, and mobile app development" description="Modern IT services for businesses that need digital platforms to attract customers, automate operations, and grow efficiently."/><ServiceCards /></div></main>}
