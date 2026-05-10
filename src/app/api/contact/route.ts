import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, company, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Masarat Contact Form <onboarding@resend.dev>",
      to: ["info@masaratkwt.com"],
      reply_to: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #1A56DB; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name</td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td>${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Company</td><td>${company}</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #E2EAF8;" />
          <h3 style="margin-bottom: 12px;">Message</h3>
          <p style="line-height: 1.7; color: #444;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
