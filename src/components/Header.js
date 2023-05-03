import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <header
      style={{
        color: 'white',
        'background-color': 'black',
        padding: '20px',
        'font-size': '18px',
      }}
    >
      Navigation
      <Nav items={['Home', 'About', 'Contact']} />
    </header>
  );
}
