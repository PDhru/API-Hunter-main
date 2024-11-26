import React, { useState, useEffect } from "react";
import "../Product.css";

function Product({ list, handleAddCart }) {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setProductList(list);
  }, [list]);

  const perPage = 8;
  const last = currentPage * perPage;
  const first = last - perPage;

  // Enhanced Filtering
  const filteredList = productList
    .filter((item) => {
      const searchTerm = search.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const priceMatch = item.price.toString().includes(searchTerm);
      return titleMatch || priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      if (sortBy === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  const currentItem = filteredList.slice(first, last);
  const totalPage = Math.ceil(filteredList.length / perPage);

  // Debounce Search Function
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  // Highlight Search Term
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mt-5 p-4 product-page">
      <h2 className="text-center mb-4 text-primary fw-bold">Our Products</h2>
      <div className="search-sort-bar mb-4 d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by Title or Price"
          value={search}
          onChange={handleSearch}
        />
        <select
          className="form-select w-25"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">Title: A-Z</option>

        </select>
      </div>
      <div className="row g-4">
        {currentItem.map((item, i) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <div className="card shadow-sm product-card h-100">
              <img
                src={item.url}
                alt={item.title}
                className="card-img-top product-image"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">
                  {highlightText(item.title, search)}
                </h5>
                <p className="card-text text-success fw-bold">
                  Rs. {highlightText(item.price.toString(), search)}
                </p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleAddCart(i)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPage }).map((_, index) => (
              <li
                className={`page-item ${currentPage === index + 1 ? "active" : ""
                  }`}
                key={index}
              >
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Product;
