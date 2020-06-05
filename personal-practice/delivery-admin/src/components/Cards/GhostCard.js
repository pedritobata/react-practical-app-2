import React from 'react';
import './GhostCard.css';

const ghostCard = props => {

    return (
        <div className="ghost-card">
            {props.children}
        </div>
    );
}

export default ghostCard;