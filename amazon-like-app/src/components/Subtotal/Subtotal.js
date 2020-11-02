import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from '../../store/StateProvider';
import { basketTotal } from '../../store/redux/reducers/basketReducers';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Subtotal = () => {


    const {basket} = useSelector(state => state.basket);

    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat  
                renderText={value => {
                    return (
                        <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />This order contains a gift
                            </small>
                        </>
                    );
                }}
                decimalScale={2}
                value={basketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() => history.push("/payment")}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
