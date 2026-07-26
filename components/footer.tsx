import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07080b]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/38">
              Strategy, technology, development, and practical execution for what comes next.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/45 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/8 pt-6 text-xs text-white/28">
          <p>© {new Date().getFullYear()} N Plus Solutions Inc.</p>
          <a href="#top" className="inline-flex items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
