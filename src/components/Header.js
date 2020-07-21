import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  margin: 20px;
  display: flex;
  align-items: center;
  h1 {
    margin-right: auto;
  }
  a {
    margin: 20px;
    text-decoration: none;
    color: blue;
  }
`;

const Header = (props) => {
  return (
    <Nav>
      <h1>Fruit Emporium</h1>
      <Link exact="true" to="/">
        Home
      </Link>
      <Link to="/about">About</Link>
    </Nav>
  );
};

export default Header;
