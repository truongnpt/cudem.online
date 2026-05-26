import {
  Briefcase,
  CreditCard,
  FolderKanban,
  Headphones,
  Headset,
  Home,
  Phone,
  PhoneCall,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  center?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Trang chủ", icon: Home },
  { href: "/services", label: "Dịch vụ", icon: Briefcase },
  { href: "/contact", label: "Liên Hệ", icon: Headset, center: true },
  { href: "/projects", label: "Dự Án", icon: FolderKanban },
  { href: "/packages", label: "Báo giá", icon: CreditCard },
];

function isActive(href: string, currentPath: string) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

type Props = {
  currentPath: string;
};

function NavLink({
  item,
  active,
}: {
  item: NavItem;
  active: boolean;
}) {
  const Icon = item.icon;
  const iconClass = active
    ? "text-primary"
    : "text-slate-500";

  return (
    <a
      href={item.href}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
      className="group flex min-w-0 flex-1 flex-col items-center justify-end gap-0.5 px-1 pb-2 pt-1 transition-colors"
    >
      <Icon
        className={`size-5 shrink-0 stroke-[1.75] transition-colors ${iconClass} group-hover:text-primary`}
        aria-hidden
      />
      <span
        className={`max-w-full truncate text-[10px] font-medium leading-tight ${active ? "text-primary" : "text-slate-500"}`}
      >
        {item.label}
      </span>
    </a>
  );
}

function CenterNavLink({
  item,
  active,
}: {
  item: NavItem;
  active: boolean;
}) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
      className="relative z-10 -mt-7 flex flex-col items-center gap-1"
    >
      <span
        className={`flex -translate-y-2 size-14 items-center justify-center rounded-full bg-primary text-white ring-4 ring-white transition-transform hover:scale-105 active:scale-95 dark:ring-[rgb(var(--color-bg))] ${active ? "ring-primary/20" : ""}`}
      >
        <Icon className="size-6 stroke-[2]" aria-hidden />
      </span>
    </a>
  );
}

export default function BottomNavigation({ currentPath }: Props) {
  const sideItems = navItems.filter((item) => !item.center);
  const centerItem = navItems.find((item) => item.center)!;
  const leftItems = sideItems.slice(0, 2);
  const rightItems = sideItems.slice(2);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden"
      aria-label="Điều hướng chính"
    >
      <div className="relative mx-auto h-[6.6rem] max-w-lg">
        <div className="relative flex h-full items-end justify-between px-2 pb-1"
          style={{
            backgroundImage: "url(/images/bottom-nav-white.svg)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            filter: "drop-shadow(0 0 10px rgba(185, 185, 185, 0.5))",
          }}
        >
          <div className="relative z-10 flex min-w-0 flex-1 justify-around">
            {leftItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                active={isActive(item.href, currentPath)}
              />
            ))}
          </div>

          <CenterNavLink
            item={centerItem}
            active={isActive(centerItem.href, currentPath)}
          />

          <div className="relative z-10 flex min-w-0 flex-1 justify-around">
            {rightItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                active={isActive(item.href, currentPath)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
