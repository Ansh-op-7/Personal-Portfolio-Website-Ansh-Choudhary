// Built using Hyperiux Vault & Adapted for Ansh Choudhary Portfolio

"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";

// Scale factors for the 8 cards
const SCALE: Partial<Record<number, number>> = {
  1: 0.95,
  2: 0.9,
  3: 0.92,
  4: 0.9,
  5: 0.9,
  6: 0.92,
  7: 0.92,
  8: 0.85,
};
const s = (i: number) => SCALE[i] ?? 1;

// Eight visually distinct, high-quality images representing Ansh's personal photos, hackathons, and honors
// Optimized target coordinates for a clean perimeter spread around the center text
export const PORTFOLIO_CARDS: StackSpreadCard[] = [
  // 1. Top-Left: Campus Honors & Awards (img08)
  {
    item: {
      src: "/images/ansh-campus-awards.png",
      alt: "Campus Honors & Competitions",
    },
    stackOffset: { x: -8, y: -10 },
    stackRotate: -18,
    target: { x: -28, y: -34, rotate: 0, scale: s(8), w: 18, h: 22 },
    targetSm: { x: -25, y: -41 },
    z: 2,
  },
  // 2. Top-Right: CU Fest 2024 Double First Prizes (img07)
  {
    item: {
      src: "/images/ansh-trophies-fest.png",
      alt: "CU Fest 2024 • Double First Prize Winner",
    },
    stackOffset: { x: 14, y: -10 },
    stackRotate: 20,
    target: { x: 34, y: -33, rotate: 0, scale: s(7), w: 18, h: 26 },
    targetSm: { x: 25, y: -41 },
    z: 3,
  },
  // 3. Mid-Left: Tekathon 5.0 Hackathon Team (img06)
  {
    item: {
      src: "/images/ansh-tekathon-team.jpg",
      alt: "Tekathon 5.0 • Hackathon Innovation Team",
    },
    stackOffset: { x: -16, y: 0 },
    stackRotate: -6,
    target: { x: -38, y: -2, rotate: 0, scale: s(6), w: 16, h: 28 },
    targetSm: { x: -25, y: -21 },
    z: 4,
  },
  // 4. Top-Center: Professional Studio Portrait (img05)
  {
    item: {
      src: "/images/ansh-suit-portrait.jpg",
      alt: "Ansh Choudhary • Computer Science Engineering",
    },
    stackOffset: { x: 1, y: -10 },
    stackRotate: -2,
    target: { x: 3, y: -35, rotate: 0, scale: s(5), w: 22, h: 24 },
    targetSm: { x: 25, y: -21 },
    z: 5,
  },
  // 5. Mid-Right: Fresh-Gen Fiesta 2024 Winner (img04)
  {
    item: {
      src: "/images/ansh-award-stage.png",
      alt: "Fresh-Gen Fiesta 2024 • 1st Prize Award Ceremony",
    },
    stackOffset: { x: 18, y: 1 },
    stackRotate: 7,
    target: { x: 38, y: 3, rotate: 0, scale: s(4), w: 17, h: 28 },
    targetSm: { x: -25, y: 22 },
    z: 6,
  },
  // 6. Bottom-Left: Tech Innovation & Science Honors (img03)
  {
    item: {
      src: "/images/ansh-award-green.png",
      alt: "Tech Innovation & Science Exhibition Honors",
    },
    stackOffset: { x: -6, y: 10 },
    stackRotate: 6,
    target: { x: -28, y: 35, rotate: 0, scale: s(3), w: 20, h: 24 },
    targetSm: { x: 25, y: 22 },
    z: 7,
  },
  // 7. Bottom-Center: Tekathon 5.0 Stage Felicitation Ceremony (img02)
  {
    item: {
      src: "/images/ansh-tekathon-stage.jpg",
      alt: "Tekathon 5.0 • Stage Felicitation Ceremony",
    },
    stackOffset: { x: 8, y: 7 },
    stackRotate: 3,
    target: { x: 2, y: 36, rotate: 0, scale: s(2), w: 20, h: 23 },
    targetSm: { x: -25, y: 42 },
    z: 8,
  },
  // 8. Bottom-Right: Ansh Choudhary Portrait (img01)
  {
    item: {
      src: "/images/ansh-casual-portrait.jpg",
      alt: "Ansh Choudhary • Software Engineering",
    },
    stackOffset: { x: 20, y: 12 },
    stackRotate: -8,
    target: { x: 33, y: 35, rotate: 0, scale: s(1), w: 17, h: 22 },
    targetSm: { x: 25, y: 42 },
    z: 9,
  },
];

