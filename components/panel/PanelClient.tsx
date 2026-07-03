"use client";

import { useState, useMemo } from "react";
import { prospectos, infoWeb, Estado } from "@/lib/prospectos-data";
import { CallScript } from "@/components/panel/CallScript";
import { ProposalDoc } from "@/components/panel/ProposalDoc";
import { ContractDoc } from "@/components/panel/ContractDoc";

type Tab = "prospectos" | "guion" | "infoweb" | "documentos" | "resumen";

const TABS: { id: Tab; label: string }[] = [
  { id: "prospectos", label: "Prospectos" },
  { id: "guion", label: "Guión de Llamada" },
  { id: "infoweb", label: "Info para la Web" },
  { id: "documentos", label: "Documentos" },
  { id: "resumen", label: "Resumen" },
];

const ESTADOS: Estado[] = [
  "Nuevo",
  "Contactado",
  "Interesado",
  "En negociación",
  "Cliente",
  "No interesa",
  "No contesta",
];

const ESTADO_STYLE: Record<Estado, string> = {
  Nuevo: "bg-bone-muted/15 text-bone-muted",
  Contactado: "bg-volt-500/15 text-volt-300",
  Interesado: "bg-amber-400/15 text-amber-300",
  "En negociación": "bg-orange-400/15 text-orange-300",
  Cliente: "bg-mint/15 text-mint",
  "No interesa": "bg-red-400/15 text-red-300",
  "No contesta": "bg-red-400/15 text-red-300",
};

function fmtDate(d: string) {
  if (!d) return "—";
  const [y, m, day] = d.split("-");
  return y && m && day ? `${day}/${m}/${y}` : d;
}

