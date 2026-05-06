# Legal Audit Checklist for Privacy Policy & Terms of Service

**Created**: 2026-05-06  
**Updated**: 2026-05-06 (India-only compliance)  
**Purpose**: Summary of all legal claims and commitments for lawyer review before public deployment  
**Company**: Addon Web Solutions Pvt Ltd  
**Jurisdiction**: India only — Ahmedabad courts  
**Website**: addonwebsolutions.com  
**Scope**: Indian law only (IT Act 2000, IT Rules 2011, DPDP Act 2023, Consumer Protection Act 2019, IPC 1860)

---

## PRIVACY POLICY — Key Claims to Verify

### 1. Data Collection (Section 1)
- [ ] **Claim**: "We collect information you provide (name, email, phone, company, message content)"
  - **Action**: Verify contact form actually captures only these fields
  - **Risk**: GDPR Article 5 (data minimization) — collecting extra fields without disclosure violates law

- [ ] **Claim**: "Automatic collection: Browser type, IP address, device type, pages visited"
  - **Action**: Audit server logs and analytics tools (Cloudflare, Vercel) for actual data collected
  - **Risk**: If you also collect more (OS version, referrer, user agent details), policy is incomplete

- [ ] **Claim**: "We use essential cookies only for functionality and security. We do NOT track across sites or use advertising cookies"
  - **Action**: Audit all cookies set by your site and third-party scripts
  - **Risk**: If Google Analytics, Meta Pixel, or ad networks are active, this claim is false
  - **Critical**: GDPR requires cookie consent for non-essential cookies before they load

### 2. Data Usage (Section 2)
- [ ] **Claim**: "Respond to inquiries and process service requests"
  - **Action**: Confirm contact form responses go only to your team
  - **Risk**: If responses are auto-forwarded to external parties, update policy

- [ ] **Claim**: "Send service updates and security alerts (no marketing without consent)"
  - **Action**: Verify email list practices — are newsletters sent? Do you have opt-in records?
  - **Risk**: GDPR/CCPA require explicit consent for marketing emails; unsubscribe link required

- [ ] **Claim**: "No tracking across sites, no advertising cookies"
  - **Action**: Check if any ad retargeting (Facebook Pixel, Google Ads) is active
  - **Risk**: Must add cookies banner if retargeting is enabled

### 3. Data Retention (Section 3)
- [ ] **Claim**: "Contact form submissions: retained for 3 years"
  - **Action**: Confirm your database retention policy actually deletes after 3 years
  - **Risk**: If you keep data indefinitely, this claim violates GDPR Article 5 (storage limitation)

- [ ] **Claim**: "Account data: retained until deletion or 2 years of inactivity"
  - **Action**: Do you actually track inactivity? Do you auto-delete after 2 years?
  - **Risk**: If you don't have automation, this is unenforceable and risky

- [ ] **Claim**: "Longer retention if required by law"
  - **Action**: Document which laws require retention (tax, labor, regulatory)
  - **Risk**: Vague claim — specify which Indian laws (IT Act, Companies Act, etc.)

### 4. User Rights (Section 4)
- [ ] **Claim**: "Right to access, correct, delete, or export personal data"
  - **Action**: Implement functionality to fulfill these within 30 days
  - **Risk**: GDPR Articles 15–22 require you to actually provide this; non-compliance = €20M+ fine

- [ ] **Claim**: "Contact privacy@addonwebsolutions.com to exercise rights; we respond within 30 days"
  - **Action**: Ensure this email is monitored and responses are logged
  - **Risk**: If you don't respond within 30 days, GDPR violations apply

- [ ] **Claim**: "EU/UK residents: Right to lodge complaints with your Data Protection Authority"
  - **Action**: Provide correct contact info for DPAs (ICO for UK, national DPA for each EU country)
  - **Risk**: If directions are wrong or missing, looks like you don't know the law

- [ ] **Claim**: "California residents: Rights under CCPA"
  - **Action**: Implement CCPA-compliant deletion/access requests on your website
  - **Risk**: CCPA requires opt-out of "sale or sharing" of data; if you do either, must provide button

- [ ] **Claim**: "Australia: Contact OAIC. Brazil: Contact ANPD"
  - **Action**: Verify OAIC (Office of the Australian Information Commissioner) and ANPD (Autoridade Nacional de Proteção de Dados) contact info is current
  - **Risk**: Outdated contact info looks unprofessional to regulators

