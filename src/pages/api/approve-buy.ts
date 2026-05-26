import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { getApproveBuyTemplate } from "../../email-templates/approve-buy";
import { products } from "../../utils/data";

export const prerender = false;

const getValue = (value: FormDataEntryValue | null): string =>
  typeof value === "string" ? value.trim() : "";

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const formData = await request.formData();
    const email = getValue(formData.get("email"));
    const productSlug = getValue(formData.get("productSlug"));
    const fileLink = getValue(formData.get("fileLink"));

    if (!email || !productSlug || !fileLink) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Vui lòng nhập đầy đủ email, sản phẩm và link file.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Email không hợp lệ.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const product = products.find((item) => item.slug === productSlug);

    if (!product) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Không tìm thấy sản phẩm.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      );
    }

    const normalizedFileUrl = fileLink.startsWith("http")
      ? fileLink
      : new URL(fileLink, url.origin).toString();

    const smtpHost = import.meta.env.VERCEL_SMTP_HOST ?? "smtp.gmail.com";
    const smtpPort = Number(import.meta.env.VERCEL_SMTP_PORT ?? 587);
    const smtpUser = import.meta.env.VERCEL_SMTP_USER ?? "truongnpt1998@gmail.com";
    const smtpPass = import.meta.env.VERCEL_SMTP_PASS ?? "otqaftcckelfemfc";

    if (!smtpHost || !smtpUser || !smtpPass) {
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
      to: email,
      subject: `[Cú Đêm] Link tải sản phẩm ${product.name}`,
      text: [
        `Xin chào,`,
        ``,
        `Cảm ơn bạn đã mua sản phẩm ${product.name}.`,
        `Link tải sản phẩm: ${normalizedFileUrl}`,
        ``,
        `Nếu cần hỗ trợ, vui lòng phản hồi lại email này.`,
      ].join("\n"),
      html: getApproveBuyTemplate({
        productName: product.name,
        fileUrl: normalizedFileUrl,
      }),
    });

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Đã gửi link tải sản phẩm đến email người mua.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Lỗi duyệt đơn mua:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Không gửi được link tải sản phẩm. Vui lòng thử lại.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
