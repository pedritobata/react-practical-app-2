import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
import SimpleLink from "../UI/SimpleLink";

const CategoryCard = (props) => {
  return (
    <div className="categoryCard">
      <h3 className="categoryCard__title">{props.title}</h3>
     {props.image && <Link to={props.target} className="categoryCard__imageContainer">
        <img
          src={props.image}
          alt={props.title}
          className="categoryCard__image"
        />
      </Link>}
      {props.description && <p className="categoryCard__description">{props.description}</p>}
      {props.linkText && <SimpleLink target="/products">
        {props.linkText}
      </SimpleLink>}
      {props.children}
    </div>
  );
};

export default CategoryCard;
