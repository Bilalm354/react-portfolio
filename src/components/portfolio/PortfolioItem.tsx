import React from 'react';
import {
  SiCss3, SiHtml5, SiJavascript, SiReact, SiThreedotjs, SiTypescript,
} from 'react-icons/si';
import { PortfolioItemData } from '../../data/PortfolioItemData';

// TODO: handle missing imageFileName

interface PortfolioItemProps {
  item: PortfolioItemData
}

const IMAGE_PATH_PREFIX = 'img/portfolio/';

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const {
    title, url, imageFileName, code, languagesAndFrameworks,
  } = item;

  const Icons = {
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    React: <SiReact />,
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    ThreeJS: <SiThreedotjs />,
  };

  const codeLink = code !== '#' && <a className="underline text-sm" href={code}><p>Code</p></a>;

  return (
    <div>
      <div className="hover:opacity-50">
        <a href={url}>
          <img src={IMAGE_PATH_PREFIX + imageFileName} alt={title} className="rounded-lg" />
          <p className="text-m">{title}</p>
          <div id="logos" className="flex justify-center gap-5 mt-1">
            {languagesAndFrameworks
            && languagesAndFrameworks
              .map((language) => Icons[language])}
          </div>
        </a>
      </div>
      {codeLink}
    </div>
  );
}
