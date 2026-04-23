"use client";

// Edit these two values to match your real WhatsApp number + default message.
// Phone: digits only, with country code, no "+", no spaces, no dashes.
// e.g. for +91 79 12345678 → "917912345678"
const WHATSAPP_NUMBER = "919999999999";
const DEFAULT_MESSAGE =
  "Hi Addon Web Solutions team — I'd like to talk about a project.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-fab fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 w-14 h-14 rounded-full grid place-items-center"
    >
      <span className="whatsapp-fab-pulse" aria-hidden />
      <svg
        width={26}
        height={26}
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden
        className="relative z-10"
      >
        <path d="M19.11 17.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.08-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.18-.24-.57-.49-.5-.66-.5-.17-.01-.37-.01-.56-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16.04 27h-.01c-1.97 0-3.9-.53-5.58-1.52l-.4-.24-4.15 1.09 1.11-4.05-.26-.42A10.94 10.94 0 015.08 16c0-6.04 4.92-10.96 10.97-10.96 2.93 0 5.68 1.14 7.75 3.22a10.88 10.88 0 013.21 7.75c0 6.05-4.92 10.97-10.97 10.97zm9.32-20.3A13.06 13.06 0 0016.04 3C8.86 3 3.01 8.85 3 16.03c0 2.3.6 4.54 1.74 6.52L3 29l6.58-1.73a13.04 13.04 0 006.46 1.65h.01c7.18 0 13.03-5.85 13.04-13.03 0-3.48-1.35-6.76-3.82-9.23z" />
      </svg>
    </a>
  );
}
