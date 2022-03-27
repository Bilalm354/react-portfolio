import React, { useEffect, useRef, useState } from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Info from './components/Info';
import MyName from './components/nav/MyName';
import NavBar from './components/nav/NavBar';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import ThreeDRenderer from './components/ThreeDdContainer';

const CANVAS_RATIO = 0.8;

export default function App() {
  const container = useRef<any>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);

  const calculateCanvasWidth = () => container.current.offsetWidth * CANVAS_RATIO;

  useEffect(() => {
    setCanvasWidth(calculateCanvasWidth());
  }, [container.current]);

  window.addEventListener('resize', () => {
    if (container.current) {
      setCanvasWidth(calculateCanvasWidth());
    }
  });

  return (
    <div
      className="text-center flex flex-col bg-blue-900 min-h-screen items-center justify-center text-white text-2xl space-y-5 py-16 mb-16"
      ref={container}
    >
      <MyName />
      <NavBar />
      <ThreeDRenderer width={canvasWidth} />
      <Info />
      <PortfolioGrid />
      <ContactForm />
      <Contact />
    </div>
  );
}
