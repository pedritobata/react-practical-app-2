import { ButtonGroup } from '@material-ui/core';
import React from 'react';
import './ButtonGeneric.css';

const ButtonGeneric = props => {

    const getStylesClasses = () => {
        let clientClasses = "";
        if(props.styles)  clientClasses = props.styles.join(" ");
        return clientClasses;
    }

    return (
        <button className={`buttonGeneric ${getStylesClasses()}`}>{props.title}</button>
    );
}

export default ButtonGeneric;

