import { ImageResponse } from "next/og";
export const alt = "Luis Dionicio — Desarrollador Full Stack en Lima, Perú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "65px 75px",
        background: "#111410",
        color: "#f4f5ef",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: 4 }}>
        LUIS DIONICIO · FULL STACK & MOBILE
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          fontWeight: 700,
          lineHeight: 1.08,
        }}
      >
        <div>De una idea a algo</div>
        <div style={{ color: "#c4f566" }}>que sí funciona.</div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#b7bcb1" }}>
        React · TypeScript · Node.js · Kotlin / Lima, Perú
      </div>
    </div>,
    size,
  );
}
