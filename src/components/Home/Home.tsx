import './Home.css';

import React, { useState } from 'react';

import Tracklist from '../Tracklist/Tracklist';
import Dropdown from '../Dropdown/Dropdown';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleYear = (year: number) => {
    // add code to link to page based on the year
    setOpen(false);
  }

  return (
    <div className="Home">
      <h1 className='page-title'>MixTape</h1>

      <Dropdown
        open={open}
        trigger={<button className='years-dropdown-button' onClick={handleOpen}>Albums By Year</button>}
        menu={[1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989].map((year) => (
          <button key={year} onClick={() => handleYear(year)}>{year}</button>
        ))}
      />

      <div className='tracklist-container'>
        <Tracklist />
      </div>
    </div>
  );
};

export default Home;
