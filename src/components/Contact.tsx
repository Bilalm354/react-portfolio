import React from 'react';
import { SiGithub } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="fixed flex bottom-0 justify-evenly p-4 text-xl w-screen bg-blue-900 border-t-2">
      <a href="mailto:bilalm354@gmail.com">Email me bilalm354@gmail.com</a>
      <a href="https://github.com/Bilalm354" target="_blank" rel="noreferrer" className="flex gap-2 align-middle">
        {' '}
        Github
        <SiGithub />
      </a>
    </div>
  );
}
