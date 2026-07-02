import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Archive from './pages/Archive';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState('work');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lang, setLang] = useState('en');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedProject(null);
    // Scroll to top on page transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (slug) => {
    setSelectedProject(slug);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWork = () => {
    setCurrentPage('work');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'work':
        return <Work lang={lang} onProjectSelect={handleProjectSelect} />;
      case 'about':
        return <About lang={lang} />;
      case 'archive':
        return <Archive lang={lang} />;
      case 'detail':
        return <ProjectDetail lang={lang} projectSlug={selectedProject} onBack={handleBackToWork} />;
      default:
        return <Work lang={lang} onProjectSelect={handleProjectSelect} />;
    }
  };

  return (
    <div className="layout-container">
      <CustomCursor />
      <ScrollToTop />
      <Navbar lang={lang} setLang={setLang} currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className="main-content fade-in-page" key={currentPage}>
        {renderPageContent()}
      </main>
    </div>
  );
}
