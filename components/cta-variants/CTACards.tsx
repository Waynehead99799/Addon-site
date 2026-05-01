import { Icon } from "../icons";

const PATHS = [
  {
    title: "Book a 15-min call",
    desc: "Real engineer on the call. We'll tell you how we'd ship it.",
    cta: "Pick a slot",
    accent: "#34cb96", rgb: "52,203,150",
    icon: "Zap" as const,
    primary: true,
  },
  {
    title: "Send a brief",
    desc: "One paragraph is plenty. We reply within 4 hours.",
    cta: "Open form",
    accent: "#5392df", rgb: "83,146,223",
    icon: "Bot" as const,
  },
  {
    title: "Email us",
    desc: "Slow-burn questions, intros, and references welcome.",
    cta: "sales@addonwebsolutions.com",
    accent: "#2dbcd2", rgb: "45,188,210",
    icon: "Globe" as const,
  },
  {
    title: "WhatsApp",
    desc: "For when typing on a desktop is overkill.",
    cta: "Open chat",
    accent: "#3ec170", rgb: "62,193,112",
    icon: "Smartphone" as const,
  },
];

export default function CTACards() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Enquire</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold tracking-[-0.02em] leading-[1.02]">
              Pick the door{" "}
              <span className="serif-italic font-normal text-white/80">that fits you.</span>
            </h2>
            <p className="mt-5 text-[16px] text-white/70 max-w-xl leading-[1.55]">
              Same humans behind each. Just whichever feels easiest right now.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PATHS.map((p) => {
            const IconC = Icon[p.icon];
            return (
              <a
                key={p.title}
                href="#"
                style={{
                  ["--svc" as string]: p.accent,
                  ["--svc-rgb" as string]: p.rgb,
                  ...(p.primary
                    ? { borderColor: `rgba(${p.rgb}, 0.45)`, background: `rgba(${p.rgb}, 0.06)` }
                    : {}),
                }}
                className="svc-card relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col overflow-hidden"
              >
                <div className="svc-icon w-11 h-11 rounded-xl grid place-items-center mb-6">
                  <IconC width={18} height={18} />
                </div>
                <h3 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.01em] leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] text-white/65 leading-[1.5] flex-1">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[13.5px] font-medium" style={{ color: p.accent }}>
                    {p.cta}
                  </span>
                  <Icon.ArrowUpRight width={15} height={15} className="svc-arrow" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
