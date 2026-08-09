"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getNavigation } from "@/lib/site-data";
import {
  getSiteCopy,
  languageOptions,
  localizedHomeHref,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const copy = getSiteCopy(locale);
  const navigation = getNavigation(locale);

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
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[#07080b]/82 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={localizedHomeHref(locale)}
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
          className="hidden items-center gap-6 xl:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={localizedHomeHref(locale, item.href)}
              className="whitespace-nowrap text-sm font-medium text-white/58 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div
            className="flex items-center rounded-full border border-white/10 bg-white/[0.035] p-1"
            aria-label={copy.header.language}
          >
            {languageOptions.map((option) => (
              <Link
                key={option.locale}
                href={switchLocalePath(pathname, option.locale)}
                className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition ${
                  option.locale === locale
                    ? "bg-white text-black"
                    : "text-white/42 hover:text-white"
                }`}
                aria-current={option.locale === locale ? "page" : undefined}
                title={option.label}
              >
                {option.shortLabel}
              </Link>
            ))}
          </div>

          <a
            href={localizedHomeHref(locale, "#contact")}
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white px-5 text-sm font-semibold text-[#0a0b0e] transition hover:scale-[1.02] hover:bg-white/90"
          >
            {copy.header.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white xl:hidden"
          aria-label={
            open ? copy.header.closeNavigation : copy.header.openNavigation
          }
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
            className="absolute right-5 top-full z-40 mt-2 w-[min(86vw,340px)] origin-top-right overflow-hidden rounded-2xl border border-white/12 bg-[#101116]/88 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:right-8 xl:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={localizedHomeHref(locale, item.href)}
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

            <div className="mt-2 border-t border-white/8 p-2">
              <p className="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/28">
                {copy.header.language}
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {languageOptions.map((option) => (
                  <Link
                    key={option.locale}
                    href={switchLocalePath(pathname, option.locale)}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-2 py-2.5 text-center text-xs font-semibold transition ${
                      option.locale === locale
                        ? "bg-white text-black"
                        : "bg-white/[0.04] text-white/52 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {option.shortLabel}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
