import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonBlue } from "./styledElements/button";
import { ModalConatiner } from "./styledElements/elements";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;

            if (!modalOpen) {
              return null;
            } else {
              return (
                <ModalConatiner>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                      >
                        <h5>
                          <i
                            id="ticked"
                            className="fa fa-check-square mr-2"
                            aria-hidden="true"
                          ></i>
                          added to cart
                        </h5>
                        <img src={img} alt="product" className="img-fluid" />
                        <h5>{title}</h5>
                        <h5 id="priced-at">price: ${price}</h5>
                        <Link to="/">
                          <ButtonBlue
                            id="model-btn"
                            className="mt-1 mr-2"
                            onClick={() => closeModal()}
                          >
                            Continue Shopping
                          </ButtonBlue>
                        </Link>
                        <Link to="/cart">
                          <ButtonBlue
                            id="model-btn"
                            className="mt-2"
                            onClick={() => closeModal()}
                          >
                            View Cart
                          </ButtonBlue>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalConatiner>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
