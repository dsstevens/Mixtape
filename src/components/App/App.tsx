import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

type AppProps = JSX.IntrinsicElements['main'];

const App: React.FC<AppProps> = () => {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
