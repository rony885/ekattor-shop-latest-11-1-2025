import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";

const WishlistProduct = () => {
  const { wishlist, removeFromWishlist, clearWishlist } =
    useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <section className="wishlist-empty section-ptb text-center">
        <h3>Your wishlist is empty 😢</h3>
        <Link to="/product" className="btn btn-style2 mt-3">
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="col">
            <div className="row">
              <div className="breadcrumb-index">
                <ul className="breadcrumb-ul">
                  <li className="breadcrumb-li">
                    <Link className="breadcrumb-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-li">
                    <span className="breadcrumb-text">Wishlist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wishlist-product section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="wishlist-page">
                {wishlist.map((product) => (
                  <div className="wishlist-area">
                    <div className="wishlist-details">
                      <div className="wishlist-all-pro">
                        <div className="wishlist-pro">
                          <div className="wishlist-pro-image">
                            <Link to={`/product-details/${product.id}`}>
                              <img
                                src={product.img1}
                                className="img-fluid"
                                alt="p-5"
                              />
                            </Link>
                          </div>
                          <div className="pro-details">
                            <h6>
                              <Link to={`/product-details/${product.id}`}>
                                {product.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                        <div className="qty-item">
                          <Link to="/cart" className="add-wishlist">
                            Add to cart
                          </Link>
                          <Link to="/checkout" className="add-wishlist">
                            Buy now
                          </Link>
                        </div>
                        <div className="all-pro-price">
                          <div className="price-box">
                            <span className="new-price">
                              {" "}
                              {product.newPrice}
                            </span>
                            <span className="old-price">
                              {" "}
                              {product.oldPrice}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between align-content-center gap-3">
                            <span className="wishalist-icon">
                              <i className="fa fa-heart text-danger"></i>
                            </span>
                            <button
                              onClick={() => removeFromWishlist(product.id)}
                            >
                              <FaTrash className="text-danger fs-5 mt-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="other-link">
                  <ul className="other-ul d-flex justify-content-between align-content-center">
                    <li className="wishlist-other-link">
                      <Link to="/product" className="btn btn-style2">
                        Continue shopping
                      </Link>
                    </li>
                    <li className="wishlist-other-link">
                      <Link onClick={clearWishlist} className="btn btn-style2">
                        Clear wishlist
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistProduct;
