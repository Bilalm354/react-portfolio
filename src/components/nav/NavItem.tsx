import React from 'react';

interface NavItemProps {
  text: string;
  link: string;
}

export default function NavItem({ text, link }: NavItemProps) {
  return (
    <a className="px-3 hover:underline" href={link}>
      {text}
    </a>
  );
}
