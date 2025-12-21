import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure favicon is set programmatically (matches how other logos are used in JS)
function ensureFavicon(href: string) {
  try {
    const head = document.getElementsByTagName('head')[0];
    let link: HTMLLinkElement | null = head.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      head.appendChild(link);
    }
    // set correct MIME type and sizes for PNG favicon
    if (href.endsWith('.png')) {
      link.type = 'image/png';
      try { (link as any).sizes = '32x32'; } catch {}
    } else if (href.endsWith('.svg')) {
      link.type = 'image/svg+xml';
    } else {
      link.type = 'image/png';
      try { (link as any).sizes = '32x32'; } catch {}
    }
    link.href = href;
  } catch (e) {
    // silent fallback in environments without DOM (e.g. SSR build steps)
    // console.warn('Could not set favicon programmatically', e);
  }
}

// Set the meta/favicon to absolute production URL so crawlers see correct asset
ensureFavicon('https://www.memoinfotech.com/assets/favicon.png');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
