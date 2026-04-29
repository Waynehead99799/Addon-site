import CursorGlow from "../CursorGlow";
import Nav from "../Nav";
import Footer from "../Footer";
import ThemeToggle from "../ThemeToggle";
import WhatsAppButton from "../WhatsAppButton";
import HomeSectionReveal from "../HomeSectionReveal";

/**
 * Inner-page wrapper. Mounts the chrome (Nav, Footer, FAB) plus the
 * `HomeSectionReveal` IntersectionObserver — without that observer, any
 * section using the `.section-reveal` class (CTA, Stats, Services, etc.)
 * stays at opacity: 0 forever. Originally that observer only ran on the home
 * page; every other page rendered the CTA invisible, leaving a phantom gap
 * above the footer.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <HomeSectionReveal />
      {children}
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  );
}
