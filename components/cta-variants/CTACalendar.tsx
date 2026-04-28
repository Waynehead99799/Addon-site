"use client";
import { useState } from "react";
import { Icon } from "../icons";

const SLOTS = ["09:30", "10:30", "13:00", "14:30", "16:00"];
const DAYS = [
  { d: "Mon", n: "12" },
  { d: "Tue", n: "13" },
  { d: "Wed", n: "14" },
  { d: "Thu", n: "15" },
  { d: "Fri", n: "16" },
];

export default function CTACalendar() {
  const [day, setDay] = useState(2);
  const [slot, setSlot] = useState(1);
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-lite text-[11.5px] text-white/70 mb-5">
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                Two slots open this week
              </div>
              <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-semibold tracking-[-0.02em] leading-[1.02]">
                Pick a time{" "}
                <span className="serif-italic font-normal text-white/80">that suits you.</span>
              </h2>
              <p className="mt-6 text-[16px] text-white/70 max-w-md leading-[1.55]">
                15-minute intro call with an engineer who&apos;ll be on your project — not a salesperson.{" "}
                <span className="serif-italic text-white/90">Asia/Kolkata · GMT-aware.</span>
              </p>
              <div className="mt-7 space-y-3 text-[13.5px] text-white/65">
                {[
                  ["Avg. first reply", "< 4 hours"],
                  ["Discovery to kickoff", "7 days"],
                  ["First working build", "2 weeks"],
                ].map(([l, v]) => (
                  <div key={l} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>{l}</span>
                    <span className="serif-italic text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[15px] font-semibold">Week of Apr 28</div>
                  <div className="flex gap-1.5">
                    <button className="w-8 h-8 rounded-full glass-lite grid place-items-center text-white/65 hover:text-white">‹</button>
                    <button className="w-8 h-8 rounded-full glass-lite grid place-items-center text-white/65 hover:text-white">›</button>
                  </div>
                </div>
                {/* day selector */}
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {DAYS.map((d, i) => {
                    const active = i === day;
                    return (
                      <button
                        key={d.n}
                        onClick={() => setDay(i)}
                        className={`flex flex-col items-center py-3 rounded-xl border transition ${
                          active ? "bg-white/[0.06] border-white/30" : "border-white/10 hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="text-[10.5px] uppercase tracking-[0.18em] font-mono text-white/55">{d.d}</span>
                        <span className={`mt-1 text-[20px] font-semibold ${active ? "text-white" : "text-white/70"}`}>{d.n}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] font-mono text-white/45 mb-3">Available slots</div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
                  {SLOTS.map((s, i) => {
                    const active = i === slot;
                    return (
                      <button
                        key={s}
                        onClick={() => setSlot(i)}
                        className={`px-3 py-2 rounded-lg border text-[13.5px] font-mono transition ${
                          active ? "bg-white/10 border-white/40 text-white" : "border-white/10 text-white/65 hover:bg-white/[0.04]"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <button className="group w-full rounded-full glass-lite p-[2px]">
                  <span className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black">
                    <span className="text-[14.5px] font-medium">Confirm {DAYS[day].d} {DAYS[day].n} · {SLOTS[slot]}</span>
                    <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow">
                      <Icon.Arrow width={13} height={13} />
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
