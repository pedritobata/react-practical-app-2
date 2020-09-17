import React from 'react';
import './App.css';
import Chat from './containers/Chat/Chat';
import Sidebar from './containers/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
        <div className="app__body">
          <Sidebar  />
          <Chat />
        </div>
    </div> 
  );
}

export default App;
