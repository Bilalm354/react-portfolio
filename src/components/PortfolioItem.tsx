import React from 'react';
import { PortfolioItemData } from '../data/PortfolioItemData';

interface PortfolioItemProps {
  item: PortfolioItemData
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const { title, description, imagePath } = item;

  return (
    <div className="border-2 p-8 rounded-2xl">
      title:
      {title}
      <br />
      description:
      {description}
      <br />
      imagePath:
      {imagePath}
    </div>
  );
}
