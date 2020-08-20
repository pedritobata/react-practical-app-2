import React from 'react';
import './Header.css';
import  SearchIcon  from '@material-ui/icons/SearchOutlined';
import {Avatar} from '@material-ui/core';
import {useDataLayerContext} from '../../DataLayer/DataLayer';


const Header = ({spotify}) => {

    const [{user}, dispatch] = useDataLayerContext();

    //console.log("user", user);

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon  />
                <input type="text" placeholder="Search for Artists, Songs and Podcasts" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0].url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};


export default Header;