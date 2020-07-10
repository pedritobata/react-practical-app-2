import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import  '../node_modules/bootstrap/scss/bootstrap.scss';*/
import './index.scss'; 
import { ContextProvider } from './Context/context';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    	<App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


