import React from 'react';

interface NavItemProps {
  text: string;
  link: string;
}

export default function NavItem({ text, link }: NavItemProps) {
  return (
    <a className="pl-2 pr-2" href={link}>
      {text}
    </a>
  );
}
