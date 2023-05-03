import React from 'react';

export default function Section({ img, title, text }) {
  return (
    <section>
      <h2>{title}</h2>
      <img {...img} />
      <p>{text}</p>
    </section>
  );
}