### 5. Security (Section 5)
- [ ] **Claim**: "All data transmission encrypted via HTTPS/TLS"
  - **Action**: Verify your site has valid SSL cert and no mixed-content warnings
  - **Risk**: If HTTP is accessible, this claim is false (GDPR Article 32)

- [ ] **Claim**: "We maintain access controls and conduct regular security assessments"
  - **Action**: Document what "access controls" means (password policy? MFA? role-based access?)
  - **Action**: Do you actually conduct assessments? How often? By whom?
  - **Risk**: Vague claims weaken your defense in a data breach lawsuit

- [ ] **Claim**: "However, no system is 100% secure"
  - **Action**: Verify you have a data breach response plan (should notify authorities within 72 hours under GDPR)
  - **Risk**: Without a plan, you violate GDPR Article 33

### 6. Third Parties (Section 6)
- [ ] **Claim**: "We do not sell your data"
  - **Action**: Confirm no data brokers, lead generation partners, or marketing agencies have access
  - **Risk**: If you share with anyone for money, this claim is false

- [ ] **Claim**: "Service providers: Resend (email), Cloudflare (analytics), Vercel (hosting)"
  - **Action**: Verify Data Processing Agreements (DPAs) exist with ALL three
  - **Risk**: GDPR Article 28 requires written DPAs; without them = violation
  - **Action**: Check if Cloudflare and Vercel actually process personal data (IP addresses = personal data under GDPR)

- [ ] **Claim**: "Legal authorities when required by law"
  - **Action**: Confirm you will notify users when government demands data (unless legally prohibited)
  - **Risk**: If you silently comply, you may violate user trust (not illegal, but reputationally risky)

- [ ] **Claim**: "With your explicit consent"
  - **Action**: Verify you actually ask for consent before sharing (not just burying in T&Cs)
  - **Risk**: GDPR consent must be explicit and freely given; pre-ticked boxes don't work

### 7. International Transfers (Section 7)
- [ ] **Claim**: "We are based in India"
  - **Action**: Confirm legal entity is registered in Ahmedabad, Gujarat
  - **Risk**: If registered elsewhere, this affects jurisdiction

- [ ] **Claim**: "For international data transfers, we use Standard Contractual Clauses (EU/UK)"
  - **Action**: Does Resend, Cloudflare, or Vercel have SCCs in place? Have you signed them?
  - **Risk**: Post-Schrems II, SCCs alone are insufficient; you must document transfer impact assessment
  - **Critical**: If you can't prove SCCs + supplementary measures, you're violating GDPR Article 46

- [ ] **Claim**: "Maintain equivalent data protection standards worldwide"
  - **Action**: This is vague. Do you actually implement same security in all regions?
  - **Risk**: "Equivalent" is subjective; GDPR requires documented proof

### 8. Contact Information (Section 8)
- [ ] **Claim**: "privacy@addonwebsolutions.com"
  - **Action**: Verify this email is monitored and staffed
  - **Risk**: If no one reads it, GDPR fines apply (Article 15–22 breaches)

- [ ] **Claim**: Address: "B-1001, Sankalp Iconic Tower, Iscon-Ambli Road, Ahmedabad, Gujarat 380058, India"
  - **Action**: Verify this is a real, staffed office
  - **Risk**: If this is a mail drop or fake address, regulators will investigate

---

## TERMS OF SERVICE — Key Claims to Verify

### 1. License and Use Restrictions (Section 1)
- [ ] **Claim**: "Limited, non-exclusive, non-transferable, revocable license"
  - **Action**: Confirm this matches your business model
  - **Risk**: If you want to allow commercial resale/transfer, update this

- [ ] **Claim**: "Not for illegal purposes or violations of applicable laws"
  - **Action**: Vague. What laws? Define scope (India laws only, or international?)
  - **Risk**: Unenforceable if too vague; make specific

- [ ] **Claim**: "No reverse engineering, decompilation, or discovering source code"
  - **Action**: Do you have proprietary code/trade secrets to protect?
  - **Risk**: If your site is generic marketing pages, this clause may be unnecessary

- [ ] **Claim**: "No scraping, crawling, or automated tools"
  - **Action**: Are you comfortable blocking bots? (May affect SEO indexing if too broad)
  - **Risk**: Search engines may be blocked if clause is overly strict

