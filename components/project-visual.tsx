import type { Project } from "@/lib/site-data";

const accentMap = {
  violet: {
    glow: "from-violet-500/35 via-fuchsia-500/15 to-transparent",
    line: "stroke-violet-200",
    soft: "fill-violet-300/20",
  },
  blue: {
    glow: "from-blue-500/35 via-indigo-500/15 to-transparent",
    line: "stroke-blue-200",
    soft: "fill-blue-300/20",
  },
  cyan: {
    glow: "from-cyan-500/35 via-sky-500/15 to-transparent",
    line: "stroke-cyan-100",
    soft: "fill-cyan-300/20",
  },
  orange: {
    glow: "from-orange-500/35 via-amber-500/15 to-transparent",
    line: "stroke-orange-100",
    soft: "fill-orange-300/20",
  },
  green: {
    glow: "from-emerald-500/35 via-lime-500/15 to-transparent",
    line: "stroke-emerald-100",
    soft: "fill-emerald-300/20",
  },
};

export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const styles = accentMap[project.accent];
  const common = `${styles.line} fill-none stroke-[1.35]`;

  return (
    <div
      className={`relative overflow-hidden bg-[#0d0f14] ${
        large ? "min-h-[440px] rounded-[2rem]" : "aspect-[16/11]"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.glow}`} />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/62 backdrop-blur-md">
        N+ / {project.number}
      </div>

      <svg
        viewBox="0 0 600 420"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`${project.title} abstract project graphic`}
      >
        {project.slug === "atlas" && (
          <>
            <circle cx="300" cy="210" r="66" className={`${common} ${styles.soft}`} />
            <circle cx="300" cy="210" r="32" className={common} />
            <circle cx="145" cy="120" r="34" className={common} />
            <circle cx="455" cy="120" r="34" className={common} />
            <circle cx="130" cy="305" r="34" className={common} />
            <circle cx="470" cy="305" r="34" className={common} />
            <circle cx="300" cy="350" r="28" className={common} />
            <path d="M178 139 247 181M422 139 353 181M160 280 246 235M440 280 354 235M300 276v46" className={common} />
            <path d="M145 86c86-45 224-45 310 0M105 334c102 56 288 56 390 0" className={`${common} opacity-35`} />
            <path d="M232 210h136M300 142v136" className={`${common} opacity-55`} />
          </>
        )}

        {project.slug === "pawcircle" && (
          <>
            <circle cx="300" cy="230" r="75" className={`${common} ${styles.soft}`} />
            <circle cx="210" cy="135" r="38" className={common} />
            <circle cx="285" cy="103" r="38" className={common} />
            <circle cx="365" cy="120" r="38" className={common} />
            <circle cx="418" cy="185" r="38" className={common} />
            <path d="M232 275c35-66 102-85 155-23 21 25 13 58-17 72-46 22-80 24-127 2-23-11-25-31-11-51Z" className={common} />
            <path d="M118 330c120-45 252-53 370 4" className={`${common} opacity-40`} />
          </>
        )}

        {project.slug === "paynplus" && (
          <>
            <rect x="120" y="85" width="360" height="250" rx="32" className={`${common} ${styles.soft}`} />
            <path d="M120 160h360" className={common} />
            <rect x="165" y="210" width="105" height="18" rx="9" className={common} />
            <rect x="165" y="250" width="170" height="12" rx="6" className={`${common} opacity-55`} />
            <circle cx="405" cy="255" r="46" className={common} />
            <path d="M387 255h36M405 237v36" className={common} />
            <path d="M92 110 60 78M508 110l32-32M92 312l-32 32M508 312l32 32" className={`${common} opacity-35`} />
          </>
        )}

        {project.slug === "hotelnplus" && (
          <>
            <path d="M145 335V110h310v225M110 335h380" className={common} />
            <path d="M185 110V70h230v40" className={common} />
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3, 4].map((column) => (
                <rect
                  key={`${row}-${column}`}
                  x={182 + column * 55}
                  y={145 + row * 42}
                  width="25"
                  height="21"
                  rx="4"
                  className={`${common} ${
                    row === 1 && column === 2 ? styles.soft : ""
                  }`}
                />
              )),
            )}
            <path d="M265 335v-65h70v65" className={common} />
            <circle cx="300" cy="91" r="9" className={common} />
          </>
        )}

        {project.slug === "mountain-bike-tourism-complex" && (
          <>
            <path d="M40 330 185 130l78 98 80-120 217 222Z" className={`${common} ${styles.soft}`} />
            <path d="M40 330 185 130l78 98 80-120 217 222" className={common} />
            <path d="M95 332c84-17 133-76 206-71 78 5 105 70 198 69" className={`${common} stroke-[3]`} />
            <circle cx="260" cy="252" r="31" className={common} />
            <circle cx="354" cy="252" r="31" className={common} />
            <path d="m260 252 38-57 56 57-49-7-28-38h63" className={common} />
            <circle cx="310" cy="172" r="10" className={common} />
            <path d="m307 183-14 26 30 17 17-34M294 209l-24-8M340 192l22 12" className={common} />
          </>
        )}

        {project.slug === "mountain-resort-complex" && (
          <>
            <path d="M30 330 150 165l72 83 94-145 119 150 61-78 74 155Z" className={`${common} ${styles.soft}`} />
            <path d="M30 330 150 165l72 83 94-145 119 150 61-78 74 155" className={common} />
            <path d="M165 330v-88l72-52 72 52v88" className={common} />
            <path d="M191 330v-62h92v62M218 268v62" className={common} />
            <path d="M148 242h178" className={`${common} opacity-55`} />
            <path d="M370 330v-67l55-42 55 42v67" className={common} />
            <path d="M393 330v-45h64v45" className={common} />
            <path d="M100 259l32-52 32 52M108 282l24-41 24 41" className={common} />
            <circle cx="300" cy="92" r="24" className={`${common} opacity-55`} />
          </>
        )}


      </svg>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d0f14] to-transparent" />
    </div>
  );
}
