import React from 'react';

interface NavItemProps {
  text: string;
  link: string;
  openInNewTab?: boolean;
}

export default function NavItem({ text, link, openInNewTab: newTab }: NavItemProps) {
  if (newTab) {
    return (
      <a className="px-3 hover:underline block" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    );
  }

  return (
    <a className="px-3 hover:underline block" href={link}>
      {text}
    </a>
  );
}

NavItem.defaultProps = {
  openInNewTab: false,
};
