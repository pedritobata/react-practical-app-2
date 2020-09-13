import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../client/axios";
import { TMDB_RESOURCES_URL } from '../../client/tmdb/requests';


const Row = ({ title, url , largeRow}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}`);
      console.log(response);
      setMovies(response.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__container">
        {movies.map( movie => (
          <img
            key={movie.id}
            src={`${TMDB_RESOURCES_URL}${largeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${largeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
