import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/email";
const schema = z.object({ name: z.string().min(2), email: z.string().email(), phone: z.string().min(7), message: z.string().min(10) });
export async function POST(req: Request){ const body = await req.json(); const parsed = schema.safeParse(body); if(!parsed.success) return NextResponse.json({error:"Invalid form data"},{status:400}); await sendLeadEmail("contact", parsed.data); return NextResponse.json({ok:true}); }
