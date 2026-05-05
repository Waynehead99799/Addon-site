/**
 * Server component that emits a `<script type="application/ld+json">` tag.
 * Use anywhere — root layout, page bodies, detail templates. Safe in RSC.
 *
 * Pass already-shaped objects from `lib/schema.ts` — that file has helpers
 * for Organization, WebSite, LocalBusiness, Service, Article, BreadcrumbList,
 * etc. Each helper returns a typed object you feed in here.
 */
export default function JsonLd<T extends Record<string, unknown>>({
  data,
}: {
  data: T | T[];
}) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Stringified payload — safe; we never embed user input.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
