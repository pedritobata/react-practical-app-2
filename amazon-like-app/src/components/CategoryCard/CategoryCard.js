import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <div className="categoryCard">
      <h3 className="categoryCard__title">{props.title}</h3>
      <Link to={props.target} className="categoryCard__imageContainer">
        <img
          src={props.image}
          alt={props.title}
          className="categoryCard__image"
        />
      </Link>
      <p className="categoryCard__description">{props.description}</p>
      <Link to={props.target} className="categoryCard__link">
        {props.linkText}
      </Link>
      {props.children}
    </div>
  );
};

export default CategoryCard;
