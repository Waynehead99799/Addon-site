import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import HomeSectionReveal from "@/components/HomeSectionReveal";

export const metadata: Metadata = {
  title: "Privacy Policy · Addon Web Solutions",
  description: "Our privacy policy explaining how we collect, use, and protect your data globally.",
};

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <HomeSectionReveal />

      <section className="pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-20 lg:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <div className="eyebrow">Legal</div>
            <h1 className="mt-4 text-[44px] sm:text-[56px] md:text-[68px] font-semibold tracking-[-0.02em] leading-[0.95]">
              Privacy Policy
            </h1>
            <p className="mt-6 text-[15px] md:text-[17px] text-white/65 leading-relaxed">
              How we collect, use, and protect your data. Compliant with GDPR, CCPA, LGPD, and international regulations.
            </p>
            <p className="mt-4 text-[13px] text-white/50">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-8 text-[14px] md:text-[15px] text-white/80 leading-relaxed">

            <div className="space-y-4">
              <p>
                <strong>Addon Web Solutions Pvt Ltd</strong> is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website <strong>addonwebsolutions.com</strong>.
              </p>
              <p>
                This policy is governed by Indian law, including the Information Technology Act, 2000, Information Technology Rules, 2011, the Digital Personal Data Protection Act, 2023, and the Consumer Protection Act, 2019.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">1. Information We Collect</h3>
              <p><strong>Information You Provide:</strong> Name, email, phone, company, message content when you submit our contact form or communicate with us.</p>
              <p><strong>Automatic Collection:</strong> Browser type, IP address, device type, pages visited, and usage patterns.</p>
              <p><strong>Cookies:</strong> We use essential cookies only for functionality and security. We do not track you across sites or use advertising cookies.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and process service requests</li>
                <li>Send service updates and security alerts (no marketing without your consent)</li>
                <li>Improve website functionality and user experience</li>
                <li>Detect fraud and maintain security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">3. Data Retention</h3>
              <p>Contact form submissions: retained for 3 years for service delivery and business records. Account data: retained until deletion or 2 years of inactivity. Longer retention if required by law.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">4. Your Rights</h3>
              <p>Under Indian law, you have the right to access, correct, delete, or port your personal data. Contact us at <strong>privacy@addonwebsolutions.com</strong> to exercise these rights. We will respond to your request within 30 days.</p>
              <p>If you have concerns about our data handling practices, you may file a complaint with the Data Protection Board (DPB) under the Digital Personal Data Protection Act, 2023. We are committed to resolving all data-related grievances in accordance with Indian law.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">5. Security</h3>
              <p>All data transmission is encrypted via HTTPS/TLS. We maintain access controls and conduct regular security assessments. However, no system is 100% secure.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">6. Third Parties</h3>
              <p>We do not sell your personal data. We share it only in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers (email, hosting, analytics) who process data on our behalf under confidentiality agreements</li>
                <li>Government or law enforcement authorities when required by Indian law (IT Act, law enforcement requests, court orders)</li>
                <li>With your explicit written consent for specific purposes</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">7. Data Storage and Location</h3>
              <p>Your personal data is stored and processed in India in accordance with the Information Technology Act, 2000. Our company is registered in Ahmedabad, Gujarat, India. We maintain secure storage practices and comply with all Indian data protection requirements.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">8. Contact Us</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2 text-[13px]">
                <p><strong>Privacy Inquiries:</strong></p>
                <p>Email: privacy@addonwebsolutions.com<br />Phone: +91 98790 03017<br />Address: B-1001, Sankalp Iconic Tower, Iscon-Ambli Road, Ahmedabad, Gujarat 380058, India</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <p className="text-white/60 text-[12px]">
                © {currentYear} Addon Web Solutions Pvt Ltd. All rights reserved. We may update this policy anytime. Continued use constitutes acceptance.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ThemeToggle />
    </div>
  );
}
