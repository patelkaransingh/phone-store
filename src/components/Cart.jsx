import React, { Component, Fragment } from "react";
import CartColumns from "./cartComponents/CartColumns";
import CartHeading from "./cartComponents/CartHeading";
import EmptyCart from "./cartComponents/EmptyCart";
import { ProductConsumer } from ".././context";
import CartList from "./cartComponents/CartList";
import CartTotals from "./cartComponents/CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <CartHeading />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
