// Shared form-control primitives used across CTA form variants.
// Plain markup — no event handlers — so they're safe in server components.
// Each variant wires its own state where needed; supplying `name` makes the
// field FormData-serialisable so the canonical CTA can POST to Web3Forms.

const errClass = "border-red-400/60 focus:border-red-400/80";
const okClass = "border-white/10 focus:border-white/30";

function HelperOrError({ name, helper, error }: { name?: string; helper?: string; error?: string }) {
  if (error) {
    return (
      <span
        id={name ? `${name}-error` : undefined}
        className="block mt-1.5 text-[11.5px] text-red-300/90"
      >
        {error}
      </span>
    );
  }
  if (helper) {
    return <span className="block mt-1.5 text-[11.5px] text-white/45">{helper}</span>;
  }
  return null;
}

export function Field({
  label,
  placeholder,
  type = "text",
  helper,
  size = "default",
  name,
  required,
  autoComplete,
  error,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  helper?: string;
  size?: "default" | "lg";
  name?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const padding = size === "lg" ? "px-4 py-3.5 text-[16px] md:text-[15px]" : "px-3.5 py-3 text-[16px] md:py-2.5 md:text-[14px]";
  const border = error ? errClass : okClass;
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error && name ? `${name}-error` : undefined}
        className={`w-full ${padding} rounded-lg bg-white/[0.04] border ${border} text-white placeholder-white/30 focus:outline-none transition`}
      />
      <HelperOrError name={name} helper={helper} error={error} />
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
  error,
}: {
  label: string;
  options: string[];
  helper?: string;
  size?: "default" | "lg";
  name?: string;
  required?: boolean;
  error?: string;
}) {
  const padding = size === "lg" ? "px-4 py-3.5 text-[16px] md:text-[15px]" : "px-3.5 py-3 text-[16px] md:py-2.5 md:text-[14px]";
  const border = error ? errClass : okClass;
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error && name ? `${name}-error` : undefined}
        className={`w-full ${padding} rounded-lg bg-white/[0.04] border ${border} text-white focus:outline-none transition`}
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
      <HelperOrError name={name} helper={helper} error={error} />
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
  error,
}: {
  label: string;
  placeholder?: string;
  helper?: string;
  rows?: number;
  name?: string;
  required?: boolean;
  error?: string;
}) {
  const border = error ? errClass : okClass;
  return (
    <label className="block">
      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45 font-mono mb-1.5">{label}</span>
      <textarea
        rows={rows}
        name={name}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error && name ? `${name}-error` : undefined}
        className={`w-full px-3.5 py-3 md:py-2.5 rounded-lg bg-white/[0.04] border ${border} text-[16px] md:text-[14px] text-white placeholder-white/30 focus:outline-none transition resize-none`}
      />
      <HelperOrError name={name} helper={helper} error={error} />
    </label>
  );
}
