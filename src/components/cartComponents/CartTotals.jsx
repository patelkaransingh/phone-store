import React from "react";
import { Link } from "react-router-dom";
import { ButtonRed } from "../styledElements/button";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <ButtonRed className="mb-3" onClick={() => clearCart()}>
                clear cart
              </ButtonRed>
            </Link>
            <h6>
              <span>Sub Total: </span>
              <strong>${cartSubTotal}</strong>
            </h6>
            <h6>
              <span>Tax: </span>
              <strong>${cartTax}</strong>
            </h6>
            <h5 className="text-bright">
              <span>Total: </span>
              <strong>${cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
