import React from 'react';
import './Body.css';
import Header from '../Header/Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerContext } from '../../DataLayer/DataLayer';
import SongRow from '../SongRow/SongRow';

const Body = ({spotify}) => {

    const [{discover_weekly}, dispatch] = useDataLayerContext();

    return (
        <div className="body">
            <Header  spotify={spotify} />
            <div className="body__info">
                <img src={discover_weekly?.images[0].url}
                  alt="info" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.name}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon  fontSize="large" />
                    <MoreHorizIcon  />
                </div>

                {
                    discover_weekly?.tracks.items.map( item => {
                        return  <SongRow track={item.track} />;
                    })
                }
            </div>
        </div>
    );
}

export default Body;