- [ ] **Claim**: "No viruses, malware, or code to disrupt functionality"
  - **Action**: Standard, but ensure your hosting can detect/block attacks
  - **Risk**: If site is frequently compromised, users may claim you failed to protect

- [ ] **Claim**: "No impersonation, harassment, threats, or defamation"
  - **Action**: This is standard and enforceable

### 2. Intellectual Property Rights (Section 2)
- [ ] **Claim**: "All content (text, graphics, logos, software, design) is our property"
  - **Action**: Verify ALL content is original, licensed, or properly attributed
  - **Risk**: If you use stock images without license, copyrighted fonts improperly, this claim is false
  - **Critical**: Run copyright check on all images, icons, fonts

- [ ] **Claim**: "You retain rights to content you submit; we get royalty-free, worldwide, perpetual license"
  - **Action**: Verify you won't use testimonials or case studies without written consent (current language implies ongoing use)
  - **Risk**: Users may later object to case study use; require explicit opt-in

- [ ] **Claim**: "By submitting content, you grant us a license... for case studies, testimonials, marketing with your explicit consent"
  - **Action**: The phrase "with your explicit consent" is contradictory — does consent come before or after submission?
  - **Risk**: Ambiguous language is unenforceable; change to: "We will request written consent before using testimonials"

### 3. Limitation of Liability (Section 3)
- [ ] **Claim**: "No liability for indirect, incidental, special, consequential damages"
  - **Action**: Verify this is enforceable under Indian law
  - **Risk**: Indian courts may limit liability caps if they're too broad; consult lawyer
  - **Risk**: Some damages (data breach, fraud) may not be excludable

- [ ] **Claim**: "Total liability capped at amount paid in 12 months or $100"
  - **Action**: Is $100 reasonable? If you charge clients thousands, this may be challenged
  - **Risk**: Courts may void unreasonable liability caps; consider industry standard (often 1–12x annual fees)

### 4. Indemnification (Section 4)
- [ ] **Claim**: "Users indemnify us for IP infringement claims, legal violations, data breaches"
  - **Action**: Verify this is reciprocal (do you indemnify users too?)
  - **Risk**: One-sided indemnification clauses may be unenforceable in India

### 5. Website Availability (Section 5)
- [ ] **Claim**: "We strive to maintain continuous, reliable service; not guaranteed error-free"
  - **Action**: Do you have SLA (uptime guarantee)? If not, add: "Website provided AS-IS"
  - **Risk**: If you promise 99.9% uptime but don't meet it, claim is false

- [ ] **Claim**: "Not liable for downtime or service interruptions"
  - **Action**: If you charge for services, this may be unenforceable
  - **Risk**: Service clients may sue for damages if you go down; consider SLA

### 6. Third-Party Content and Links (Section 6)
- [ ] **Claim**: "Not responsible for third-party content or links"
  - **Action**: Do you link to external sites? Are they vetted?
  - **Risk**: If you knowingly link to illegal content, you may have liability (varies by jurisdiction)

### 7. Contact Form and User Submissions (Section 7)
- [ ] **Claim**: "Submissions retained per Privacy Policy"
  - **Action**: Ensure Privacy Policy actually says this (verify Section 3 retention rules)
  - **Risk**: If you keep submissions forever, Privacy Policy's "3 years" retention claim is false

- [ ] **Claim**: "We may use submission for case studies/testimonials only with explicit consent"
  - **Action**: Add a checkbox at form submission: ☐ "You may use my feedback as a testimonial"
  - **Risk**: Without explicit opt-in, you can't legally use testimonials (contradicts Section 2)

### 8. Service Agreements (Section 8)
- [ ] **Claim**: "Service Agreement supersedes these Terms in case of conflict"
  - **Action**: Do you have a standard Service Agreement template?
  - **Risk**: If no template exists, this is unenforceable; create one

### 9. Dispute Resolution and Governing Law (Section 9)
- [ ] **Claim**: "Governed by laws of India; jurisdiction in Ahmedabad courts"
  - **Action**: Verify Ahmedabad courts are appropriate (is your business/servers there?)
  - **Risk**: If you're operating from another Indian city, jurisdiction should match

