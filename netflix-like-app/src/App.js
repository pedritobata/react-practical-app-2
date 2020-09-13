import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from './client/tmdb/requests';

// api key firebase :  AIzaSyB0Bx51LVf6JqEFEUhh3MrY4I0VVjS3Cok

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" largeRow url={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" url={requests.fetchTrending}/>
      <Row title="Top Rated" url={requests.fetchTopRated}/>
      <Row title="Action Movies" url={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" url={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" url={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" url={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" url={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
