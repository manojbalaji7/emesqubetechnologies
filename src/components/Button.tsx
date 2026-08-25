import Link from "next/link";
import { clsx } from "clsx";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: Props) {
  const classes = clsx(
    "focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
    variant === "primary" && "bg-brand-600 text-white shadow-soft hover:bg-brand-700",
    variant === "secondary" && "border border-brand-100 bg-white text-brand-700 hover:bg-brand-50",
    variant === "ghost" && "text-brand-700 hover:bg-brand-50",
    className
  );
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} className={classes}>{children}</button>;
}
