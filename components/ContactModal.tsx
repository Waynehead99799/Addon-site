"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./icons";
import { SITE } from "@/lib/site";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_HREF = `https://wa.me/919879003017?text=${encodeURIComponent(
  "Hi, I'd like to talk about a project."
)}`;
const OFFICE_MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.address.formatted
)}`;

const CHANNELS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "Chat with us — usually reply within the hour",
    href: WHATSAPP_HREF,
    external: true,
    scroll: false,
  },
  {
    id: "email",
    label: "Email us",
    sub: "sales@addonwebsolutions.com",
    href: "mailto:sales@addonwebsolutions.com",
    external: false,
    scroll: false,
  },
  {
    id: "form",
    label: "Send a message",
    sub: "Use our contact form — we reply within 24 h",
    href: "#contact",
    external: false,
    scroll: true,
  },
  {
    id: "call",
    label: "Book a quick call",
    sub: "Pick a slot that works for you",
    href: "https://calendly.com/addonwebsolutions-ai/30min",
    external: true,
    scroll: false,
  },
] as const;

function ChannelIcon({ id }: { id: string }) {
  if (id === "whatsapp")
    return (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    );

  if (id === "email")
    return (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="contact-channel-icon-svg">
        <rect x={2} y={4} width={20} height={16} rx={2} />
        <path d="m2 7 10 7 10-7" />
      </svg>
    );

  if (id === "form")
    return (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="contact-channel-icon-svg">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
      </svg>
    );

  if (id === "office")
    return (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="contact-channel-icon-svg">
        <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
        <circle cx={12} cy={10} r={2.5} />
      </svg>
    );

  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="contact-channel-icon-svg">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.99-5.99 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.69a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleEsc = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEsc]);

  const handleClick = (ch: typeof CHANNELS[number], e: React.MouseEvent) => {
    if (ch.scroll) {
      e.preventDefault();
      onClose();
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 220);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[90] bg-black/65 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[100]
                       md:bottom-auto md:top-1/2 md:left-1/2
                       md:-translate-x-1/2 md:-translate-y-1/2
                       md:w-full md:max-w-sm"
          >
            <div className="contact-modal-card bg-[#141210] border border-white/10 rounded-t-2xl md:rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="contact-modal-header flex items-start justify-between px-5 pt-5 pb-4 border-b border-white/5">
                <div>
                  <p className="contact-modal-title text-[13px] font-semibold tracking-[0.12em] uppercase text-white/40">Get in touch</p>
                  <p className="contact-modal-sub text-[13px] text-white/50 mt-1 leading-snug">Choose how you'd like to reach us.</p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="mt-0.5 w-8 h-8 rounded-full border border-white/10 grid place-items-center text-white/40 hover:text-white hover:border-white/25 active:bg-white/5 transition flex-shrink-0"
                >
                  <Icon.X width={13} height={13} />
                </button>
              </div>

              {/* Channel rows */}
              <div className="divide-y divide-white/[0.06]">
                {CHANNELS.map((ch) => (
                  <a
                    key={ch.id}
                    href={ch.href}
                    target={ch.external ? "_blank" : undefined}
                    rel={ch.external ? "noopener noreferrer" : undefined}
                    onClick={(e) => handleClick(ch, e)}
                    className="contact-channel-row flex items-center gap-4 px-5 py-4 hover:bg-white/[0.04] active:bg-white/[0.07] transition-colors group"
                  >
                    <span className="contact-channel-icon-well w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] grid place-items-center flex-shrink-0">
                      <ChannelIcon id={ch.id} />
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="contact-channel-label text-[14px] font-medium text-white/90 leading-none">{ch.label}</p>
                      <p
                        className={`contact-channel-sublabel text-[12px] text-white/40 mt-1.5 ${
                          ch.id === "office" ? "leading-snug" : "leading-none truncate"
                        }`}
                      >
                        {ch.sub}
                      </p>
                    </div>

                    <Icon.ArrowUpRight
                      width={14}
                      height={14}
                      className="text-white/20 group-hover:text-white/55 flex-shrink-0 transition-colors"
                    />
                  </a>
                ))}
              </div>

              {/* iOS safe area spacer */}
              <div className="md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
