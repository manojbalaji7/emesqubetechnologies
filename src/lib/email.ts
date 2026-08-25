export type LeadPayload = Record<string, string>;

export async function sendLeadEmail(type: "contact" | "service-request", payload: LeadPayload) {
  // Production integration point:
  // Connect Resend, SendGrid, Azure Communication Services Email, SMTP, or CRM webhook here.
  // Keep server-only secrets in environment variables. Never expose API keys to the browser.
  console.log(`[${type}] New website lead`, payload);
  return { ok: true };
}
