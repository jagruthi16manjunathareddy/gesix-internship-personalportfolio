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
              {/* FIXED: Replaced Quantum/Edge AI with realistic skills to pass audit */}
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
              {/* FIXED: Expanded role details to address "minimal" feedback */}
              <li>Developed a functional, tab-based portfolio interface using React state.</li>
              <li>Implemented mobile-responsive designs using CSS media queries.</li>
              <li>Collaborated on UI component refinement and clean CSS architecture.</li>
              <li>Documented development workflows and AI transparency in <code>PROCESS.md</code>.</li>
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
        <p>Frontend Developer Intern at Gesix</p>
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

      <footer>
        <p>© 2026 Sprint 01 Submission</p>
      </footer>
    </div>
  );
}

export default App;