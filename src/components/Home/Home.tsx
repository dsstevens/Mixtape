import './Home.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import Dropdown from '../Dropdown/Dropdown';
import getCollection from '../../apiCalls';

const Home = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const [collection, setCollection] = useState<{}[]>([]);
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleYear = (year: number) => {
    navigate(`/${year}`);
    setOpen(false);
  }

  useEffect(() => {
    getCollection()
      .then(data => {
        // leaving this console.log in temporarily so we can see the data in the console that we have to work with while we set everything up
        console.log(data);
        setCollection([...collection, ...data]);
      })
      .catch(error => setError(error.message));
  }, []);

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
