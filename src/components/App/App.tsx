import './App.css';

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import AlbumsByYear from '../AlbumsByYear/AlbumsByYear';
import AlbumDetail from '../AlbumDetail/AlbumDetail';
import HomeButton from '../HomeButton/HomeButton';

type AppProps = JSX.IntrinsicElements['main'];

const App: React.FC<AppProps> = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main className='App'>
      <Header isHomePage={isHomePage}>
        {isHomePage ? null : (
          <HomeButton />
        )}
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:year' element={<AlbumsByYear />} />
        <Route path='/:year/:album_id' element={<AlbumDetail />} />
      </Routes>
    </main>
  );
};

export default App;
