import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service — MEMO InfoTech';
    const desc = 'Terms of Service for MEMO InfoTech. Read our terms and conditions for using our website and services.';
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-500">Last updated: December 1, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-black mb-4">Introduction</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Client," or "you") and MEMO InfoTech ("Company," "we," "us," or "our"). By accessing and using our website and services, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree with any part of these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">1. Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our website and services for lawful purposes. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Reproduce, duplicate, copy, or sell services or content from our website</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Transmit any harmful, malicious, or offensive content</li>
              <li>Engage in any form of harassment or abuse</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">2. Intellectual Property Rights</h2>
            <h3 className="text-2xl font-bold text-black mb-2">2.1 Our Content</h3>
            <p>
              All content on our website, including text, graphics, images, logos, videos, and software, is the exclusive property of MEMO InfoTech or its content suppliers and is protected by copyright and intellectual property laws.
            </p>

            <h3 className="text-2xl font-bold text-black mb-2 mt-6">2.2 Your Content</h3>
            <p>
              When you submit content (such as project briefs, feedback, or materials) to us, you grant MEMO InfoTech a non-exclusive, worldwide, royalty-free license to use, modify, and incorporate such content in our work and services.
            </p>

            <h3 className="text-2xl font-bold text-black mb-2 mt-6">2.3 Deliverables</h3>
            <p>
              All work deliverables, designs, code, and other materials created by MEMO InfoTech for you remain the intellectual property of MEMO InfoTech until full payment is received. Upon payment, ownership is transferred to you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">3. Service Terms</h2>
            <h3 className="text-2xl font-bold text-black mb-2">3.1 Project Scope</h3>
            <p>
              Services will be provided according to the agreed-upon scope outlined in your project proposal or contract. Changes to scope may result in additional costs and timeline adjustments.
            </p>

            <h3 className="text-2xl font-bold text-black mb-2 mt-6">3.2 Payment Terms</h3>
            <p>
              Payment terms, invoicing, and payment methods will be specified in your project agreement. Late payments may result in project suspension.
            </p>

            <h3 className="text-2xl font-bold text-black mb-2 mt-6">3.3 Refund Policy</h3>
            <p>
              Refunds are subject to our project completion and payment terms. Please refer to your specific contract for refund conditions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, MEMO InfoTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption, even if advised of the possibility of such damages.
            </p>
            <p>
              Our total liability under these Terms shall not exceed the total amount paid by you for services in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">5. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy or completeness of content</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">6. User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Maintaining the confidentiality of login credentials</li>
              <li>Providing accurate and complete information</li>
              <li>Ensuring compliance with all applicable laws</li>
              <li>Obtaining necessary permissions for content provided to us</li>
              <li>Backing up important data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">7. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of the relationship.
            </p>
            <p>
              Confidential information does not include information that is: publicly available, independently developed, or received from third parties without confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">8. Termination</h2>
            <p>
              Either party may terminate the service agreement with written notice as specified in the project contract. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Outstanding payments become immediately due</li>
              <li>Work in progress may be halted</li>
              <li>Deliverables are released upon payment completion</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">11. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms shall first be addressed through good-faith negotiation. If negotiation fails, disputes shall be resolved through mediation or arbitration as specified in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full effect.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">13. Entire Agreement</h2>
            <p>
              These Terms, along with any project-specific agreements, constitute the entire agreement between you and MEMO InfoTech and supersede all prior negotiations, understandings, and agreements.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-4">14. Contact Us</h2>
            <p>
              For questions or concerns regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mt-4">
              <p className="mb-2"><strong>MEMO InfoTech</strong></p>
              <p className="mb-2">Email: legal@memoinfotech.com</p>
              <p className="mb-2">Phone: +91 63699 57006</p>
              <p>Location: India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
