import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Apply from './pages/Apply';
import Academy from './pages/Academy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import WebDesignDevelopment from './pages/WebDesignDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import GraphicDesignServices from './pages/GraphicDesignServices';
import DigitalMarketingServices from './pages/DigitalMarketingServices';
import ECommerceSolutions from './pages/ECommerceSolutions';
import HostingCloudServices from './pages/HostingCloudServices';
import AIAutomation from './pages/AIAutomation';
import TestingQA from './pages/TestingQA';
import TrainingConsulting from './pages/TrainingConsulting';
import ContentDocumentation from './pages/ContentDocumentation';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-design-development" element={<WebDesignDevelopment />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/graphic-design-services" element={<GraphicDesignServices />} />
          <Route path="/digital-marketing-services" element={<DigitalMarketingServices />} />
          <Route path="/e-commerce-solutions" element={<ECommerceSolutions />} />
          <Route path="/hosting-cloud-it" element={<HostingCloudServices />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/testing-qa" element={<TestingQA />} />
          <Route path="/training-consulting" element={<TrainingConsulting />} />
          <Route path="/content-documentation" element={<ContentDocumentation />} />
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
