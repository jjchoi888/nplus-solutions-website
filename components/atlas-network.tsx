import {
  BrainCircuit,
  Database,
  Network,
  PlugZap,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

const nodes = [
  {
    label: "AI",
    detail: "Intelligence",
    icon: BrainCircuit,
    className: "left-0 top-[8%]",
  },
  {
    label: "DATA",
    detail: "Shared context",
    icon: Database,
    className: "right-0 top-[8%]",
  },
  {
    label: "APIs",
    detail: "Connectors",
    icon: PlugZap,
    className: "left-0 bottom-[8%]",
  },
  {
    label: "KNOWLEDGE",
    detail: "Search & context",
    icon: Waypoints,
    className: "right-0 bottom-[8%]",
  },
];

export function AtlasNetwork() {
  return (
    <div className="relative mt-10 min-h-[300px] sm:mt-12 sm:min-h-[340px]">
      <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200/25 to-transparent" />
      <div className="absolute bottom-[12%] left-1/2 top-[12%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200/25 to-transparent" />

      <svg
        viewBox="0 0 480 320"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="atlasLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(147,197,253,0.08)" />
            <stop offset="50%" stopColor="rgba(191,219,254,0.32)" />
            <stop offset="100%" stopColor="rgba(196,181,253,0.08)" />
          </linearGradient>
        </defs>

        <path d="M118 76 C178 92 196 122 240 160" stroke="url(#atlasLine)" strokeWidth="1.25" fill="none" />
        <path d="M362 76 C302 92 284 122 240 160" stroke="url(#atlasLine)" strokeWidth="1.25" fill="none" />
        <path d="M118 244 C178 228 196 198 240 160" stroke="url(#atlasLine)" strokeWidth="1.25" fill="none" />
        <path d="M362 244 C302 228 284 198 240 160" stroke="url(#atlasLine)" strokeWidth="1.25" fill="none" />

        <circle cx="240" cy="160" r="82" stroke="rgba(147,197,253,0.10)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
        <circle cx="240" cy="160" r="112" stroke="rgba(196,181,253,0.07)" strokeWidth="1" fill="none" strokeDasharray="2 10" />

        <circle cx="240" cy="78" r="3" fill="rgba(191,219,254,0.55)" />
        <circle cx="322" cy="160" r="3" fill="rgba(191,219,254,0.55)" />
        <circle cx="240" cy="242" r="3" fill="rgba(191,219,254,0.55)" />
        <circle cx="158" cy="160" r="3" fill="rgba(191,219,254,0.55)" />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[-32px] rounded-full bg-blue-400/10 blur-2xl" />
        <div className="relative grid size-32 place-items-center rounded-full border border-blue-200/25 bg-[#0b111c]/95 shadow-[0_0_80px_rgba(96,165,250,0.10)] sm:size-36">
          <div className="absolute inset-2 rounded-full border border-white/[0.05]" />
          <div className="text-center">
            <Network size={22} className="mx-auto mb-3 text-blue-200/65" />
            <p className="text-sm font-semibold tracking-[0.22em] text-white">
              ATLAS
            </p>
            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/28">
              N Plus Core
            </p>
          </div>
        </div>
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute z-20 ${node.className} w-[118px] rounded-2xl border border-white/10 bg-[#0b0e14]/88 p-3 backdrop-blur-md sm:w-[138px] sm:p-4`}
        >
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-100/65">
              <node.icon size={15} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[9px] font-semibold tracking-[0.16em] text-white/68">
                {node.label}
              </p>
              <p className="mt-1 truncate text-[8px] text-white/28">
                {node.detail}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0e14] px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/36">
          <ShieldCheck size={13} className="text-violet-200/60" />
          Governed connection layer
        </div>
      </div>

      <span className="absolute left-1/2 top-[8%] size-1.5 -translate-x-1/2 rounded-full bg-blue-200/55 shadow-[0_0_18px_rgba(191,219,254,.55)] animate-pulse" />
      <span className="absolute bottom-[8%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-violet-200/50 shadow-[0_0_18px_rgba(221,214,254,.45)] animate-pulse" />
    </div>
  );
}
