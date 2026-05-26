import React from 'react';
import SEO from '../components/SEO';
import { ArrowLeft, CheckCircle, Zap, Layers, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileShowcase from '../components/MobileShowcase';

const BGwrap: React.FC = () => {
  return (
    <div className="pt-40 pb-20 w-full bg-white">
      <SEO
        title="BGwrap — Background Remover Mobile App"
        description="BGwrap is a fast background remover mobile app. Remove backgrounds, refine edges, and export transparent images quickly."
        canonical="/bgwrap/"
      />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-[#007BFF] hover:text-black transition-colors mb-6 font-bold">
            <ArrowLeft size={18} /> Back to Home
          </a>
          <h1 className="text-5xl md:text-[4rem] font-bold font-['Syne'] leading-none text-black mb-4">BGwrap</h1>
          <p className="text-xl text-gray-500">Background Remover mobile app — remove backgrounds, refine edges, and export in high quality.</p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-b from-white to-white">
            <div className="p-12 flex flex-col items-center gap-8">
              <MobileShowcase imageSrc="/assets/BGwrap.png" alt="BGwrap app screenshot" />
              <div className="text-center max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold">BGwrap</h3>
                <p className="text-gray-600 text-lg">Background Remover app — remove backgrounds, refine edges, and export in high quality. Works on photos, product shots, and portraits.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">What it does</h2>
            <p className="text-gray-600 mb-4">BGwrap intelligently removes image backgrounds using on-device models and fast heuristics. Ideal for product shots, portraits, and quick edits on mobile.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Automatic background detection</li>
              <li>Refine brush for manual touch-ups</li>
              <li>High-quality PNG/JPEG export</li>
              <li>Batch processing and quick previews</li>
            </ul>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#007BFF] shadow-sm">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Automatic Detection</h3>
                </div>
                <p className="text-gray-600">Accurate automatic background removal with edge-aware masks.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#007BFF] shadow-sm">
                    <Zap size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Fast Processing</h3>
                </div>
                <p className="text-gray-600">Optimized for mobile — get results in seconds without sacrificing quality.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#007BFF] shadow-sm">
                    <Layers size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Refine Tools</h3>
                </div>
                <p className="text-gray-600">Manual refine brush, restore/erase, and edge smoothing for perfect cutouts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-[#007BFF]"><span className="font-bold">1</span></div>
                <h4 className="font-bold mb-2">Upload</h4>
                <p className="text-gray-600">Choose a photo from your gallery or take a new one with the camera.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-[#007BFF]"><span className="font-bold">2</span></div>
                <h4 className="font-bold mb-2">Auto Process</h4>
                <p className="text-gray-600">AI detects the subject and removes the background automatically.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-[#007BFF]"><span className="font-bold">3</span></div>
                <h4 className="font-bold mb-2">Export</h4>
                <p className="text-gray-600">Refine using tools and export as PNG or JPG. Save or share instantly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Use cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold mb-2">E-commerce</h4>
                <p className="text-gray-600">Create clean product shots with transparent backgrounds for catalogs and marketplaces.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold mb-2">Social Media</h4>
                <p className="text-gray-600">Design eye-catching posts and stories with quick background removal.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold mb-2">Profile Photos</h4>
                <p className="text-gray-600">Make professional headshots by removing the background and adding a clean backdrop.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 mb-6">
              BGwrap respects your privacy and handles user data with care. For details on what information is collected and how it’s protected, review the <Link to="/bgwrap-privacy-policy" className="text-[#007BFF] font-semibold hover:text-black">BGwrap Privacy Policy</Link>.
            </p>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="p-4 bg-gray-50 rounded-2xl">
                <summary className="font-bold cursor-pointer">Is BGwrap free to use?</summary>
                <p className="mt-2 text-gray-600">BGwrap is completely free to use — no cost and no signup required.</p>
              </details>
              <details className="p-4 bg-gray-50 rounded-2xl">
                <summary className="font-bold cursor-pointer">Where are images processed?</summary>
                <p className="mt-2 text-gray-600">Processing can occur on-device or on our servers depending on the selected mode and device capability.</p>
              </details>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gradient-to-r from-[#0066FF] to-[#0050D4] text-white rounded-3xl">
          <div className="max-w-5xl mx-auto text-center px-4 py-8">
            <h3 className="text-3xl md:text-4xl font-bold">BGwrap — Completely free</h3>
            <p className="mx-auto max-w-2xl mt-2 text-lg">Download the app and start removing backgrounds in seconds — no cost, no sign-up required.</p>

            <div className="mt-6 flex items-center justify-center">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white text-black px-6 py-3 rounded-2xl shadow-md">
                <Download size={20} />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGwrap;
