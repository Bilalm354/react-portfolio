import React, { useEffect, useRef, useState } from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Info from './components/Info';
import MyName from './components/nav/MyName';
import NavBar from './components/nav/NavBar';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import ThreeDViewer from './components/ThreeDdContainer';

export default function App() {
  const container = useRef<any>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);

  const getContainerWidth = () => container.current.offsetWidth;

  useEffect(() => {
    setCanvasWidth(getContainerWidth());
  }, [container.current]);

  window.addEventListener('resize', () => {
    if (container.current) {
      setCanvasWidth(getContainerWidth());
    }
  });

  return (
    <div
      className="text-center flex flex-col bg-blue-900 min-h-screen items-center justify-center text-white text-2xl space-y-5 py-16 mb-16"
    >
      <div
        className="text-center flex flex-col w-4/5 md:w-3/5 items-center justify-center"
        ref={container}
      >
        <MyName />
        <NavBar />
        <ThreeDViewer width={canvasWidth} />
        <Info />
        <PortfolioGrid />
        <ContactForm />
        <Contact />
      </div>
    </div>
  );
}
