import React from 'react';
// import { useStateValue } from '../../store/StateProvider';
import './Checkout.css';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const {basket} = useSelector(state => state.basket);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img  className="checkout__ad" alt="Banner"
                 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
    
                 {
                     basket?.length === 0 ?
                     <div>
                         <h2>Your Shopping Basket is empty</h2>
                         <p>Your have no items in your shopping basket. To by one or more items
                             click "Add to Basket" next to the item.
                         </p>
                     </div>
                     :
                     <div>
                         <h2 className="checkout__title">Your Shopping Basket</h2>
                         {
                             basket?.map(
                                 item => <CheckoutProduct  
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                             )
                         }
                     </div>
                 }
            </div>
            {
                basket?.length > 0 && <div className="checkout__right">
                                        <Subtotal  />
                                    </div>
            }
            
        </div>
    );
}

export default Checkout;