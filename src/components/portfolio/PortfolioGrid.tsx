import React from 'react';
import { portfolioItemData } from '../../data/PortfolioItemData';
import PortfolioItem from './PortfolioItem';

export default function PortfolioGrid() {
  return (
    <div>
      <h1 id="projects" className="text-4xl my-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
        {portfolioItemData.map((item) => (
          <PortfolioItem item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
