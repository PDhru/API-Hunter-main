import React from "react";
import '../Cart.css'
function CartPage({
  cartList,
  removeItemFromCart,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <div className="container mt-5 p-4 rounded cart-page">
      <h2 className="text-center mb-4 text-primary fw-bold">Your Cart</h2>
      {cartList.length > 0 ? (
        cartList.map((item) => (
          <div
            className="card mb-4 shadow-sm border-0 cart-item"
            key={item.id}
          >
            <div className="row g-0 align-items-center">
              <div className="col-md-4 text-center p-3">
                <img
                  src={item.url}
                  className="img-fluid rounded cart-image"
                  alt={item.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{item.title}</h5>
                  <p className="card-text text-muted fs-5">
                    Price: <span className="text-success">Rs. {item.price}</span>
                  </p>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border border-secondary rounded bg-light quantity-box">
                      {item.quantity}
                    </span>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-warning text-center mt-4" role="alert">
          Your cart is empty!!
        </div>
      )}
    </div>
  );
}

export default CartPage;
