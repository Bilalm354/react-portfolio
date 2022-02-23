import React from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Info from './components/Info';
import MyName from './components/nav/MyName';
import NavBar from './components/nav/NavBar';
import PortfolioGrid from './components/PortfolioGrid';

// TODO: hamburger menu for mobile
// TODO: make every button on nav bar functional or delete it
// TODO: add my github profile
// TODO: styling on mobile to prevent nav bar and my name from overlapping
// TODO: add portfolio items

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
      <ContactForm />
      <br />
      <br />
      <br />
      <Contact />
    </div>
  );
}
