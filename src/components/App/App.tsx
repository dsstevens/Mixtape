import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import AlbumsByYear from '../AlbumsByYear/AlbumsByYear';
import AlbumDetail from '../AlbumDetail/AlbumDetail';

type AppProps = JSX.IntrinsicElements['main'];

const App: React.FC<AppProps> = () => {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:year' element={<AlbumsByYear />} />
        <Route path='/:year/:album' element={<AlbumDetail />} />
      </Routes>
    </main>
  );
};

export default App;
