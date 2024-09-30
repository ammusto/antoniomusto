import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CV from './components/CV';
import Publications from './components/Publications';
import DHProjects from './components/DHProjects';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <div className='main'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/dh-projects" element={<DHProjects />} />
        </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
