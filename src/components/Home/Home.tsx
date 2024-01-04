import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

const Home = () => {
  return (
    <div className="Home">
      <h1>MixTape</h1>
      <article>
        <Tracklist />
      </article>
    </div>
  );
};

export default Home;
