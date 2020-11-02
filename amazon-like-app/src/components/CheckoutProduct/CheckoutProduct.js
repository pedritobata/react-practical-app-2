import React from 'react';
import './CheckoutProduct.scss';
// import { useStateValue } from '../../store/StateProvider';
import { removeFromBasket } from '../../store/redux/actions/basketActions';
import { useDispatch } from 'react-redux';

const CheckoutProduct = ({id, title, image, price, rating, hideButton}) => {

    const dispatch = useDispatch();


    const removeProductHandler = () => {
        dispatch(removeFromBasket(id));
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
                    {!hideButton && <button onClick={removeProductHandler}>Remove from basket</button>}
                
            </div>
        </div>
    );
}

export default CheckoutProduct;