import React from 'react';
import { Link } from 'react-router-dom';
import './SimpleLink.css';

const SimpleLink = props => {

    return <Link to={props.target} className="simpleLink">{props.children}</Link>
}

export default SimpleLink;