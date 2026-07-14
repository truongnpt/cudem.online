import { useEffect, useRef } from "react";

type Slide = {
  src: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    src: "/images/projects/song-anh-car-travel.PNG",
    alt: "Song Anh Car Travel",
  },
  {
    src: "/images/projects/future-accounting.png",
    alt: "Future Accounting",
  },
  {
    src: "/images/projects/kinder-banner.PNG",
    alt: "Kinder CRM",
  },
  {
    src: "/images/projects/edutify.png",
    alt: "Edutify",
  },
  {
    src: "/images/projects/the-gioi-kho.png",
    alt: "Thế Giới Khô",
  },
  {
    src: "/images/projects/uwork.png",
    alt: "U-Work",
  },
  {
    src: "/images/projects/day-lai-xe.png",
    alt: "Dạy lái xe 365",
  },
];

type Pose = {
  x: number;
  y: number;
  z: number;
  rx: number;
  ry: number;
  s: number;
  o: number;
};

type Keyframe = Pose & { t: number };

/** Waypoints along the deck path (Taste Skill–style arc). */
const RAW_POINTS: Pose[] = [
  { x: -60, y: -320, z: -980, rx: 4, ry: -3, s: 0.58, o: 0 },
  { x: -58, y: -240, z: -520, rx: 3.2, ry: -2.2, s: 0.8, o: 0.55 },
  { x: -55, y: -160, z: -80, rx: 2.5, ry: -1.4, s: 0.96, o: 0.82 },
  { x: -48, y: -70, z: 160, rx: 2.2, ry: -0.5, s: 1.04, o: 0.95 },
  { x: -28, y: -8, z: 250, rx: 2.05, ry: 0.05, s: 1.08, o: 1 },
  { x: 30, y: 12, z: 160, rx: 2.2, ry: 0.7, s: 1.04, o: 0.94 },
  { x: 100, y: 22, z: -40, rx: 2.6, ry: 1.4, s: 0.96, o: 0.8 },
  { x: 180, y: 24, z: -420, rx: 3.2, ry: 2.1, s: 0.8, o: 0.52 },
  { x: 250, y: 30, z: -920, rx: 3.8, ry: 2.8, s: 0.58, o: 0 },
];

/** Full loop seconds — constant speed along the whole path. */
const LOOP_SECONDS = 28;

function poseDist(a: Pose, b: Pose) {
  // Weighted so XYZ movement dominates perceived travel (keeps speed visually even).
  const dx = (b.x - a.x) * 2.2;
  const dy = (b.y - a.y) * 2.2;
  const dz = (b.z - a.z) * 0.08;
  const ds = (b.s - a.s) * 40;
  return Math.hypot(dx, dy, dz, ds);
}

function buildArcLengthPath(points: Pose[]): Keyframe[] {
  const dists = [0];
  for (let i = 1; i < points.length; i++) {
    dists.push(dists[i - 1] + Math.max(poseDist(points[i - 1], points[i]), 0.001));
  }
  const total = dists[dists.length - 1];
  return points.map((p, i) => ({ ...p, t: dists[i] / total }));
}

const KEYFRAMES = buildArcLengthPath(RAW_POINTS);

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function samplePath(progress: number): Pose {
  const t = ((progress % 1) + 1) % 1;
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const a = KEYFRAMES[i];
    const b = KEYFRAMES[i + 1];
    if (t >= a.t && t <= b.t) {
      const span = b.t - a.t || 1;
      const u = (t - a.t) / span;
      return {
        x: lerp(a.x, b.x, u),
        y: lerp(a.y, b.y, u),
        z: lerp(a.z, b.z, u),
        rx: lerp(a.rx, b.rx, u),
        ry: lerp(a.ry, b.ry, u),
        s: lerp(a.s, b.s, u),
        o: lerp(a.o, b.o, u),
      };
    }
  }
  return KEYFRAMES[KEYFRAMES.length - 1];
}

function zIndexFromDepth(z: number, opacity: number) {
  if (opacity < 0.04) return 10;
  return Math.round(20 + ((z + 1100) / 1400) * 80);
}

/**
 * 3D project deck with constant-speed continuous motion (drag to scrub).
 */
export default function HeroProjectSlideshow() {
  const stageRef = useRef<HTMLDivElement>(null);
  const figuresRef = useRef<(HTMLElement | null)[]>([]);
  const progressRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const speed = reduceMotion ? 0 : 1 / LOOP_SECONDS;

    let lastTs = performance.now();

    const paint = () => {
      const n = SLIDES.length;
      for (let i = 0; i < n; i++) {
        const figure = figuresRef.current[i];
        if (!figure) continue;
        const local = (progressRef.current + i / n) % 1;
        const p = samplePath(local);
        figure.style.opacity = String(p.o);
        figure.style.zIndex = String(zIndexFromDepth(p.z, p.o));
        figure.style.pointerEvents = p.o > 0.72 ? "auto" : "none";
        figure.style.transform = `translate3d(${p.x}%, ${p.y}%, ${p.z}px) rotateX(${p.rx}deg) rotateY(${p.ry}deg) scale(${p.s})`;
      }
    };

    const tick = (ts: number) => {
      const dt = Math.min(0.032, (ts - lastTs) / 1000);
      lastTs = ts;

      if (!draggingRef.current && speed > 0) {
        progressRef.current += speed * dt;
        // Keep progress unbounded; samplePath mod handles wrap — avoids hitch at % 1
        if (progressRef.current > 1e6) {
          progressRef.current %= 1;
        }
      }

      paint();
      rafRef.current = requestAnimationFrame(tick);
    };

    paint();
    rafRef.current = requestAnimationFrame(tick);

    const stage = stageRef.current;
    if (!stage) {
      return () => cancelAnimationFrame(rafRef.current);
    }

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      stage.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      progressRef.current += dx / (stage.clientWidth || 1);
    };

    const onPointerUp = (e: PointerEvent) => {
      draggingRef.current = false;
      try {
        stage.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      className="relative w-full aspect-[5/4] min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] lg:absolute lg:inset-0 lg:aspect-auto select-none"
      style={{ perspective: "1400px" }}
      aria-roledescription="carousel"
      aria-label="Slideshow dự án đã triển khai"
    >
      <div
        ref={stageRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-y"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(3deg) rotateY(-4deg)",
        }}
      >
        {SLIDES.map((slide, i) => (
          <figure
            key={slide.src}
            ref={(el) => {
              figuresRef.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 w-[76%] sm:w-[78%] will-change-transform"
            style={{
              transformStyle: "preserve-3d",
              opacity: 0,
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              width={1600}
              height={1040}
              decoding="async"
              loading={i < 3 ? "eager" : "lazy"}
              className="pointer-events-none h-auto w-full rounded-[18px] border border-black/5 bg-white object-cover shadow-[0_18px_50px_-18px_rgba(0,0,0,0.45)] dark:border-white/10 [image-rendering:auto]"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
