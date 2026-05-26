import React, { useEffect, useMemo, useState } from "react";
import { products } from "../../utils/data";
import { showToast } from "../../utils/showToast";

type Product = (typeof products)[number];

type ApiResponse = {
  ok?: boolean;
  message?: string;
};

const containerClass = "mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5";

const formatVnd = (amount: number) => `${amount.toLocaleString("vi-VN")} VNĐ`;

const getDiscountedPrice = (product: Product) =>
  Math.round(product.priceVnd * (1 - product.promotionPercent / 100));

export default function ApproveBuyPage() {
  const [productSlug, setProductSlug] = useState("");
  const [email, setEmail] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextProductSlug = params.get("product") ?? "";
    const nextEmail = params.get("email") ?? "";

    setProductSlug(nextProductSlug);
    setEmail(nextEmail);
  }, []);

  const product = useMemo(
    () => products.find((item) => item.slug === productSlug),
    [productSlug],
  );

  const validateForm = () => {
    if (!product) {
      showToast("Không tìm thấy sản phẩm cần duyệt.", { variant: "error" });
      return false;
    }

    if (!email.trim()) {
      showToast("Vui lòng nhập email người mua.", { variant: "error" });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      showToast("Email không hợp lệ.", { variant: "error" });
      return false;
    }

    if (!fileLink.trim()) {
      showToast("Vui lòng nhập link file sản phẩm.", { variant: "error" });
      return false;
    }

    return true;
  };

  const handleApprove = async () => {
    if (!validateForm() || !product) return;

    const formData = new FormData();
    formData.append("email", email.trim());
    formData.append("productSlug", product.slug);
    formData.append("fileLink", fileLink.trim());

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/approve-buy", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as ApiResponse;

      showToast(
        data.message ??
        (response.ok
          ? "Đã gửi link tải sản phẩm."
          : "Không gửi được link tải sản phẩm."),
        { variant: response.ok ? "success" : "error" },
      );
    } catch {
      showToast("Không kết nối được máy chủ. Vui lòng thử lại.", {
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative overflow-hidden pt-28 pb-12 md:pb-20 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-30 h-[min(76vh,560px)]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.11] via-primary/[0.03] to-transparent dark:from-primary/[0.18] dark:via-primary/[0.05]" />
        <div className="absolute left-[-12%] top-[10%] h-[clamp(240px,38vw,420px)] w-[clamp(240px,38vw,420px)] rounded-full bg-gradient-to-br from-emerald-200/55 via-primary/25 to-transparent blur-3xl dark:from-emerald-900/35 dark:via-primary/35" />
      </div>

      <div className={containerClass}>
        <nav
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
          aria-label="Breadcrumb"
        >
          <a
            href="/"
            className="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60"
          >
            Trang chủ
          </a>
          <span className="text-heading-3 opacity-60" aria-hidden="true">
            /
          </span>
          <span className="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">
            Duyệt đơn mua
          </span>
        </nav>

        <header className="mt-10 max-w-3xl space-y-5">
          <p className="inline-flex w-fit rounded-full bg-white/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 backdrop-blur-sm dark:bg-box-bg/55">
            Approve buy
          </p>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
            Duyệt thanh toán và gửi link tải sản phẩm
          </h1>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <aside className="lg:col-span-5">
            {product ? (
              <ProductSummary product={product} />
            ) : (
              <div className="rounded-[2rem] border border-dashed border-box-border bg-box-bg/90 p-8 text-center shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70">
                <h2 className="text-2xl font-semibold text-heading-2">
                  Chưa có sản phẩm hợp lệ
                </h2>
                <p className="mt-3 text-heading-3">
                  Kiểm tra lại query param `product` trên URL duyệt.
                </p>
              </div>
            )}
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-box-border bg-box-bg/90 p-6 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 sm:p-8">
              <div className="grid gap-5">
                <label className="block">
                  <span className="text-sm font-semibold text-heading-2">
                    Email người mua
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-box-border bg-white/70 px-4 py-3 text-heading-2 outline-none transition focus:border-primary dark:bg-white/[0.04]"
                    placeholder="user@gmail.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-heading-2">
                    Link file
                  </span>
                  <input
                    value={fileLink}
                    onChange={(event) => setFileLink(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-box-border bg-white/70 px-4 py-3 text-heading-2 outline-none transition focus:border-primary dark:bg-white/[0.04]"
                    placeholder="https://..."
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={handleApprove}
                disabled={isSubmitting}
                className="mt-8 rounded-full border border-transparent bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[#172554] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Đang gửi..." : "Duyệt và gửi link"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProductSummary({ product }: { product: Product }) {
  const image = product.images[0] ?? "/images/icon-cudem.png";
  const isFree = product.priceVnd === 0;
  const finalPrice = getDiscountedPrice(product);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-box-border bg-box-bg/90 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70">
      <img
        src={image}
        alt={`Ảnh sản phẩm ${product.name}`}
        className="h-[20rem] w-full object-cover sm:h-[20rem] md:h-[22rem] lg:h-[28rem] xl:h-[32rem]"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-heading-2">
          {product.name}
        </h2>
        <p className="mt-3 text-heading-3 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-5">
          {isFree ? (
            <p className="text-3xl font-bold text-primary">Miễn phí</p>
          ) : (
            <>
              {product.promotionPercent > 0 && (
                <p className="text-sm text-red-500 line-through">
                  {formatVnd(product.priceVnd)}
                </p>
              )}
              <p className="mt-1 text-3xl font-bold text-primary">
                {formatVnd(finalPrice)}
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
