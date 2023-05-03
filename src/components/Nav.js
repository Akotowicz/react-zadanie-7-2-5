import React from 'react';

export default function Nav({ items }) {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '2rem' }}>
        {items.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </nav>
  );
}
