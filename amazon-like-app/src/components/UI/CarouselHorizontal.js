import React, { useState } from "react";
import "./CarouselHorizontal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ScrollMenu from "react-horizontal-scrolling-menu";
import SimpleLink from "./SimpleLink";
//import Style from 'style-it';

const CarouselHorizontal = (props) => {

    const[showScrollbar, setShowScrollbar] = useState(false);
    // asignamos una id dinamica que obviamente sea unica (al final la usaremos como una clase css)
    // para eso usamos un numero random , nos deshacemos del punto para que el html no lo confunda con una
    //clase css
    //y lo convertimos a string
    const[id, setId] = useState('id' + Math.floor((Math.random() * 10000)));


  return (
    <div className="carouselHorizontal">
      <style>
        {
          `
          .${id} .menu-wrapper::-webkit-scrollbar-thumb {
            background-color: ${showScrollbar ? '#a2a2a2' : "transparent"} !important;
          }
          `
        }
      </style>
      <h2 className="carouselHorizontal__title">{props.title}</h2>
      <SimpleLink className="carouselHorizontal__linkText">
        {props.linkText}
      </SimpleLink>
      
      <div className={id} onMouseOver={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}>
        <ScrollMenu
        data={props.items}
        arrowLeft={props.arrowLeft}
        arrowRight={props.arrowRight}
        hideSingleArrow={true}
        itemStyle={props.itemStyle}
        scrollBy={props.scrollBy}
        transition={1}
        onUpdate={() => {}}
        innerWrapperStyle={props.innerWrapperStyle}
        wheel={false}
        arrowLeft={
          <div className="carouselArrow__container carouselArrow__container--left">
            <FontAwesomeIcon icon={faAngleLeft} className="carouselArrow" />
          </div>
        }
        arrowRight={
          <div className="carouselArrow__container carouselArrow__container--right">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="carouselArrow"
            />
          </div>
        }
        dragging={true}
        
      />
      </div>
     
      
    </div> 
  );
};

export default CarouselHorizontal;
