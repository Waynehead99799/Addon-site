"use client";
import { useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "./data";
import { Icon, ProjectIcon } from "./icons";
import { Reveal } from "./Reveal";

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const cs = CASE_STUDIES;
  const cur = cs[active];
  const [c1, c2, c3] = cur.palette;
  const IconC = ProjectIcon[cur.icon];

  return (
    <section id="work" className="relative section-py">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[11.5px] font-mono text-white/45 uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-white/20"></span> 02 · Selected work
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Six shipped products.<br />
              <span style={{ color: c1 }}>Six different worlds.</span>
            </h2>
          </div>
          <a href="#" className="group text-[13px] text-white/60 hover:text-white inline-flex items-center gap-2">
            See full portfolio <Icon.ArrowUpRight width={13} height={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <Reveal y={28}>
          <div className="rounded-3xl border border-white/10 overflow-hidden" style={{ background: "rgba(255,255,255,0.015)" }}>
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 relative aspect-[16/10] md:aspect-auto md:min-h-[480px] overflow-hidden">
                <Board kind={cur.board} palette={cur.palette} />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm" style={{ background: c3 + "DD", border: `1px solid ${c1}44` }}>
                  <span className="w-5 h-5 rounded-full grid place-items-center" style={{ background: c1, color: c3 }}>
                    <IconC width={11} height={11} />
                  </span>
                  <span className="text-[11px] font-mono" style={{ color: c1 }}>{cur.id}.addonweb.com</span>
                </div>
              </div>

              <div className="md:col-span-2 p-8 md:p-10 flex flex-col relative">
                <div className="absolute top-0 left-0 w-full h-1 flex">
                  <span className="flex-1" style={{ background: c1 }} />
                  <span className="flex-1" style={{ background: c2 }} />
                  <span className="flex-1" style={{ background: c3 }} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-[11.5px] font-mono text-white/45 uppercase tracking-[0.2em]">{cur.tag}</div>
                  <div className="flex gap-1">
                    {cur.palette.map((c) => (
                      <span key={c} className="w-3 h-3 rounded-sm" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: c1 + "22", color: c1, border: `1px solid ${c1}44` }}>
                    <IconC width={20} height={20} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.1]">{cur.title}</h3>
                </div>

                <p className="mt-5 text-[14.5px] text-white/65 leading-relaxed">{cur.desc}</p>

                <div className="mt-6 p-4 rounded-xl" style={{ background: c3 + "66", border: `1px solid ${c1}33` }}>
                  <div className="text-[10.5px] uppercase tracking-wider" style={{ color: c1, opacity: 0.7 }}>Outcome</div>
                  <div className="mt-1 text-2xl font-semibold" style={{ color: c1 }}>{cur.kpi}</div>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-3">
                  <a href="#" className="group inline-flex items-center gap-1.5 text-[13px] text-white hover:text-white">
                    Read the case study <Icon.ArrowUpRight width={13} height={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <div className="ml-auto text-[11px] font-mono text-white/35">
                    {String(active + 1).padStart(2, "0")} / {String(cs.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-2">
          {cs.map((c, i) => {
            const [t1, t2, t3] = c.palette;
            const Ic = ProjectIcon[c.icon];
            const isActive = active === i;
            return (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`relative text-left p-3 rounded-xl border transition-all overflow-hidden ${isActive ? "scale-[1.02]" : "hover:bg-white/[0.03]"}`}
                style={{
                  borderColor: isActive ? t1 + "88" : "rgba(255,255,255,0.05)",
                  background: isActive ? t3 + "55" : "rgba(255,255,255,0.01)",
                }}
              >
                <div className="h-12 rounded-lg mb-2 relative overflow-hidden" style={{ background: t3 }}>
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${t1}, ${t2})`, opacity: 0.7 }} />
                  <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-md grid place-items-center" style={{ background: t3, color: t1 }}>
                    <Ic width={12} height={12} />
                  </div>
                  <div className="absolute bottom-1 left-1.5 text-[9px] font-mono font-bold" style={{ color: t3 }}>0{i + 1}</div>
                </div>
                <div className="text-[12px] text-white/90 font-medium truncate">{c.title}</div>
                <div className="text-[10.5px] text-white/40 truncate">{c.tag}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Board({ kind, palette }: { kind: CaseStudy["board"]; palette: [string, string, string] }) {
  const [c1, c2, c3] = palette;

  if (kind === "map") {
    return (
      <div className="absolute inset-0" style={{ background: c3 }}>
        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
          {[0.2, 0.35, 0.5, 0.65, 0.8].map((o, i) => (
            <path key={i} d={`M0 ${40 + i * 40} C 100 ${20 + i * 40}, 200 ${80 + i * 40}, 400 ${30 + i * 40}`} stroke={c1} strokeWidth={1} fill="none" opacity={o * 0.5} />
          ))}
          <path d="M40 250 C 120 180, 180 200, 230 140 S 340 90, 370 60" stroke={c2} strokeWidth={3} fill="none" />
          <path d="M40 250 C 120 180, 180 200, 230 140 S 340 90, 370 60" stroke={c1} strokeWidth={1.5} fill="none" strokeDasharray="5 6" />
          {[[40, 250], [230, 140], [370, 60]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={14} fill={c1} opacity="0.25" />
              <circle cx={x} cy={y} r={5} fill={c1} />
              <circle cx={x} cy={y} r={2} fill={c3} />
            </g>
          ))}
          {[...Array(10)].map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={300} stroke={c1} strokeWidth={0.5} opacity="0.15" />
          ))}
          {[...Array(8)].map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i * 40} x2={400} y2={i * 40} stroke={c1} strokeWidth={0.5} opacity="0.15" />
          ))}
        </svg>
        <div className="absolute top-5 left-5 flex gap-2">
          <div className="px-2.5 py-1 rounded-md text-[10.5px] font-mono" style={{ background: c1, color: c3 }}>18,204 vehicles</div>
          <div className="px-2.5 py-1 rounded-md text-[10.5px] font-mono border" style={{ borderColor: c1, color: c1 }}>live</div>
        </div>
        <div className="absolute bottom-5 right-5 font-mono text-[10px]" style={{ color: c1, opacity: 0.6 }}>LAT 40.71°N · LON 74.00°W</div>
      </div>
    );
  }

  if (kind === "gauge") {
    return (
      <div className="absolute inset-0 grid place-items-center" style={{ background: c3 }}>
        <svg viewBox="0 0 400 300" className="w-4/5 h-4/5">
          <defs>
            <linearGradient id="gg" x1="0" x2="1">
              <stop offset="0" stopColor={c1} />
              <stop offset="0.5" stopColor={c2} />
              <stop offset="1" stopColor={c1} />
            </linearGradient>
          </defs>
          <path d="M60 220 A 140 140 0 0 1 340 220" stroke={c1} strokeWidth={1.5} fill="none" opacity="0.25" />
          <path d="M60 220 A 140 140 0 0 1 340 220" stroke="url(#gg)" strokeWidth={6} fill="none" strokeDasharray="440" strokeDashoffset="132" />
          {[...Array(21)].map((_, i) => {
            const a = Math.PI + (i / 20) * Math.PI;
            const x1 = 200 + Math.cos(a) * 150,
              y1 = 220 + Math.sin(a) * 150;
            const x2 = 200 + Math.cos(a) * (i % 5 === 0 ? 135 : 142),
              y2 = 220 + Math.sin(a) * (i % 5 === 0 ? 135 : 142);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c1} strokeWidth={i % 5 === 0 ? 2 : 1} opacity={i % 5 === 0 ? 0.8 : 0.4} />;
          })}
          <line x1={200} y1={220} x2={290} y2={120} stroke={c2} strokeWidth={3} strokeLinecap="round" />
          <circle cx={200} cy={220} r={10} fill={c2} />
          <circle cx={200} cy={220} r={4} fill={c3} />
          <text x="200" y="175" textAnchor="middle" fill={c1} fontSize="46" fontFamily="Geist Mono" fontWeight="600">84</text>
          <text x="200" y="200" textAnchor="middle" fill={c1} fontSize="11" fontFamily="Geist Mono" opacity="0.7">MPH</text>
        </svg>
        <div className="absolute top-5 left-5 font-mono text-[10.5px]" style={{ color: c1, opacity: 0.7 }}>DTC · P0420 cleared</div>
        <div className="absolute top-5 right-5 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-5 rounded-sm" style={{ background: c1, opacity: 0.3 + i * 0.15 }} />
          ))}
        </div>
      </div>
    );
  }

  if (kind === "chat") {
    return (
      <div className="absolute inset-0 p-8 flex flex-col justify-end gap-3" style={{ background: c3 }}>
        <div className="self-start max-w-[70%] px-4 py-2.5 rounded-2xl rounded-bl-sm text-[12px]" style={{ background: c1 + "33", color: c1, border: `1px solid ${c1}55` }}>
          Hi! I can help book your next facial or reschedule.
        </div>
        <div className="self-end max-w-[65%] px-4 py-2.5 rounded-2xl rounded-br-sm text-[12px]" style={{ background: c2, color: c3 }}>
          Move Thursday to 4pm please
        </div>
        <div className="self-start max-w-[75%] px-4 py-2.5 rounded-2xl rounded-bl-sm text-[12px]" style={{ background: c1 + "33", color: c1, border: `1px solid ${c1}55` }}>
          Done — confirmed with Dr. Kwan. <span style={{ color: c2 }}>✓</span>
        </div>
        <div className="self-start flex items-center gap-1 px-4 py-2 rounded-2xl rounded-bl-sm" style={{ background: c1 + "22" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c1, animation: `pulse 1.4s ${i * 0.2}s infinite` }} />
          ))}
        </div>
        <div className="absolute top-5 left-5 font-mono text-[10.5px]" style={{ color: c1, opacity: 0.6 }}>Session · 73% resolved</div>
      </div>
    );
  }

  if (kind === "ride") {
    return (
      <div className="absolute inset-0" style={{ background: c3 }}>
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <path key={i} d={`M${-50 + i * 60} 0 L${50 + i * 60} 300`} stroke={c1} strokeWidth={0.5} opacity="0.1" />
          ))}
          {[...Array(6)].map((_, i) => (
            <path key={i} d={`M0 ${30 + i * 40} L400 ${30 + i * 40}`} stroke={c1} strokeWidth={0.5} opacity="0.1" />
          ))}
          <path d="M20 270 L 180 180 L 260 120 L 380 40" stroke={c2} strokeWidth={4} fill="none" strokeLinecap="round" />
          <circle cx={20} cy={270} r={6} fill={c1} />
          <circle cx={380} cy={40} r={6} fill={c2} />
        </svg>
        <div className="absolute left-5 bottom-5 right-5 rounded-xl p-4" style={{ background: c3 + "EE", border: `1px solid ${c1}30`, backdropFilter: "blur(8px)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full grid place-items-center font-bold" style={{ background: c1, color: c3 }}>AJ</div>
            <div className="flex-1">
              <div className="text-[12px] font-medium" style={{ color: c1 }}>Amira J. · Tesla Model 3</div>
              <div className="text-[10.5px] font-mono" style={{ color: c1, opacity: 0.6 }}>AAD · 4872 · 4.94 ★</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-semibold" style={{ color: c2 }}>3 min</div>
              <div className="text-[10px] font-mono" style={{ color: c1, opacity: 0.6 }}>ETA</div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 left-5 flex gap-2">
          <div className="px-2.5 py-1 rounded-full text-[10.5px] font-mono" style={{ background: c2, color: c3 }}>SURGE 1.2×</div>
        </div>
      </div>
    );
  }

  if (kind === "order") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8" style={{ background: c3 }}>
        <div className="w-full max-w-[240px] rounded-md p-5 font-mono text-[11px] relative" style={{ background: c1, color: c3 }}>
          <div className="text-center border-b border-dashed pb-2 mb-3" style={{ borderColor: c3 + "55" }}>
            <div className="font-bold tracking-widest">ORDER #4812</div>
            <div className="opacity-60 text-[10px]">tbl 12 · 7:42pm</div>
          </div>
          {[["Tonkotsu Ramen", "14.00"], ["Gyoza × 6", "7.50"], ["Matcha Latte", "5.00"], ["Chashu Bowl", "16.50"]].map(([n, p]) => (
            <div key={n} className="flex justify-between mb-1.5">
              <span>{n}</span>
              <span>${p}</span>
            </div>
          ))}
          <div className="border-t border-dashed mt-2 pt-2 flex justify-between font-bold" style={{ borderColor: c3 + "55" }}>
            <span>TOTAL</span>
            <span>$43.00</span>
          </div>
          <div className="mt-3 text-center text-[9px] opacity-70">*** 12-city rollout ***</div>
          <div className="absolute -bottom-1 left-0 right-0 h-2 flex">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="flex-1 h-full" style={{ background: i % 2 ? c3 : c1 }} />
            ))}
          </div>
        </div>
        <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full text-[10.5px] font-mono" style={{ background: c2, color: c3 }}>POS · sync&apos;d</div>
      </div>
    );
  }

  if (kind === "grid") {
    return (
      <div className="absolute inset-0 p-8 grid grid-cols-3 gap-2.5 content-center" style={{ background: c3 }}>
        {["Plumb", "Elec", "Paint", "HVAC", "Clean", "Yard", "Mov.", "Lock", "Pest"].map((n, i) => (
          <div
            key={n}
            className="aspect-square rounded-lg grid place-items-center text-[10.5px] font-mono relative overflow-hidden"
            style={{
              background: i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3,
              color: i % 3 === 0 ? c3 : i % 3 === 1 ? c3 : c1,
              border: `1px solid ${c1}44`,
            }}
          >
            <div className="absolute top-1 left-1.5 font-bold opacity-50">0{i + 1}</div>
            <div className="font-semibold text-[13px] tracking-tight">{n}</div>
          </div>
        ))}
        <div className="absolute top-5 left-5 font-mono text-[10.5px]" style={{ color: c1, opacity: 0.8 }}>4,218 pros online</div>
      </div>
    );
  }

  return null;
}
