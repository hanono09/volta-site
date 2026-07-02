"use client";

import { motion } from "framer-motion";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  primary?: boolean;
};

const nodes: Node[] = [
  { id: "lead", label: "New lead", x: 40, y: 200 },
  { id: "agent", label: "AI agent", x: 230, y: 200, primary: true },
  { id: "crm", label: "CRM", x: 430, y: 80 },
  { id: "whatsapp", label: "WhatsApp", x: 430, y: 200 },
  { id: "calendar", label: "Calendar", x: 430, y: 320 },
  { id: "dashboard", label: "Dashboard", x: 630, y: 200 },
];

const connectors: [string, string][] = [
  ["lead", "agent"],
  ["agent", "crm"],
  ["agent", "whatsapp"],
  ["agent", "calendar"],
  ["crm", "dashboard"],
  ["whatsapp", "dashboard"],
  ["calendar", "dashboard"],
];

function find(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function NodeGraph() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <svg
        viewBox="0 0 680 400"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* connectors */}
        {connectors.map(([fromId, toId], i) => {
          const from = find(fromId);
          const to = find(toId);
          const midX = (from.x + to.x) / 2;
          const d = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
          return (
            <g key={i}>
              <path d={d} stroke="#1A1A21" strokeWidth="1.5" />
              <path
                d={d}
                stroke="#6E6BFF"
                strokeWidth="1.5"
                strokeDasharray="3 9"
                strokeLinecap="round"
                opacity="0.8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="120"
                  to="0"
                  dur={`${2.4 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          );
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.primary ? 30 : 22}
              fill={n.primary ? "#6E6BFF" : "#131318"}
              stroke={n.primary ? "#ABA8FF" : "#2E2E36"}
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            />
            {n.primary && (
              <circle cx={n.x} cy={n.y} r="30" fill="none" stroke="#6E6BFF" strokeWidth="1">
                <animate
                  attributeName="r"
                  values="30;42;30"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <text
              x={n.x}
              y={n.y + (n.primary ? 50 : 42)}
              textAnchor="middle"
              fontSize="12"
              fontFamily="var(--font-geist-mono), monospace"
              fill={n.primary ? "#F4F4F2" : "#93939D"}
              letterSpacing="0.02em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
