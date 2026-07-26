import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "N Plus Solutions Inc. — Building What Comes Next";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "radial-gradient(circle at 20% 10%, #5b21b6 0%, #111827 36%, #07080b 72%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 66,
              height: 66,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              background: "rgba(255,255,255,.08)",
            }}
          >
            N+
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>N PLUS</div>
            <div style={{ marginTop: 4, fontSize: 12, letterSpacing: 5, opacity: 0.55 }}>SOLUTIONS INC.</div>
          </div>
        </div>
        <div>
          <div style={{ maxWidth: 920, fontSize: 82, lineHeight: 0.95, fontWeight: 700, letterSpacing: -5 }}>Building what comes next.</div>
          <div style={{ marginTop: 30, fontSize: 22, opacity: 0.58 }}>Next ideas. Plus solutions.</div>
        </div>
      </div>
    ),
    size,
  );
}
