// app/api/email/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, company, phone } = (await req.json()) as {
      name: string;
      company: string;
      phone: string;
      email: string;
      message: string;
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // send to multiple recipients
    const recipients = ["s.amaral@georalium.com", "d.pillinger@georalium.com"];

    await transporter.sendMail({
      from: `"Georalium Website Contact" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: "📨 New Contact Form Submission",
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
    <div style="background: #022161; color: #fff; padding: 16px; text-align: center;">
      <h2 style="margin: 0;">Georalium Website Contact</h2>
    </div>
    <div style="padding: 24px; color: #333; line-height: 1.6;">
      <h3 style="margin-top: 0;">You received a new message:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "—"}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
      <p><strong>Message:</strong></p>
      <p style="background: #f9f9f9; padding: 12px; border-radius: 4px;">${message}</p>
    </div>
    <div style="background: #f1f1f1; text-align: center; padding: 12px; font-size: 12px; color: #555;">
      <p style="margin: 0;">This message was sent from the contact form on <a href="https://georalium.com" style="color: #0a1f44; text-decoration: none;">georalium.com</a></p>
    </div>
  </div>
  `,
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
