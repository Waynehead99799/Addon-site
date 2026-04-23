export function Logo({ size = 32, className = "", animated = true }: { size?: number; className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Addon Web Solutions">
      <defs>
        <linearGradient id="addonLeft" x1="0.5" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#4BA3E3">
            {animated && <animate attributeName="stop-color" values="#4BA3E3;#2dbcd2;#34cb96;#2dbcd2;#4BA3E3" dur="8s" repeatCount="indefinite" />}
          </stop>
          <stop offset="40%" stopColor="#2E8BC0">
            {animated && <animate attributeName="stop-color" values="#2E8BC0;#1A6F8E;#1f7a5a;#1A6F8E;#2E8BC0" dur="8s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#3DBD6F">
            {animated && <animate attributeName="stop-color" values="#3DBD6F;#34cb96;#5dd5ab;#34cb96;#3DBD6F" dur="8s" repeatCount="indefinite" />}
          </stop>
        </linearGradient>
        <linearGradient id="addonRight" x1="0.5" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#1B5FAA">
            {animated && <animate attributeName="stop-color" values="#1B5FAA;#205fac;#247595;#205fac;#1B5FAA" dur="8s" repeatCount="indefinite" />}
          </stop>
          <stop offset="40%" stopColor="#1A6F8E">
            {animated && <animate attributeName="stop-color" values="#1A6F8E;#1b717e;#1f7a5a;#1b717e;#1A6F8E" dur="8s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#2DA862">
            {animated && <animate attributeName="stop-color" values="#2DA862;#2aa278;#34cb96;#2aa278;#2DA862" dur="8s" repeatCount="indefinite" />}
          </stop>
        </linearGradient>
        <linearGradient id="addonInnerL" x1="0.5" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1B4D8A">
            {animated && <animate attributeName="stop-color" values="#1B4D8A;#184781;#15513c;#184781;#1B4D8A" dur="8s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#1A7A5A">
            {animated && <animate attributeName="stop-color" values="#1A7A5A;#1f7a5a;#257443;#1f7a5a;#1A7A5A" dur="8s" repeatCount="indefinite" />}
          </stop>
        </linearGradient>
        <linearGradient id="addonInnerR" x1="0.5" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#0E3B6E">
            {animated && <animate attributeName="stop-color" values="#0E3B6E;#102f56;#124b54;#102f56;#0E3B6E" dur="8s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#166B4A">
            {animated && <animate attributeName="stop-color" values="#166B4A;#15513c;#194d2d;#15513c;#166B4A" dur="8s" repeatCount="indefinite" />}
          </stop>
        </linearGradient>
      </defs>
      <path d="M256 32 L56 432 L160 432 L256 260 Z" fill="url(#addonLeft)" />
      <path d="M256 32 L456 432 L352 432 L256 260 Z" fill="url(#addonRight)" />
      <path d="M256 260 L160 432 L220 432 L256 368 Z" fill="url(#addonInnerL)" />
      <path d="M256 260 L352 432 L292 432 L256 368 Z" fill="url(#addonInnerR)" />
      <path d="M256 32 L150 250 L200 250 L256 140 Z" fill="#fff" opacity="0.08">
        {animated && <animate attributeName="opacity" values="0.05;0.14;0.05" dur="6s" repeatCount="indefinite" />}
      </path>
    </svg>
  );
}
