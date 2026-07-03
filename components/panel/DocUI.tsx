export function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="italic text-volt-300">{children}</span>;
}

export function DocSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="rounded-t-xl bg-volt-500 px-4 py-2.5 text-sm font-bold text-white">
        {title}
      </div>
      <div className="space-y-3 rounded-b-xl border border-t-0 border-ink-600 bg-ink-800 p-5 text-sm leading-relaxed text-bone">
        {children}
      </div>
    </div>
  );
}

export function DocTable({
  headers,
  rows,
  align,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  align?: ("left" | "right")[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-ink-600">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead>
          <tr className="bg-volt-500/10">
            {headers.map((h, i) => (
              <th
                key={h}
                className={`px-4 py-2.5 font-semibold text-bone ${
                  align?.[i] === "right" ? "text-right" : "text-left"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-700">
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cellContent, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-2.5 text-bone-muted ${
                    align?.[ci] === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {cellContent}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocLetterhead() {
  return (
    <div className="mb-8">
      <p className="text-lg font-bold tracking-widest text-bone">VOLTA</p>
      <p className="mt-1 text-xs text-bone-dim">
        Automatización con IA · voltaautomation.com · hola@voltaautomation.com
      </p>
    </div>
  );
}

export function DocFooter() {
  return (
    <p className="mt-10 border-t border-ink-700 pt-4 text-xs text-bone-dim">
      Volta Automation · hola@voltaautomation.com · Buenos Aires, Argentina
    </p>
  );
}
