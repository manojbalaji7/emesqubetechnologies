import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/email";
const schema = z.object({ name: z.string().min(2), email: z.string().email(), company: z.string().min(2), service: z.string().min(3), details: z.string().min(10) });
export async function POST(req: Request){ const body = await req.json(); const parsed = schema.safeParse(body); if(!parsed.success) return NextResponse.json({error:"Invalid form data"},{status:400}); await sendLeadEmail("service-request", parsed.data); return NextResponse.json({ok:true}); }
