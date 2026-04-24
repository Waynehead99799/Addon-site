"use client";
import { useState } from "react";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 md:gap-10">
        {/* Side info */}
        <div className="col-span-12 md:col-span-4">
          <Reveal y={14}>
            <div className="eyebrow mb-4">Reach us</div>
            <div className="serif-italic text-white/80 text-[24px] md:text-[28px] leading-tight mb-10">
              We reply personally,<br />usually within four hours.
            </div>
          </Reveal>

          <div className="space-y-6 border-t border-white/10 pt-6">
            <div>
              <div className="eyebrow mb-2">Email</div>
              <a
                href="mailto:hello@addonweb.com"
                className="text-[16px] text-white/90 hover:text-white transition"
              >
                hello@addonweb.com
              </a>
            </div>
            <div>
              <div className="eyebrow mb-2">Studios</div>
              <p className="text-[14px] text-white/65 leading-relaxed">
                Ahmedabad, India<br />
                serving teams across 10+ countries
              </p>
            </div>
            <div>
              <div className="eyebrow mb-2">Hours</div>
              <p className="text-[14px] text-white/65 leading-relaxed">
                Mon–Fri · 09:00–19:00 IST<br />
                on-call rotations for clients on SLA
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-span-12 md:col-span-8 md:border-l md:border-white/10 md:pl-10">
          {submitted ? (
            <Reveal y={14}>
              <div className="glass rounded-2xl p-10 text-center">
                <div className="w-14 h-14 mx-auto rounded-full grid place-items-center bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 mb-5">
                  <Icon.Check width={22} height={22} />
                </div>
                <h3 className="text-[22px] font-semibold mb-3">
                  <span className="serif-italic font-normal text-white/90">Message received.</span>
                </h3>
                <p className="text-white/60 text-[14.5px]">
                  We'll be in touch shortly — usually within four hours during business days.
                </p>
              </div>
            </Reveal>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" name="first" placeholder="Jane" required />
                <Field label="Last name" name="last" placeholder="Doe" required />
              </div>
              <Field
                label="Work email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <div>
                <label className="eyebrow mb-2 block">How can we help?</label>
                <select
                  name="interest"
                  className="w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-[15px] text-white/90 py-3 transition"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black">
                    Select a service
                  </option>
                  {[
                    "AI Development",
                    "Web Development",
                    "Mobile App Development",
                    "Cloud Services",
                    "IoT Development",
                    "Hire Developers",
                    "Something else",
                  ].map((o) => (
                    <option key={o} value={o} className="bg-black">
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="eyebrow mb-2 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="A few lines about what you're building."
                  required
                  className="w-full bg-transparent border border-white/15 focus:border-white/40 rounded-xl px-4 py-3 text-[15px] text-white/90 outline-none resize-none transition"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative rounded-full isolate"
                >
                  <div className="relative rounded-full glass-lite p-[3px]">
                    <div className="flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white text-black">
                      <span className="text-[14.5px] font-medium">Send message</span>
                      <span className="w-7 h-7 rounded-full accent-grad grid place-items-center text-white">
                        <Icon.Arrow width={13} height={13} />
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-[15px] text-white/90 py-3 placeholder-white/30 transition"
      />
    </div>
  );
}
