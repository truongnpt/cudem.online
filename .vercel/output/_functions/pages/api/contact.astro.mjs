import nodemailer from 'nodemailer';
import { a as app } from '../../chunks/app_BQwKVvaU.mjs';
export { renderers } from '../../renderers.mjs';

const getContactTemplate = ({
  businessName,
  email,
  subject,
  message
}) => {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Template</title>
</head>
<body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4; padding:30px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="background:#ffffff; border-radius:12px; overflow:hidden;">

          <tr>
            <td align="center"
              style="background:#279824; padding:30px 20px; color:#ffffff;">

              <img
                src="${app.logo}"
                alt="Logo"
                width="70"
                style="display:block; margin-bottom:15px;"
              />

              <h1 style="margin:0; font-size:28px; font-weight:bold;">
                ${app.name}
              </h1>

            </td>
          </tr>

          <tr>
            <td style="padding:40px 30px; color:#333333;">

              <h2 style="margin-top:0; color:#279824;">
                Xin chào 👋
              </h2>

              <p style="font-size:16px; line-height:1.7; margin-bottom:20px;">
                Bạn vừa nhận được một yêu cầu liên hệ mới từ website:
              </p>

              <ul style="padding-left:20px; line-height:1.8;">
                <li><strong>Tên doanh nghiệp/cá nhân:</strong> ${businessName}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Tiêu đề:</strong> ${subject}</li>
              </ul>

              <p style="font-size:16px; line-height:1.7; margin-top:20px; margin-bottom:10px;">
                <strong>Nội dung:</strong>
              </p>
              <p style="font-size:16px; line-height:1.7; margin:0;">
                ${message.replace(/\n/g, "<br />")}
              </p>

              <div style="margin-top:35px; text-align:center;">
                <a
                  href="mailto:${email}"
                  style="
                    background:#279824;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 28px;
                    border-radius:8px;
                    display:inline-block;
                    font-weight:bold;
                    font-size:16px;
                  "
                >
                  Trả lời khách hàng
                </a>
              </div>

            </td>
          </tr>

          <tr>
            <td
              align="center"
              style="
                background:#f1f1f1;
                padding:20px;
                color:#777777;
                font-size:14px;
              "
            >
              © ${(/* @__PURE__ */ new Date()).getFullYear()} ${app.name}. ${app.footer.copyright}
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
};

const prerender = false;
const getValue = (value) => {
  return typeof value === "string" ? value.trim() : "";
};
const POST = async ({ request }) => {
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
          message: "Vui lòng nhập đầy đủ thông tin."
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const smtpHost = "smtp.gmail.com";
    const smtpPort = Number("587");
    const smtpUser = "truongnpt1998@gmail.com";
    const smtpPass = "otqaftcckelfemfc";
    const mailTo = "truongnpt1998@gmail.com";
    if (!smtpHost || !smtpUser || !smtpPass || !mailTo) ;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
    await transporter.sendMail({
      from: "truongnpt1998@gmail.com",
      to: mailTo,
      replyTo: email,
      subject: `[Liên hệ website] ${subject}`,
      text: `Tên doanh nghiệp/cá nhân: ${businessName}
Email: ${email}
Tiêu đề: ${subject}
Nội dung:
${message}`,
      html: getContactTemplate({ businessName, email, subject, message })
    });
    return new Response(
      JSON.stringify({
        ok: true,
        message: "Gửi yêu cầu thành công. Chúng tôi sẽ liên hệ sớm."
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    const err = error;
    console.error("Lỗi form liên hệ:", {
      code: err?.code,
      message: err?.message,
      response: err?.response
    });
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Không gửi được yêu cầu. Vui lòng thử lại."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
