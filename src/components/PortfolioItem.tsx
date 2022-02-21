import React from 'react';
import { PortfolioItemData } from '../data/PortfolioItemData';

interface PortfolioItemProps {
  item: PortfolioItemData
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const { title, description, imagePath } = item;

  return (
    <div>
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
