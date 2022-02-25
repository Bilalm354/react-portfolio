import React from 'react';
import { portfolioItemData } from '../data/PortfolioItemData';
import PortfolioItem from './PortfolioItem';

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-3/5">
      {portfolioItemData.map((item) => (
        <PortfolioItem item={item} key={item.title} />
      ))}
    </div>
  );
}
