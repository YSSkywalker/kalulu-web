import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/molecules/Footer'

// import ScrollToTop from './components/molecules/ScrollToTop'
import Top from './components/molecules/Top'
import Matome from './components/molecules/Matome'
import News from './components/molecules/News'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={`/`} element={<Top />} />
        <Route path={'/Matome'} element={<Matome />} />
        <Route path={'/News'} element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
