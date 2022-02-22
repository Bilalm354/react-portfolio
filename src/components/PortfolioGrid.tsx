import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioItemData } from '../data/PortfolioItemData';

const portfolioItemData: PortfolioItemData[] = [{
  title: 'title',
  description: 'description',
  imagePath: 'imagePath',
},
{
  title: 'title2',
  description: 'description2',
  imagePath: 'imagePath2',
},
{
  title: 'title3',
  description: 'description3',
  imagePath: 'imagePath3',
},
{
  title: 'title4',
  description: 'description4',
  imagePath: 'imagePath4',
},
{
  title: 'title5',
  description: 'description5',
  imagePath: 'imagePath5',
},
{
  title: 'title6',
  description: 'description6',
  imagePath: 'imagePath6',
}];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-3 gap-12">
      {portfolioItemData.map((item) => (
        <PortfolioItem item={item} key={item.title} />
      ))}
    </div>
  );
}
