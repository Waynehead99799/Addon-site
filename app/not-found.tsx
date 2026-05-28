import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex mb-8">
            <Logo size={56} />
          </Link>

          {/* 404 Error */}
          <div className="mb-8">
            <div className="text-[80px] md:text-[120px] font-bold tracking-[-0.05em] leading-none text-white/30 mb-4">
              404
            </div>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
              Page not found
            </h1>
            <p className="text-[15px] md:text-[17px] text-white/65 leading-relaxed mb-8">
              The page you're looking for doesn't exist. It may have been moved or the URL might be incorrect. We've redirected some old URLs automatically, but if you need help, use the links below.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {[
              { label: "Go to Home", href: "/" },
              { label: "View Services", href: "/services/" },
              { label: "Case Studies", href: "/case-studies/" },
              { label: "Contact Us", href: "/contact/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition text-[14px] font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Help Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-[18px] font-semibold mb-4">Still need help?</h2>
            <p className="text-[14px] text-white/60 mb-6 leading-relaxed">
              We've automatically redirected old URLs to their new locations. If you believe this is a mistake or need assistance, get in touch with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@addonwebsolutions.com"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 transition text-[14px] font-medium"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/919879003017?text=I%20received%20a%20404%20error%20and%20need%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-400/20 hover:bg-emerald-400/30 transition text-[14px] font-medium text-emerald-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Search Suggestion */}
          <p className="text-[12px] text-white/40 mt-12">
            Error code: 404 | This page doesn't exist or has been moved
          </p>
        </div>
      </div>
    </div>
  );
}
