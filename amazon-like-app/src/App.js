import React, { useEffect } from "react";
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
import { useStateValue } from "./store/StateProvider";
import { auth } from "./firebase";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders/Orders";
import ProductsScreen from "./pages/ProductsScreen/ProductsScreen";

const promise = loadStripe(
  "pk_test_51HWYMCI4jQHDtBgg2jk95OK58JJVTxz0Dasbx9gPSUup0483DYrqdl9tlJ5JxdYERGyfpWTzdcdkgO7qEW84utMv00XLTnQVoA"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
