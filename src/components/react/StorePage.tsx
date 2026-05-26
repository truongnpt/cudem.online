import React, { useEffect, useMemo, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { productCategories, productTags, products } from "../../utils/data";
import "swiper/css";
import "swiper/css/pagination";

type Product = (typeof products)[number];

type StorePageProps = {
  initialSearch?: string;
  initialCategory?: string | null;
  initialTags?: string[];
};

const activeCategoryClass =
  "border-primary bg-primary text-white shadow-md shadow-primary/20";
const inactiveCategoryClass =
  "border-box-border bg-white/60 text-heading-2 hover:border-primary/40 hover:text-primary dark:bg-white/[0.04]";
const inactiveMobileCategoryClass = "border-box-border bg-box-bg text-heading-2";

const containerClass = "mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5";

const categoryNameByValue = new Map(
  productCategories.map((category) => [category.value, category.name]),
);

const formatVnd = (amount: number) => `${amount.toLocaleString("vi-VN")} VNĐ`;

const getDiscountedPrice = (product: Product) =>
  Math.round(product.priceVnd * (1 - product.promotionPercent / 100));

const getProductSearchContent = (product: Product) =>
  [
    product.name,
    product.description,
    categoryNameByValue.get(product.category) ?? "",
    ...product.tags,
  ]
    .join(" ")
    .toLowerCase();

const isValidCategory = (value: string | null | undefined) =>
  !!value && productCategories.some((category) => category.value === value);

const isValidTag = (value: string | null | undefined) =>
  !!value && productTags.includes(value);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-4"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.9 8a1 1 0 0 1-1.42.004l-4.1-4.1a1 1 0 1 1 1.414-1.414l3.388 3.388 7.19-7.286a1 1 0 0 1 1.422-.006Z"
      clipRule="evenodd"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="size-5 shrink-0 text-heading-3"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.606 10.606Z"
    />
  </svg>
);

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="size-5 text-primary"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4.5h18M6.75 12h10.5M10.5 19.5h3"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="size-5"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export default function StorePage({
  initialSearch = "",
  initialCategory = null,
  initialTags = [],
}: StorePageProps) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(
    isValidCategory(initialCategory) ? initialCategory! : "",
  );
  const [selectedTags, setSelectedTags] = useState(
    initialTags.filter(isValidTag),
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const normalizedSearch = search.trim().toLowerCase();

  const visibleProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          selectedCategory === "" || product.category === selectedCategory;
        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.some((tag) => product.tags.includes(tag));
        const matchesSearch =
          normalizedSearch === "" ||
          getProductSearchContent(product).includes(normalizedSearch);

        return matchesCategory && matchesTags && matchesSearch;
      }),
    [normalizedSearch, selectedCategory, selectedTags],
  );

  useEffect(() => {
    const params = new URLSearchParams();

    if (search.trim()) params.set("q", search.trim());
    if (selectedCategory) params.set("category", selectedCategory);
    selectedTags.forEach((tag) => params.append("tag", tag));

    const queryString = params.toString();
    window.history.replaceState({}, "", queryString ? `/store?${queryString}` : "/store");
  }, [search, selectedCategory, selectedTags]);

  useEffect(() => {
    document.body.classList.toggle("!overflow-y-hidden", isFilterOpen);

    return () => {
      document.body.classList.remove("!overflow-y-hidden");
    };
  }, [isFilterOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop, { passive: true });
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSelectedTags([]);
    setIsFilterOpen(false);
  };

  const hasActiveFilter =
    search.trim() !== "" || selectedCategory !== "" || selectedTags.length > 0;

  const toggleTag = (tag: string) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag],
    );
  };

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

      <section aria-labelledby="store-heading" className="relative">
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
              Cửa hàng
            </span>
          </nav>
        </div>
      </section>

      <section className="relative mt-12 md:mt-14" aria-label="Tìm kiếm sản phẩm">
        <div className={containerClass}>
          <form
            action="/store"
            method="get"
            className="relative"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="store-search">
              Tìm kiếm sản phẩm
            </label>
            <div className="flex flex-col gap-3 rounded-full border border-box-border bg-box-bg/85 p-3 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <SearchIcon />
                <input
                  id="store-search"
                  type="search"
                  name="q"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Tìm kiếm sản phẩm, tag hoặc mô tả..."
                  className="h-12 w-full bg-transparent text-base text-heading-2 outline-none placeholder:text-heading-3/65"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-white transition hover:bg-[#172554] sm:min-w-32"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="relative mt-8 md:mt-10" aria-label="Danh sách sản phẩm">
        <div className={containerClass}>
          <div className="mb-5 flex items-center justify-between gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-box-border bg-box-bg/85 px-4 py-2.5 text-sm font-semibold text-heading-2 shadow-sm backdrop-blur-sm"
              aria-controls="store-filter-drawer"
              aria-expanded={isFilterOpen}
            >
              <FilterIcon />
              Bộ lọc
            </button>
            <span className="text-sm font-medium text-heading-3">
              {visibleProducts.length} sản phẩm
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <div className="mb-5 hidden items-center justify-between gap-4 lg:flex">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {visibleProducts.length} sản phẩm
                </p>
                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-sm font-semibold text-heading-3 transition hover:text-primary"
                  >
                    Xoá bộ lọc
                  </button>
                )}
              </div>

              {visibleProducts.length === 0 ? (
                <EmptyProducts onReset={resetFilters} />
              ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                  {visibleProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              )}
            </div>

            <aside className="sticky top-28 hidden lg:block">
              <CategoryFilter
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                onChange={setSelectedCategory}
                onTagToggle={toggleTag}
                onReset={resetFilters}
                hasActiveFilter={hasActiveFilter}
                variant="desktop"
              />
            </aside>
          </div>
        </div>
      </section>

      <div
        className={[
          "fixed inset-0 z-[9998] bg-heading-1/45 backdrop-blur-sm lg:!hidden",
          isFilterOpen ? "block" : "hidden",
        ].join(" ")}
        aria-hidden="true"
        onClick={() => setIsFilterOpen(false)}
      />
      <aside
        id="store-filter-drawer"
        className={[
          "fixed inset-y-0 left-0 z-[9999] flex w-[min(86vw,22rem)] flex-col bg-white p-6 shadow-2xl shadow-heading-1/20 transition-transform duration-300 ease-out dark:bg-box-bg lg:hidden",
          isFilterOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-label="Bộ lọc sản phẩm"
      >
        <div className="flex items-center justify-between gap-4 border-b border-box-border pb-4">
          <h2 className="text-xl font-semibold text-heading-2">Bộ lọc</h2>
          <button
            type="button"
            onClick={() => setIsFilterOpen(false)}
            className="grid size-11 place-content-center rounded-full border border-box-border bg-box-bg text-heading-2"
            aria-label="Đóng bộ lọc"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-6 flex-1 overflow-y-auto">
          <CategoryFilter
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            onChange={(category) => {
              setSelectedCategory(category);
              setIsFilterOpen(false);
            }}
            onTagToggle={toggleTag}
            onReset={resetFilters}
            hasActiveFilter={hasActiveFilter}
            variant="mobile"
          />
        </div>
      </aside>
    </main>
  );
}

function CategoryFilter({
  selectedCategory,
  selectedTags,
  onChange,
  onTagToggle,
  onReset,
  hasActiveFilter,
  variant,
}: {
  selectedCategory: string;
  selectedTags: string[];
  onChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
  onReset: () => void;
  hasActiveFilter: boolean;
  variant: "desktop" | "mobile";
}) {
  const inactiveClass =
    variant === "desktop" ? inactiveCategoryClass : inactiveMobileCategoryClass;

  return (
    <div
      className={
        variant === "desktop"
          ? "rounded-3xl border border-box-border bg-box-bg/90 p-6 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70"
          : undefined
      }
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className={variant === "desktop" ? "text-xl font-semibold text-heading-2" : "sr-only"}>
          Bộ lọc
        </h2>
        {hasActiveFilter && variant === "desktop" && (
          <button
            type="button"
            onClick={onReset}
            className="text-sm font-semibold text-primary"
          >
            Xoá
          </button>
        )}
      </div>

      <div className={variant === "desktop" ? "mt-6" : ""}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-heading-3">
          Loại sản phẩm
        </p>
        <div className="mt-4 space-y-2">
          <CategoryButton
            label="Tất cả"
            count={products.length}
            isActive={selectedCategory === ""}
            onClick={() => onChange("")}
            inactiveClass={inactiveClass}
          />
          {productCategories.map((category) => {
            const count = products.filter(
              (product) => product.category === category.value,
            ).length;

            return (
              <CategoryButton
                key={category.value}
                label={category.name}
                count={count}
                isActive={selectedCategory === category.value}
                onClick={() => onChange(category.value)}
                inactiveClass={inactiveClass}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-heading-3">
          Tags
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {productTags.map((tag) => {
            const count = products.filter((product) =>
              product.tags.includes(tag),
            ).length;

            return (
              <TagButton
                key={tag}
                label={tag}
                count={count}
                isActive={selectedTags.includes(tag)}
                onClick={() => onTagToggle(tag)}
              />
            );
          })}
        </div>
      </div>

      {hasActiveFilter && variant === "mobile" && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 inline-flex w-full justify-center rounded-full border border-box-border bg-box-bg px-5 py-3 text-sm font-semibold text-primary"
        >
          Xoá bộ lọc
        </button>
      )}
    </div>
  );
}

function CategoryButton({
  label,
  count,
  isActive,
  onClick,
  inactiveClass,
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  inactiveClass: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={[
        "flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition cursor-pointer",
        isActive ? activeCategoryClass : inactiveClass,
      ].join(" ")}
    >
      <span className="inline-flex items-center gap-2">
        {isActive && <CheckIcon />}
        {label}
      </span>
      <span>{count}</span>
    </button>
  );
}

function TagButton({
  label,
  count,
  isActive,
  onClick,
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={[
        "h-10 rounded-full border px-2 py-2 text-left text-sm font-semibold transition",
        isActive
          ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
          : "border-box-border bg-white/60 text-heading-2 hover:border-primary/40 hover:text-primary dark:bg-white/[0.04]",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-2 cursor-pointer">
        <span className="flex items-start gap-2 flex-1">
          {isActive && <span className="mt-0.5"><CheckIcon /></span>}
          <span className="leading-snug">{label}</span>
        </span>
        <span className={["block w-6 h-6 flex items-center justify-center text-xs rounded-full px-2 py-1", isActive ? "text-black bg-white/80 " : "text-heading-3  bg-gray-200"].join(" ")}>
          {count}
        </span>
      </div>
    </button>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isFree = product.priceVnd === 0;

  const handleDownload = () => {
    const downloadUrl = `/products/free/${product.slug}.zip`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${product.slug}.zip`;
    link.click();
    link.remove();
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-box-border bg-box-bg/90 shadow-lg shadow-box-shadow backdrop-blur-sm dark:bg-box-bg/70 md:grid">
      <ProductImageCarousel product={product} />

      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary ring-1 ring-primary/20">
              {categoryNameByValue.get(product.category)}
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-heading-2">
              {product.name}
            </h2>
          </div>
          <div className="text-left">
            {isFree ? (
              <>
                <p className="text-2xl font-bold text-primary">Miễn phí</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-heading-3">
                  Free download
                </p>
                <p className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                  {product.count} lượt tải
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-heading-3 text-red-500 line-through">
                  {formatVnd(product.priceVnd)}
                </p>
                <p className="mt-1 text-2xl font-bold text-primary">
                  {formatVnd(getDiscountedPrice(product))}
                </p>
                <p className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                  {product.count} lượt mua
                </p>
              </>
            )}
          </div>
        </div>

        <p className="mt-4 text-heading-3 leading-relaxed">{product.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-box-border bg-white/60 px-3 py-1 text-xs font-semibold text-heading-3 dark:bg-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`/store/${product.slug}`}
            className="rounded-full border cursor-pointer border-box-border bg-white/70 px-6 py-3 text-center text-primary transition hover:border-primary/40 dark:bg-white/[0.05]"
          >
            Xem chi tiết
          </a>
          {isFree ? (
            <button
              type="button"
              onClick={handleDownload}
              className="rounded-full cursor-pointer border border-transparent bg-primary px-6 py-3 text-center text-white transition hover:bg-[#172554]"
            >
              Download
            </button>
          ) : (
            <a
              href={`/checkout?product=${product.slug}`}
              className="rounded-full cursor-pointer border border-transparent bg-primary px-6 py-3 text-center text-white transition hover:bg-[#172554]"
            >
              Mua ngay
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProductImageCarousel({ product }: { product: Product }) {
  const images = product.images.length > 0 ? product.images : ["/images/icon-cudem.png"];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="product-image-carousel group relative min-h-56 max-h-90 overflow-hidden bg-gradient-to-br from-primary/15 via-emerald-100/55 to-amber-100/45 dark:from-primary/20 dark:via-emerald-950/25 dark:to-amber-950/20">
      <Swiper
        modules={[Pagination]}
        pagination={hasMultipleImages ? { clickable: true } : false}
        loop={hasMultipleImages}
        slidesPerView={1}
        className="size-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`} className="!h-auto">
            <a
              href={`/store/${product.slug}`}
              className="block size-full"
              aria-label={`Xem chi tiết ${product.name}`}
            >
              <img
                src={image}
                alt={`Ảnh sản phẩm ${product.name} ${index + 1}`}
                className="size-full object-cover shadow-xl shadow-heading-1/[0.08] transition duration-300 group-hover:scale-105"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="pointer-events-none absolute -bottom-16 -right-16 size-40 rounded-full bg-primary/15 blur-2xl" />

      {product.promotionPercent > 0 && (
        <p className="absolute top-4 left-4 rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary shadow-sm shadow-primary/20">
          Giảm {product.promotionPercent}%
        </p>
      )}

      <style>{`
        .product-image-carousel .swiper-pagination {
          bottom: 1rem;
        }
        .product-image-carousel .swiper-pagination-bullet {
          width: 0.625rem;
          height: 0.625rem;
          background: rgb(255 255 255 / 0.85);
          opacity: 1;
        }
        .product-image-carousel .swiper-pagination-bullet-active {
          width: 1.75rem;
          border-radius: 9999px;
          background: var(--color-primary);
        }
      `}</style>
    </div>
  );
}

function EmptyProducts({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-3xl border border-dashed border-box-border bg-box-bg/80 p-8 text-center shadow-lg shadow-box-shadow backdrop-blur-sm md:p-12">
      <h2 className="text-2xl font-semibold text-heading-2">
        Chưa có sản phẩm phù hợp
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-heading-3">
        Hãy thử xoá từ khoá tìm kiếm hoặc chọn lại loại sản phẩm để xem toàn bộ
        plugin hiện có trong store.
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-transparent bg-primary px-6 py-3 text-white transition hover:bg-[#172554]"
        >
          Xem tất cả sản phẩm
        </button>
      </div>
    </div>
  );
}
