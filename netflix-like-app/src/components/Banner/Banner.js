import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../client/axios';
import requests from '../../client/tmdb/requests';
import { TMDB_RESOURCES_URL } from '../../client/tmdb/requests';

const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1).concat("...") : str;
}

const Banner = () => {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovie(response.data.results[
                Math.floor((Math.random() * response.data.results.length))
            ]);
        }
        fetchData();
    }, []);

    return (
        <header
            style={{
                backgroundImage: `url("${TMDB_RESOURCES_URL}${movie.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 15%"
            }}
            className="banner">
            <div className="banner_contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    );
}

export default Banner;