export default function TermsPage() {
  const sections = [
    {
      title: "1. Use of Website",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          You agree to use this website in compliance with all applicable laws and regulations in the State of Kuwait.
        </p>
      )
    },
    {
      title: "2. Services",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          Masarat KWT provides technology and digital services. All services are subject to availability and may be modified at any time.
        </p>
      )
    },
    {
      title: "3. Intellectual Property",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          All content, including text, graphics, logos, and software, is the property of Masarat KWT and is protected by applicable intellectual property laws.
        </p>
      )
    },
    {
      title: "4. User Conduct",
      content: (
        <ul className="list-disc list-inside text-[16px] text-[#64748B] leading-relaxed space-y-1 ml-2">
          <li>No unauthorized access or hacking attempts</li>
          <li>No misuse of website functionality</li>
          <li>No uploading malicious or harmful content</li>
        </ul>
      )
    },
    {
      title: "5. Limitation of Liability",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          Masarat KWT shall not be liable for any direct, indirect, or incidental damages arising from the use of this website.
        </p>
      )
    },
    {
      title: "6. Third-Party Links",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          Our website may include links to external sites. We are not responsible for their content or privacy practices.
        </p>
      )
    },
    {
      title: "7. Disclaimer",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          The website is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
        </p>
      )
    },
    {
      title: "8. Termination",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          We reserve the right to suspend or terminate access to the website without prior notice.
        </p>
      )
    },
    {
      title: "9. Governing Law",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          These terms shall be governed by and interpreted in accordance with the laws of the State of Kuwait.
        </p>
      )
    },
    {
      title: "10. Changes to Terms",
      content: (
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          We may revise these terms at any time. Continued use of the website constitutes acceptance of the updated terms.
        </p>
      )
    },
    {
      title: "11. Contact",
      content: (
        <div className="text-[16px] text-[#64748B] leading-relaxed">
          <p className="font-semibold text-[#0D1B2A]">Masarat KWT</p>
          <p>Email: <a href="mailto:info@masaratkwt.com" className="text-[#1A56DB] hover:underline">info@masaratkwt.com</a></p>
          <p>Kuwait</p>
        </div>
      )
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
        Terms of Service
      </h1>

      <p className="text-[14px] text-[#64748B] mb-12">
        Last Updated: May 2026
      </p>

      <p className="text-[16px] text-[#64748B] leading-relaxed mb-12 pb-10 border-b border-[#E2EAF8]">
        These Terms of Service govern your use of the Masarat KWT website. By accessing or using our website, you agree to these terms.
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
