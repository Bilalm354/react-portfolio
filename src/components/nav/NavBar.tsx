import React, { useState } from 'react';
import NavItem from './NavItem';

// hidden md:block

export default function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div>
      <div className={`${showMobileNav ? 'flex-col' : 'hidden'} md:flex md:flex-row fixed top-0 md:right-0 p-4`} id="menu">
        <NavItem text="CV" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/edit?usp=sharing" openInNewTab />
        <NavItem text="CV (PDF)" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/export?format=pdf" openInNewTab />
        <NavItem text="Projects" link="#projects" />
        <NavItem text="Contact" link="#contact" />
      </div>
      <div className="fixed top-0 right-0 p-4 block md:hidden">
        <button type="button" onClick={() => setShowMobileNav(!showMobileNav)}>
          <svg viewBox="0 0 100 70" width="35" height="35" fill="white">
            <rect width="100" height="10" rx="5" />
            <rect y="30" width="100" height="10" rx="5" />
            <rect y="60" width="100" height="10" rx="5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
