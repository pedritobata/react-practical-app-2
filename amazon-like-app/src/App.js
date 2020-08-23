import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="app">
     
       <Switch>
         <Route path="/checkout">
            <Header  />
            <h1>Checkout Page</h1>
         </Route>
         <Route path="/login">
           <h1>LoginPage</h1>
         </Route>
         <Route path="/">
            <Header  />
            <Home  />
         </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
