import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from './astro/server_C3auuEWL.mjs';
import 'piccolore';
import { p as packageServices, a as $$Container, c as $$Paragraph } from './Layout_DdMl-pcr.mjs';
import { $ as $$Title } from './Title_DuanUxA6.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import Toastify from 'toastify-js';

const variantBackground = {
  success: "#279824",
  error: "#dc2626",
  info: "#2563eb",
  warning: "#d97706"
};
function showToast(text, options) {
  const {
    variant = "success",
    duration = 4500,
    gravity = "top",
    position = "right"
  } = options ?? {};
  Toastify({
    text,
    duration,
    gravity,
    position,
    stopOnFocus: true,
    style: {
      background: variantBackground[variant],
      boxShadow: "0 4px 14px rgb(0 0 0 / 0.15)"
    }
  }).showToast();
}

const inputClass = "w-full rounded-xl border border-box-border bg-body px-4 py-3 text-heading-2 outline-none transition focus:border-primary";
const labelClass = "text-sm font-medium text-heading-2";
const errorClass = "text-sm text-red-600 mt-1";
const primaryButtonClass = "cursor-pointer w-full px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear border-transparent bg-primary text-white after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] disabled:opacity-60 disabled:cursor-not-allowed";
function ContactFormFormik() {
  const formik = useFormik({
    initialValues: {
      businessName: "",
      email: "",
      subject: "",
      message: ""
    },
    validate: (values) => {
      const errors = {};
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
          body: formData
        });
        const data = await response.json();
        const msg = data.message ?? (response.ok ? "Gửi yêu cầu thành công." : "Không gửi được yêu cầu.");
        showToast(msg, {
          variant: response.ok ? "success" : "error"
        });
        if (response.ok) {
          resetForm();
        }
      } catch {
        showToast("Không kết nối được máy chủ. Vui lòng thử lại.", {
          variant: "error"
        });
      } finally {
        setSubmitting(false);
      }
    }
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = new URLSearchParams(window.location.search).get("package");
    if (!id) return;
    const pkg = packageServices.find((p) => p.id === id);
    if (!pkg) return;
    const subject = `Tư vấn gói: ${pkg.title}`;
    void formik.setFieldValue("subject", subject);
  }, []);
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: formik.handleSubmit,
      className: "mt-8 space-y-5",
      noValidate: true,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "businessName", className: labelClass, children: "Tên doanh nghiệp/cá nhân" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "businessName",
                name: "businessName",
                type: "text",
                autoComplete: "organization",
                placeholder: "Ví dụ: Công ty ABC / Nguyễn Văn A",
                className: `${inputClass} ${formik.touched.businessName && formik.errors.businessName ? "border-red-500" : ""}`,
                value: formik.values.businessName,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.businessName && formik.errors.businessName ? /* @__PURE__ */ jsx("p", { className: errorClass, children: formik.errors.businessName }) : null
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: labelClass, children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                placeholder: "Ví dụ: contact@tencongty.com",
                className: `${inputClass} ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`,
                value: formik.values.email,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur
              }
            ),
            formik.touched.email && formik.errors.email ? /* @__PURE__ */ jsx("p", { className: errorClass, children: formik.errors.email }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: labelClass, children: "Tiêu đề" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "subject",
              name: "subject",
              type: "text",
              placeholder: "Ví dụ: Thiết kế website giới thiệu công ty",
              className: `${inputClass} ${formik.touched.subject && formik.errors.subject ? "border-red-500" : ""}`,
              value: formik.values.subject,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur
            }
          ),
          formik.touched.subject && formik.errors.subject ? /* @__PURE__ */ jsx("p", { className: errorClass, children: formik.errors.subject }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: labelClass, children: "Nội dung" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              rows: 5,
              placeholder: "Mô tả nhu cầu, mục tiêu và ngân sách dự kiến của bạn...",
              className: `${inputClass} ${formik.touched.message && formik.errors.message ? "border-red-500" : ""}`,
              value: formik.values.message,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur
            }
          ),
          formik.touched.message && formik.errors.message ? /* @__PURE__ */ jsx("p", { className: errorClass, children: formik.errors.message }) : null
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: formik.isSubmitting,
            className: primaryButtonClass,
            children: /* @__PURE__ */ jsx("span", { className: "relative z-[5]", children: formik.isSubmitting ? "Đang gửi…" : "Gửi yêu cầu tư vấn" })
          }
        )
      ]
    }
  );
}

const $$ComtactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="pb-20"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mx-auto max-w-3xl rounded-2xl border border-box-border bg-box-bg p-6 sm:p-8 shadow-lg shadow-box-shadow"> <div class="text-center space-y-3"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Liên hệ tư vấn` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
Điền thông tin để chúng tôi tư vấn giải pháp thiết kế website phù hợp với nhu cầu của bạn.
` })} </div> ${renderComponent($$result2, "ContactFormFormik", ContactFormFormik, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/npttruong/projects/npt-project/nopete.com/src/components/react/ContactFormFormik", "client:component-export": "default" })} </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/ComtactForm.astro", void 0);

export { $$ComtactForm as $, showToast as s };
