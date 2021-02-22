import React from "react";
import { CartTitle } from "../styledElements/elements";

export default function CartHeading() {
  return (
    <div>
      <CartTitle className="row mt-3 mb-2">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <p className="text-blue text-capitalize font-weight-bold">
            Your Cart
          </p>
        </div>
      </CartTitle>
    </div>
  );
}
