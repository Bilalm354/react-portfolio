/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// TODO: make this work by following the emailJS docs

export default function ContactUs() {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="mt-4 w-3/5">
      <h1 className="text-4xl">Get in touch</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-1 mt-4">
        <label>Name</label>
        <input type="text" name="user_name" className="text-black w-full" />
        <label>Email</label>
        <input type="email" name="user_email" className="text-black w-full" />
        <label>Message</label>
        <textarea name="message" className="text-black" />
        <input type="submit" value="Send" className="border-2 py-1 mt-2 bg-blue-700 hover:bg-blue-800 w-full" />
      </form>
    </div>
  );
}
