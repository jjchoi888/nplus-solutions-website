import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="N Plus Solutions home">
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl border border-white/12 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,.55),transparent_55%)]" />
        <span className="relative text-[15px] font-black tracking-[-0.08em] text-white">N+</span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-[0.13em] text-white">N PLUS</span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.24em] text-white/46">SOLUTIONS INC.</span>
        </span>
      )}
    </Link>
  );
}
