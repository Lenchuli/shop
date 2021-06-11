import React, { useState } from "react";
import "./placard.scss";

export function Placard({ content }) {
  return (
    <div className="placard-container">
      <img className="placard__img" src={content.imgUrl} />
      <div className={`placard__ribbon`}>
        <span className="placard__title">{content.model}</span>
      </div>
    </div>
  );
}
