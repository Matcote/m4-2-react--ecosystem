import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const FruitDetail = styled.div`
  margin: 25px 20px;
  display: flex;
  img {
    width: 40%;
    height: 40%;
    border-radius: 15px;
  }
  div h2 {
    font-weight: bolder;
  }
  .seller {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 5px;
  }
`;
const Button = styled.button`
  background-color: darkblue;
  color: white;
  border-radius: 8px;
  border: none;
  width: 250px;
  height: 50px;
  font-size: 1.5em;
  margin: 10px 0;
  display: block;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const fruit = items[itemId];
  if (fruit.quantity > 0) {
    return (
      <FruitDetail>
        <img src={fruit.imageSrc} alt={fruit.name} />
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
            class="seller"
          />
          <span>
            Sold by: <b>{sellers[fruit.sellerId].storeName}</b>
          </span>
        </div>
      </FruitDetail>
    );
  } else {
    return (
      <FruitDetail>
        <img src={fruit.imageSrc} alt={fruit.name} />
        <div>
          <h2>{fruit.name}</h2>
          <h3>{fruit.latinName}</h3>
          <p>{fruit.description}</p>
          <p>
            Product of <b>{fruit.countryOfOrigin}</b>
          </p>
          <Button>Sold out</Button>
          <img
            src={sellers[fruit.sellerId].avatarSrc}
            alt={sellers[fruit.sellerId].id}
            class="seller"
          />
          <span>
            Sold by: <b>{sellers[fruit.sellerId].storeName}</b>
          </span>
        </div>
      </FruitDetail>
    );
  }
};
export default ItemDetails;
