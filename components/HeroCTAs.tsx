"use client";

import { useState } from "react";
import { Icon } from "./icons";
import ContactModal from "./ContactModal";

export default function HeroCTAs() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="hero-cta group relative cta-pulse rounded-full isolate inline-flex cursor-pointer p-0 border-0 bg-transparent"
        >
          <span className="hero-cta-pill inline-flex items-center gap-2.5 pl-6 pr-[6px] py-[7px] rounded-full bg-white text-black leading-none">
            <span className="hero-cta-text text-[14.5px] font-medium flex-1 text-center">Contact us</span>
            <span className="hero-cta-arrow w-7 h-7 rounded-full accent-grad grid place-items-center text-white btn-arrow flex-shrink-0">
              <Icon.Arrow width={13} height={13} />
            </span>
          </span>
        </button>

        <a
          href="#work"
          className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-[14px] px-4 py-3 transition-colors"
        >
          <span className="w-7 h-7 rounded-full border border-white/20 grid place-items-center">
            <Icon.Play width={10} height={10} className="translate-x-[1px]" />
          </span>
          See a decade of work
        </a>
      </div>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
