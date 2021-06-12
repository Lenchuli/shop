import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Placard } from "../components/placard";
import { Info } from "../components/info";
import "./detail.scss";

export function Detail({ cart, setCart }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    try {
      (async () => {
        const content = await getContent();
        setInfo(content);
      })();
    } catch (e) {
      setInfo({});
    }
  }, []);

  async function getContent() {
    const aux = window.location.pathname.split("/");
    const id = aux[aux.length - 1];
    const response = await fetch(
      `https://front-test-api.herokuapp.com/api/product/${id}`
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.log("Bad request");
      return [];
    }
  }
  const colors = info?.options?.colors.map(item => ({
    value: item.code,
    label: item.name
  }));
  const storages = info?.options?.storages.map(item => ({
    value: item.code,
    label: item.name
  }));
  return (
    <>
      <Header cart={cart} />
      <div className="detail__container">
        <Placard content={info} />
        <Info info={info} updateCart={value => setCart(value)} />
      </div>
    </>
  );
}
