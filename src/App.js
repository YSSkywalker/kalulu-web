import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/molecules/Footer'

import ScrollToTop from './components/molecules/ScrollToTop'
import UseTracking from './components/molecules/UseTracking'
import Top from './components/molecules/Top'
import EN from './components/molecules/EN'
import Matome from './components/molecules/Matome'
import News from './components/molecules/News'
import CosFes from './components/molecules/CosFes'
import PhotoBookInventoryTable from './components/molecules/PhotoBookInventoryTable'
import RegisterPhotoBook from './components/molecules/RegisterPhotoBook'
import SNSLinks from './components/molecules/SNSLinks'
import NotFound from './components/molecules/NotFound'
import './App.css';

function App() {
  return (
    <Router>
      <UseTracking />
      <ScrollToTop />
      <Routes>
        <Route exact path={`/`} element={<Top />} />
        <Route path={'/EN'} element={<EN />} />
        <Route path={'/Matome'} element={<Matome />} />
        <Route path={'/News'} element={<News />} />
        <Route path={'/CosFes'} element={<CosFes />} />
        <Route path={'/PhotoBookInventoryTable'} element={<PhotoBookInventoryTable />} />
        <Route path={'/RegisterPhotoBook'} element={<RegisterPhotoBook />} />
        <Route path={'/SNSLinks'} element={<SNSLinks />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
