import React from 'react';
import './GhostCard.css';

const ghostCard = props => {

    const customStyles = {
        width: `${props.width}%`,
        padding: `${props.padding}px`
    }

    return (
        <div className="ghost-card" style={customStyles}>
            {props.children}
        </div>
    );
}

export default ghostCard;