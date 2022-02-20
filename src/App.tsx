import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-5xl font-bold underline">
          Bilal Minhas
        </h1>
        <br />
        <div className="Nav-bar">
          <p>
            Hiya, I am Bilal.
          </p>
          <p>
            I made this portfolio.
          </p>
          <p>
            I used React, Typescript, JavaScript, Tailwind, ESLint, Husky and more.
          </p>
          <p>
            You can see the code here:
            {' '}
            <a href="https://github.com/Bilalm354/react-portfolio">Code</a>
          </p>
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
