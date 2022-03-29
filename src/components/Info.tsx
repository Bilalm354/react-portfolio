import React from 'react';

export default function Info() {
  return (
    <div className="text-base md:text-xl leading-relaxed">
      <p>
        Hiya, I am Bilal. I made this portfolio.
      </p>
      <p>
        I used React, Typescript, JavaScript, Tailwind, ESLint, Husky and more.
      </p>
      <p>
        You can see the code here:
        {' '}
        <a href="https://github.com/Bilalm354/react-portfolio">
          <button type="button" className="underline">
            Code
          </button>
        </a>
      </p>
    </div>
  );
}
