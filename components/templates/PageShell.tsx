import CursorGlow from "../CursorGlow";
import Nav from "../Nav";
import Footer from "../Footer";
import ThemeToggle from "../ThemeToggle";
import HomeSectionReveal from "../HomeSectionReveal";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <HomeSectionReveal />
      {children}
      <Footer />
      <ThemeToggle />
    </div>
  );
}
