import React, { useCallback } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { productCategories, products } from "../../utils/data";
import "swiper/css";
import "swiper/css/pagination";

type Product = (typeof products)[number];

type ProductDetailPageProps = {
  product: Product;
};

const containerClass = "mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5";

const formatVnd = (amount: number) => `${amount.toLocaleString("vi-VN")} VNĐ`;

const getDiscountedPrice = (product: Product) =>
  Math.round(product.priceVnd * (1 - product.promotionPercent / 100));

const getCategoryName = (value: string) =>
  productCategories.find((category) => category.value === value)?.name ?? value;

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const isFree = product.priceVnd === 0;
  const actionText = isFree ? "Download" : "Mua ngay";

  const handleDownload = () => {
    const downloadUrl = `/products/free/${product.slug}.zip`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${product.slug}.zip`;
    link.click();
    link.remove();
  };

  const handleBuy = () => {
    window.location.href = `/checkout?product=${product.slug}`;
  };

  const handlePrimaryAction = useCallback(() => {
    if (isFree) {
      handleDownload();
    } else {
      handleBuy();
    }
  }, [isFree, handleDownload, handleBuy]);

  return (
    <main className="relative overflow-hidden pt-28 pb-12 md:pb-20 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-30 h-[min(76vh,560px)]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.11] via-primary/[0.03] to-transparent dark:from-primary/[0.18] dark:via-primary/[0.05]" />
        <div className="absolute left-[-12%] top-[10%] h-[clamp(240px,38vw,420px)] w-[clamp(240px,38vw,420px)] rounded-full bg-gradient-to-br from-emerald-200/55 via-primary/25 to-transparent blur-3xl dark:from-emerald-900/35 dark:via-primary/35" />
        <div className="absolute right-[-10%] top-[28%] h-[clamp(220px,32vw,360px)] w-[clamp(220px,32vw,360px)] rounded-full bg-gradient-to-tl from-amber-200/35 via-primary/15 to-transparent blur-3xl dark:from-amber-900/35" />
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
            {product.name}
          </span>
        </nav>

        <section className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-start">
          <div className="col-span-1 sm:col-span-2 lg:col-span-7">
            <ProductDetailCarousel product={product} />
          </div>

          <article className="col-span-1 sm:col-span-2 lg:col-span-5">
            <div className="rounded-[2rem] border border-box-border bg-box-bg/90 p-6 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 sm:p-8">
              <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary ring-1 ring-primary/20">
                {getCategoryName(product.category)}
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-heading-1 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-heading-3 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6">
                {isFree ? (
                  <>
                    <p className="text-3xl font-bold text-primary">Miễn phí</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-heading-3">
                      {product.count} lượt tải
                    </p>
                  </>
                ) : (
                  <>
                    {product.promotionPercent > 0 && (
                      <p className="text-sm text-red-500 line-through">
                        {formatVnd(product.priceVnd)}
                      </p>
                    )}
                    <p className="mt-1 text-3xl font-bold text-primary">
                      {formatVnd(getDiscountedPrice(product))}
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-heading-3">
                      {product.count} lượt mua
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-box-border bg-white/60 px-3 py-1 text-xs font-semibold text-heading-3 dark:bg-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={handlePrimaryAction}
                  className="rounded-full cursor-pointer border border-transparent bg-primary px-6 py-3 text-center font-semibold text-white transition hover:bg-[#172554]"
                >
                  {actionText}
                </button>
                <a
                  href="/store"
                  className="rounded-full cursor-pointer border border-box-border bg-white/70 px-6 py-3 text-center font-semibold text-primary transition hover:border-primary/40 dark:bg-white/[0.05]"
                >
                  Quay lại Store
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

function ProductDetailCarousel({ product }: { product: Product }) {
  const images =
    product.images.length > 0 ? product.images : ["/images/icon-cudem.png"];
  const hasMultipleImages = images.length > 1;

  return (
    <div
      className="product-detail-carousel overflow-hidden rounded-[2rem] border border-box-border bg-box-bg/85 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70"
      aria-roledescription="carousel"
      aria-label={`Ảnh sản phẩm ${product.name}`}
    >
      <Swiper
        modules={[Pagination]}
        pagination={hasMultipleImages ? { clickable: true } : false}
        loop={hasMultipleImages}
        slidesPerView={1}
        watchOverflow
        className="size-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <img
              src={image}
              alt={`Ảnh sản phẩm ${product.name} ${index + 1}`}
              className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[35rem] xl:h-[43rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .product-detail-carousel .swiper-pagination {
          bottom: 1rem;
        }
        .product-detail-carousel .swiper-pagination-bullet {
          width: 0.625rem;
          height: 0.625rem;
          background: rgb(255 255 255 / 0.85);
          opacity: 1;
        }
        .product-detail-carousel .swiper-pagination-bullet-active {
          width: 1.75rem;
          border-radius: 9999px;
          background: var(--color-primary);
        }
      `}</style>
    </div>
  );
}