// ---------------------------------------------------------------------------
// Mechanism
// ---------------------------------------------------------------------------

const SCATTER_START = 0.12;
const SCATTER_END = 0.88;

const PARALLAX_X = 2.4;
const PARALLAX_Y = 2.0;
const PARALLAX_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };
const parallaxDepth = (i: number, total: number) =>
  total <= 1 ? 1 : 0.55 + (i / (total - 1)) * 0.75;

const RESPONSIVE = {
  desktop: {
    scale: null as number | null,
    small: false,
    colX: null as number | null,
    card: null as { w: number; h: number } | null,
  },
  small: {
    scale: 0.72,
    small: true,
    colX: 25,
    card: { w: 40, h: 20 },
  },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);
  return r;
}

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) return;

    if (!active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const onMove = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1);
      rawY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [active, enabled, rawX, rawY]);

  return { x, y };
}

export interface StackSpreadItem {
  src: string;
  alt?: string;
}

export interface StackSpreadTarget {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  w: number;
  h: number;
}

export interface StackSpreadCard {
  item: StackSpreadItem;
  target: StackSpreadTarget;
  /** final x/y (vw/vh) for tablet + mobile; falls back to `target` */
  targetSm?: { x: number; y: number };
  /** angle while clustered */
  stackRotate?: number;
  /** offset while clustered (vw/vh) */
  stackOffset?: { x: number; y: number };
  /** paint order, higher on top */
  z?: number;
}

function Card({
  card,
  progress,
  reduce,
  clusterRotation,
  scaleMul,
  isSmall,
  colX,
  fixedCard,
  stackScale,
  cardRadius,
  pointer,
  depth,
}: {
  card: StackSpreadCard;
  progress: MotionValue<number>;
  reduce: boolean | null;
  clusterRotation: boolean;
  scaleMul: number | null;
  isSmall: boolean;
  colX: number | null;
  fixedCard: { w: number; h: number } | null;
  stackScale: number;
  cardRadius: number;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  depth: number;
}) {
  const { item, target } = card;

  const flat = reduce === true;
  const stackRotate = flat ? 0 : clusterRotation ? card.stackRotate ?? 0 : 0;
  const stackOffset = card.stackOffset ?? { x: 0, y: 0 };
  const restScale = scaleMul ?? target.scale ?? 1;

  // Final resting spot
  const sm = isSmall && card.targetSm ? card.targetSm : null;
  const endX = sm
    ? colX != null
      ? Math.sign(sm.x) * colX
      : sm.x
    : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate;

  const translate = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, px, py]: number[]) => {
      const tx = stackOffset.x + (endX - stackOffset.x) * p;
      const ty = stackOffset.y + (endY - stackOffset.y) * p;
      const drift = depth * p;
      const dx = tx - px * PARALLAX_X * drift;
      const dy = ty - py * PARALLAX_Y * drift;
      return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
    },
  );
  const rotate = useTransform(progress, [0, 1], [stackRotate, endRotate]);
  const scale = useTransform(progress, [0, 1], [stackScale, restScale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform pointer-events-auto"
      style={{
        width: `${fixedCard ? fixedCard.w : target.w}vw`,
        height: `${fixedCard ? fixedCard.h : target.h}vh`,
        zIndex: card.z ?? 1,
        translate,
        rotate,
        scale,
      }}
    >
      <CardFace item={item} cardRadius={cardRadius} />
    </motion.div>
  );
}

