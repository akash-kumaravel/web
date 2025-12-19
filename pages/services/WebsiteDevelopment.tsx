import React, { useEffect } from 'react';

const WebsiteDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = 'Website Development — MEMO InfoTech';
    const desc = 'High-performance website development by MEMO InfoTech — SEO-friendly, accessible, and conversion-focused sites that scale.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  return (
    <main className="pt-36 pb-20 container mx-auto px-6">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Website Development</h1>
        <p className="text-gray-600 mt-4">Production-ready websites built for performance, accessibility and measurable growth.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/contact/" className="px-6 py-3 bg-[#007BFF] text-white rounded-full font-bold">Request a Quote</a>
          <a href="/services/web-design/" className="px-6 py-3 border border-gray-200 rounded-full font-bold">View Design Services</a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">What we deliver</h2>
          <p className="text-gray-600 mb-4">From marketing sites to complex web applications, we build fast, secure, and maintainable websites with clear business outcomes in mind.</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Mobile-first, responsive development</li>
            <li>SEO-friendly HTML structure and meta management</li>
            <li>Performance optimization (Lighthouse-focused)</li>
            <li>Accessibility (WCAG) and semantic markup</li>
            <li>CI/CD and scalable hosting setup</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Technology & integrations</h3>
          <p className="text-gray-600 mb-4">We use modern stacks (React, TypeScript, Next.js, Node.js) and integrate analytics, search, and payment providers as needed.</p>
          <h4 className="font-semibold mb-2">Typical project</h4>
          <p className="text-gray-600">Discovery → Design → Development → QA → Launch → Optimization. Expect transparent timelines and deliverables.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-4">Frequently asked</h3>
        <div className="space-y-4 text-gray-600">
          <div>
            <strong>How long does a site take?</strong>
            <p className="mt-1">Typical marketing site: 4–8 weeks. Web apps vary by scope.</p>
          </div>
          <div>
            <strong>Do you handle hosting?</strong>
            <p className="mt-1">Yes — we can deploy and manage hosting on platforms like Vercel, Netlify, or AWS.</p>
          </div>
        </div>
      </section>

      <nav className="max-w-5xl mx-auto">
        <h4 className="font-bold mb-3">Related services</h4>
        <ul className="flex flex-wrap gap-4">
          <li><a href="/services/web-design/" className="text-[#007BFF]">Web Design</a></li>
          <li><a href="/services/ui-ux-design/" className="text-[#007BFF]">UI/UX Design</a></li>
          <li><a href="/services/app-development/" className="text-[#007BFF]">App Development</a></li>
        </ul>
      </nav>
    </main>
  );
};

export default WebsiteDevelopment;
