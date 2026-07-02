import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PanelClient } from "@/components/panel/PanelClient";

export const metadata: Metadata = buildMetadata({
  title: "Panel de Prospección",
  description: "Panel interno de seguimiento de prospectos de Volta.",
  path: "/panel",
  noIndex: true,
});

export default function PanelPage() {
  return <PanelClient />;
}
