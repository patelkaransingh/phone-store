import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { ButtonContainer } from "./styledElements/button";
import { NavWrapper } from "./styledElements/elements";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={Logo} className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
