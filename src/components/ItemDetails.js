import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const Button = styled.button``;

const ItemDetails = () => {
  const { itemId } = useParams();
  const fruit = items[itemId];
  if (fruit.quantity > 0) {
    return (
      <div>
        <img src={fruit.imageSrc} />
        <div>
          <h2>{fruit.name}</h2>
          <h3>{fruit.latinName}</h3>
          <p>{fruit.description}</p>
          <p>
            Product of <b>{fruit.countryOfOrigin}</b>
          </p>
          <Button>${fruit.price} - Buy now</Button>
          <img
            src={sellers[fruit.sellerId].avatarSrc}
            alt={sellers[fruit.sellerId].id}
          />
          <p>
            Sold by: <b>{sellers[fruit.sellerId].storeName}</b>
          </p>
        </div>
      </div>
    );
  } else {
  }
};
export default ItemDetails;
