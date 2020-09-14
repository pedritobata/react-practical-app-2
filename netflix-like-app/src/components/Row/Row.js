import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../client/axios";
import { TMDB_RESOURCES_URL } from '../../client/tmdb/requests';
import Youtube from 'react-youtube';
import movieTrailer  from 'movie-trailer';


const Row = ({ title, url , largeRow}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}`);
      console.log(response);
      setMovies(response.data.results);
    }
    fetchData();
  }, [url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie) => {
    
    if(trailerUrl){
      setTrailerUrl("");
    } else {
      console.log("name", movie.name);
      movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.orginal_title || "")
      .then(resp => {
        console.log("Response",resp);
        const urlParams = new URLSearchParams(new URL(resp).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__container">
        {movies.map( movie => (
          <img
          onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${TMDB_RESOURCES_URL}${largeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${largeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
     {trailerUrl && <Youtube videoId={trailerUrl}  opts={opts}/>}
    </div>
  );
};

export default Row;
