import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "franchesco. — Software Engineer · Philippines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1a1818",
          display: "flex",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Left panel — fr/ mark */}
        <div
          style={{
            width: 420,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            borderRight: "1px solid #2a2a2a",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontWeight: 500,
              fontSize: 80,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#ffffff",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span>fr</span>
            <span style={{ opacity: 0.35 }}>/</span>
          </div>
        </div>

        {/* Right panel */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          {/* franchesco. */}
          <div
            style={{
              margin: "0 0 36px",
              fontWeight: 500,
              fontSize: 64,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "#ffffff",
            }}
          >
            franchesco.
          </div>

          {/* Software Engineer · Philippines */}
          <div
            style={{
              margin: "0 0 20px",
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: "0.01em",
              color: "#a5a5a2",
            }}
          >
            Software Engineer · Philippines
          </div>

          {/* Body copy */}
          <div
            style={{
              fontWeight: 400,
              fontSize: 24,
              lineHeight: 1.55,
              letterSpacing: "0.005em",
              color: "#858582",
              maxWidth: 500,
            }}
          >
            Building and improving production web applications for real businesses.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
