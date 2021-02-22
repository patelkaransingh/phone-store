import React from "react";
import { EmptyCartComp } from "../styledElements/elements";

export default function EmptyCart() {
  return (
    <EmptyCartComp>
      <div className="col-10 mx-auto my-2 text-center text-title">
        <i
          id="empty-cart"
          className="fa fa-shopping-cart mb-2"
          aria-hidden="true"
        ></i>
        <p className="text-muted font-weight-bold">Your Cart is Empty</p>
      </div>
    </EmptyCartComp>
  );
}
