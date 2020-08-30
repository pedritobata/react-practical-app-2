import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@material-ui/icons';
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import { auth } from '../../firebase';

const Header = () => {

    const [{ basket , user}, dispatch] = useStateValue();

    const loginHandler = () => {
        auth.signOut();
    }

    return <nav className="header">
        <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="logo" />
        </Link>
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <Search className="header__searchIcon" />
        </div>
        <div className="header__nav">
            <HeaderNavItem  topText={`Hello ${user ? user.email : ""}`}
                bottomText={user ? "Sign out" : "Sign in"} 
                to={user ? "/logout" : "/login"}
                clicked={loginHandler}/>
            <HeaderNavItem  topText="Returns"  bottomText="& Orders" to=""/>
            <HeaderNavItem  topText="Your"  bottomText="Prime" to=""/>
            <Link className="header__optionBasket" to="/checkout">
                <ShoppingBasket  />
                <span className="header__optionBasketCount">{basket.length}</span>
            </Link>
        </div>
    </nav>
}

export default Header;