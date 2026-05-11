import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server-side validation schema (mirrors client)
const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required").regex(/^[a-zA-Z\s\u0600-\u06FF\-\.]+$/, "Invalid name format"),
  lastName: z.string().min(2, "Last name is required").regex(/^[a-zA-Z\s\u0600-\u06FF\-\.]+$/, "Invalid name format"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Invalid phone number").regex(/^[0-9+\s\-\(\)]+$/, "Invalid phone format"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  captchaToken: z.string().min(1, "Verification required")
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // 1. Validate inputs
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      const errorMsg = result.error.errors[0]?.message || "Invalid input";
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const { firstName, lastName, email, phone, company, message, captchaToken } = result.data;

    // 2. "Verify" CAPTCHA (In production, this would call reCAPTCHA/Turnstile API)
    if (!captchaToken.startsWith("verified-token-")) {
      return NextResponse.json({ error: "Security verification failed" }, { status: 400 });
    }

    // 3. Send Email
    const { error } = await resend.emails.send({
      from: "Masarat Contact Form <onboarding@resend.dev>",
      to: ["info@masaratkwt.com"],
      reply_to: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; padding: 20px; border: 1px solid #E2EAF8; border-radius: 12px;">
          <h2 style="color: #1A56DB; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: 600; width: 140px; border-bottom: 1px solid #F1F5F9;">First Name</td><td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9;">${firstName}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Last Name</td><td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9;">${lastName}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9;">${company}</td></tr>
          </table>
          <div style="margin-top: 24px;">
            <h3 style="margin-bottom: 12px; color: #1e293b;">Message Content:</h3>
            <div style="padding: 16px; background: #F8FAFC; border-radius: 8px; line-height: 1.7; color: #334155; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="margin-top: 30px; font-size: 11px; color: #94A3B8; text-align: center;">
            Sent via Masarat Digital Contact System
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
