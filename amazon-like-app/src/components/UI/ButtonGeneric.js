import { ButtonGroup } from '@material-ui/core';
import { CallMerge } from '@material-ui/icons';
import React from 'react';
import './ButtonGeneric.css';

const ButtonGeneric = props => {

    const getClassesFromClientCustomization = () => {
        let clientClasses = "";
        const prefixesAdded = props.styles && props.styles.split(" ").map(style => "buttonGeneric--".concat(style));
        if(props.styles)  clientClasses = prefixesAdded.join(" ");
        console.log("clientClasses",clientClasses);
        return clientClasses;
    }

    return (
        <button className={`buttonGeneric ${getClassesFromClientCustomization()}`}>{props.title}</button>
    );
}

export default ButtonGeneric;

