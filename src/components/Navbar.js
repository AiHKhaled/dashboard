import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav className="Navigation">
      <h1 className="logo">
        <Link id="logo" to="/">
          Name
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">dashboard</Link>
        </li>
        <li>
          <Link to="/SetUp">customers</Link>
        </li>
        <li>
          <Link to="/KPI">KPI</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #363535;
  
  }
  a {
    color: white;
    text-decoration: none;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "lobster", cursive;
  }
`;
export default Nav;
