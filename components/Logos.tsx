// Each tech is paired with its brand color and monogram. Rendered as a small
// rounded chip beside the tech name — gives visual brand recognition without
// pulling in an external icon library or sourcing 19 inline SVG logos.
type Tech = { name: string; bg: string; fg: string; mark: string };

const TECHS: Tech[] = [
  { name: "OpenAI",       bg: "#10a37f", fg: "#fff",     mark: "O" },
  { name: "Anthropic",    bg: "#cc785c", fg: "#fff",     mark: "A" },
  { name: "LangChain",    bg: "#1c3c34", fg: "#5dd5ab",  mark: "L" },
  { name: "Pinecone",     bg: "#0f1f29", fg: "#fff",     mark: "P" },
  { name: "React",        bg: "#20232a", fg: "#61dafb",  mark: "R" },
  { name: "Next.js",      bg: "#000000", fg: "#fff",     mark: "N" },
  { name: "TypeScript",   bg: "#3178c6", fg: "#fff",     mark: "TS" },
  { name: "Postgres",     bg: "#336791", fg: "#fff",     mark: "P" },
  { name: "Swift",        bg: "#fa7343", fg: "#fff",     mark: "S" },
  { name: "Kotlin",       bg: "#7f52ff", fg: "#fff",     mark: "K" },
  { name: "React Native", bg: "#20232a", fg: "#61dafb",  mark: "RN" },
  { name: "Expo",         bg: "#000000", fg: "#fff",     mark: "E" },
  { name: "AWS",          bg: "#ff9900", fg: "#232f3e",  mark: "AW" },
  { name: "Terraform",    bg: "#7b42bc", fg: "#fff",     mark: "T" },
  { name: "Kubernetes",   bg: "#326ce5", fg: "#fff",     mark: "K" },
  { name: "Datadog",      bg: "#632ca6", fg: "#fff",     mark: "D" },
  { name: "Rust",         bg: "#1f1f1f", fg: "#ffb37a",  mark: "R" },
  { name: "MQTT",         bg: "#660066", fg: "#fff",     mark: "M" },
  { name: "BLE",          bg: "#0082fc", fg: "#fff",     mark: "B" },
];

export default function Logos() {
  return (
    <section className="section-reveal relative border-t border-b border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-10 items-center">
        <div className="md:col-span-3">
          <div className="eyebrow">Technologies</div>
        </div>
        <div className="md:col-span-9 overflow-hidden marquee-mask">
          <div className="flex items-center gap-7 ticker w-max whitespace-nowrap text-white/75 text-[14px]">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              TECHS.map((t, idx) => (
                <span key={`${k}-${idx}`} className="inline-flex items-center gap-3 shrink-0">
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md font-mono text-[10px] font-bold tracking-tight shrink-0"
                    style={{ background: t.bg, color: t.fg, letterSpacing: t.mark.length > 1 ? "-0.04em" : "0" }}
                  >
                    {t.mark}
                  </span>
                  <span className="font-medium tracking-[-0.005em]">{t.name}</span>
                  <span className="w-1 h-1 rounded-full bg-current opacity-55 shrink-0" />
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
