"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "border-b border-white/8 bg-[#07080b]/82 backdrop-blur-xl"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="N Plus Solutions Inc. home"
        >
          <Image
            src="/brand/nplus-mark.svg"
            alt=""
            width={512}
            height={512}
            priority
            className="size-9 object-contain sm:size-10"
          />

          <Image
            src="/brand/nplus-wordmark.svg"
            alt="N Plus Solutions Inc."
            width={600}
            height={180}
            priority
            className="h-auto w-[108px] object-contain sm:w-[124px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/58 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white px-5 text-sm font-semibold text-[#0a0b0e] transition hover:scale-[1.02] hover:bg-white/90"
          >
            Start a conversation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-5 top-full z-40 mt-2 w-[min(82vw,320px)] origin-top-right overflow-hidden rounded-2xl border border-white/12 bg-[#101116]/82 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:right-8 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.035 }}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold tracking-[-0.02em] text-white/88 transition-colors hover:bg-white/[0.07] hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="text-sm font-normal text-white/28 transition-transform group-hover:translate-x-0.5 group-hover:text-white/60">
                    ↗
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
