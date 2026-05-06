import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import HomeSectionReveal from "@/components/HomeSectionReveal";

export const metadata: Metadata = {
  title: "Terms of Service · Addon Web Solutions",
  description: "Our terms of service governing the use of our website, products, and services globally.",
};

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="mt-6 text-[15px] md:text-[17px] text-white/65 leading-relaxed">
              The terms and conditions governing your use of our website and services.
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
                <strong>Addon Web Solutions Pvt Ltd</strong> ("Company," "we," "us," "our"), a company registered in Ahmedabad, Gujarat, India, operates <strong>addonwebsolutions.com</strong> and related services (the "Service"). These Terms of Service govern your use of our website, products, and services.
              </p>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms and all applicable Indian laws. If you do not agree to any part of these Terms, you may not use our Service.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">1. License and Use Restrictions</h3>
              <p>Subject to compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Service for lawful purposes.</p>
              <p><strong>You agree not to:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose or in violation of any applicable laws</li>
                <li>Reverse engineer, decompile, or attempt to discover any source code or trade secrets</li>
                <li>Scrape, crawl, or use automated tools to access or extract data without permission</li>
                <li>Transmit viruses, malware, or any code intended to disrupt functionality</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Harass, abuse, threaten, or defame any person or entity</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">2. Intellectual Property Rights</h3>
              <p>All content on our Service, including text, graphics, logos, images, software, and design elements, is the property of Addon Web Solutions or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
              <p>You retain all rights to any content you submit to us (including contact form submissions, project briefs, or feedback). By submitting content, you grant us a royalty-free, worldwide, perpetual license to use, reproduce, and display such content in connection with our business, including for case studies, testimonials, and marketing with your explicit consent.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">3. Limitation of Liability</h3>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ADDON WEB SOLUTIONS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, REVENUE, DATA, OR USE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
              <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100 IF YOU HAVE NOT MADE ANY PAYMENT.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">4. Indemnification</h3>
              <p>You agree to indemnify, defend, and hold harmless Addon Web Solutions, its officers, directors, employees, and agents from any claims, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or relating to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or misuse of our Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable law or regulation</li>
                <li>Infringement of any third-party intellectual property rights</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">5. Website Availability and Maintenance</h3>
              <p>We strive to maintain continuous, reliable Service. However, we do not guarantee that our Service will be error-free, uninterrupted, or free from viruses or harmful components. We may perform maintenance or updates without notice.</p>
              <p>We are not liable for any downtime, service interruptions, or loss of access to our Service, regardless of cause.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">6. Third-Party Content and Links</h3>
              <p>Our Service may contain links to third-party websites and services. We do not endorse, control, or take responsibility for third-party content. Your use of third-party services is subject to their terms and privacy policies.</p>
              <p>We are not liable for any damages or losses arising from your use of third-party services or content.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">7. Contact Form and User Submissions</h3>
              <p>Any information submitted through our contact form will be retained and used in accordance with our Privacy Policy. By submitting a contact form, you consent to us contacting you via email, phone, or other communication channels.</p>
              <p>We may use your submission for case studies, testimonials, or business development purposes only with explicit written consent.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">8. Service Agreements</h3>
              <p>For clients engaging us for development, consulting, or other services, a separate Service Agreement or Statement of Work will govern the engagement. The terms in any Service Agreement will supersede these general Terms to the extent of conflict.</p>
              <p>All work product, deliverables, and intellectual property created during a service engagement are subject to the terms of the specific Service Agreement.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">9. Governing Law and Jurisdiction</h3>
              <p><strong>Governing Law:</strong> These Terms are governed by and construed in accordance with the laws of India, including the Indian Contract Act, 1872, the Information Technology Act, 2000, and all applicable Indian statutes, without regard to conflicts of law principles.</p>
              <p><strong>Exclusive Jurisdiction:</strong> Both parties irrevocably agree that any dispute, claim, or controversy arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the District Courts in Ahmedabad, Gujarat, India. You waive any objection to venue or claim of inconvenient forum.</p>
              <p><strong>Pre-Litigation Resolution:</strong> Before initiating any legal proceedings, the parties agree to attempt to resolve disputes through good-faith negotiation for a period of 30 days. Either party may then pursue legal remedies through Indian courts.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">10. Indian Legal Compliance</h3>
              <p><strong>Information Technology Act, 2000 (IT Act):</strong> Our Service complies with all provisions of the IT Act, including provisions related to cybersecurity, data protection, and unlawful activities. We maintain reasonable security measures to protect your information.</p>
              <p><strong>Information Technology Rules, 2011 (IT Rules):</strong> We comply with the IT Rules regarding intermediary guidelines, data storage, and user information protection. All personal data is handled in accordance with these rules.</p>
              <p><strong>Digital Personal Data Protection Act, 2023 (DPDP Act):</strong> We comply with the DPDP Act and the framework established by the Data Protection Board. You have rights to access, correct, delete, or port your personal data. Contact privacy@addonwebsolutions.com to exercise these rights.</p>
              <p><strong>Consumer Protection Act, 2019:</strong> All users are protected under the Consumer Protection Act, 2019. We comply with consumer protection standards and will resolve complaints within the timeframe specified by law.</p>
              <p><strong>Indian Penal Code, 1860:</strong> We comply with all provisions of the IPC relating to data security, privacy violations, and criminal activities.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">11. Compliance with Indian Law</h3>
              <p>You agree to comply with all applicable Indian laws while using our Service, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You will not use our Service for any purpose that is illegal or prohibited under Indian law</li>
                <li>You will not violate any provisions of the Indian Penal Code, IT Act, or other applicable statutes</li>
                <li>You will not use our Service to harass, threaten, defame, or discriminate against any person or entity</li>
                <li>You will not engage in any unlawful activities including fraud, money laundering, or financing of illegal activities</li>
              </ul>
              <p>Violations of Indian law may result in criminal prosecution, civil penalties, and immediate termination of your access to our Service.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">12. Policy Modifications</h3>
              <p>We reserve the right to modify these Terms at any time. Changes become effective immediately upon posting to our website. Continued use of our Service constitutes your acceptance of the updated Terms.</p>
              <p>We recommend reviewing these Terms periodically for updates.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">13. Severability</h3>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be modified to the minimum extent necessary to make it valid, or if such modification is not possible, the provision shall be severed. All remaining provisions shall remain in full force and effect.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">14. Entire Agreement</h3>
              <p>These Terms, together with our Privacy Policy and any Service Agreements, constitute the entire agreement between you and Addon Web Solutions regarding your use of our Service and supersede all prior agreements and understandings.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-[20px] font-semibold text-white">15. Contact Information</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2 text-[13px]">
                <p><strong>For Legal Inquiries:</strong></p>
                <p>Email: legal@addonwebsolutions.com<br />Phone: +91 98790 03017<br />Address: B-1001, Sankalp Iconic Tower, Iscon-Ambli Road, Ahmedabad, Gujarat 380058, India</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <p className="text-white/60 text-[12px]">
                © {currentYear} Addon Web Solutions Pvt Ltd. All rights reserved. These Terms were last updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
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
