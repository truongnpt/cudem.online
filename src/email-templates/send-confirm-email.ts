type ConfirmTemplateParams = {
    appName: string,
    appLogo: string;
    name: string;
    message: string;
};

export const getConfirmTemplate = ({
    appName,
    appLogo,
    name,
    message,
}: ConfirmTemplateParams): string => {
    return `
    <table
      width="600"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="
        background:#ffffff;
        border-radius:12px;
        overflow:hidden;
      "
    >

      <tr>
        <td
          align="center"
          style="
            background:#ed0340;
            padding:30px 20px;
            color:#ffffff;
          "
        >

          <div
            style="
              display:flex;
              justify-content:center;
              align-items:center;
              padding:5px;
              background-color:#ffffff;
              border-radius:5px;
              width:70px;
              height:70px;
            "
          >
            <img
              src="${appLogo}"
              alt="Logo"
              width="70"
              style="display:block;"
            />
          </div>

          <h1
            style="
              margin:0;
              font-size:28px;
              font-weight:bold;
            "
          >
            ${appName}
          </h1>

        </td>
      </tr>

      <tr>
        <td
          style="
            padding:40px 30px;
            color:#333333;
          "
        >

          <h2
            style="
              margin-top:0;
              color:#ed0340;
            "
          >
            Xin chào ${appName} 👋
          </h2>

          <p
            style="
              font-size:16px;
              line-height:1.7;
              margin-bottom:20px;
            "
          >
            Bạn vừa nhận được một lời xác nhận tham dự từ khách mời thân yêu:
          </p>

          <ul
            style="
              padding-left:20px;
              line-height:1.8;
            "
          >
            <li>
              <strong>Tên khách mời:</strong> ${name}
            </li>
          </ul>

          <p
            style="
              font-size:16px;
              line-height:1.7;
              margin-top:20px;
              margin-bottom:10px;
            "
          >
            <strong>Nội dung:</strong>
          </p>

          <p
            style="
              font-size:16px;
              line-height:1.7;
              margin:0;
            "
          >
            ${message.replace(/\n/g, "<br />")}
          </p>

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
          © ${new Date().getFullYear()} ${appName} . Thiệp Cưới Online
        </td>
      </tr>

    </table>
  `;
};
