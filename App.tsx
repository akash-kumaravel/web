import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import WebDesign from './pages/services/WebDesign';
import UIUXDesign from './pages/services/UIUXDesign';
import AppDevelopment from './pages/services/AppDevelopment';
import Branding from './pages/services/Branding';
import GraphicDesign from './pages/services/GraphicDesign';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Apply from './pages/Apply';
import Academy from './pages/Academy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;