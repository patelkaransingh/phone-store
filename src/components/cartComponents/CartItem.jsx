import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, title, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-4 text-capitalize text-center cart-row">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          className="img-fluid"
          style={{
            width: "5rem",
            height: "5rem",
          }}
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Prduct:</span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price:</span>${price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Total:</span>${total}
      </div>
    </div>
  );
}
