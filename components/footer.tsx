import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/logo";
import { getNavigation } from "@/lib/site-data";
import {
  getSiteCopy,
  localizedHomeHref,
  type Locale,
} from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const navigation = getNavigation(locale);

  return (
    <footer className="border-t border-white/8 bg-[#07080b]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/52">
              {copy.footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={localizedHomeHref(locale, item.href)}
                className="text-sm text-white/52 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/8 pt-6 text-xs text-white/52">
          <p>© {new Date().getFullYear()} N Plus Solutions Inc.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            {copy.footer.backToTop} <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
