import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
                    <span className="breadcrumb-text">wishlist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="wishlist-product section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="wishlist-page">
                <div className="wishlist-area">
                  <div className="wishlist-details">
                    <div className="wishlist-item">
                      <span className="wishlist-head">My wishlist:</span>
                      <span className="sp-link-title">5 Item</span>
                    </div>
                    <div className="wishlist-all-pro">
                      <div className="wishlist-pro">
                        <div className="wishlist-pro-image">
                          <Link to="/product">
                            <img
                              src="/img/menu/home-pro-banner1.jpg"
                              className="img-fluid"
                              alt="p-1"
                            />
                          </Link>
                        </div>
                        <div className="pro-details">
                          <h6>
                            <Link to="/product">Portable speaker</Link>
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
                          <span className="new-price">$21.00</span>
                          <span className="old-price">$25.00</span>
                        </div>
                        <span className="wishalist-icon">
                          <i className="fa fa-heart text-danger"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist-area">
                  <div className="wishlist-details">
                    <div className="wishlist-all-pro">
                      <div className="wishlist-pro">
                        <div className="wishlist-pro-image">
                          <Link to="/product">
                            <img
                              src="/img/menu/home-pro-banner2.jpg"
                              className="img-fluid"
                              alt="p-2"
                            />
                          </Link>
                        </div>
                        <div className="pro-details">
                          <h6>
                            <Link to="product-template2.html">
                              Air conditioner
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
                          <span className="new-price">$54.00</span>
                          <span className="old-price">$65.00</span>
                        </div>
                        <span className="wishalist-icon">
                          <i className="fa fa-heart text-danger"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist-area">
                  <div className="wishlist-details">
                    <div className="wishlist-all-pro">
                      <div className="wishlist-pro">
                        <div className="wishlist-pro-image">
                          <Link to="/product">
                            <img
                              src="/img/menu/home-pro-banner3.jpg"
                              className="img-fluid"
                              alt="p-3"
                            />
                          </Link>
                        </div>
                        <div className="pro-details">
                          <h6>
                            <Link to="/product">Ev charging plug</Link>
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
                          <span className="new-price">$21.00</span>
                          <span className="old-price">$45.00</span>
                        </div>
                        <span className="wishalist-icon">
                          <i className="fa fa-heart text-danger"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist-area">
                  <div className="wishlist-details">
                    <div className="wishlist-all-pro">
                      <div className="wishlist-pro">
                        <div className="wishlist-pro-image">
                          <Link to="/product">
                            <img
                              src="/img/menu/home-pro-banner4.jpg"
                              className="img-fluid"
                              alt="p-4"
                            />
                          </Link>
                        </div>
                        <div className="pro-details">
                          <h6>
                            <Link to="/product">Video shoot drone</Link>
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
                          <span className="new-price">$24.00</span>
                          <span className="old-price">$29.00</span>
                        </div>
                        <span className="wishalist-icon">
                          <i className="fa fa-heart text-danger"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist-area">
                  <div className="wishlist-details">
                    <div className="wishlist-all-pro">
                      <div className="wishlist-pro">
                        <div className="wishlist-pro-image">
                          <Link to="/product">
                            <img
                              src="/img/menu/home-pro-banner5.jpg"
                              className="img-fluid"
                              alt="p-5"
                            />
                          </Link>
                        </div>
                        <div className="pro-details">
                          <h6>
                            <Link to="/product">Verse earphones</Link>
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
                          <span className="new-price">$24.00</span>
                          <span className="old-price">$50.00</span>
                        </div>
                        <span className="wishalist-icon">
                          <i className="fa fa-heart text-danger"></i>
                        </span>
                      </div>
                    </div>
                    <div className="other-link">
                      <ul className="other-ul">
                        <li className="wishlist-other-link">
                          <Link to="/product" className="btn btn-style2">
                            Continue shopping
                          </Link>
                        </li>
                        <li className="wishlist-other-link">
                          <Link to="/wishlist-empty" className="btn btn-style2">
                            Clear wishlist
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="wishlist-product section-ptb">
        <div className="container">
          <h2 className="mb-4">My Wishlist</h2>
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-area mb-4">
              <div className="wishlist-all-pro d-flex align-items-center justify-content-between">
                <div className="wishlist-pro d-flex align-items-center">
                  <div className="wishlist-pro-image">
                    <Link to={`/product-details/${product.id}`}>
                      <img
                        src={product.img1}
                        alt={product.title}
                        className="img-fluid"
                        width="120"
                      />
                    </Link>
                  </div>
                  <div className="pro-details ms-3">
                    <h6>
                      <Link to={`/product-details/${product.id}`}>
                        {product.title}
                      </Link>
                    </h6>
                    <span>{product.newPrice}</span>
                  </div>
                </div>

                <div className="qty-item">
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="btn btn-outline-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <button onClick={clearWishlist} className="btn btn-style2 mt-3">
              Clear Wishlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistProduct;
