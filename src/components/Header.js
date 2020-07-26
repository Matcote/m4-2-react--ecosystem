import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  margin: 20px;
  display: flex;
  align-items: center;
  h1 {
    margin-right: auto;
    font-size: xx-large;
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
      <NavLink exact="true" to="/" activeClassName="selected">
        <span>Home</span>
      </NavLink>
      <NavLink to="/about" activeClassName="selected">
        <span>About</span>
      </NavLink>
    </Nav>
  );
};

export default Header;
