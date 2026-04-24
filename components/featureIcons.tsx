import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// Minimal line-art icon library. Keep glyphs consistent with existing Icon set.
const base = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const FeatureIcon = {
  Database: (p: IconProps) => (
    <svg {...base} {...p}>
      <ellipse cx={12} cy={5} rx={8} ry={3} />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  Cpu: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={4} y={4} width={16} height={16} rx={2} />
      <rect x={9} y={9} width={6} height={6} />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  ),
  Server: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={4} width={18} height={7} rx={2} />
      <rect x={3} y={13} width={18} height={7} rx={2} />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  Shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
    </svg>
  ),
  Chart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 3v18h18" />
      <path d="M7 15l3-4 4 3 5-6" />
    </svg>
  ),
  Plug: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 2v6M15 2v6" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
      <path d="M12 16v6" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m4 12 5 5L20 6" strokeWidth={2} />
    </svg>
  ),
  Map: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m3 6 6-2 6 2 6-2v16l-6 2-6-2-6 2V6Z" />
      <path d="M9 4v16M15 6v16" />
    </svg>
  ),
  Calculator: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={5} y={3} width={14} height={18} rx={2} />
      <path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0M8 19h8" />
    </svg>
  ),
  Search: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={11} cy={11} r={7} />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  People: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={9} cy={8} r={3} />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <circle cx={17} cy={9} r={2.5} />
      <path d="M15 20c0-2 1.5-3.5 4-3.5S23 18 23 20" />
    </svg>
  ),
  Book: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z" />
      <path d="M4 4v14a4 4 0 0 1 4-4h12" />
    </svg>
  ),
  Language: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 6h10M9 4v2M4 10c2 4 5 6 10 6" />
      <path d="M14 14c-2 4-5 6-10 6" />
      <path d="m13 20 4-10 4 10M14.5 17h5" />
    </svg>
  ),
  File: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <path d="M14 2v4h4" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  ),
  Image: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={4} width={18} height={16} rx={2} />
      <circle cx={9} cy={10} r={2} />
      <path d="m21 16-5-5-10 9" />
    </svg>
  ),
  Terminal: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={4} width={18} height={16} rx={2} />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  ),
  Code: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />
    </svg>
  ),
  Globe: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  Network: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={6} cy={6} r={2} />
      <circle cx={18} cy={6} r={2} />
      <circle cx={12} cy={18} r={2} />
      <path d="M7.5 7.5 11 16M16.5 7.5 13 16" />
    </svg>
  ),
  Wrench: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a4 4 0 0 1 5 5L11 20l-4 1 1-4 7.7-10.7Z" />
      <path d="m14 8 2 2" />
    </svg>
  ),
  Refresh: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 12a8 8 0 0 1 14-5.3L21 9M3 15l3 2.3A8 8 0 0 0 20 12" />
      <path d="M18 3v6h-6M6 21v-6h6" />
    </svg>
  ),
  Star: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m12 3 2.6 6.1L21 10l-4.8 4.1 1.5 6.4L12 17l-5.7 3.5 1.5-6.4L3 10l6.4-.9L12 3Z" />
    </svg>
  ),
  Alert: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  ),
  Tag: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 3h9l9 9-9 9-9-9V3Z" />
      <circle cx={8} cy={8} r={1.5} />
    </svg>
  ),
  Beaker: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 3h6v5l5 10a3 3 0 0 1-3 4H7a3 3 0 0 1-3-4l5-10V3Z" />
      <path d="M7 14h10" />
    </svg>
  ),
  Target: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={12} cy={12} r={9} />
      <circle cx={12} cy={12} r={5} />
      <circle cx={12} cy={12} r={1.5} />
    </svg>
  ),
  Smile: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={12} cy={12} r={9} />
      <path d="M8 14c1.5 1.5 6.5 1.5 8 0" />
      <circle cx={9} cy={10} r={.5} fill="currentColor" />
      <circle cx={15} cy={10} r={.5} fill="currentColor" />
    </svg>
  ),
  Video: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={6} width={13} height={12} rx={2} />
      <path d="M16 10 22 7v10l-6-3" />
    </svg>
  ),
  Bot: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={8} width={18} height={12} rx={2} />
      <circle cx={9} cy={14} r={1} fill="currentColor" />
      <circle cx={15} cy={14} r={1} fill="currentColor" />
      <path d="M12 2v6M8 8h8" />
    </svg>
  ),
  Gauge: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 14 18 8" />
      <path d="M3.5 18a10 10 0 1 1 17 0" />
      <circle cx={12} cy={14} r={1.5} fill="currentColor" />
    </svg>
  ),
  Quote: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 9a4 4 0 0 0-3 7M6 9c3 0 4 2 4 5v3H4v-3M18 9a4 4 0 0 0-3 7m3-7c3 0 4 2 4 5v3h-6v-3" />
    </svg>
  ),
  Lock: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={4} y={10} width={16} height={11} rx={2} />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  Smartphone: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={5} y={2} width={14} height={20} rx={2.5} />
      <path d="M12 18h.01" />
    </svg>
  ),
  Layers: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" />
    </svg>
  ),
  Pen: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 3 21 10 10 21H3v-7L14 3Z" />
      <path d="m12 5 7 7" />
    </svg>
  ),
  Bolt: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  ),
  Cloud: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M7 18a5 5 0 1 1 1-10 6 6 0 0 1 11 2 4 4 0 0 1 0 8H7Z" />
    </svg>
  ),
  Cart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 3h2l3 14h11l2-9H7" />
      <circle cx={9} cy={20} r={1.5} />
      <circle cx={17} cy={20} r={1.5} />
    </svg>
  ),
  Palette: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1.5 1-3s0-3 2-3h3a4 4 0 0 0 4-4 9 9 0 0 0-10-8Z" />
      <circle cx={8} cy={10} r={1} fill="currentColor" />
      <circle cx={12} cy={7} r={1} fill="currentColor" />
      <circle cx={16} cy={10} r={1} fill="currentColor" />
    </svg>
  ),
  Puzzle: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M10 3h4v4a2 2 0 1 0 4 0h3v4a2 2 0 1 1 0 4h-3v4h-4a2 2 0 1 0-4 0H6v-4a2 2 0 1 1 0-4h4V3Z" />
    </svg>
  ),
  Wifi: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M2 8a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0" />
      <circle cx={12} cy={19} r={1} fill="currentColor" />
    </svg>
  ),
  Coin: (p: IconProps) => (
    <svg {...base} {...p}>
      <ellipse cx={12} cy={7} rx={8} ry={3} />
      <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  Wallet: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2H5a2 2 0 0 1-2-2Z" />
      <path d="M3 7v10a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-9H5" />
      <circle cx={17} cy={13} r={1} fill="currentColor" />
    </svg>
  ),
  Rocket: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 3c4 1 7 4 7 7l-3 1v4l-5 5-1-4-4-1 5-5h4l1-3Z" />
      <path d="M8 17c-2 1-4 4-3 6 2 1 5-1 6-3M14 10h.01" />
    </svg>
  ),
  Clock: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Chat: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </svg>
  ),
  Infinity: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 12a4 4 0 1 1 4 4c-2 0-2.5-1.5-4-4-1.5-2.5-2-4-4-4a4 4 0 1 0 4 4c0-2.5-.5-4-2-4" />
    </svg>
  ),
  Cube: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z" />
      <path d="M3 8l9 5 9-5M12 13v10" />
    </svg>
  ),
  Money: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={6} width={18} height={12} rx={2} />
      <circle cx={12} cy={12} r={2.5} />
      <path d="M6 10h.01M18 14h.01" />
    </svg>
  ),
  Pin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" />
      <circle cx={12} cy={9} r={2.5} />
    </svg>
  ),
  Car: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 13h18l-2-5a3 3 0 0 0-3-2H8a3 3 0 0 0-3 2l-2 5Z" />
      <path d="M3 13v5h3l1-2h10l1 2h3v-5" />
      <circle cx={7} cy={17} r={1.5} />
      <circle cx={17} cy={17} r={1.5} />
    </svg>
  ),
  Trophy: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5v3a3 3 0 0 0 3 3M16 6h3v3a3 3 0 0 1-3 3" />
      <path d="M9 16h6v5H9z" />
    </svg>
  ),
  Building: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 11h3a2 2 0 0 1 2 2v8" />
      <path d="M8 8h.01M12 8h.01M8 12h.01M12 12h.01M8 16h.01M12 16h.01M19 15h.01M19 19h.01" />
    </svg>
  ),
  Gift: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={9} width={18} height={12} rx={2} />
      <path d="M12 9v12M3 13h18" />
      <path d="M8 9c-2 0-3-1-3-3s2-3 4-2 3 3 3 5M16 9c2 0 3-1 3-3s-2-3-4-2-3 3-3 5" />
    </svg>
  ),
  Heart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" />
    </svg>
  ),
  Watch: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={6} y={6} width={12} height={12} rx={3} />
      <path d="M9 6V3h6v3M9 18v3h6v-3M12 10v3l2 1" />
    </svg>
  ),
  Qr: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x={3} y={3} width={7} height={7} />
      <rect x={14} y={3} width={7} height={7} />
      <rect x={3} y={14} width={7} height={7} />
      <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h.01" />
    </svg>
  ),
  Bed: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 8v12M3 14h18v6M21 14v-2a4 4 0 0 0-4-4h-6v6" />
      <circle cx={7} cy={12} r={2} />
    </svg>
  ),
  Pill: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 3a5 5 0 0 1 7 0l6 6a5 5 0 0 1-7 7l-6-6a5 5 0 0 1 0-7Z" />
      <path d="m7 8 9 9" />
    </svg>
  ),
} as const;

export type FeatureIconName = keyof typeof FeatureIcon;

// Safe lookup — unknown keys fall back to a generic glyph
export function getFeatureIcon(name: string): (typeof FeatureIcon)[FeatureIconName] {
  if (name in FeatureIcon) return FeatureIcon[name as FeatureIconName];
  return FeatureIcon.Check;
}
