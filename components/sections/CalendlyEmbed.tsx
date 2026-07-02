"use client";

import { useEffect } from "react";

export function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/volta-automation/intro-call";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="card-surface overflow-hidden">
      <div
        className="calendly-inline-widget"
        data-url={`${url}?background_color=0a0a0d&text_color=f4f4f2&primary_color=6e6bff`}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
