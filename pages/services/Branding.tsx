import React, { useEffect } from 'react';

const Branding: React.FC = () => {
  useEffect(() => {
    document.title = 'Branding — MEMO InfoTech';
    const desc = 'Strategic branding by MEMO InfoTech — visual identity, messaging, and design systems that help you stand out.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  return (
    <main className="pt-36 pb-20 container mx-auto px-6">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Branding</h1>
        <p className="text-gray-600 mt-4">Identity systems and messaging that position your business for growth.</p>
      </header>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">What we do</h2>
        <p className="text-gray-600 mb-4">We build brand foundations: naming, logo systems, color palettes, typography and guidelines that scale across products and channels.</p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Logo & visual identity</li>
          <li>Brand guidelines</li>
          <li>Messaging and tone-of-voice</li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto mb-12">
        <a href="/contact/" className="inline-block bg-[#007BFF] text-white px-6 py-3 rounded-full font-bold">Start Branding</a>
      </div>

      <nav className="max-w-4xl mx-auto">
        <h4 className="font-bold mb-3">Related</h4>
        <ul className="flex gap-4">
          <li><a href="/services/graphic-design/" className="text-[#007BFF]">Graphic Design</a></li>
          <li><a href="/services/web-design/" className="text-[#007BFF]">Web Design</a></li>
        </ul>
      </nav>
    </main>
  );
};

export default Branding;
