import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders/Orders";
import ProductsScreen from "./pages/ProductsScreen/ProductsScreen";
import { userSigninListener } from './store/redux/actions/userActions';
import { authEbay } from './store/redux/actions/ebayActions';
import { MoonLoader } from 'react-spinners/MoonLoader';

const promise = loadStripe(
  "pk_test_51HWYMCI4jQHDtBgg2jk95OK58JJVTxz0Dasbx9gPSUup0483DYrqdl9tlJ5JxdYERGyfpWTzdcdkgO7qEW84utMv00XLTnQVoA"
);

function App() {
  //const [{ basket }, dispatch] = useStateValue();

  const dispatch = useDispatch();
  const {loading, error, unsubscribe} = useSelector(state => state.userLoginListener);

  useEffect(() => {
    dispatch(userSigninListener());

  }, [userSigninListener]);


  useEffect(() => {

    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  useEffect(() => {
    dispatch(authEbay());
  },[]);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/products">
            <Header />
            <ProductsScreen />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            {/* {loading ? <MoonLoader size={100} color={"purple"}  loading={true} /> :  <Home />} */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
