// Shared form-control primitives used across CTA form variants.
// Plain markup — no event handlers — so they're safe in server components.
// Each variant wires its own state where needed; supplying `name` makes the
// field FormData-serialisable so the canonical CTA can POST to /api/contact.

export function Field({
  label,
  placeholder,
  type = "text",
  helper,
  size = "default",
  name,
  required,
  autoComplete,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  helper?: string;
  size?: "default" | "lg";
  name?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const padding = size === "lg" ? "px-4 py-3.5 text-[16px] md:text-[15px]" : "px-3.5 py-3 text-[16px] md:py-2.5 md:text-[14px]";
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`w-full ${padding} rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition`}
      />
      {helper && <span className="block mt-1.5 text-[11.5px] text-white/45">{helper}</span>}
    </label>
  );
}

export function SelectField({
  label,
  options,
  helper,
  size = "default",
  name,
  required,
}: {
  label: string;
  options: string[];
  helper?: string;
  size?: "default" | "lg";
  name?: string;
  required?: boolean;
}) {
  const padding = size === "lg" ? "px-4 py-3.5 text-[16px] md:text-[15px]" : "px-3.5 py-3 text-[16px] md:py-2.5 md:text-[14px]";
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className={`w-full ${padding} rounded-lg bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-white/30 transition`}
      >
        <option value="" disabled style={{ background: "var(--bg)", color: "var(--ink)" }}>
          Select…
        </option>
        {options.map((o) => (
          <option
            key={o}
            value={o}
            style={{ background: "var(--bg)", color: "var(--ink)" }}
          >
            {o}
          </option>
        ))}
      </select>
      {helper && <span className="block mt-1.5 text-[11.5px] text-white/45">{helper}</span>}
    </label>
  );
}

export function TextAreaField({
  label,
  placeholder,
  helper,
  rows = 4,
  name,
  required,
}: {
  label: string;
  placeholder?: string;
  helper?: string;
  rows?: number;
  name?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <textarea
        rows={rows}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-3.5 py-3 md:py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[16px] md:text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition resize-none"
      />
      {helper && <span className="block mt-1.5 text-[11.5px] text-white/45">{helper}</span>}
    </label>
  );
}
