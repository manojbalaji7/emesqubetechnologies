type Props = { eyebrow?: string; title: string; description?: string; align?: "left" | "center" };
export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
    {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-600">{eyebrow}</p>}
    <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
  </div>;
}
