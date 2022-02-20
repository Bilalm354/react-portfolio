import React from 'react';
import './App.css';
import Info from './components/Info';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className="App text-center">
      <header className="App-header flex flex-col bg-gray-800 min-h-screen items-center justify-center text-white text-3xl">
        <h1 className="text-6xl font-bold underline">
          Bilal Minhas
        </h1>
        <br />
        <Info />
        <br />
        <p>
          You can see the code here:
          {' '}
          <a href="https://github.com/Bilalm354/react-portfolio">Code</a>
        </p>
        <NavBar />
      </header>
    </div>
  );
}
