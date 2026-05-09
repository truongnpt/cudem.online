import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, g as addAttribute } from '../chunks/astro/server_C3auuEWL.mjs';
import 'piccolore';
/* empty css                                    */
import { a as $$Container, c as $$Paragraph, s as services, d as websiteProjects, w as webApplicationProjects, $ as $$Layout } from '../chunks/Layout_DdMl-pcr.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { useFormik } from 'formik';
import { s as showToast, $ as $$ComtactForm } from '../chunks/ComtactForm_CBPtv-9l.mjs';
import { $ as $$Service } from '../chunks/Service_C9ONi2oP.mjs';
import { $ as $$Title } from '../chunks/Title_DuanUxA6.mjs';
import { $ as $$Info } from '../chunks/Info_BefPiGVV.mjs';
import { $ as $$CTA } from '../chunks/CTA_6qNFv4WB.mjs';
import { $ as $$PackageServices } from '../chunks/PackageServices_DZ76EW2j.mjs';
import { a as app } from '../chunks/app_BQwKVvaU.mjs';
export { renderers } from '../renderers.mjs';

const SUBJECT = "Tư vấn làm website";
const submitButtonClass = "cursor-pointer px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear border-transparent bg-primary text-white min-w-max after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:border-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] disabled:opacity-60 disabled:cursor-not-allowed";
function HeroConsultForm() {
  const formik = useFormik({
    initialValues: { email: "" },
    validate: (values) => {
      const errors = {};
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
        "Đăng ký nhận tư vấn qua ô email trên banner trang chủ."
      );
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
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: formik.handleSubmit,
        className: "py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary",
        noValidate: true,
        children: [
          /* @__PURE__ */ jsx("span", { className: "min-w-max pr-2 border-r border-box-border", children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              className: "w-5 h-5",
              "aria-hidden": true,
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "hero-consult-email",
              name: "email",
              type: "email",
              autoComplete: "email",
              placeholder: "Nhập email để nhận tư vấn miễn phí",
              className: "w-full py-3 outline-none bg-transparent",
              value: formik.values.email,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              disabled: formik.isSubmitting,
              "aria-invalid": formik.touched.email && !!formik.errors.email,
              "aria-describedby": formik.touched.email && formik.errors.email ? "hero-email-error" : void 0
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              disabled: formik.isSubmitting,
              className: submitButtonClass,
              children: [
                /* @__PURE__ */ jsx("span", { className: "hidden sm:flex relative z-[5]", children: formik.isSubmitting ? "Đang gửi…" : "Nhận tư vấn" }),
                /* @__PURE__ */ jsx("span", { className: "flex sm:hidden relative z-[5]", "aria-hidden": true, children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "w-5 h-5",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      }
                    )
                  }
                ) })
              ]
            }
          )
        ]
      }
    ),
    formik.touched.email && formik.errors.email ? /* @__PURE__ */ jsx("p", { id: "hero-email-error", className: "text-sm text-red-600 pl-6", role: "alert", children: formik.errors.email }) : null
  ] });
}

const $$ByNumber = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative mt-12 md:mt-16"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mx-auto lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg  shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12"> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
80+
</h2> <p class="mt-2 text-heading-3">Website đã triển khai</p> </div> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
95%
</h2> <p class="mt-2 text-heading-3">Khách hàng hài lòng</p> </div> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
7 ngày
</h2> <p class="mt-2 text-heading-3">Thời gian bàn giao bản đầu</p> </div> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
24/7
</h2> <p class="mt-2 text-heading-3">Hỗ trợ kỹ thuật</p> </div> </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/ByNumber.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 lg:pt-36"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col lg:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0"> <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span> <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span> </div> <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span> <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"> <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
             font-bold text-heading-1">
Thiết kế <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">website chuyên nghiệp</span> giúp doanh nghiệp tăng trưởng bền vững.
</h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Chúng tôi xây dựng website chuẩn SEO, tốc độ cao và tối ưu chuyển đổi để
        bạn thu hút khách hàng đúng tệp. Từ landing page, website doanh nghiệp
        đến cửa hàng trực tuyến, mọi giải pháp đều được thiết kế theo mục tiêu
        kinh doanh của bạn.
