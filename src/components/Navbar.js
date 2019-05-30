import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from "../home.png";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
        <Link to="/">
          <img src={home} alt="home" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Produkty
            </Link>
          </li>
        </ul>
        <Link to="/košík" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            Košík
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--Purple);
  .nav-link {
    color: var(--Yellow);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
