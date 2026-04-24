import CursorGlow from "../CursorGlow";
import Nav from "../Nav";
import Footer from "../Footer";
import ThemeToggle from "../ThemeToggle";
import WhatsAppButton from "../WhatsAppButton";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      {children}
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  );
}
