import React, { useEffect } from 'react';

const AppDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = 'App Development — MEMO InfoTech';
    const desc = 'Built-for-scale mobile apps (iOS, Android, cross-platform) with robust backends and analytics.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = desc;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = desc; document.head.appendChild(meta); }
  }, []);

  return (
    <main className="pt-36 pb-20 container mx-auto px-6">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">App Development</h1>
        <p className="text-gray-600 mt-4">Native and cross-platform mobile apps backed by scalable APIs and analytics.</p>
      </header>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">What we build</h2>
          <p className="text-gray-600 mb-4">Products that users enjoy and businesses rely on — from consumer apps to internal productivity tools.</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Native iOS & Android development</li>
            <li>Cross-platform (React Native / Flutter)</li>
            <li>Backend APIs, push notifications, and analytics</li>
            <li>App Store & Play Store submission</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Delivery</h3>
          <p className="text-gray-600 mb-4">We deliver with automated testing and CI/CD to ensure quality and rapid iteration post-launch.</p>
          <a href="/contact/" className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold">Talk about your app</a>
        </div>
      </section>

      <nav className="max-w-5xl mx-auto">
        <h4 className="font-bold mb-3">Related</h4>
        <ul className="flex gap-4">
          <li><a href="/services/website-development/" className="text-[#007BFF]">Website Development</a></li>
          <li><a href="/services/ui-ux-design/" className="text-[#007BFF]">UI/UX Design</a></li>
        </ul>
      </nav>
    </main>
  );
};

export default AppDevelopment;
