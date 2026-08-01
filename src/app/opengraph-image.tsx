import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #09111f 0%, #0f172a 42%, #111827 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 20%, rgba(59,130,246,0.28), transparent 28%), radial-gradient(circle at 82% 18%, rgba(20,184,166,0.2), transparent 24%), radial-gradient(circle at 50% 88%, rgba(59,130,246,0.12), transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "48px",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 32,
            background: "rgba(15, 23, 42, 0.45)",
            backdropFilter: "blur(18px)",
          }}
        />
        <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", padding: 72, alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 740 }}>
            <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "#cbd5e1",
                fontSize: 24,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
                {siteConfig.name}
              </div>
              <div style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.1, color: "#cbd5e1" }}>
                {siteConfig.siteName}
              </div>
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.45, color: "#94a3b8", maxWidth: 620 }}>
              AI-powered products, recruiter-friendly case studies, and a clean design language inspired by modern product teams.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-end",
              marginBottom: 8,
            }}
          >
            <div style={{ fontSize: 22, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 4 }}>Rishi Chaudhari</div>
            <div style={{ width: 160, height: 4, borderRadius: 999, background: "linear-gradient(90deg, #38bdf8 0%, #2dd4bf 100%)" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
