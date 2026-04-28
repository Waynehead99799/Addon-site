"use client";
import { useState, useRef, useEffect } from "react";
import { Icon } from "../icons";

type Q = { id: string; ask: string; type?: "text" | "email" | "select"; options?: string[]; placeholder?: string };

const QUESTIONS: Q[] = [
  { id: "name",  ask: "Hi! What should we call you?", placeholder: "Your name", type: "text" },
  { id: "email", ask: "Perfect. And the best email to reach you on?", placeholder: "you@company.com", type: "email" },
  { id: "kind",  ask: "What kind of engagement are you thinking about?", type: "select", options: ["Project (3–9 months)", "Audit / discovery (1–2 weeks)", "Staff augmentation", "Not sure yet"] },
  { id: "build", ask: "And — in one sentence — what are you building?", placeholder: "An AI assistant that reads our internal docs…", type: "text" },
  { id: "when",  ask: "When would you like to start?", type: "select", options: ["This month", "Next month", "Next quarter", "Just exploring"] },
];

export default function CTAFormChat() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLSelectElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = QUESTIONS[step];
  const done = step >= QUESTIONS.length;

  useEffect(() => {
    setDraft("");
    inputRef.current?.focus();
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [step]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (done || !draft.trim()) return;
    setAnswers((a) => ({ ...a, [current.id]: draft }));
    setStep((s) => s + 1);
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="eyebrow mb-4">Enquire</div>
          <h2 className="text-[36px] md:text-[52px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Tell us about{" "}
            <span className="serif-italic font-normal text-white/80">your project.</span>
          </h2>
          <p className="mt-4 text-[14px] text-white/55">
            One question at a time. A real engineer reads every reply.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div ref={scrollRef} className="px-6 py-7 max-h-[420px] overflow-y-auto space-y-4">
            {QUESTIONS.slice(0, step + (done ? 0 : 1)).map((q, i) => {
              const ans = answers[q.id];
              return (
                <div key={q.id} className="space-y-3">
                  {/* assistant bubble */}
                  <div className="flex items-end gap-2.5">
                    <div className="w-7 h-7 rounded-full accent-grad shrink-0" />
                    <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/[0.04] border border-white/10 text-[14.5px] text-white/90">
                      {q.ask}
                    </div>
                  </div>
                  {/* user reply (if answered) */}
                  {ans && (
                    <div className="flex items-end gap-2.5 flex-row-reverse">
                      <div className="w-7 h-7 rounded-full bg-white/15 shrink-0 grid place-items-center text-[10px] font-semibold text-white/85">
                        {(answers.name || "Y")[0].toUpperCase()}
                      </div>
                      <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-white/12 text-[14.5px] text-white">
                        {ans}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {done && (
              <div className="flex items-end gap-2.5">
                <div className="w-7 h-7 rounded-full accent-grad shrink-0" />
                <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/[0.04] border border-white/10 text-[14.5px] text-white/90">
                  Got it{answers.name ? `, ${answers.name.split(" ")[0]}` : ""}. We&apos;ll reply within 4 hours.
                </div>
              </div>
            )}
          </div>

          {/* input */}
          {!done && (
            <form onSubmit={submit} className="border-t border-white/10 p-3 flex items-center gap-2 bg-white/[0.02]">
              {current.type === "select" ? (
                <select
                  ref={(r) => { inputRef.current = r; }}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="flex-1 bg-transparent px-3 py-2.5 text-[14.5px] text-white focus:outline-none"
                >
                  <option value="" className="bg-[#0e0b0a]">Choose one…</option>
                  {current.options?.map((o) => (
                    <option key={o} className="bg-[#0e0b0a]">{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  ref={(r) => { inputRef.current = r; }}
                  type={current.type}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={current.placeholder}
                  className="flex-1 bg-transparent px-3 py-2.5 text-[14.5px] text-white placeholder-white/30 focus:outline-none"
                />
              )}
              <button
                type="submit"
                disabled={!draft.trim()}
                className="shrink-0 w-9 h-9 rounded-full accent-grad grid place-items-center text-white disabled:opacity-40"
                aria-label="Send"
              >
                <Icon.Arrow width={14} height={14} />
              </button>
            </form>
          )}
        </div>
        <div className="mt-4 text-center text-[11.5px] text-white/40 font-mono">
          {done ? "Conversation complete" : `Step ${step + 1} of ${QUESTIONS.length}`}
        </div>
      </div>
    </section>
  );
}
