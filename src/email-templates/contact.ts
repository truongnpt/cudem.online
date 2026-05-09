import { app } from "../configs/app";
type ContactTemplateParams = {
  businessName: string;
  email: string;
  subject: string;
  message: string;
};

export const getContactTemplate = ({
  businessName,
  email,
  subject,
  message,
}: ContactTemplateParams): string => {
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
                src="${import.meta.env.VERCEL_URL_APP}${app.logo}"
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
              © ${new Date().getFullYear()} ${app.name}. ${app.footer.copyright}
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
};
