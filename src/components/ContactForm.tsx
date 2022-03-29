import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState('');
  const onSubmit = () => {
    // alert(`name: ${name}`);
    // alert(`email: ${email}`);
    // alert(`phoneNumber: ${phoneNumber}`);
    // alert(`message: ${message}`);
  };

  return (
    <div id="contact" className="flex flex-col gap-4 w-2/3">
      <h1>Get in touch</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event: any) => setName(event.target.value)}
        className="text-black p-2"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event: any) => setEmail(event.target.value)}
        className="text-black p-2"
      />
      <input
        type="number"
        placeholder="Number"
        value={phoneNumber}
        onChange={(event: any) => setPhoneNumber(event.target.value)}
        className="text-black p-2"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(event: any) => setMessage(event.target.value)}
        className="text-black h-40 p-2"
      />
      <button type="submit" className="border-2 p-2 bg-blue-700 hover:bg-blue-900" onClick={onSubmit}>Submit</button>
    </div>
  );
}
