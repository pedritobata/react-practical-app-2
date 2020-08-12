import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';
import './Player.css';

const Player = ({ spotify }) => {

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <Footer  />
        </div>
    );
}

export default Player;