export function PanelClient() {
  const [tab, setTab] = useState<Tab>("prospectos");
  const [search, setSearch] = useState("");
  const [docView, setDocView] = useState<null | "propuesta" | "contrato">(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return prospectos;
    return prospectos.filter((p) =>
      `${p.nombre} ${p.rubro} ${p.zona}`.toLowerCase().includes(q)
    );
  }, [search]);

  const counts = useMemo(() => {
    const base: Record<Estado, number> = {
      Nuevo: 0,
      Contactado: 0,
      Interesado: 0,
      "En negociación": 0,
      Cliente: 0,
      "No interesa": 0,
      "No contesta": 0,
    };
    prospectos.forEach((p) => {
      base[p.estado] = (base[p.estado] || 0) + 1;
    });
    return base;
  }, []);

  const sinWeb = prospectos.filter((p) => p.tieneSitio === "No").length;

  return (
    <div className="min-h-screen bg-ink-900">
      <header className="sticky top-0 z-30 border-b border-ink-700 bg-ink-900/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-2 text-base font-semibold text-bone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
                fill="#6E6BFF"
                stroke="#6E6BFF"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
            Volta — Panel de Prospección
          </div>
          <nav className="flex gap-1 rounded-full border border-ink-600 bg-ink-800 p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  tab === t.id
                    ? "bg-volt-500 text-white"
                    : "text-bone-muted hover:text-bone"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8">
        {tab === "prospectos" && (
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-bone">Prospectos</h1>
            <p className="mt-2 mb-6 text-sm text-bone-muted">
              Negocios encontrados sin sitio web. Esta lista la actualiza Claude cada vez
              que le pasás datos nuevos por el chat.
            </p>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, rubro o zona…"
              className="mb-5 w-full max-w-sm rounded-lg border border-ink-600 bg-ink-800 px-4 py-2.5 text-sm text-bone placeholder:text-bone-dim focus:border-volt-400 focus:outline-none"
            />

            {filtered.length === 0 ? (
              <div className="rounded-xl border border-ink-600 bg-ink-800 p-10 text-center text-sm text-bone-dim">
                No hay prospectos que coincidan con la búsqueda.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-ink-600">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink-600 bg-ink-800 text-[11px] uppercase tracking-wider text-bone-dim">
                      <th className="px-4 py-3 font-semibold">Negocio</th>
                      <th className="px-4 py-3 font-semibold">Teléfono</th>
                      <th className="px-4 py-3 font-semibold">Sitio web</th>
                      <th className="px-4 py-3 font-semibold">Estado</th>
                      <th className="px-4 py-3 font-semibold">Próx. seguimiento</th>
                      <th className="px-4 py-3 font-semibold">Notas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-700">
                    {filtered.map((p) => (
                      <tr key={p.id} className="bg-ink-800/40 hover:bg-ink-700/60">
                        <td className="px-4 py-3 align-top">
                          <p className="font-medium text-bone">{p.nombre}</p>
                          <p className="mt-0.5 text-xs text-bone-dim">
                            {p.rubro} · {p.zona}
                          </p>
                        </td>
                        <td className="px-4 py-3 align-top text-bone-muted">{p.telefono || "—"}</td>
                        <td className="px-4 py-3 align-top">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                              p.tieneSitio === "Sí"
                                ? "bg-mint/15 text-mint"
                                : "bg-red-400/15 text-red-300"
                            }`}
                          >
                            {p.tieneSitio === "Sí" ? "Tiene web" : "Sin web"}
                          </span>
                        </td>
                        <td className="px-4 py-3 align-top">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${ESTADO_STYLE[p.estado]}`}
                          >
                            {p.estado}
                          </span>
                        </td>
                        <td className="px-4 py-3 align-top text-bone-muted">
                          {fmtDate(p.proximoSeguimiento)}
                        </td>
                        <td className="max-w-xs px-4 py-3 align-top text-bone-muted">
                          {p.notas || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === "guion" && <CallScript />}

        {tab === "infoweb" && (
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-bone">Info para la Web</h1>
            <p className="mt-2 mb-6 text-sm text-bone-muted">
              El contenido de cada cliente confirmado — todo lo necesario para construirle
              el sitio sin volver a llamarlo.
            </p>

            {infoWeb.length === 0 ? (
              <div className="rounded-xl border border-ink-600 bg-ink-800 p-10 text-center text-sm text-bone-dim">
                Todavía no hay ningún cliente confirmado acá. Cuando alguien te diga que
                sí, pasale los datos a Claude y aparece en esta lista.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {infoWeb.map((c) => (
                  <div key={c.id} className="rounded-xl border border-ink-600 bg-ink-800 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-volt-300">
                      {c.rubro}
                    </p>
                    <h3 className="mt-1 text-base font-medium text-bone">{c.nombre}</h3>
                    <p className="mt-2 text-sm text-bone-muted">{c.descripcion || "Sin descripción."}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "documentos" && docView === null && (
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-bone">Documentos</h1>
            <p className="mt-2 mb-6 text-sm text-bone-muted">
              Plantillas listas para leer acá mismo o descargar y completar con los datos de cada cliente.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DocCard
                title="Propuesta Comercial"
                description="El desafío, la solución, cronograma en tabla, inversión y próximos pasos. Se envía después de la llamada de descubrimiento."
                href="/docs/propuesta-comercial-volta.docx"
                onRead={() => setDocView("propuesta")}
              />
              <DocCard
                title="Contrato de Prestación de Servicios"
                description="10 cláusulas: objeto, alcance, plazo, precio y pago, propiedad intelectual, confidencialidad, garantía, terminación y jurisdicción. Se envía cuando el cliente confirma la propuesta."
                href="/docs/contrato-servicio-volta.docx"
                onRead={() => setDocView("contrato")}
              />
            </div>

            <div className="mt-6 rounded-xl border border-ink-600 bg-ink-800 p-5 text-sm text-bone-muted">
              Los campos en <span className="italic text-volt-300">violeta y entre corchetes</span> (como{" "}
              <span className="italic text-volt-300">[Nombre del cliente]</span>) son los que se completan
              distinto en cada proyecto — el resto del texto queda fijo.
            </div>
          </div>
        )}

        {tab === "documentos" && docView !== null && (
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setDocView(null)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-muted hover:text-bone"
              >
                ← Volver a Documentos
              </button>
              <a
                href={
                  docView === "propuesta"
                    ? "/docs/propuesta-comercial-volta.docx"
                    : "/docs/contrato-servicio-volta.docx"
                }
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-bone transition-colors hover:border-volt-400 hover:text-volt-300"
              >
                Descargar .docx
              </a>
            </div>
            <div className="rounded-2xl border border-ink-600 bg-ink-900 p-6 sm:p-10">
              {docView === "propuesta" ? <ProposalDoc /> : <ContractDoc />}
            </div>
          </div>
        )}

        {tab === "resumen" && (
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-bone">Resumen</h1>
            <p className="mt-2 mb-6 text-sm text-bone-muted">
              Se actualiza solo con la lista de Prospectos.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              <StatCard label="Total de prospectos" value={prospectos.length} />
              <StatCard label="Sin sitio web" value={sinWeb} tone="red" />
              {ESTADOS.map((e) => (
                <StatCard key={e} label={e} value={counts[e]} tone={e === "Cliente" ? "mint" : "volt"} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function DocCard({
  title,
  description,
  href,
  onRead,
}: {
  title: string;
  description: string;
  href: string;
  onRead: () => void;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-ink-600 bg-ink-800 p-5">
      <h3 className="text-base font-medium text-bone">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={onRead}
          className="inline-flex items-center gap-2 rounded-full bg-bone px-4 py-2 text-xs font-medium text-ink-900 transition-colors hover:bg-volt-100"
        >
          Leer en la web
        </button>
        <a
          href={href}
          download
          className="inline-flex items-center gap-2 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-bone transition-colors hover:border-volt-400 hover:text-volt-300"
        >
          Descargar .docx
        </a>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: number;
  tone?: "default" | "volt" | "mint" | "red";
}) {
  const toneClass =
    tone === "volt" ? "text-volt-300" : tone === "mint" ? "text-mint" : tone === "red" ? "text-red-300" : "text-bone";
  return (
    <div className="rounded-xl border border-ink-600 bg-ink-800 p-5">
      <p className={`text-2xl font-semibold tracking-tight ${toneClass}`}>{value}</p>
      <p className="mt-1 text-xs text-bone-muted">{label}</p>
    </div>
  );
}
