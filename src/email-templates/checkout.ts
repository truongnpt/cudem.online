import { app } from "../configs/app";

type CheckoutTemplateParams = {
  buyerName: string;
  email: string;
  productName: string;
  productSlug: string;
  paymentMethod: string;
  transactionCode: string;
  approveUrl: string;
};

export const getCheckoutTemplate = ({
  buyerName,
  email,
  productName,
  productSlug,
  paymentMethod,
  transactionCode,
  approveUrl,
}: CheckoutTemplateParams): string => {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xác nhận thanh toán</title>
</head>
<body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4; padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; border-radius:12px; overflow:hidden;">
          <tr>
            <td align="center" style="background:#279824; padding:30px 20px; color:#ffffff;">
              <div style="display:flex; justify-content:center; align-items:center; padding:5px; background-color:#ffffff; border-radius:5px; width:70px; height:70px;">
                <img src="${import.meta.env.VERCEL_URL_APP}${app.logo}" alt="Logo" width="70" style="display:block;" />
              </div>
              <h1 style="margin:12px 0 0; font-size:28px; font-weight:bold;">${app.name}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px; color:#333333;">
              <h2 style="margin-top:0; color:#279824;">Yêu cầu xác nhận thanh toán</h2>
              <p style="font-size:16px; line-height:1.7; margin-bottom:20px;">
                Khách hàng vừa gửi thông tin thanh toán cho sản phẩm:
              </p>
              <ul style="padding-left:20px; line-height:1.8;">
                <li><strong>Tên người mua:</strong> ${buyerName}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Sản phẩm:</strong> ${productName}</li>
                <li><strong>Slug:</strong> ${productSlug}</li>
                <li><strong>Phương thức thanh toán:</strong> ${paymentMethod}</li>
                <li><strong>Mã giao dịch:</strong> ${transactionCode}</li>
              </ul>
              <div style="margin-top:35px; text-align:center;">
                <a href="${approveUrl}" style="background:#279824; color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:8px; display:inline-block; font-weight:bold; font-size:16px;">
                  Duyệt và gửi link tải
                </a>
              </div>
              <p style="font-size:14px; line-height:1.7; color:#666666; margin-top:24px;">
                Nếu nút không hoạt động, mở link này:<br />
                <a href="${approveUrl}" style="color:#279824;">${approveUrl}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="background:#f1f1f1; padding:20px; color:#777777; font-size:14px;">
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
