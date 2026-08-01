import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const alt = "Ahiver — Discover businesses near you";
export const size = { width: 1200, height: 630 };

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0D1020",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#FF7A6F",
          }}
        >
          Ahiver
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "white",
              maxWidth: 1000,
            }}
          >
            Discover businesses{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#FF7A6F",
              }}
            >
              near you.
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.4,
              maxWidth: 820,
            }}
          >
            The local marketplace for Nigeria. Shops, kitchens, artisans, makers.
          </div>
        </div>

        {/* Bottom: domain + N mark */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: 1,
            }}
          >
            ahiver.com
          </div>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              background: "linear-gradient(135deg,#3B82F6,#1D4ED8)",
              fontSize: 28,
              fontWeight: 900,
              color: "white",
            }}
          >
            N
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
