import React from 'react';
import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerContext }  from '../../DataLayer/DataLayer';

const Sidebar = () => {

    //const [{ playlists }, dispatch] = useDataLayerContext();
    //  Hemos excluido dispatch del destructuring porque no lo estamos usando
    const [{ playlists }] = useDataLayerContext();

    return (
        <div className="sidebar">
            <img 
            alt="logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            className="sidebar__logo" />

            <SidebarOption title="Home"  Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library"  Icon={LibraryMusicIcon}/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption key={playlist.name} title={playlist.name} />
            ))}

        </div>
    );
}

export default Sidebar;