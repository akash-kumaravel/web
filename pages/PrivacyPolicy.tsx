import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — MEMO InfoTech';
    const desc = 'Privacy Policy for MEMO InfoTech. Learn how we collect, use, and protect your personal data.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else {
      meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = desc;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="pt-40 pb-20 w-full bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <a href="https://www.memoinfotech.com/" className="inline-flex items-center gap-2 text-[#007BFF] hover:text-black transition-colors mb-6 font-bold">
            <ArrowLeft size={18} /> Back to Home
          </a>
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-500">Last updated: December 1, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-black mb-4">Introduction</h2>
            <p>
              MEMO InfoTech ("Company," "we," "us," or "our") operates the website and services. This Privacy Policy explains our practices regarding the collection, use, and protection of personal information.
            </p>
            <p>
              By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">1. Information We Collect</h2>
            <h3 className="text-2xl font-bold text-black mb-2">1.1 Information You Provide Directly</h3>
            <p>
              We may collect information that you voluntarily provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Name, email address, phone number, and company information</li>
              <li>Messages, inquiries, and communications through contact forms</li>
              <li>Payment information when purchasing services</li>
              <li>Portfolio or project details shared with us</li>
              <li>Newsletter subscription information</li>
            </ul>

            <h3 className="text-2xl font-bold text-black mb-2 mt-6">1.2 Information Collected Automatically</h3>
            <p>
              When you visit our website, we automatically collect certain information:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referral source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and communications</li>
              <li>To process transactions and send related information</li>
              <li>To send promotional materials and newsletters (with your consent)</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Service Providers:</strong> We may share information with vendors who assist in operations (hosting, email, analytics)</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or legal process</li>
              <li><strong>Business Transfers:</strong> Information may be transferred in case of merger, acquisition, or asset sale</li>
              <li><strong>With Your Consent:</strong> We share information when you explicitly authorize us to do so</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">4. Data Protection and Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and firewalls</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication mechanisms</li>
            </ul>
            <p>
              However, no security system is impenetrable. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your experience. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Remember your preferences</li>
              <li>Track website usage patterns</li>
              <li>Understand user behavior for optimization</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Access:</strong> Right to access and obtain a copy of your personal data</li>
              <li><strong>Correction:</strong> Right to correct inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Right to request deletion of your data</li>
              <li><strong>Opt-Out:</strong> Right to opt-out of marketing communications</li>
              <li><strong>Data Portability:</strong> Right to receive data in a portable format</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@memoinfotech.com.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws different from your home country.
            </p>
            <p>
              By using our services, you consent to the transfer of your information to countries outside your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will promptly delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">10. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other reasons. We will notify you of significant changes by posting the updated policy on our website with a new "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mt-4">
              <p className="mb-2"><strong>MEMO InfoTech</strong></p>
              <p className="mb-2">Email: privacy@memoinfotech.com</p>
              <p className="mb-2">Phone: +91 63699 57006</p>
              <p>Location: India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
