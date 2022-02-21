import React from 'react';
import Contact from './components/Contact';
import Info from './components/Info';
import NavBar from './components/nav/NavBar';
import PortfolioGrid from './components/PortfolioGrid';

export default function App() {
  return (
    <div className="App text-center">
      <header className="App-header flex flex-col bg-gray-800 min-h-screen items-center justify-center text-white text-3xl">
        <h1 className="text-6xl font-bold underline p-8">
          Bilal Minhas
        </h1>
        <NavBar />
        <br />
        <Info />
        <br />
        <p>
          You can see the code here:
          {' '}
          <a href="https://github.com/Bilalm354/react-portfolio">Code</a>
        </p>
        <br />
        <PortfolioGrid />
        <br />
        <Contact />
      </header>
    </div>
  );
}
