import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioItemData } from '../data/PortfolioItemData';

const portfolioItemData: PortfolioItemData[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  .map((num) => ({
    title: `title${num}`,
    description: `description${num}`,
    imagePath: `imagePath${num}`,
    url: '#',
  }));

export default function PortfolioGrid() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
      {portfolioItemData.map((item) => (
        <PortfolioItem item={item} key={item.title} />
      ))}
    </div>
  );
}
