import React, { useState, useRef, useEffect } from "react";
import "./CarouselHorizontal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ScrollMenu from "react-horizontal-scrolling-menu";
import SimpleLink from "./SimpleLink";
//import Style from 'style-it';

const CarouselHorizontal = (props) => {

    const[showScrollbar, setShowScrollbar] = useState(false);
    const[nroPages, setNroPages] = useState(0);
    const scrollMenuRef = useRef({});

   

    useEffect(() => {
      console.log("scrollMenuRef", scrollMenuRef);
      console.log("scrollMenuRef total width", scrollMenuRef.current.menuInner.menuInner.elem.scrollWidth);
      console.log("scrollMenuRef firstPageOffset", scrollMenuRef.current.firstPageOffset);
      console.log("scrollMenuRef total items width", scrollMenuRef.current.allItemsWidth);
      console.log("cantidad de items", props.items.length);
      const carouselItemWidth = scrollMenuRef.current.menuInner.menuInner.elem.firstChild.clientWidth;
      console.log("width de cada item",carouselItemWidth);

      window.addEventListener("load", (e) =>{
        const itemsShowedCurrently = Math.floor(scrollMenuRef.current.menuWrapper.clientWidth / carouselItemWidth);
        setNroPages(Math.ceil((props.items.length - itemsShowedCurrently) / props.scrollBy));
      });

      window.addEventListener("resize", (e) =>{
        const itemsShowedCurrently = Math.floor(scrollMenuRef.current.menuWrapper.clientWidth / carouselItemWidth);
        setNroPages(Math.ceil((props.items.length - itemsShowedCurrently) / props.scrollBy));
      });

      

    });


   

  return (
    <div className="carouselHorizontal carouselHorizontal__variables">
      {/* <style>
        {
          `
          .scrollMenu__container .menu-wrapper::-webkit-scrollbar-thumb {
            background-color: ${showScrollbar ? '#a2a2a2' : "transparent"} !important;
          }
          `
        }
      </style> */}
      <h2 className="carouselHorizontal__title">{props.title}</h2>
      <SimpleLink className="carouselHorizontal__linkText">
        {props.linkText}
      </SimpleLink>
      
      <div className="scrollMenu__container" onMouseOver={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}>
        <ScrollMenu
        ref={scrollMenuRef}
        data={props.items}
        arrowLeft={props.arrowLeft}
        arrowRight={props.arrowRight}
        hideSingleArrow={true}
        itemStyle={props.itemStyle}
        scrollBy={props.scrollBy}
        transition={1}
        onUpdate={(translated) => {console.log("trans", translated)}}
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
      <div className="scrollMenu__scrollBar" style={{
        width:`calc(100% / ${nroPages})`
      }}></div>
      </div>
     
      
    </div> 
  );
};

export default CarouselHorizontal;
