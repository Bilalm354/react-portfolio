import React from 'react';
import NavItem from './NavItem';

export default function NavBar() {
  return (
    <div className="absolute top-0 right-0 p-4">
      <NavItem text="CV" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/edit?usp=sharing" />
      <NavItem text="CV (PDF)" link="https://docs.google.com/document/d/1FHzaHQE2R8jK0bv6rl2TZqD8Hq2swN-KYv-3TuFMG74/export?format=pdf" />
      <NavItem text="Interactive CV" link="#" />
      <NavItem text="Portfolio" link="#" />
      <NavItem text="Contact" link="#" />
    </div>
  );
}
