import Toastify from "toastify-js";

export type ShowToastVariant = "success" | "error" | "info" | "warning";

export type ShowToastOptions = {
  variant?: ShowToastVariant;
  duration?: number;
  gravity?: "top" | "bottom";
  position?: "left" | "center" | "right";
};

const variantBackground: Record<ShowToastVariant, string> = {
  success: "#279824",
  error: "#dc2626",
  info: "#2563eb",
  warning: "#d97706",
};

/**
 * Hiển thị toast (toastify-js). CSS đã import trong `src/styles/global.css`.
 */
export function showToast(text: string, options?: ShowToastOptions): void {
  const {
    variant = "success",
    duration = 4500,
    gravity = "top",
    position = "center",
  } = options ?? {};

  Toastify({
    text,
    duration,
    gravity,
    position,
    stopOnFocus: true,
    style: {
      background: variantBackground[variant],
      boxShadow: "0 4px 14px rgb(0 0 0 / 0.15)",
      borderRadius: "10px",
    },
  }).showToast();
}
