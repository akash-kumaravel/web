import React, { useEffect } from 'react';

const WebDesign: React.FC = () => {
  useEffect(() => {
    document.title = 'Web Design — MEMO InfoTech';
    const desc = 'Brand-led web design by MEMO InfoTech — visual systems, interaction design, and prototypes that convert.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  return (
    <main className="pt-36 pb-20 container mx-auto px-6">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Web Design</h1>
        <p className="text-gray-600 mt-4">Design systems and page-level design that reflect your brand and improve conversion.</p>
      </header>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our design process</h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-3">
            <li>Research & brand alignment</li>
            <li>Wireframes & UX flows</li>
            <li>High-fidelity mockups</li>
            <li>Prototype & usability testing</li>
            <li>Developer handoff with design tokens</li>
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Deliverables</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Page templates & component specs</li>
            <li>Interactive prototypes (Figma)</li>
            <li>Design systems and tokens</li>
          </ul>
        </div>
      </section>

      <div className="max-w-5xl mx-auto mb-12">
        <a href="/contact/" className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold">Start a Design Project</a>
      </div>

      <nav className="max-w-5xl mx-auto">
        <h4 className="font-bold mb-3">Related</h4>
        <ul className="flex gap-4">
          <li><a href="/services/branding/" className="text-[#007BFF]">Branding</a></li>
          <li><a href="/services/graphic-design/" className="text-[#007BFF]">Graphic Design</a></li>
        </ul>
      </nav>
    </main>
  );
};

export default WebDesign;
