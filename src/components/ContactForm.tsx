import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const onSubmit = () => {
    // alert(`name: ${name}`);
    // alert(`email: ${email}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event: any) => setName(event.target.value)}
        className="text-black"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event: any) => setEmail(event.target.value)}
        className="text-black"
      />
      <textarea placeholder="Message" />
      <button type="submit" className="border-2 p-2" onClick={onSubmit}>Submit</button>
    </div>
  );
}
