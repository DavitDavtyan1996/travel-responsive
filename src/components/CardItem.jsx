import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ src, path, text, label }) => {
  return (
    <div>
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src}  className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default CardItem;
