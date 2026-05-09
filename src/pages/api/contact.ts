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

    const smtpHost = import.meta.env.SMTP_HOST;
    const smtpPort = Number(import.meta.env.SMTP_PORT ?? 587);
    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const mailTo = import.meta.env.CONTACT_TO_EMAIL ?? smtpUser;

    console.log(smtpHost, smtpPort, smtpUser, smtpPass, mailTo);

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
      from: import.meta.env.CONTACT_FROM_EMAIL ?? smtpUser,
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
