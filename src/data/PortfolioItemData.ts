enum LanguagesAndFrameworks {
  JavaScript,
  TypeScript,
  React,
  HTML,
  CSS,
  Canvas,
  ThreeJS,
}

export interface PortfolioItemData {
  title: string;
  description: string;
  imageFileName?: string;
  url: string;
  code?: string;
  languagesAndFrameworks?: LanguagesAndFrameworks[]
}

export const portfolioItemData: PortfolioItemData[] = [
  {
    title: 'React Tasks List and Timer',
    description: '',
    imageFileName: 'tasklist-timer.gif',
    url: 'https://focus-tasks-bilalm354.netlify.com/',
    code: '#',
  },
  {
    title: 'JavaScript Todo List',
    description: 'A Todo List built in HTML, CSS and JavaScript',
    imageFileName: 'todolist-16-9.gif',
    url: 'https://bilalm354.github.io/Javascript-Todo-List/',
    code: 'https://github.com/Bilalm354/Javascript-Todo-List',
  },
  {
    title: 'React Stopwatch and Timer',
    description: '',
    imageFileName: 'stopwatch-countdown.gif',
    url: 'https://bilalm354-stopwatch-countdown.netlify.com',
    code: '#',
  },
  {
    title: 'Kitchen Planner',
    description: 'TypeScript and React Kitchen Planner',
    imageFileName: 'mini-planner.gif',
    url: 'https://github.com/Bilalm354/mini-planner/tree/feb-2020',
    code: 'https://github.com/Bilalm354/mini-planner/tree/feb-2020',
  },
  {
    title: 'Welford Bouquet Front Page',
    description: 'I was provided with a PDF of the design and the images on the page to use. I used CSS grid to display the main body of the page.',
    imageFileName: 'welford.png',
    url: 'https://bilalm354.github.io/Welford-Bouquet',
    code: 'https://github.com/Bilalm354/Welford-Bouquet',
  },
  {
    title: 'JavaScript Breakout',
    description: '',
    imageFileName: 'breakout.gif',
    url: 'https://bilalm354.github.io/breakout/',
    code: '#',
  },
  {
    title: 'Responsive Site',
    description: 'I was provided with the pdf design of both desktop and mobile layouts as well as the HTML for the website. I edited the HTML and added my own CSS to meet the design.',
    imageFileName: 'frontendtest.gif',
    url: 'https://bilalm354.github.io/frontend_test',
    code: 'https://github.com/Bilalm354/frontend_test',
  },
  {
    title: 'My first portfolio',
    description: 'My first portfolio, designed and coded by me.',
    imageFileName: 'old-portfolio.gif',
    url: 'https://bilalm354.github.io/old-portfolio/',
    code: 'https://github.com/Bilalm354/old-portfolio',
  },
  {
    title: 'Pong',
    description: 'Classic pong game built in JavaScript',
    imageFileName: 'pong.gif',
    url: 'https://bilalm354.github.io/old-portfolio/pong.html',
    code: '#',
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Rock Paper Scissors game built with HTML, CSS and JavaScript.',
    imageFileName: 'rockPaperScissors.gif',
    url: 'https://bilalm354.github.io/rock-paper-scissors',
    code: 'https://github.com/Bilalm354/rock-paper-scissors',
  },
];
