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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-1">
      <label>Name</label>
      <input type="text" name="user_name" className="text-black " />
      <label>Email</label>
      <input type="email" name="user_email" className="text-black " />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="border-2 py-1 mt-2" />
    </form>
  );
}
