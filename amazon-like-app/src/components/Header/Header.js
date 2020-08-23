import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@material-ui/icons';
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';
import { Link } from 'react-router-dom';

const Header = () => {

    return <nav className="header">
        <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="logo" />
        </Link>
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <Search className="header__searchIcon" />
        </div>
        <div className="header__nav">
            <HeaderNavItem  topText="Hello Pedro"  bottomText="Sign in" to="/login"/>
            <HeaderNavItem  topText="Returns"  bottomText="& Orders" to=""/>
            <HeaderNavItem  topText="Your"  bottomText="Prime" to=""/>
            <Link className="header__optionBasket" to="/checkout">
                <ShoppingBasket  />
                <span className="header__optionBasketCount">0</span>
            </Link>
        </div>
    </nav>
}

export default Header;