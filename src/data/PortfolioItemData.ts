export interface PortfolioItemData {
  title: string;
  description: string;
  imagePath: string;
  url: string;
}

export const portfolioItemData: PortfolioItemData[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  .map((num) => ({
    title: `title${num}`,
    description: `description${num}`,
    imagePath: 'img/',
    url: '#',
  }));
