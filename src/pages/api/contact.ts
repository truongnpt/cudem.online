import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { getContactTemplate } from "../../email-templates/contact";

export const prerender = false;

const getValue = (value: FormDataEntryValue | null): string => {
  return typeof value === "string" ? value.trim() : "";
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const businessName = getValue(formData.get("businessName"));
    const email = getValue(formData.get("email"));
    const subject = getValue(formData.get("subject"));
    const message = getValue(formData.get("message"));

    if (!businessName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Vui lòng nhập đầy đủ thông tin.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    console.log("SMTP HOST:", import.meta.env.VERCEL_SMTP_HOST);
    console.log("SMTP PORT:", import.meta.env.VERCEL_SMTP_PORT);
    console.log("SMTP USER:", import.meta.env.VERCEL_SMTP_USER);
    console.log("SMTP PASS:", import.meta.env.VERCEL_SMTP_PASS);
    console.log("CONTACT TO EMAIL:", import.meta.env.VERCEL_CONTACT_TO_EMAIL);

    const smtpHost = import.meta.env.VERCEL_SMTP_HOST ?? "smtp.gmail.com";
    const smtpPort = Number(import.meta.env.VERCEL_SMTP_PORT ?? 587);
    const smtpUser = import.meta.env.VERCEL_SMTP_USER ?? "truongnpt1998@gmail.com";
    const smtpPass = import.meta.env.VERCEL_SMTP_PASS ?? "otqaftcckelfemfc";
    const mailTo = import.meta.env.VERCEL_CONTACT_TO_EMAIL ?? smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Thiếu cấu hình SMTP trên máy chủ.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: import.meta.env.VERCEL_CONTACT_FROM_EMAIL ?? smtpUser,
      to: mailTo,
      replyTo: email,
      subject: `[Liên hệ website] ${subject}`,
      text: `Tên doanh nghiệp/cá nhân: ${businessName}\nEmail: ${email}\nTiêu đề: ${subject}\nNội dung:\n${message}`,
      html: getContactTemplate({ businessName, email, subject, message }),
    });

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Gửi yêu cầu thành công. Chúng tôi sẽ liên hệ sớm. Cảm ơn bạn đã liên hệ.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Lỗi form liên hệ:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Không gửi được yêu cầu. Vui lòng thử lại.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
