import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-bar">
          <a href="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/edit?usp=sharing">
            CV
          </a>
          <a href="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/export?format=pdf">
            CV (PDF)
          </a>
          <a href="http://www.google.com">
            Portfolio
          </a>
          <a href="http://www.google.com">
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
