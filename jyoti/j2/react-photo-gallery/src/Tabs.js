import React from 'react';
import './Tabs.css';

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={`tab-button ${activeTab === 'PRE-PRIMARY' ? 'active' : ''}`}
        onClick={() => setActiveTab('PRE-PRIMARY')}
      >
        PRE-PRIMARY
      </button>
      <button
        className={`tab-button ${activeTab === 'GRADES I TO X' ? 'active' : ''}`}
        onClick={() => setActiveTab('GRADES I TO X')}
      >
        GRADES I TO X
      </button>
      <button
        className={`tab-button ${activeTab === 'SR. SECONDARY' ? 'active' : ''}`}
        onClick={() => setActiveTab('SR. SECONDARY')}
      >
        SR. SECONDARY
      </button>
    </div>
  );
}

export default Tabs;
