import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/molecules/Footer'

// import ScrollToTop from './components/molecules/ScrollToTop'
import Top from './components/molecules/Top'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={`/`} element={<Top />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