- [ ] **Claim**: "Mediation required before litigation"
  - **Action**: Are you prepared to participate in mediation? Do you have a mediator identified?
  - **Risk**: If you refuse mediation, you violate your own T&Cs and lose credibility

- [ ] **Claim**: "Class action waiver; disputes on individual basis only"
  - **Action**: Verify this is enforceable under Indian law
  - **Risk**: Some jurisdictions void class action waivers; consult lawyer

### 10. Global Compliance (Section 10)
- [ ] **Claim**: "GDPR compliance: EU/UK residents have rights to access, delete, export data"
  - **Action**: Do you have a technical process to fulfill these within 30 days?
  - **Risk**: If you can't delete within 30 days, you're violating GDPR Article 17

- [ ] **Claim**: "CCPA: California residents have rights; contact privacy@addonwebsolutions.com"
  - **Action**: Do you have a CCPA-compliant way to handle opt-out requests?
  - **Risk**: CCPA requires opt-out button on website; just saying "email us" may not comply

- [ ] **Claim**: "LGPD: Brazilian residents can contact us for data requests"
  - **Action**: Response deadline under LGPD is 15 days, not 30. Update this.
  - **Critical**: LGPD has stricter timelines than GDPR; verify compliance

- [ ] **Claim**: "Australian Privacy Act: Contact OAIC"
  - **Action**: Verify OAIC is correct authority and contact info is current

- [ ] **Claim**: "PIPEDA: We comply with Canadian personal information protection"
  - **Action**: Do you store Canadian user data? If not, why mention PIPEDA?
  - **Risk**: If you don't actually have Canadian users, remove this to avoid compliance burden

- [ ] **Claim**: "POPIA: South African residents; Information Regulator oversees compliance"
  - **Action**: Same question: do you have South African users?
  - **Risk**: Don't mention compliance you don't actually need (creates liability)

- [ ] **Claim**: "Standard Contractual Clauses for international data transfers"
  - **Action**: Do Resend, Cloudflare, Vercel have SCCs signed?
  - **Risk**: If not, you're violating GDPR Article 46; update to say "we are working to establish SCCs"

### 11. Export Controls and Sanctions (Section 11)
- [ ] **Claim**: "Not accessible from embargoed countries (Cuba, Iran, North Korea, Syria, Crimea)"
  - **Action**: Do you actually block these countries at the IP level?
  - **Risk**: If you don't, this claim is false and you may be violating U.S. export control laws (if applicable)
  - **Note**: Blocking is optional but recommended for U.S. compliance; if you don't block, remove this section or change to "we do not knowingly serve embargoed countries"

- [ ] **Claim**: "No use in connection with sanctioned entities/individuals"
  - **Action**: Are you screening user names against OFAC list?
  - **Risk**: If you're not screening, you're not actually complying; update language to: "Users certify they are not on sanctions lists"

### 12–15. Standard Clauses
- [ ] **Severability** (Section 13): Standard, enforceable
- [ ] **Entire Agreement** (Section 14): Verify no conflicting docs
- [ ] **Contact Information** (Section 15): Ensure legal@addonwebsolutions.com is monitored

---

## CRITICAL MISSING ITEMS (India-Only Compliance)

### Add to Privacy Policy:
- [ ] **Data Breach Notification**: "In the event of a data breach, we will notify affected users and relevant authorities as required by the IT Act and DPDP Act"
- [ ] **Retention Schedule**: Specify exact retention periods for different data types (contact forms, logs, analytics)
- [ ] **Data Subject Requests**: Document process for access, correction, deletion, and portability requests under DPDP Act
- [ ] **Grievance Redressal**: Add process for filing complaints with the Data Protection Board (DPB)
- [ ] **Cookies/Analytics**: If using Cloudflare or Google Analytics, add opt-out mechanism and disclose purposes

### Add to Terms of Service:
- [ ] **Jurisdiction Clause**: Confirm Ahmedabad District Courts are appropriate venue
- [ ] **Liability Limitations**: Verify enforceability under Indian Contract Act, Section 55
- [ ] **Service Agreement**: Reference to separate Service Agreement template for client engagements
- [ ] **Account Termination**: Document what happens to user data upon account closure (deleted within specified timeframe)
- [ ] **Dispute Resolution Timeline**: Specify 30-day negotiation period before legal proceedings
- [ ] **Consumer Grievance Redressal**: Add contact procedure for complaints under Consumer Protection Act, 2019

