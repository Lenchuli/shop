import React from "react";
import { Link } from "react-router-dom";
import "./placard.scss";

export function Placard({ content }) {
  return (
    <Link to={`/detail/${content.id}`}>
    <div className="placard-container">
      <img className="placard__img" src={content.imgUrl} />
      <div className={`placard__ribbon`}>
        <span className="placard__title">{content.model}</span>
      </div>
    </div>
    </Link>
  );
}
