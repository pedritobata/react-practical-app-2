import React from "react";
import "./CarouselHorizontal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ScrollMenu from "react-horizontal-scrolling-menu";
import SimpleLink from "./SimpleLink";

const CarouselHorizontal = (props) => {
  return (
    <div className="carouselHorizontal">
      <h2 className="carouselHorizontal__title">{props.title}</h2>
      <SimpleLink className="carouselHorizontal__linkText">
        {props.linkText}
      </SimpleLink>
      <ScrollMenu
        data={props.items}
        arrowLeft={props.arrowLeft}
        arrowRight={props.arrowRight}
        hideSingleArrow={true}
        itemStyle={props.itemStyle}
        scrollBy={6}
        transition={1}
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
        dragging={false}
        
      />
    </div>
  );
};

export default CarouselHorizontal;