function CardFace({
  item,
  cardRadius,
}: {
  item: StackSpreadItem;
  cardRadius: number;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden max-md:rounded-[3vw] border border-white/20 bg-[#000000] shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#6C8CFF]/60 hover:shadow-[0_20px_50px_rgba(108,140,255,0.2)]"
      style={{ borderRadius: `${cardRadius}px` }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover select-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
      {item.alt && (
        <div className="absolute bottom-2 left-2 right-2 text-left pointer-events-none">
          <p className="text-[10px] sm:text-xs font-mono font-medium text-white drop-shadow truncate">
            {item.alt}
          </p>
        </div>
      )}
    </div>
  );
}

export interface StackSpreadProps {
  cards?: StackSpreadCard[];
  /** scatter scroll distance, in vh */
  scrollLength?: number;
  bgColor?: string;
  clusterRotation?: boolean;
  stackScale?: number;
  cardRadius?: number;
  textColor?: string;
  textFadeStart?: number;
  showScrollHint?: boolean;
}

export default function StackSpread({
  cards = PORTFOLIO_CARDS,
  scrollLength = 340,
  bgColor = "#000000",
  clusterRotation = true,
  stackScale = 0.84,
  cardRadius = 12,
  textColor = "#FFFFFF",
  textFadeStart = 0.3,
  showScrollHint = true,
}: StackSpreadProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scale: scaleMul, small: isSmall, colX, card: fixedCard } =
    useResponsive();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // Hold briefly, scatter outward, then settle into final positions
  const progress = useTransform(
    scrollYProgress,
    [0, SCATTER_START, SCATTER_END, 1],
    [0, 0, 1, 1],
  );

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => {
    setSpread((was) => (was ? p > 0.985 : p >= 0.995));
  });
  const parallaxEnabled = reduce !== true && !isSmall;
  const pointer = usePointerParallax(spread, parallaxEnabled);

  const noScale = reduce === true;
  // Center text reveals as images scatter outward
  const copyOpacity = useTransform(progress, [textFadeStart, textFadeStart + 0.3], [0, 1]);
  const copyScale = useTransform(progress, [textFadeStart, 0.9], [0.88, 1]);

  // Scroll hint: visible initially while clustered, fades as scatter begins
  const hintOpacity = useTransform(progress, [0, SCATTER_START], [1, 0]);

  // Smooth scroll handler that offsets fixed navbar
  const handleSmoothScroll = useCallback((targetId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const el = document.getElementById(targetId);
    if (el) {
      const navbarHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={wrapRef}
      className="relative w-full"
      style={{ height: `${scrollLength}vh`, backgroundColor: bgColor }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-transparent">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,140,255,0.08)_0,transparent_70%)] pointer-events-none" />

        {/* Eight Scattering Cards (Pile -> Outward Spread) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              progress={progress}
              reduce={reduce}
              clusterRotation={clusterRotation}
              scaleMul={scaleMul}
              isSmall={isSmall}
              colX={colX}
              fixedCard={fixedCard}
              stackScale={stackScale}
              cardRadius={cardRadius}
              pointer={pointer}
              depth={parallaxEnabled ? parallaxDepth(i, cards.length) : 0}
            />
          ))}
        </div>

        {/* Center Text Reveal — Positioned above cards (z-30) for full readability and clickability */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center max-md:px-8 max-w-4xl mx-auto"
          style={{
            opacity: copyOpacity,
            scale: noScale ? 1 : copyScale,
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C8CFF]/10 border border-[#6C8CFF]/30 text-[#6C8CFF] text-xs font-mono font-medium mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#6C8CFF] animate-pulse" />
            Computer Science Engineering Student • Chandigarh University
          </div>

          {/* Name Title */}
          <h1
            className="w-full text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-white uppercase select-none leading-none mb-4"
            style={{ color: textColor }}
          >
            ANSH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#6C8CFF]">
              CHOUDHARY
            </span>
          </h1>

          {/* Subtitle & Role */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-xl font-medium text-white mb-4">
            <span className="text-white">Aspiring Software Engineer</span>
            <span className="text-[#6C8CFF]">•</span>
            <span className="text-[#6C8CFF] font-mono">Java Developer</span>
          </div>

          {/* Personal Tagline */}
          <p className="max-w-2xl text-sm sm:text-lg text-zinc-200 font-normal leading-relaxed mb-6">
            "Building digital experiences that solve real problems."
          </p>

          {/* Quick Action Links on Scattered View */}
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll("projects", e)}
              className="px-6 py-3 rounded-xl bg-[#6C8CFF] hover:bg-[#587bf5] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#6C8CFF]/25 hover:shadow-[#6C8CFF]/40 transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6C8CFF] focus:ring-offset-2 focus:ring-offset-[#000000]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSmoothScroll("projects");
                }
              }}
            >
              Explore Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll("contact", e)}
              className="px-6 py-3 rounded-xl bg-[#000000] hover:bg-[#111111] text-white border border-white/20 hover:border-[#6C8CFF]/50 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6C8CFF] focus:ring-offset-2 focus:ring-offset-[#000000]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSmoothScroll("contact");
                }
              }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Scroll Hint: Initial state before scrolling */}
        {showScrollHint && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[4vh] z-20 flex flex-col items-center gap-[0.6vh] text-[0.8vw] font-medium uppercase tracking-[0.25em] max-md:bottom-6 max-md:gap-1 max-md:text-[2.8vw] text-slate-400"
            style={{ opacity: hintOpacity }}
          >
            <span className="font-mono text-[#6C8CFF] text-xs tracking-widest font-semibold">
              SCROLL TO EXPLORE
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce max-md:h-[4vw] max-md:w-[4vw] text-[#6C8CFF]"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
}
