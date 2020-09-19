import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './containers/Chat/Chat';
import Sidebar from './containers/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './cliente/axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/api/messages/sync')
    .then(response => {
      setMessages(response.data);
    }).catch(err => console.log(err));

  }, []);

  useEffect(()=>{
    const pusher = new Pusher('874721245a770c40496a', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      //console.log(data);
      setMessages([...messages,data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);

 // console.log(messages);

  return (
    <div className="app">
        <div className="app__body">
          <Sidebar  />
          <Chat messages={messages} />
        </div>
    </div> 
  );
}

export default App;
