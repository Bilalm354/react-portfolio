import React, { useEffect, useRef, useState } from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Info from './components/Info';
import MyName from './components/nav/MyName';
import NavBar from './components/nav/NavBar';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import ThreeDRenderer from './components/ThreeDdContainer';

const MAIN_PAGE_WIDTH_FRACTION = 3 / 5;

// TODO: hamburger menu for mobile
// TODO: make every button on nav bar functional or delete it
// TODO: add my github profile
// TODO: styling on mobile to prevent nav bar and my name from overlapping

export default function App() {
  const container = useRef<any>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);

  const calculateCanvasWidth = () => container.current.offsetWidth * MAIN_PAGE_WIDTH_FRACTION;

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
      <ThreeDRenderer width={canvasWidth} />
      <MyName />
      <NavBar />
      <Info />
      <PortfolioGrid />
      <ContactForm />
      <Contact />
    </div>
  );
}
