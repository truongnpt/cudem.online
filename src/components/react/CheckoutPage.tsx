import React, { useEffect, useMemo, useState } from "react";
import { products } from "../../utils/data";
import { showToast } from "../../utils/showToast";

type Product = (typeof products)[number];
type PaymentMethod = "bank-transfer" | "qr";
type CheckoutStep = "form" | "payment";

type ApiResponse = {
  ok?: boolean;
  message?: string;
};

const containerClass = "mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5";

const BANK_INFO = {
  bankCode: "ACB",
  bankName: "ACB Bank",
  accountNumber: "7293007",
  accountName: "NGUYEN PHI TRUONG",
};

const formatVnd = (amount: number) => `${amount.toLocaleString("vi-VN")} VNĐ`;

const getDiscountedPrice = (product: Product) =>
  Math.round(product.priceVnd * (1 - product.promotionPercent / 100));

export default function CheckoutPage() {
  const [productSlug, setProductSlug] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("bank-transfer");
  const [transactionCode, setTransactionCode] = useState("");
  const [step, setStep] = useState<CheckoutStep>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProductSlug(params.get("product") ?? "");
  }, []);

  const product = useMemo(
    () => products.find((item) => item.slug === productSlug),
    [productSlug],
  );

  if (!product) {
    return <CheckoutProductMissing />;
  }

  const finalPrice = getDiscountedPrice(product);
  const paymentContent = `Thanh toan ${product.slug} - ${email || "email-khach-hang"
    }`;
  const qrImageUrl = `https://img.vietqr.io/image/${BANK_INFO.bankCode}-${BANK_INFO.accountNumber}-compact2.png?amount=${finalPrice}&addInfo=${paymentContent}&accountName=${BANK_INFO.accountName}`;

  const validateBuyerInfo = () => {
    if (!buyerName.trim()) {
      showToast("Vui lòng nhập tên người mua.", { variant: "error" });
      return false;
    }

    if (!email.trim()) {
      showToast("Vui lòng nhập email.", { variant: "error" });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      showToast("Email không hợp lệ.", { variant: "error" });
      return false;
    }

    return true;
  };

  const handleStartPayment = () => {
    if (!validateBuyerInfo()) return;
    setStep("payment");
  };

  const handleConfirmPayment = async () => {
    if (!validateBuyerInfo()) return;

    if (!transactionCode.trim()) {
      showToast("Vui lòng nhập mã giao dịch.", { variant: "error" });
      return;
    }

    const formData = new FormData();
    formData.append("buyerName", buyerName.trim());
    formData.append("email", email.trim());
    formData.append("productSlug", product.slug);
    formData.append("paymentMethod", paymentMethod);
    formData.append("transactionCode", transactionCode.trim());

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as ApiResponse;

      showToast(
        data.message ??
        (response.ok
          ? "Đã gửi thông tin thanh toán."
          : "Không gửi được thông tin thanh toán."),
        { variant: response.ok ? "success" : "error" },
      );

      if (response.ok) {
        setTransactionCode("");
      }
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
          <a
            href="/store"
            className="rounded-full bg-box-bg/80 px-3 py-1 font-medium text-heading-3 shadow-sm ring-1 ring-box-border backdrop-blur-sm transition hover:text-primary hover:ring-primary/30 dark:bg-box-bg/60"
          >
            Cửa hàng
          </a>
          <span className="text-heading-3 opacity-60" aria-hidden="true">
            /
          </span>
          <span className="rounded-full bg-primary/12 px-3 py-1 font-semibold text-primary ring-1 ring-primary/25">
            Checkout
          </span>
        </nav>

        <header className="mt-10 max-w-3xl space-y-5">
          <p className="inline-flex w-fit rounded-full bg-white/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30 backdrop-blur-sm dark:bg-box-bg/55">
            Thanh toán sản phẩm
          </p>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-heading-1 sm:text-4xl sm:leading-[1.08] md:text-5xl">
            Hoàn tất đơn hàng của bạn
          </h1>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-12 lg:items-start">
          <aside className="md:col-span-6 lg:col-span-6 xl:col-span-5">
            <ProductSummary product={product} finalPrice={finalPrice} />
          </aside>

          <div className="md:col-span-6 lg:col-span-6 xl:col-span-7">
            <div className="rounded-[2rem] border border-box-border bg-box-bg/90 p-6 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 sm:p-8">
              <div className="grid gap-5 lg:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-heading-2">
                    Tên người mua
                  </span>
                  <input
                    value={buyerName}
                    onChange={(event) => setBuyerName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-box-border bg-white/70 px-4 py-3 text-heading-2 outline-none transition focus:border-primary dark:bg-white/[0.04]"
                    placeholder="Nhập tên của bạn"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-heading-2">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-box-border bg-white/70 px-4 py-3 text-heading-2 outline-none transition focus:border-primary dark:bg-white/[0.04]"
                    placeholder="you@example.com"
                  />
                  <span className="mt-2 block text-xs leading-relaxed text-heading-3">
                    Vui lòng nhập đúng email, hệ thống sẽ gửi sản phẩm bạn mua
                    về email này.
                  </span>
                </label>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-heading-2">
                  Phương thức thanh toán
                </p>
                <div className="mt-3 grid gap-3 lg:grid-cols-2">
                  <PaymentMethodCard
                    label="Chuyển khoản"
                    description="Hiển thị số tài khoản để bạn chuyển khoản thủ công."
                    isActive={paymentMethod === "bank-transfer"}
                    onClick={() => setPaymentMethod("bank-transfer")}
                  />
                  <PaymentMethodCard
                    label="Quét QR"
                    description="Hiển thị mã QR thanh toán nhanh."
                    isActive={paymentMethod === "qr"}
                    onClick={() => setPaymentMethod("qr")}
                  />
                </div>
              </div>

              {step === "form" ? (
                <button
                  type="button"
                  onClick={handleStartPayment}
                  className="mt-8 cursor-pointer rounded-full border border-transparent bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[#172554]"
                >
                  Thanh toán
                </button>
              ) : (
                <PaymentConfirmation
                  paymentMethod={paymentMethod}
                  paymentContent={paymentContent}
                  finalPrice={finalPrice}
                  qrImageUrl={qrImageUrl}
                  transactionCode={transactionCode}
                  onTransactionCodeChange={setTransactionCode}
                  onConfirm={handleConfirmPayment}
                  isSubmitting={isSubmitting}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProductSummary({
  product,
  finalPrice,
}: {
  product: Product;
  finalPrice: number;
}) {
  const image = product.images[0] ?? "/images/icon-cudem.png";

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
          {product.promotionPercent > 0 && (
            <p className="text-sm text-red-500 line-through">
              {formatVnd(product.priceVnd)}
            </p>
          )}
          <p className="mt-1 text-3xl font-bold text-primary">
            {formatVnd(finalPrice)}
          </p>
        </div>
      </div>
    </article>
  );
}

function CheckoutProductMissing() {
  return (
    <main className="relative overflow-hidden pt-28 pb-12 md:pb-20 lg:pt-36">
      <div className={containerClass}>
        <div className="rounded-[2rem] border border-dashed border-box-border bg-box-bg/90 p-8 text-center shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 md:p-12">
          <h1 className="text-3xl font-bold text-heading-1">
            Không tìm thấy sản phẩm checkout
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-heading-3">
            Vui lòng quay lại Store và chọn lại sản phẩm cần mua.
          </p>
          <a
            href="/store"
            className="mt-6 inline-flex rounded-full border border-transparent bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[#172554]"
          >
            Quay lại Store
          </a>
        </div>
      </div>
    </main>
  );
}

function PaymentMethodCard({
  label,
  description,
  isActive,
  onClick,
}: {
  label: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "cursor-pointer rounded-2xl border p-4 text-left transition",
        isActive
          ? "border-primary bg-primary/12 text-primary shadow-md shadow-primary/10"
          : "border-box-border bg-white/60 text-heading-2 hover:border-primary/40 dark:bg-white/[0.04]",
      ].join(" ")}
    >
      <span className="block font-semibold">{label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-heading-3">
        {description}
      </span>
    </button>
  );
}

function PaymentConfirmation({
  paymentMethod,
  paymentContent,
  finalPrice,
  qrImageUrl,
  transactionCode,
  onTransactionCodeChange,
  onConfirm,
  isSubmitting,
}: {
  paymentMethod: PaymentMethod;
  paymentContent: string;
  finalPrice: number;
  qrImageUrl: string;
  transactionCode: string;
  onTransactionCodeChange: (value: string) => void;
  onConfirm: () => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/[0.06] p-5 sm:p-6">
      {paymentMethod === "bank-transfer" ? (
        <div>
          <h2 className="text-xl font-semibold text-heading-2">
            Thông tin chuyển khoản
          </h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <PaymentInfo label="Ngân hàng" value={BANK_INFO.bankName} />
            <PaymentInfo label="Số tài khoản" value={BANK_INFO.accountNumber} />
            <PaymentInfo label="Chủ tài khoản" value={BANK_INFO.accountName} />
            <PaymentInfo label="Số tiền" value={formatVnd(finalPrice)} />
            <PaymentInfo label="Nội dung" value={paymentContent} wide />
          </dl>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-heading-2">
            Quét QR để thanh toán
          </h2>
          <div className="mt-4 flex flex-col gap-5">
            <img
              src={qrImageUrl}
              alt="Mã QR thanh toán"
              className="mx-auto w-2/3 h-auto rounded-2xl border border-box-border bg-white p-3"
            />
            <dl className="grid flex-1 gap-3 text-sm">
              <PaymentInfo label="Số tiền" value={formatVnd(finalPrice)} />
              <PaymentInfo label="Nội dung" value={paymentContent} />
            </dl>
          </div>
        </div>
      )}

      <label className="mt-6 block">
        <span className="text-sm font-semibold text-heading-2">
          Mã giao dịch
        </span>
        <input
          value={transactionCode}
          onChange={(event) => onTransactionCodeChange(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-box-border bg-white/80 px-4 py-3 text-heading-2 outline-none transition focus:border-primary dark:bg-white/[0.04]"
          placeholder="Nhập mã giao dịch sau khi thanh toán"
        />
      </label>

      <button
        type="button"
        onClick={onConfirm}
        disabled={isSubmitting}
        className="mt-5 cursor-pointer rounded-full border border-transparent bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[#172554] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Đang gửi..." : "Xác nhận đã thanh toán"}
      </button>
    </div>
  );
}

function PaymentInfo({
  label,
  value,
  wide,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-box-border bg-white/70 p-4 dark:bg-white/[0.04]",
        wide && "sm:col-span-2",
      ].join(" ")}
    >
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-heading-3">
        {label}
      </dt>
      <dd className="mt-1 break-words font-semibold text-heading-2">{value}</dd>
    </div>
  );
}
