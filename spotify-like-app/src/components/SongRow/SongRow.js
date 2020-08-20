import React from 'react';
import './SongRow.css';


const SongRow = ({track}) => {

    return (
        <div className="songrow">
            <img src={track.album.images[0].url} alt={""} />
            <div className="songrow__info">
                <h1>{track.name}</h1>
                <p>{track.album.artists[0].name} - {track.album.name}</p>
            </div>
        </div>
    );
}

export default SongRow;