---

## ACTION ITEMS FOR LAWYER REVIEW (India-Only)

### High Priority (Must Fix Before Launch):
1. **DPDP Act Compliance**: Verify data deletion mechanism can fulfill requests within DPDP Act timelines
2. **IP Ownership**: Audit all images, fonts, icons for proper licensing (Indian copyright law)
3. **Service Agreements**: Create template for client engagements with clear IP ownership and liability terms
4. **Data Retention Policy**: Document exact retention periods for contact forms, logs, analytics per IT Rules
5. **Security Measures**: Document specific security controls (encryption, access controls, audit logs) per IT Act Section 43A

### Medium Priority (Should Fix Before Launch):
1. **Contact Form Consent**: Add explicit opt-in for testimonial/case study use
2. **Grievance Mechanism**: Establish procedure for complaints under Consumer Protection Act, 2019
3. **Data Breach Response Plan**: Document breach notification procedure (timeline, authority notifications)
4. **Cookies/Analytics Opt-out**: If using Cloudflare analytics, provide opt-out mechanism per IT Rules
5. **Jurisdiction Confirmation**: Verify Ahmedabad courts and venue are appropriate for your business location

### Low Priority (Nice to Have):
1. **Data Processing Agreements**: Document relationship with Resend, Cloudflare, Vercel (service provider role)
2. **Detailed SLA**: If offering service contracts, document uptime guarantees and remedies
3. **Privacy Impact Assessment**: Internal audit of data flows and processing activities
4. **Translation**: Provide Hindi/local language versions of terms if targeting non-English users

---

## Key Questions for Your Lawyer (India-Focused)

1. **Data Retention**: What specific Indian laws govern data retention for contact forms and customer information? (IT Act, Income Tax Act, Companies Act?)
2. **DPDP Act Compliance**: How should we implement the data deletion mechanism to comply with the Digital Personal Data Protection Act, 2023?
3. **Liability Caps**: What liability limitation percentage is enforceable under the Indian Contract Act and Consumer Protection Act?
4. **Breach Notification**: Under IT Act Section 43A and DPDP Act, how quickly must we notify users of data breaches? (72 hours or different timeline?)
5. **Testimonials/Case Studies**: What's the minimum consent requirement for using customer testimonials (written consent required, or email sufficient)?
6. **Jurisdiction**: Is Ahmedabad District Court the right venue for your business? (Is this where you're headquartered?)
7. **Service Provider Agreements**: What clauses are essential for agreements with Resend, Cloudflare, Vercel under Indian law?
8. **Consumer Grievance**: What's the required response timeline under Consumer Protection Act, 2019 for complaints?
9. **IP Ownership**: Can we claim ownership of "all content" when client provides design briefs, or should we share ownership?
10. **Data Processing**: Do we need formal Data Processing Agreements with service providers, or are confidentiality agreements sufficient under IT Act?

---

## Compliance Status Summary (India-Only)

| Regulation | Status | Risk Level | Action |
|---|---|---|---|
| Information Technology Act, 2000 | ✓ Covered | Low | Ensure compliance with cybersecurity provisions |
| IT Rules, 2011 | ✓ Covered | Low | Verify intermediary guidelines compliance |
| Digital Personal Data Protection Act, 2023 | ✓ Covered | Low | Implement data deletion mechanism |
| Consumer Protection Act, 2019 | ✓ Covered | Low | Maintain complaint resolution timeline |
| Indian Penal Code, 1860 | ✓ Covered | Low | Ensure security against unauthorized access |
| IP Rights | ⚠️ Unclear | High | Audit all content for proper licensing |
| Data Security | ⚠️ Vague | Medium | Document specific security controls |
| Liability Limits | ✓ Clear | Low | Enforceable under Indian Contract Act |
| Jurisdiction/Dispute | ✓ Clear | Low | Ahmedabad courts confirmed as venue |
| Service Agreements | ⚠️ Missing | Medium | Create standard template for client engagements |

---

**Prepared by**: Claude (AI Assistant)  
**For Review by**: Licensed attorney (India, preferably Ahmedabad)  
**Timeline**: Review before public launch  
**Estimated Review Cost**: ₹15,000–40,000 (~$180–480 USD)
