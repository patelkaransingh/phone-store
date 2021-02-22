import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonBack, ProductDetailCartButton } from "./styledElements/button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container">
              {/* title Start */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* title end */}

              {/* product info */}
              {/* image of product */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* priduct details */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span className="ml-2 mr-1">$</span>
                      {price}
                    </strong>
                  </h4>
                  <div className="text-capitalize font-weight-bold mt-3 mb-0">
                    <p className="text-faded lead">{info}</p>
                  </div>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonBack>
                        <i
                          className="fa fa-caret-left mr-2"
                          aria-hidden="true"
                        ></i>
                        All Products
                      </ButtonBack>
                    </Link>
                    <ProductDetailCartButton
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add to Cart"}
                    </ProductDetailCartButton>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
