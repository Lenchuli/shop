import React from "react";
import { Placard } from "./placard";

export function Grid({ catalog }) {
  return (
    <>
      {catalog.map(item => (
        <Placard key={item.id} content={item} />
      ))}
    </>
  );
}
