import React from 'react';
import Section from './Section';

export default function Article() {
  return (
    <article>
      <h1>Popular web browsers</h1>

      <Section
        title="Firefox"
        img={{
          src: 'https://www.paulirish.com/lovesyou/new-browser-logos/firefox-512.png',
          alt: '',
        }}
        text="Lorem ipsum"
      />

      <Section
        title="Google Chrome"
        img={{
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png',
          alt: '',
        }}
        text="Lorem ipsum"
      />

      <Section
        title="Microsoft edge"
        img={{
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/2048px-Microsoft_Edge_logo_%282019%29.svg.png',
          alt: '',
        }}
        text="Lorem ipsum"
      />
    </article>
  );
}
