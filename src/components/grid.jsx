import React, { useState, useEffect } from "react";
import { Placard } from "./placard";
import { Filter } from "./filter";

export function Grid({ catalog }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Filter updateQuery={setQuery} />
      <div>
        {catalog
          .filter(item =>
            query
              ? item.brand.toUpperCase() === query.toString().toUpperCase() ||
                item.model.toUpperCase() === query.toString().toUpperCase()
              : true
          )
          .map(item => (
            <Placard key={item.id} content={item} />
          ))}
      </div>
    </>
  );
}
