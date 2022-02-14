import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';

import Login from './route/Login';
import Home from './route/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
