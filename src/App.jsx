import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Archive from './pages/Archive';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('work');
  const [selectedProject, setSelectedProject] = useState(null);

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
        return <Work onProjectSelect={handleProjectSelect} />;
      case 'about':
        return <About />;
      case 'archive':
        return <Archive />;
      case 'detail':
        return <ProjectDetail projectSlug={selectedProject} onBack={handleBackToWork} />;
      default:
        return <Work onProjectSelect={handleProjectSelect} />;
    }
  };

  return (
    <div className="layout-container">
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className="main-content">
        {renderPageContent()}
      </main>
    </div>
  );
}
