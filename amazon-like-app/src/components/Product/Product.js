import React from 'react';
import './Product.css';
import { useStateValue } from '../../store/StateProvider';

const Product = ({id, title, price, image, rating}) => {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasketHandler = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                price,
                image,
                rating
            }
        })
    }


    return <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map( (_) => {
                        return <p key={Math.random()}>⭐️</p>
                    })
                }
            </div>
        </div>

        <img src={image} alt={id} />
        <button onClick={addToBasketHandler}>Add to basket</button>
    </div>
}

export default Product;