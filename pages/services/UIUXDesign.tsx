import React, { useEffect } from 'react';

const UIUXDesign: React.FC = () => {
  useEffect(() => {
    document.title = 'UI/UX Design — MEMO InfoTech';
    const desc = 'User-centered UI/UX design — research, wireframes, prototypes and usability testing to improve conversion and retention.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  return (
    <main className="pt-36 pb-20 container mx-auto px-6">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">UI/UX Design</h1>
        <p className="text-gray-600 mt-4">Research-driven interfaces that reduce friction and increase engagement.</p>
      </header>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Approach</h2>
        <p className="text-gray-600 mb-4">We validate design decisions with users early. Research, rapid prototyping, and usability testing are core to our process.</p>

        <h3 className="text-xl font-semibold mb-2">Typical outputs</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>User journeys & personas</li>
          <li>Wireframes & clickable prototypes</li>
          <li>Interaction specs for developers</li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto mb-12">
        <a href="/contact/" className="inline-block bg-[#007BFF] text-white px-6 py-3 rounded-full font-bold">Book a UX Review</a>
      </div>

      <nav className="max-w-4xl mx-auto">
        <h4 className="font-bold mb-3">Related</h4>
        <ul className="flex gap-4">
          <li><a href="/services/web-design/" className="text-[#007BFF]">Web Design</a></li>
          <li><a href="/services/website-development/" className="text-[#007BFF]">Website Development</a></li>
        </ul>
      </nav>
    </main>
  );
};

export default UIUXDesign;
