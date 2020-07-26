import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitBox = styled.div`
  display: inline-block;
  width: 25%;
  height: 200px;
  border: 1px solid grey;
  text-align: center;
  border-radius: 15px;
  margin: 10px;
  line-height: 2;
  img {
    position: relative;
    bottom: 10px;
    height: 100px;
    width: 100px;
    border-radius: 10px;
  }
`;

const ListingGrid = ({ itemList }) => {
  return itemList.map((item) => {
    return (
      <Link to={`/items/${item.id}`}>
        <FruitBox key={item.id}>
          <img src={item.imageSrc} alt={item.name} />
          <h3>{item.name}</h3>
          <span>{item.latinName}</span>
        </FruitBox>
      </Link>
    );
  });
};

export default ListingGrid;
