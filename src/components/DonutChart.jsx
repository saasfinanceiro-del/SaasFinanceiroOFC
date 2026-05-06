import { useState } from "react";
import { fmtMoney } from "../utils/dateUtils";

/**
 * Donut chart showing expense breakdown by category.
 * Props:
 *   data — array of { name, value, color }
 *   dark — boolean (dark mode)
 */
const DonutChart = ({ data, dark }) => {
  const [hov, setHov] = useState(null);

  if (!data || data.length === 0)
    return (
      <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
        Sem dados de despesas
      </div>
    );

  const total = data.reduce((a, d) => a + d.value, 0);
  if (total === 0)
    return (
      <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
        Sem despesas no período
      </div>
    );

  const R = 70, r = 42, CX = 90, CY = 90;
  let angle = -Math.PI / 2;

  const slices = data.map((d) => {
    const pct = d.value / total;
    const sweep = pct * 2 * Math.PI;
    const x1 = CX + R * Math.cos(angle), y1 = CY + R * Math.sin(angle);
    angle += sweep;
    const x2 = CX + R * Math.cos(angle), y2 = CY + R * Math.sin(angle);
    const xi1 = CX + r * Math.cos(angle - sweep), yi1 = CY + r * Math.sin(angle - sweep);
    const xi2 = CX + r * Math.cos(angle), yi2 = CY + r * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    const path = `M${x1},${y1} A${R},${R} 0 ${large},1 ${x2},${y2} L${xi2},${yi2} A${r},${r} 0 ${large},0 ${xi1},${yi1} Z`;
    return { ...d, path, pct };
  });

  const hovSlice = hov !== null ? slices[hov] : null;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <div className="relative shrink-0">
        <svg width="180" height="180" viewBox="0 0 180 180">
          {slices.map((s, i) => (
            <path
              key={i}
              d={s.path}
              fill={s.color}
              opacity={hov === null || hov === i ? 1 : 0.4}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{ cursor: "pointer", transition: "opacity .15s" }}
            />
          ))}
          <circle cx={CX} cy={CY} r={r - 4} fill={dark ? "#0f172a" : "#f8fafc"} />
          <text x={CX} y={CY - 8} textAnchor="middle" fontSize="10" fontWeight="700"
            fill={dark ? "#94a3b8" : "#64748b"} fontFamily="Inter,sans-serif">
            {hovSlice ? hovSlice.name : "Total"}
          </text>
          <text x={CX} y={CY + 10} textAnchor="middle" fontSize="13" fontWeight="800"
            fill={dark ? "#f1f5f9" : "#1e293b"} fontFamily="Inter,sans-serif">
            {hovSlice ? `${Math.round(hovSlice.pct * 100)}%` : "100%"}
          </text>
          <text x={CX} y={CY + 24} textAnchor="middle" fontSize="8" fontWeight="600"
            fill={dark ? "#64748b" : "#94a3b8"} fontFamily="Inter,sans-serif">
            {hovSlice ? `R$ ${fmtMoney(hovSlice.value)}` : `R$ ${fmtMoney(total)}`}
          </text>
        </svg>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-1.5 w-full min-w-0">
        {slices
          .sort((a, b) => b.value - a.value)
          .map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(slices.indexOf(s))}
              onMouseLeave={() => setHov(null)}
              className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-all ${
                hov === slices.indexOf(s)
                  ? dark ? "bg-slate-800" : "bg-slate-100"
                  : ""
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className={`text-xs font-semibold truncate flex-1 ${dark ? "text-slate-300" : "text-slate-600"}`}>
                {s.name}
              </span>
              <span className={`text-xs font-bold tabular-nums shrink-0 ${dark ? "text-slate-400" : "text-slate-500"}`}>
                {Math.round(s.pct * 100)}%
              </span>
              <span className={`text-xs font-bold tabular-nums shrink-0 ${dark ? "text-white" : "text-slate-800"}`}>
                R$ {fmtMoney(s.value)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DonutChart;
