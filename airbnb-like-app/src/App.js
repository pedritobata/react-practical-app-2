import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <Header  />
      <Banner  />
      <Home  />
    </div>
  );
}

export default App;
