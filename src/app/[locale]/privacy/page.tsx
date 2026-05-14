export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p className="text-[16px] text-[#64748B] leading-relaxed mb-4">We collect information in the following ways:</p>
          <p className="text-[15px] font-bold text-[#0D1B2A] mb-2">Information you provide directly:</p>
          <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 mb-4 ml-2">
            <li>Contact form submissions (name, email, phone, message)</li>
            <li>CV and job application submissions</li>
            <li>Email and telephone communications</li>
          </ul>
          <p className="text-[15px] font-bold text-[#0D1B2A] mb-2">Information collected automatically:</p>
          <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on site</li>
            <li>Referring website</li>
            <li>Device information</li>
          </ul>
        </>
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
          <li>To respond to your enquiries and provide requested services</li>
          <li>To process job applications and CVs</li>
          <li>To improve and maintain our website</li>
          <li>To comply with legal and regulatory obligations</li>
          <li>To send relevant business communications (with your consent where required)</li>
        </ul>
      )
    },
    {
      title: "3. Legal Basis for Processing",
      content: (
        <>
          <p className="text-[16px] text-[#64748B] leading-relaxed mb-4">We process your data under the following legal bases:</p>
          <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
            <li><strong>Consent</strong> — where you have provided explicit consent</li>
            <li><strong>Contract</strong> — where processing is necessary to fulfil a contract</li>
            <li><strong>Legitimate interests</strong> — for business operations and website improvement</li>
            <li><strong>Legal obligation</strong> — where required by applicable law</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Data Sharing",
      content: (
        <>
          <p className="text-[16px] text-[#64748B] leading-relaxed mb-4">We do not sell your personal data. We may share your data with:</p>
          <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
            <li>Service providers acting as data processors (e.g. email delivery, cloud hosting)</li>
            <li>Professional advisors (legal, accounting) where necessary</li>
            <li>Regulatory or law enforcement authorities when legally required</li>
          </ul>
        </>
      )
    },
    {
      title: "5. International Data Transfers",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          Your data is primarily stored and processed in Kuwait. Where data is transferred outside Kuwait, we ensure appropriate safeguards are in place in accordance with applicable data protection law.
        </p>
      )
    },
    {
      title: "6. Data Retention",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form data is retained for up to 2 years. CV data is retained for up to 12 months unless you request earlier deletion.
        </p>
      )
    },
    {
      title: "7. Cookies",
      content: (
        <>
          <p className="text-[16px] text-[#64748B] leading-relaxed mb-4">Our website uses cookies to improve your experience. These include:</p>
          <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
            <li><strong>Essential cookies</strong> — required for the website to function</li>
            <li><strong>Analytics cookies</strong> — to understand how visitors use our site</li>
            <li><strong>Preference cookies</strong> — to remember your settings</li>
          </ul>
          <p className="text-[16px] text-[#64748B] leading-relaxed mt-4">
            You may disable cookies through your browser settings, though this may affect website functionality.
          </p>
        </>
      )
    },
    {
      title: "8. Your Rights",
      content: (
        <>
          <p className="text-[16px] text-[#64748B] leading-relaxed mb-4">Depending on applicable law, you may have the right to:</p>
          <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-[16px] text-[#64748B] leading-relaxed mt-4">
            To exercise any of these rights, please contact us at <a href="mailto:info@masaratkwt.com" className="text-[#1A56DB] hover:underline">info@masaratkwt.com</a>.
          </p>
        </>
      )
    },
    {
      title: "9. Data Security",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      )
    },
    {
      title: "10. Changes to This Policy",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this page periodically.
        </p>
      )
    },
    {
      title: "11. Contact Us",
      content: (
        <>
          <p className="text-[16px] text-[#64748B] leading-relaxed mb-2">
            If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
          </p>
          <div className="text-[16px] text-[#64748B] leading-relaxed">
            <p className="font-semibold text-[#0D1B2A]">Masarat KWT</p>
            <p>Email: <a href="mailto:info@masaratkwt.com" className="text-[#1A56DB] hover:underline">info@masaratkwt.com</a></p>
            <p>Kuwait</p>
          </div>
        </>
      )
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
        Privacy Policy
      </h1>

      <p className="text-[14px] text-[#64748B] mb-12">
        Last Updated: May 2026
      </p>

      <p className="text-[16px] text-[#64748B] leading-relaxed mb-12 pb-10 border-b border-[#E2EAF8]">
        Masarat KWT (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates this website and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
      </p>

      {sections.map((section, i) => (
        <div key={i} className="mb-10 pb-10 border-b border-[#E2EAF8] last:border-0">
          <h2 className="text-[20px] font-bold text-[#0D1B2A] tracking-tight mb-4">
            {section.title}
          </h2>
          {section.content}
        </div>
      ))}
    </main>
  );
}
