import React, { useEffect } from 'react';

const GraphicDesign: React.FC = () => {
  useEffect(() => {
    document.title = 'Graphic Design — MEMO InfoTech';
    const desc = 'Graphic design by MEMO InfoTech — motion posters, social assets and marketing collateral that amplify your message.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  return (
    <main className="pt-36 pb-20 container mx-auto px-6">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Graphic Design</h1>
        <p className="text-gray-600 mt-4">Motion posters, campaign assets, and visual content that drives engagement.</p>
      </header>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Motion Posters & short-form video</li>
          <li>Social and marketing assets</li>
          <li>Illustrations and iconography</li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto mb-12">
        <a href="/services/branding/" className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold">See Branding Work</a>
      </div>

      <nav className="max-w-4xl mx-auto">
        <h4 className="font-bold mb-3">Related</h4>
        <ul className="flex gap-4">
          <li><a href="/services/web-design/" className="text-[#007BFF]">Web Design</a></li>
          <li><a href="/services/graphic-design/" className="text-[#007BFF]">Portfolio</a></li>
        </ul>
      </nav>
    </main>
  );
};

export default GraphicDesign;
