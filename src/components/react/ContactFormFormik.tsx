import React, { useEffect } from "react";
import { useFormik } from "formik";
import { packageServices } from "../../utils/data";
import { showToast } from "../../utils/showToast";

const inputClass =
  "w-full rounded-xl border border-box-border bg-body px-4 py-3 text-heading-2 outline-none transition focus:border-primary";

const labelClass = "text-sm font-medium text-heading-2";

const errorClass = "text-sm text-red-600 mt-1";

const primaryButtonClass =
  "cursor-pointer w-full px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear border-transparent " +
  "bg-primary text-white after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center " +
  "after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] " +
  "hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] disabled:opacity-60 disabled:cursor-not-allowed";

type ApiResponse = { ok?: boolean; message?: string };

export default function ContactFormFormik() {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: (values) => {
      const errors: Partial<Record<keyof typeof values, string>> = {};

      if (!values.businessName.trim()) {
        errors.businessName = "Vui lòng nhập tên doanh nghiệp hoặc cá nhân.";
      }
      if (!values.email.trim()) {
        errors.email = "Vui lòng nhập email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Email không hợp lệ.";
      }
      if (!values.subject.trim()) {
        errors.subject = "Vui lòng nhập tiêu đề.";
      }
      if (!values.message.trim()) {
        errors.message = "Vui lòng nhập nội dung.";
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append("businessName", values.businessName.trim());
      formData.append("email", values.email.trim());
      formData.append("subject", values.subject.trim());
      formData.append("message", values.message.trim());

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = new URLSearchParams(window.location.search).get("package");
    if (!id) return;
    const pkg = packageServices.find((p) => p.id === id);
    if (!pkg) return;
    const subject = `Tư vấn gói: ${pkg.title}`;
    void formik.setFieldValue("subject", subject);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- chỉ áp gói một lần khi mở /contact?package=
  }, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-8 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="businessName" className={labelClass}>
            Tên doanh nghiệp/cá nhân
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            placeholder="Ví dụ: Công ty ABC / Nguyễn Văn A"
            className={`${inputClass} ${
              formik.touched.businessName && formik.errors.businessName
                ? "border-red-500"
                : ""
            }`}
            value={formik.values.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.businessName && formik.errors.businessName ? (
            <p className={errorClass}>{formik.errors.businessName}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Ví dụ: contact@tencongty.com"
            className={`${inputClass} ${
              formik.touched.email && formik.errors.email ? "border-red-500" : ""
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={errorClass}>{formik.errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className={labelClass}>
          Tiêu đề
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Ví dụ: Thiết kế website giới thiệu công ty"
          className={`${inputClass} ${
            formik.touched.subject && formik.errors.subject
              ? "border-red-500"
              : ""
          }`}
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <p className={errorClass}>{formik.errors.subject}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Mô tả nhu cầu, mục tiêu và ngân sách dự kiến của bạn..."
          className={`${inputClass} ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : ""
          }`}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? (
          <p className={errorClass}>{formik.errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className={primaryButtonClass}
      >
        <span className="relative z-[5]">
          {formik.isSubmitting ? "Đang gửi…" : "Gửi yêu cầu tư vấn"}
        </span>
      </button>
    </form>
  );
}
