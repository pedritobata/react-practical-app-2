import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import { useStateValue } from './store/StateProvider';
import { auth } from './firebase';

function App() {

  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        dispatch({
          type: "SET_USER",
          user: user
        });
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);


  return (
    <Router>
      <div className="app">
     
       <Switch>
         <Route path="/checkout">
            <Header  />
            <Checkout  />
         </Route>
         <Route path="/login">
           <Login  />
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
