import React from 'react';
import { PortfolioItemData } from '../../data/PortfolioItemData';

// TODO: handle missing imageFileName

interface PortfolioItemProps {
  item: PortfolioItemData
}

const IMAGE_PATH_PREFIX = 'img/portfolio/';

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const {
    title, url, imageFileName, code,
  } = item;

  const codeLink = code !== '#' && <a className="underline text-sm" href={code}><p>Code</p></a>;

  return (
    <div>
      <div className="hover:opacity-50">
        <a href={url}>
          <img src={IMAGE_PATH_PREFIX + imageFileName} alt={title} className="rounded-lg" />
          <p className="text-m">{title}</p>
        </a>
      </div>
      {codeLink}
    </div>
  );
}
