import React from 'react';
import { PortfolioItemData } from '../data/PortfolioItemData';

interface PortfolioItemProps {
  item: PortfolioItemData
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const {
    title, description, url,
  } = item;

  return (
    <a href={url} className="border-2 p-8 rounded-2xl bg-red-800 hover:bg-red-900 w-60">
      {title}
      <br />
      {description}
    </a>
  );
}
