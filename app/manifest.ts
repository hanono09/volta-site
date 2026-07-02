import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Volta — Agencia de Automatización con IA",
    short_name: "Volta",
    description: "Construimos los sistemas que hacen funcionar tu negocio mientras dormís.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0D",
    theme_color: "#0A0A0D",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
