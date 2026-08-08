import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { getConfirmTemplate } from "../../email-templates/send-confirm-email";

export const prerender = false;


export const POST: APIRoute = async ({ request }) => {

    try {
        // ================================
        // Parse JSON
        // ================================
        const body = await request.json();

        const appName = String(body.appName ?? "").trim();
        const appLogo = String(body.appLogo ?? "").trim();
        const mailTo = String(body.mailTo ?? "").trim();
        const name = String(body.name ?? "").trim();
        const message = String(body.message ?? "").trim();

        console.log("SEND CONFIRM EMAIL:", {
            appName,
            appLogo,
            mailTo,
            name,
            message,
        });

        // ================================
        // Validate
        // ================================
        if (!name || !message) {
            return new Response(
                JSON.stringify({
                    ok: false,
                    message: "Vui lòng nhập đầy đủ thông tin.",
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        }

        // ================================
        // SMTP Config
        // ================================
        const smtpHost = import.meta.env.VERCEL_SMTP_HOST;

        const smtpPort = Number(
            import.meta.env.VERCEL_SMTP_PORT ?? 587,
        );

        const smtpUser = import.meta.env.VERCEL_SMTP_USER;

        const smtpPass = import.meta.env.VERCEL_SMTP_PASS;

        if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
            console.error("Missing SMTP configuration");

            return new Response(
                JSON.stringify({
                    ok: false,
                    message: "Thiếu cấu hình SMTP trên máy chủ.",
                }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        }

        // ================================
        // Create transporter
        // ================================
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // ================================
        // Verify SMTP
        // ================================
        await transporter.verify();

        // ================================
        // Send email
        // ================================
        await transporter.sendMail({
            from:
                import.meta.env.VERCEL_CONTACT_FROM_EMAIL ??
                smtpUser,

            to: mailTo,

            subject: `[Xác nhận tham dự] - ${name}`,

            text: [
                `Tên khách mời: ${name}`,
                "",
                "Nội dung:",
                message,
            ].join("\n"),

            html: getConfirmTemplate({
                appName,
                appLogo,
                name,
                message,
            }),
        });

        // ================================
        // Success
        // ================================
        return new Response(
            JSON.stringify({
                ok: true,
                message:
                    "Gửi yêu cầu thành công. Cảm ơn bạn đã xác nhận tham dự.",
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    } catch (error) {
        console.error(
            "SEND CONFIRM EMAIL ERROR:",
            error,
        );

        return new Response(
            JSON.stringify({
                ok: false,
                message:
                    "Không gửi được yêu cầu. Vui lòng thử lại.",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    }
};