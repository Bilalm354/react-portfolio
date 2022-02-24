import React from 'react';
import NavItem from './NavItem';

export default function NavBar() {
  return (
    <div>
      <div className="fixed top-0 right-0 p-4 hidden md:block">
        <NavItem text="CV" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/edit?usp=sharing" />
        <NavItem text="CV (PDF)" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/export?format=pdf" />
        <NavItem text="Interactive CV" link="#" />
        <NavItem text="Portfolio" link="#" />
        <NavItem text="Contact" link="#contact" />
      </div>
      <div className="fixed top-0 right-0 p-4 block md:hidden">
        <svg viewBox="0 0 100 70" width="35" height="35" fill="white">
          <rect width="100" height="10" rx="5" />
          <rect y="30" width="100" height="10" rx="5" />
          <rect y="60" width="100" height="10" rx="5" />
        </svg>
      </div>
    </div>
  );
}
