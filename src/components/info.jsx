import React, { useState } from "react";

export function Info({ info, updateCart }) {
  const [color, setColor] = useState();
  const [storage, setStorage] = useState();

  const colors = info?.options?.colors.map(item => ({
    value: item.code,
    label: item.name
  }));
  const storages = info?.options?.storages.map(item => ({
    value: item.code,
    label: item.name
  }));

  async function addToCart() {
    const response = await fetch(
      "https://front-test-api.herokuapp.com/api/cart",
      {
        method: "POST",
        body: JSON.stringify({
          id: info.id,
          colorCode: color,
          storageCode: storage
        })
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      updateCart(data);
    } else {
      console.log("Bad request");
      updateCart(3);
    }
  }

  function isDisabled() {
    return !(!!color && !!storage);
  }

  return (
    <>
      <div>
        {info.options && (
          <>
            <label>
              Color:
              <select
                value={color}
                onChange={event => setColor(parseInt(event.target.value))}
              >
                <option key={1} disabled selected value>
                  -- select an option --
                </option>
                {colors.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Storage:
              <select
                value={storage}
                onChange={event => setStorage(parseInt(event.target.value))}
              >
                <option key={1} disabled selected value>
                  -- select an option --
                </option>
                {storages.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>
      <div>
        <ul>
          <li>{info.brand}</li>
          <li>{info.price}</li>
          <li>{info.model}</li>
        </ul>
      </div>
      <button onClick={addToCart} disabled={isDisabled()}>
        Add to cart
      </button>
    </>
  );
}
