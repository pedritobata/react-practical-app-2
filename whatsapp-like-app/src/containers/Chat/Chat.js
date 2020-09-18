import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, MicSharp } from '@material-ui/icons';

const Chat = () => {

    return(
        <section className="chat">
           <div className="chat__header">
               <Avatar  />
                <div className="chat__headerInfo">
                    <h3>Chat room</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined  />
                    </IconButton>
                    <IconButton>
                        <AttachFile  />
                    </IconButton>
                    <IconButton>
                        <MoreVert  />
                    </IconButton>
                </div>
           </div>
           <div className="chat__body">
                   <p  className="chat__message">
                       <span className="chat__name">Pedrito</span>
                       This is a message
                       <span className="chat__timestamp">
                           {new Date().toUTCString()}
                       </span>
                   </p>
                   <p  className="chat__message">
                       <span className="chat__name">Pedrito</span>
                       This is a message
                       <span className="chat__timestamp">
                           {new Date().toUTCString()}
                       </span>
                   </p>
                   <p  className="chat__message chat__receiver">
                       <span className="chat__name">Pedrito</span>
                       This is a message
                       <span className="chat__timestamp">
                           {new Date().toUTCString()}
                       </span>
                   </p>
                   <p  className="chat__message">
                       <span className="chat__name">Pedrito</span>
                       This is a message
                       <span className="chat__timestamp">
                           {new Date().toUTCString()}
                       </span>
                   </p>
                   <p  className="chat__message">
                       <span className="chat__name">Pedrito</span>
                       This is a message
                       <span className="chat__timestamp">
                           {new Date().toUTCString()}
                       </span>
                   </p>
                   <p  className="chat__message chat__receiver">
                       <span className="chat__name">Pedrito</span>
                       This is a message
                       <span className="chat__timestamp">
                           {new Date().toUTCString()}
                       </span>
                   </p>
           </div>
           <div className="chat__footer">
                <InsertEmoticon  />
                <form>
                    <input type="text" className="chat__footerInput" placeholder="Type a message here"/>
                    <button type="submit" className="chat__footerButton">Send message</button>
                </form>
                <MicSharp />
           </div>
        
        </section>
    );
}

export default Chat;