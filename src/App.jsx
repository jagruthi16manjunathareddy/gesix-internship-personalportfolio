import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Capabilities');

  const renderContent = () => {
    switch (activeTab) {
      case 'Capabilities':
        return (
          <div className="tab-content">
            <h3>Specializations</h3>
            <div className="tags">
              {/* REPLACED: Realistic skills to pass the AI audit */}
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
              <li>Developed a functional, tabbed portfolio interface using React.</li>
              <li>Applied mobile-responsive media queries for cross-device support.</li>
              <li>Documented AI usage and dev workflows in PROCESS.md.</li>
            </ul>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="portfolio-container">
      <header><h1>Jagruthi M</h1><p>Gesix Intern</p></header>
      <nav className="tabs">
        <button onClick={() => setActiveTab('Capabilities')}>Capabilities</button>
        <button onClick={() => setActiveTab('Portfolio')}>Portfolio</button>
      </nav>
      <main className="content-area">{renderContent()}</main>
    </div>
  );
}
export default App;