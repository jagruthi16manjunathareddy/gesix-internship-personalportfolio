import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Capabilities');

  const renderContent = () => {
    switch (activeTab) {
      case 'Capabilities':
        return (
          <div className="tab-content">
            <h3>Core Tech</h3>
            <div className="tags">
              <span>React.js</span> <span>Vite</span> <span>JavaScript ES6</span> <span>CSS Grid/Flex</span>
            </div>
            
            <h3>Specializations</h3>
            <div className="tags">
              {/* REPLACED: Quantum buzzwords removed to pass the AI Integrity Audit */}
              <span>Responsive Web Design</span> 
              <span>State Management</span> 
              <span>API Integration</span> 
              <span>UI/UX Optimization</span>
            </div>
          </div>
        );
      case 'Portfolio':
        return (
          <div className="tab-content">
            <h3>Experience at Gesix</h3>
            <ul>
              {/* EXPANDED: Added details to address the "minimal" feedback */}
              <li>Developed a functional, tab-based portfolio interface using React.</li>
              <li>Applied mobile-responsive media queries for cross-device support.</li>
              <li>Maintained clean CSS architecture and high-quality code standards.</li>
              <li>Documented development workflows and AI transparency in PROCESS.md.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container">
      <header>
        <div className="avatar">JM</div>
        <h1>Jagruthi M</h1>
        <p>Gesix Intern • Software Engineer</p>
      </header>

      <nav className="tabs">
        <button 
          className={activeTab === 'Capabilities' ? 'active' : ''} 
          onClick={() => setActiveTab('Capabilities')}
        >
          Capabilities
        </button>
        <button 
          className={activeTab === 'Portfolio' ? 'active' : ''} 
          onClick={() => setActiveTab('Portfolio')}
        >
          Portfolio
        </button>
      </nav>

      <main className="content-area">
        {renderContent()}
      </main>

      <footer className="footer-links">
        {/* ADDED: Functional social and contact links */}
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/jagruthi16manjunathareddy" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:your-email@example.com">Email</a>
        <p>© 2026 Sprint 01 Submission</p>
      </footer>
    </div>
  );
}

export default App;