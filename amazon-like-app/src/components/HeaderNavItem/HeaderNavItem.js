import React from 'react';
import './HeaderNavItem.css';
import { Link } from 'react-router-dom';

const HeaderNavItem = (props) => {

    return <Link to={props.to} className="header-nav__link">
        <div className="header-nav__option" onClick={props.clicked}>
            <span className="header-nav__option__topText">{props.topText}</span>
            <span className="header-nav__option__bottomText">{props.bottomText}</span>
        </div>
    </Link>
}

export default HeaderNavItem;