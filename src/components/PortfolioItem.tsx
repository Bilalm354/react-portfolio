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
    <a href={url} className="border-2 p-8 rounded-md bg-blue-700 hover:bg-blue-900 aspect-video">
      {title}
      <br />
      {description}
    </a>
  );
}
