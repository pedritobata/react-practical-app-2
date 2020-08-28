import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../store/StateProvider';

const CheckoutProduct = ({id, title, image, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();


    const removeProductHandler = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"  alt="product"
            src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => {
                            return <p key={i}>⭐️</p>;
                        })
                    }
                </div>
    
                <button onClick={removeProductHandler}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;