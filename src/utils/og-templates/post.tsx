import satori from "satori";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@config";
import loadGoogleFonts, { type FontOptions } from "../loadGoogleFont";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const encodeSVGToBase64 = (imagePath: string) => {
  const absolutePath = path.join(__dirname, imagePath);
  const svgContent = fs.readFileSync(absolutePath, "utf-8");
  return Buffer.from(svgContent).toString("base64");
};

export default async (post: CollectionEntry<"blog">) => {
  return satori(
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #c6ffdd, #fbd786, #f7797d)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fefbfb",
          borderRadius: "24px",
          boxShadow: "0 0 10px 4px rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 3rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              // letterSpacing: "0.05em",
              lineHeight: 1.2,
              maxHeight: "70%",
              overflow: "hidden",
            }}
          >
            {post.data.title}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "8px",
              }}
            >
              <img
                src={`data:image/svg+xml;base64,${encodeSVGToBase64("../../../public/my-icon-min.svg")}`}
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#FF7F00",
                }}
              />
              <span>
                by
                <span
                  style={{
                    overflow: "hidden",
                    fontWeight: "bold",
                    marginLeft: "0.5em",
                  }}
                >
                  {post.data.author}
                </span>
              </span>
            </span>
            <span style={{ overflow: "hidden", fontWeight: "bold" }}>
              {new URL(SITE.website).hostname}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: (await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title + "by" + SITE.website
      )) as FontOptions[],
    }
  );
};
