import React from "react";
import "./Payment.css";
import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { Link } from 'react-router-dom';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <h3 className="payment__title">Review items and Delivery</h3>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <h3 className="payment__title">Payment Method</h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
