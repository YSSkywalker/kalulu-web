import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// import ScrollToTop from './components/molecules/ScrollToTop'
// import Header from './components/molecules/Header'
import Top from './components/molecules/Top'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
