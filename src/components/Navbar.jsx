import React from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

function Navbar({ count }) {
  return (
    <nav className="navbar navbar-expand-lg bg-gradient shadow-sm">
      <div className="container">
        <Link className="navbar-brand fs-2 fw-bold text-dark" to="/">
          <span className="text-warning">Shop</span>Ease
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" to="/form">
                Add Product
              </Link>
            </li>
          </ul>
          <Link
            className="nav-link d-flex align-items-center text-light fs-5"
            to="/Cart"
          >
            <IoCart fontSize={28} className="me-2" />
            <span className="badge bg-danger rounded-pill">
              {count > 0 ? count : "0"}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
