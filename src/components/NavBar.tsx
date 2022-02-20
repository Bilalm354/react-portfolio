import React from 'react';
import NavItem from './NavItem';

export default function NavBar() {
  return (
    <div className="Nav-bar">
      <p className="float-left pl-4 pr-4">
        Bilal Minhas
      </p>
      <NavItem text="CV" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/edit?usp=sharing" />
      <NavItem text="CV (PDF)" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/export?format=pdf" />
      <NavItem text="Portfolio" link="#" />
      <NavItem text="Contact" link="#" />
    </div>
  );
}
