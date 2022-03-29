/* eslint-disable max-len */
import React from 'react';

export default function Info() {
  return (
    <div className="text-base md:text-xl leading-relaxed mt-8">
      <p>
        Hiya, I am Bilal. I am a Software Engineer with 2 years of experience.
      </p>
      <p>
        I made this portfolio with React, Typescript, JavaScript, Tailwind, ESLint, Husky and more.
      </p>
      <p>
        You can see the code here:
        {' '}
        <a href="https://github.com/Bilalm354/react-portfolio" target="_blank" rel="noreferrer">
          <button type="button" className="underline">
            Code
          </button>
        </a>
      </p>
    </div>
  );
}
