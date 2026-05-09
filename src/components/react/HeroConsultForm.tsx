import React from "react";
import { useFormik } from "formik";
import { showToast } from "../../utils/showToast";

const SUBJECT = "Tư vấn làm website";

type ApiResponse = { ok?: boolean; message?: string };

const submitButtonClass =
  "cursor-pointer px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear border-transparent " +
  "bg-primary text-white min-w-max after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center " +
  "after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] " +
  "hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] disabled:opacity-60 disabled:cursor-not-allowed";

/**
 * Form email trên banner Hero: gửi lên /api/contact với tiêu đề cố định {@link SUBJECT}
 * (cùng luồng với ContactFormFormik).
 */
export default function HeroConsultForm() {
  const formik = useFormik({
    initialValues: { email: "" },
    validate: (values) => {
      const errors: { email?: string } = {};
      const email = values.email.trim();
      if (!email) {
        errors.email = "Vui lòng nhập email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Email không hợp lệ.";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append("businessName", "Khách hàng (banner Hero)");
      formData.append("email", values.email.trim());
      formData.append("subject", SUBJECT);
      formData.append(
        "message",
        "Đăng ký nhận tư vấn qua ô email trên banner trang chủ.",
      );

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
        const data = (await response.json()) as ApiResponse;
        const msg =
          data.message ??
          (response.ok
            ? "Gửi yêu cầu thành công."
            : "Không gửi được yêu cầu.");
        showToast(msg, {
          variant: response.ok ? "success" : "error",
        });
        if (response.ok) {
          resetForm();
        }
      } catch {
        showToast("Không kết nối được máy chủ. Vui lòng thử lại.", {
          variant: "error",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full flex flex-col gap-1">
    <form
      onSubmit={formik.handleSubmit}
      className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
      noValidate
    >
      <span className="min-w-max pr-2 border-r border-box-border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          />
        </svg>
      </span>
      <input
        id="hero-consult-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Nhập email để nhận tư vấn miễn phí"
        className="w-full py-3 outline-none bg-transparent"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={formik.isSubmitting}
        aria-invalid={formik.touched.email && !!formik.errors.email}
        aria-describedby={
          formik.touched.email && formik.errors.email
            ? "hero-email-error"
            : undefined
        }
      />
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className={submitButtonClass}
      >
        <span className="hidden sm:flex relative z-[5]">
          {formik.isSubmitting ? "Đang gửi…" : "Nhận tư vấn"}
        </span>
        <span className="flex sm:hidden relative z-[5]" aria-hidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </span>
      </button>
    </form>
    {formik.touched.email && formik.errors.email ? (
      <p id="hero-email-error" className="text-sm text-red-600 pl-6" role="alert">
        {formik.errors.email}
      </p>
    ) : null}
    </div>
  );
}
