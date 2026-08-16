"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getSiteCopy, type Locale } from "@/lib/i18n";
import { getProjectMediaAlt } from "@/lib/project-media-alt";

const projectImages: Record<string, string[]> = {
  pawcircle: [
    "/projects/pawcircle/paw1.webp",
    "/projects/pawcircle/paw2.webp",
  ],
  paynplus: [
    "/projects/paynplus/pgmain.webp",
    "/projects/paynplus/pgaccept.webp",
    "/projects/paynplus/pgindustry.webp",
    "/projects/paynplus/pgmerchant.webp",
    "/projects/paynplus/pgpartner.webp",
    "/projects/paynplus/pgqr.webp",
    "/projects/paynplus/pgwhy.webp",
    "/projects/paynplus/pgadmin.webp",
  ],
  tableorder: [
    "/projects/tableorder/orderhome.webp",
    "/projects/tableorder/orderentrance.webp",
    "/projects/tableorder/ordermenu.webp",
    "/projects/tableorder/ordercart.webp",
    "/projects/tableorder/orderpayselect.webp",
    "/projects/tableorder/orderpaypr.webp",
    "/projects/tableorder/ordercallstff.webp",
    "/projects/tableorder/ordergeneral.webp",
    "/projects/tableorder/orderfinance.webp",
    "/projects/tableorder/orderhr.webp",
  ],
  hotelnplus: [
    "/projects/hotelnplus/pmsmain.webp",
    "/projects/hotelnplus/pmsdashboard.webp",
    "/projects/hotelnplus/pmsfront.webp",
    "/projects/hotelnplus/pmschckin.webp",
    "/projects/hotelnplus/pmsinventory.webp",
    "/projects/hotelnplus/pmsevent.webp",
    "/projects/hotelnplus/pmsfinance.webp",
    "/projects/hotelnplus/pmstv.webp",
  ],
};

export function hasProjectMedia(slug: string) {
  return Boolean(projectImages[slug]?.length);
}

export function ProjectMediaSlider({
  slug,
  title,
  locale,
  large = false,
}: {
  slug: string;
  title: string;
  locale: Locale;
  large?: boolean;
}) {
  const images = projectImages[slug] ?? [];
  const copy = getSiteCopy(locale).projectPage;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (images.length < 2 || paused) return;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [images.length, paused]);

  if (images.length === 0) {
    return null;
  }

  const previous = () =>
    setIndex((value) => (value - 1 + images.length) % images.length);

  const next = () =>
    setIndex((value) => (value + 1) % images.length);

  return (
    <div
      className={`group/slider relative overflow-hidden bg-[#07090d] ${
        large ? "min-h-[460px] rounded-[2rem]" : "aspect-[16/11]"
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const end = event.changedTouches[0]?.clientX;

        if (start !== null && end !== undefined) {
          const distance = end - start;

          if (Math.abs(distance) > 45) {
            if (distance > 0) previous();
            else next();
          }
        }

        touchStart.current = null;
        setPaused(false);
      }}
      aria-label={`${title} image slideshow`}
    >
      <div
        className={`absolute overflow-hidden border border-white/12 bg-[#0b0d12] ${
          large
            ? "inset-4 rounded-[1.55rem] sm:inset-6"
            : "inset-4 rounded-[1.15rem]"
        }`}
      >
        {images.map((src, imageIndex) => (
          <div
            key={src}
            className={`absolute inset-3 transition-opacity duration-700 ${
              imageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={getProjectMediaAlt(locale, slug, title, imageIndex)}
              fill
              sizes={
                large
                  ? "(min-width: 1024px) 50vw, 100vw"
                  : "(min-width: 1280px) 42vw, (min-width: 768px) 50vw, 100vw"
              }
              className="object-contain"
              draggable={false}
              priority={large && imageIndex === 0}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/5" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label={copy.previousSlide}
            className="absolute left-5 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-black/55 text-white/78 opacity-0 backdrop-blur-md transition hover:bg-black/80 hover:text-white group-hover/slider:opacity-100 focus:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={copy.nextSlide}
            className="absolute right-5 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-black/55 text-white/78 opacity-0 backdrop-blur-md transition hover:bg-black/80 hover:text-white group-hover/slider:opacity-100 focus:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-1.5 px-4">
            {images.map((src, dotIndex) => (
              <button
                type="button"
                key={src}
                aria-label={`${dotIndex + 1} / ${images.length}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-1.5 rounded-full shadow-sm transition-all ${
                  dotIndex === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="absolute right-6 top-6 z-20 rounded-full border border-white/10 bg-black/48 px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] text-white/65 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>
        </>
      )}
    </div>
  );
}
