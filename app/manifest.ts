import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Volta — AI Automation Agency",
    short_name: "Volta",
    description: "We build the systems that run your business while you sleep.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0D",
    theme_color: "#0A0A0D",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
