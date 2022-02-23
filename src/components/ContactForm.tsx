import React from 'react';

export default function ContactForm() {
  return (
    <div>
      <input placeholder="Name" />
      <br />
      <br />
      <input placeholder="Email" />
      <br />
      <br />
      <textarea placeholder="Message" />
      <br />
      <br />
      <button type="submit" className="border-2 p-2">Submit</button>
    </div>
  );
}
