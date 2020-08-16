import React from 'react';
import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerContext }  from '../../DataLayer/DataLayer';

const Sidebar = () => {

    const [{ playlists }, dispatch] = useDataLayerContext();

    return (
        <div className="sidebar">
            <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            className="sidebar__logo" />

            <SidebarOption title="Home"  Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library"  Icon={LibraryMusicIcon}/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

        
            <SidebarOption title="Rock" />
            <SidebarOption title="R&B" />
            <SidebarOption title="Salsa" />

        </div>
    );
}

export default Sidebar;