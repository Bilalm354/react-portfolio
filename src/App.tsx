import React from 'react';
import Contact from './components/Contact';
import Info from './components/Info';
import MyName from './components/nav/MyName';
import NavBar from './components/nav/NavBar';
import PortfolioGrid from './components/PortfolioGrid';

export default function App() {
  return (
    <div className="text-center flex flex-col bg-blue-900 min-h-screen items-center justify-center text-white text-2xl">
      <MyName />
      <NavBar />
      <br />
      <br />
      <Info />
      <br />
      <br />
      <PortfolioGrid />
      <br />
      <br />
      <Contact />
    </div>
  );
}
