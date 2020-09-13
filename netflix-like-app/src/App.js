import React from 'react';
import './App.css';
import Row from './components/Row/Row';

// api key firebase :  AIzaSyB0Bx51LVf6JqEFEUhh3MrY4I0VVjS3Cok

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
