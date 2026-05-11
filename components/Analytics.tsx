import Script from "next/script";

/**
 * Google Analytics 4 — loads only when NEXT_PUBLIC_GA_ID is set at build time.
 * Uses `afterInteractive` so it never blocks LCP.
 *
 * On a static export the GA id is baked into the bundle at build time, so
 * changing it later means rebuilding + redeploying. That's the trade-off you
 * accept by going static; the alternative (runtime fetch) would hurt Core
 * Web Vitals more than it helps.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