` })} <div class="mt-10 w-full flex max-w-md mx-auto lg:mx-0"> <div class="flex sm:flex-row flex-col gap-5 w-full"> ${renderComponent($$result2, "HeroConsultForm", HeroConsultForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/npttruong/projects/npt-project/nopete.com/src/components/react/HeroConsultForm", "client:component-export": "default" })} </div> </div> </div> <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"> <img src="/images/right-banner.png" alt="Hero image" width="2350" height="2359" class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"> </div> ` })} ${renderComponent($$result, "ByNumber", $$ByNumber, {})} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services"> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-10 md:sapce-y-12" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto space-y-4"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`
Dịch vụ chúng tôi cung cấp
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
Giải pháp thiết kế website toàn diện, từ giao diện, nội dung đến tối ưu hiệu suất để giúp doanh nghiệp tăng chuyển đổi và xây dựng thương hiệu bền vững.
` })} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${services.map((service) => {
    return renderTemplate`${renderComponent($$result2, "Service", $$Service, { "title": service.title, "description": service.description, "icon": service.icon })}`;
  })} </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/Services.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-us"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto"> <div class="w-full h-80 sm:h-96 midmd:h-full relative"> <div class="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div> <div class="absolute p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div> <span class="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0"></span> <img${addAttribute("/images/dev-with-c-1.webp", "src")} alt="banner image" width="1240" height="1385" class="w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full"> </div> </div> <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Chúng tôi giúp doanh nghiệp bứt tốc trên môi trường số ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Với kinh nghiệm triển khai website cho nhiều lĩnh vực, đội ngũ của chúng
        tôi tập trung vào hiệu quả thực tế: giao diện chuyên nghiệp, tốc độ tối
        ưu và khả năng chuyển đổi cao. Mỗi dự án đều được xây dựng theo mục tiêu
        kinh doanh cụ thể để website trở thành kênh tạo khách hàng bền vững.
` })} <div class="pt-8 grid md:grid-cols-2 items-center gap-4 max-w-3xl md:max-w-[none]"> ${renderComponent($$result2, "Info", $$Info, { "description": "Thi\u1EBFt k\u1EBF website \u0111\xFAng m\u1EE5c ti\xEAu, gi\xFAp doanh nghi\u1EC7p t\u0103ng tr\u01B0\u1EDFng doanh thu v\xE0 th\u01B0\u01A1ng hi\u1EC7u online.", "title": "S\u1EE9 m\u1EC7nh" }, { "icon": ($$result3) => renderTemplate`<span> <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg> </span>` })} ${renderComponent($$result2, "Info", $$Info, { "description": "Tr\u1EDF th\xE0nh \u0111\u1ED1i t\xE1c thi\u1EBFt k\u1EBF website \u0111\xE1ng tin c\u1EADy cho doanh nghi\u1EC7p Vi\u1EC7t trong h\xE0nh tr\xECnh chuy\u1EC3n \u0111\u1ED5i s\u1ED1.", "title": "T\u1EA7m nh\xECn" }, { "icon": ($$result3) => renderTemplate`<span> <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </span>` })} </div> </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/AboutUs.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="features"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`
Điểm khác biệt trong dịch vụ thiết kế website của chúng tôi
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Chúng tôi không chỉ làm đẹp giao diện mà còn tập trung vào hiệu quả kinh doanh:
<br>
tối ưu trải nghiệm người dùng, tốc độ tải trang và hành trình chuyển đổi.
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-2" }, { "default": ($$result3) => renderTemplate`
Mỗi dự án đều có quy trình rõ ràng từ tư vấn, thiết kế, lập trình đến bàn giao và hỗ trợ vận hành, giúp doanh nghiệp yên tâm phát triển lâu dài.
` })} <ul class="mt-8 space-y-4 text-heading-3 font-medium"> <li> <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Phân tích website và đối thủ trước khi triển khai
</li> <li> <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Tối ưu tốc độ và hiệu suất chuẩn Core Web Vitals
</li> <li> <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Thiết kế chuẩn SEO on-page ngay từ nền tảng
</li> <li> <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Hỗ trợ nội dung và chuyển đổi sau khi bàn giao
</li> </ul> </div> <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto"> <div class="w-full h-80 sm:h-96 midmd:h-full relative"> <div class="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div> <div class="absolute  p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div> <span class="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0"></span> <img${addAttribute("/images/dev-with-c.webp", "src")} alt="Đội ngũ thiết kế website chuyên nghiệp" width="1240" height="1385" class=" w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full"> </div> </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/Features.astro", void 0);

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  const projectGroups = [
    {
      title: "Website \u0111\xE3 tri\u1EC3n khai",
      items: websiteProjects
    },
    {
      title: "Web application \u0111\xE3 tri\u1EC3n khai",
      items: webApplicationProjects
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="partners"> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-8" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Các dự án đã triển khai` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-3" }, { "default": ($$result3) => renderTemplate`
Một số dự án tiêu biểu từ mảng website và web application đã triển khai.
` })} </div> <div class="space-y-10"> ${projectGroups.map((group) => renderTemplate`<div class="space-y-4"> <h3 class="text-xl font-semibold text-heading-2">${group.title}</h3> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${group.items.map((project) => renderTemplate`<article class="rounded-2xl bg-body border border-box-border p-4 sm:p-5"> <img${addAttribute(project.image, "src")}${addAttribute(project.imageAlt, "alt")} class="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy"> <div class="mt-3"> <p class="font-semibold text-heading-2">${project.name}</p> <p class="text-sm text-heading-3">${project.industry}</p> </div> </article>`)} </div> </div>`)} </div> ` })} </section>`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/components/sections/Brands.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": app.webcomeMessage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "PackageServices", $$PackageServices, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "ComtactForm", $$ComtactForm, {})} </main> ` })}`;
}, "/Users/npttruong/projects/npt-project/nopete.com/src/pages/index.astro", void 0);

const $$file = "/Users/npttruong/projects/npt-project/nopete.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
