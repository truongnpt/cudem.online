import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { getCheckoutTemplate } from "../../email-templates/checkout";
import { products } from "../../utils/data";

export const prerender = false;

const getValue = (value: FormDataEntryValue | null): string =>
  typeof value === "string" ? value.trim() : "";

const paymentMethodLabel: Record<string, string> = {
  "bank-transfer": "Chuyển khoản",
  qr: "Quét QR",
};

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const formData = await request.formData();
    const buyerName = getValue(formData.get("buyerName"));
    const email = getValue(formData.get("email"));
    const productSlug = getValue(formData.get("productSlug"));
    const paymentMethod = getValue(formData.get("paymentMethod"));
    const transactionCode = getValue(formData.get("transactionCode"));

    if (!buyerName || !email || !productSlug || !paymentMethod || !transactionCode) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Vui lòng nhập đầy đủ thông tin thanh toán.",
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

    const approveUrl = new URL("/approve-buy", url.origin);
    approveUrl.searchParams.set("product", product.slug);
    approveUrl.searchParams.set("email", email);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const paymentLabel = paymentMethodLabel[paymentMethod] ?? paymentMethod;

    await transporter.sendMail({
      from: import.meta.env.VERCEL_CONTACT_FROM_EMAIL ?? smtpUser,
      to: mailTo,
      replyTo: email,
      subject: `[Checkout] Xác nhận thanh toán ${product.name}`,
      text: [
        `Tên người mua: ${buyerName}`,
        `Email: ${email}`,
        `Sản phẩm: ${product.name}`,
        `Slug: ${product.slug}`,
        `Phương thức thanh toán: ${paymentLabel}`,
        `Mã giao dịch: ${transactionCode}`,
        `Link duyệt: ${approveUrl.toString()}`,
      ].join("\n"),
      html: getCheckoutTemplate({
        buyerName,
        email,
        productName: product.name,
        productSlug: product.slug,
        paymentMethod: paymentLabel,
        transactionCode,
        approveUrl: approveUrl.toString(),
      }),
    });

    return new Response(
      JSON.stringify({
        ok: true,
        message:
          "Đã gửi thông tin thanh toán. Chúng tôi sẽ kiểm tra và gửi sản phẩm qua email.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Lỗi checkout:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Không gửi được thông tin thanh toán. Vui lòng thử lại.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
