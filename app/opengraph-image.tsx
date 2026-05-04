import { ImageResponse } from "next/og";

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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, #0b1f3a 0%, #102a4d 60%, #16365f 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 700,
              color: "#052e16",
            }}
          >
            V
          </div>
          <div style={{ fontSize: "44px", fontWeight: 700 }}>Vector Systems</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: "58px", fontWeight: 800, lineHeight: 1.1 }}>
            We help businesses run properly.
          </div>
          <div style={{ fontSize: "34px", color: "#cbd5e1", fontWeight: 500 }}>
            Organize, Track and Grow.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
