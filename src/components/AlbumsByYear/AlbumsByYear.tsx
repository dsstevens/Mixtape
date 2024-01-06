import './AlbumsByYear.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AlbumsByYear = () => {
  const { year } = useParams()


  return (
    <div className="albums-by-year-container">
      <header>
        <Link to="/" className="home-button">Home</Link>
      </header>
      <h2 className="year-title">Albums from the Year {year}</h2>
            {/* grid rendering */}
    </div>
  );
};

export default AlbumsByYear;