import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Grid } from "../components/grid";

export function Catalog({ cart }) {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const content = await getContent();
        setCatalog(content);
      })();
    } catch (e) {
      setCatalog([]);
    }
  }, []);

  async function getContent() {
    const response = await fetch(
      "https://front-test-api.herokuapp.com/api/product"
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.log("Bad request");
      return [];
    }
  }

  return (
    <>
      <Header cart={cart} />
      <Grid catalog={catalog} />
    </>
  );
}
