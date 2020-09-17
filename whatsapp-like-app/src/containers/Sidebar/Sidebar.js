import React from 'react';
import './Sidebar.css';
import { DonutLarge, MoreVert, Chat, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';


const Sidebar = () => {

    return (
        <section className="sidebar">
            <header className="sidebar__header">
                <Avatar src="https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/554023_4235635539582_1818821151_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_eui2=AeEUSBF0pPhAxRYr511olru9XFGb5KMhJblcUZvkoyEluSrgQoj-QA3Vxg9Hb0o7fL4&_nc_ohc=iX3AsTvm8QwAX941yQh&_nc_ht=scontent.flim9-1.fna&oh=99d3de8e4a733f1e558cd7b2c45dfe59&oe=5F8B3E6A" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat  />
                    </IconButton>
                    <IconButton>
                        <MoreVert />                        
                    </IconButton>
                </div>
            </header>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined  />
                    <input type="text" placeholder="Search chat" />
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
