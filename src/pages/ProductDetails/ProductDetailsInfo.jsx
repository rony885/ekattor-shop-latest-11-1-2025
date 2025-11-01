import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prodactData from "../../products.js";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaCcVisa,
  FaCcAmex,
  FaCcPaypal,
  FaCcMastercard,
} from "react-icons/fa";

const ProductDetailsInfo = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    setProducts(prodactData);
  }, []);

  const navigate = useNavigate();
  const [bigNav, setBigNav] = useState(null);
  const [thumbNav, setThumbNav] = useState(null);

  const [isFullView, setIsFullView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { prodId } = useParams();

  const findProduct =
    products && products.find((prod) => prod.id === parseInt(prodId));

  // console.log(findProduct);

  // ✅ Big slider settings
  const bigSettings = {
    asNavFor: thumbNav,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  // Custom Fullscreen Modal Arrows
  const FullPrevArrow = ({ className, style, onClick }) => (
    <button
      className="fullview-arrow prev"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );

  const FullNextArrow = ({ className, style, onClick }) => (
    <button
      className="fullview-arrow next"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );

  // ✅ Thumbnail arrows
  const PrevArrow = ({ onClick }) => (
    <button className="thumb-arrow prev" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
  const NextArrow = ({ onClick }) => (
    <button className="thumb-arrow next" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );

  const thumbSettings = {
    asNavFor: bigNav,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 425, settings: { slidesToShow: 3 } },
      { breakpoint: 375, settings: { slidesToShow: 3 } },
      { breakpoint: 320, settings: { slidesToShow: 3 } },
    ],
  };

  // ✅ Smooth zoom effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    const img = e.currentTarget.querySelector("img");
    if (img) {
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = "scale(2)";
    }
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) {
      img.style.transformOrigin = "center center";
      img.style.transform = "scale(1)";
    }
  };

  // ✅ Open fullscreen modal
  const openFullView = () => {
    if (bigNav) {
      setCurrentIndex(bigNav.innerSlider.state.currentSlide);
    }
    setIsFullView(true);
  };

  return (
    <Wrapper>
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
                    <span className="breadcrumb-text">Wireless earbuds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details-page pro-style1 section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pro-details-pos pro-details-left-pos">
                {/* <!-- Product slider start --> */}
                <div className="product-detail-slider product-details-tb product-details">
                  <div className="product-detail-img product-detail-img-bottom">
                    <div className="product-img-top">
                      <button className="full-view" onClick={openFullView}>
                        <i className="bi bi-arrows-fullscreen"></i>
                      </button>

                      <Slider
                        {...bigSettings}
                        ref={setBigNav}
                        className="slider-big"
                      >
                        {(() => {
                          // Find related products
                          const related = products.filter(
                            (p) =>
                              p.category === findProduct?.category &&
                              p.id !== findProduct?.id
                          );

                          // Collect all images to show
                          const mainImages = findProduct?.images || [
                            findProduct?.img1,
                            findProduct?.img2,
                          ];
                          const relatedImages =
                            related.length > 0
                              ? related.flatMap(
                                  (p) => p.images || [p.img1, p.img2]
                                )
                              : [];

                          // Combine both (if related exist, include them)
                          const allImages = [...mainImages, ...relatedImages];

                          return allImages.map(
                            (img, i) =>
                              img && (
                                <div key={i} className="slick-slide">
                                  <figure
                                    className="zoom"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                  >
                                    <img
                                      src={img}
                                      className="img-fluid zoom-img"
                                      alt={`product-${i}`}
                                    />
                                  </figure>
                                </div>
                              )
                          );
                        })()}
                      </Slider>
                    </div>

                    <div className="pro-slider">
                      <Slider
                        {...thumbSettings}
                        ref={setThumbNav}
                        className="slider-small"
                      >
                        {(() => {
                          const related = products.filter(
                            (p) =>
                              p.category === findProduct?.category &&
                              p.id !== findProduct?.id
                          );

                          const mainImages = findProduct?.images || [
                            findProduct?.img1,
                            findProduct?.img2,
                          ];
                          const relatedImages =
                            related.length > 0
                              ? related.flatMap(
                                  (p) => p.images || [p.img1, p.img2]
                                )
                              : [];

                          const allImages = [...mainImages, ...relatedImages];

                          return allImages.map(
                            (img, i) =>
                              img && (
                                <div key={i} className="slick-slide">
                                  <Link
                                    to="#!"
                                    className="product-single--thumbnail"
                                  >
                                    <img
                                      src={img}
                                      className="img-fluid"
                                      alt={`thumb-${i}`}
                                    />
                                  </Link>
                                </div>
                              )
                          );
                        })()}
                      </Slider>
                    </div>
                  </div>

                  {isFullView && (
                    <div className="fullview-modal">
                      <div
                        className="fullview-overlay"
                        onClick={() => setIsFullView(false)}
                      ></div>

                      <div className="fullview-content">
                        <button
                          className="fullview-close"
                          onClick={() => setIsFullView(false)}
                        >
                          &times;
                        </button>

                        <Slider
                          slidesToShow={1}
                          slidesToScroll={1}
                          arrows={true}
                          fade={true}
                          initialSlide={currentIndex}
                          className="slider-big fullview-slider"
                          prevArrow={<FullPrevArrow />}
                          nextArrow={<FullNextArrow />}
                        >
                          {(() => {
                            // Find related products
                            const related = products.filter(
                              (p) =>
                                p.category === findProduct?.category &&
                                p.id !== findProduct?.id
                            );

                            // Collect all images
                            const mainImages = findProduct?.images || [
                              findProduct?.img1,
                              findProduct?.img2,
                            ];
                            const relatedImages =
                              related.length > 0
                                ? related.flatMap(
                                    (p) => p.images || [p.img1, p.img2]
                                  )
                                : [];

                            const allImages = [...mainImages, ...relatedImages];

                            // Render slides
                            return allImages.map((img, i) => (
                              <div key={i} className="slick-slide">
                                <img
                                  src={img}
                                  className="img-fluid"
                                  alt={`fullview-${i}`}
                                />
                              </div>
                            ));
                          })()}
                        </Slider>
                      </div>
                    </div>
                  )}
                </div>

                <div className="product-details-wrap product-details-tb product-details">
                  <div className="product-details-info">
                    <div className="pro-nprist">
                      <div className="product-info">
                        <div className="product-ratting">
                          <span className="pro-ratting">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </span>
                          <span className="spr-badge-caption">3 Reviews</span>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-title">
                          <h2>Wireless earbuds</h2>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="pro-prlb pro-sale">
                          <div className="price-box">
                            <span className="new-price">$21.00</span>
                            <span className="old-price">$25.00</span>
                            <span className="percent-count">16</span>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-inventory">
                          <div className="stock-inventory stock-more">
                            <p className="text-success">
                              Hurry up! only
                              <span className="available-stock bg-success">
                                4
                              </span>
                              <span>products left in stock!</span>
                            </p>
                          </div>
                          <div className="product-variant">
                            <h6>Availability:</h6>
                            <span className="stock-qty in-stock text-success">
                              <span>
                                In stock<i className="bi bi-check2"></i>
                              </span>
                            </span>
                            <span
                              className="stock-qty out-stock text-danger collapse"
                              style={{ display: "none" }}
                            >
                              <span>Out of stock</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="pro-detail-action">
                          <form method="get" className="cart">
                            <div className="product-variant-option">
                              <div className="swatch-variant">
                                <div className="swatch clearfix Color">
                                  <div className="header">
                                    <h6>
                                      <span>Color</span>
                                    </h6>
                                  </div>
                                  <div className="variant-wrap">
                                    <div className="variant-property">
                                      <div className="swatch-element Black first-variant">
                                        <input
                                          type="radio"
                                          name="option-0"
                                          defaultValue="Black"
                                          defaultChecked
                                        />
                                        <label>Black</label>
                                      </div>
                                      <div className="swatch-element Red">
                                        <input
                                          type="radio"
                                          name="option-0"
                                          defaultValue="Red"
                                        />
                                        <label>Red</label>
                                      </div>
                                      <div className="swatch-element Green">
                                        <input
                                          type="radio"
                                          name="option-0"
                                          defaultValue="Green"
                                        />
                                        <label>Green</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="product-info">
                        <form method="post" className="cart">
                          <div className="product-quantity-action">
                            <h6>Quantity:</h6>
                            <div className="product-quantity">
                              <div className="cart-plus-minus">
                                <button className="dec qtybutton minus">
                                  <i className="fa-solid fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  name="quantity"
                                  defaultValue="1"
                                />
                                <button className="inc qtybutton plus">
                                  <i className="fa-solid fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="product-info">
                        <div className="product-actions">
                          <div className="pro-detail-button">
                            <button
                              type="button"
                              onClick={() => {
                                navigate("/cart-view");
                              }}
                              className="btn add-to-cart ajax-spin-cart"
                            >
                              <span className="cart-title">Add to cart</span>
                            </button>
                            <Link
                              to="/cart-empty"
                              className="btn btn-cart btn-theme"
                            >
                              <span>Buy now</span>
                            </Link>
                          </div>
                          {/* <!-- pro-deatail button start --> */}
                          {/* <!-- pro-deatail wishlist start --> */}
                          <div className="pro-aff-che">
                            <Link to="/wishlist-product" className="wishlist">
                              <span className="wishlist-icon action-wishlist tile-actions--btn wishlist-btn">
                                <span className="add-wishlist">
                                  <i className="bi bi-heart"></i>
                                </span>
                              </span>
                              <span className="wishlist-text">Wishlist</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="form-group">
                          <Link to="#deliver-modal" data-bs-toggle="modal">
                            Delivery &amp; return
                          </Link>
                          <Link to="#que-modal" data-bs-toggle="modal">
                            Ask Link question
                          </Link>
                        </div>
                      </div>
                      <div
                        className="modal fade deliver-modal"
                        id="deliver-modal"
                        tabIndex="-1"
                        style={{ display: "none" }}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="pop-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i className="feather-x"></i>
                              </button>
                              <div className="delivery-block">
                                <div className="space-block">
                                  <h4>Delivery</h4>
                                  <p>All orders shipped with UPS Express.</p>
                                  <p>
                                    Always free shipping for orders over US
                                    $250.
                                  </p>
                                  <p>
                                    All orders are shipped with Link UPS
                                    tracking number.
                                  </p>
                                </div>
                                <div className="space-block">
                                  <h4>Returns</h4>
                                  <p>
                                    Items returned within 14 days of their
                                    original shipment date in same as new
                                    condition will be eligible for Link full
                                    refund or store credit.
                                  </p>
                                  <p>
                                    Refunds will be charged back to the original
                                    form of payment used for purchase.
                                  </p>
                                  <p>
                                    Customer is responsible for shipping charges
                                    when making returns and shipping/handling
                                    fees of original purchase is non-refundable.
                                  </p>
                                  <p>All sale items are final purchases.</p>
                                </div>
                                <div className="space-block">
                                  <h4>Help</h4>
                                  <p>
                                    Give us Link shout if you have any other
                                    questions and/or concerns.
                                  </p>
                                  <p>
                                    Email:
                                    <Link to="mailto:contact@domain.com">
                                      demo@gmail.com
                                    </Link>
                                  </p>
                                  <p>
                                    Phone:
                                    <Link to="tel:+1(23)456789">
                                      +1 (23) 456 789
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- que-modal stat --> */}
                      <div
                        className="modal fade que-modal"
                        id="que-modal"
                        aria-modal="true"
                        tabIndex="-1"
                        role="dialog"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="pop-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i className="feather-x"></i>
                              </button>
                              <div className="product-form-list">
                                <div className="single-product-wrap">
                                  <div className="product-image">
                                    <Link className="pro-img" to="/product">
                                      <img
                                        className="img-fluid img1 resp-img1"
                                        src="/img/product/home1-pro-12.jpg"
                                        alt="p-1"
                                      />
                                      <img
                                        className="img-fluid img2 resp-img2"
                                        src="/img/product/home1-pro-13.jpg"
                                        alt="p-2"
                                      />
                                    </Link>
                                  </div>
                                  <div className="product-content">
                                    <div className="pro-title-price">
                                      <h6>
                                        <Link to="/product">
                                          Portable speaker
                                        </Link>
                                      </h6>
                                      <div className="product-price">
                                        <div className="price-box">
                                          <span className="new-price">
                                            $44.00
                                          </span>
                                          <span className="old-price">
                                            $49.00
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ask-form">
                                <h6>Ask Link question</h6>
                                <form method="post" className="contact-form">
                                  <input
                                    type="hidden"
                                    name="contact[product url]"
                                    defaultValue=""
                                  />
                                  <div className="form-grp">
                                    <input
                                      type="text"
                                      name="contact[name]"
                                      required=""
                                      placeholder="Your name*"
                                    />
                                    <input
                                      type="text"
                                      name="contact[phone]"
                                      placeholder="Your phone number"
                                    />
                                    <input
                                      type="email"
                                      name="contact[email]"
                                      required=""
                                      placeholder="Your email*"
                                    />
                                    <textarea
                                      name="contact[question]"
                                      rows="4"
                                      required=""
                                      placeholder="Your message*"
                                    ></textarea>
                                    <p>* Required fields</p>
                                    <button
                                      type="submit"
                                      className="btn-style2"
                                    >
                                      Submit Now
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="product-info">
                        <p>
                          <span>🚚</span> Item will be delivered on or before
                          <span id="ten-days-ahead">Mar 3 2025</span>
                        </p>
                      </div>
                      <div className="product-info">
                        <div className="product-sku">
                          <h6>SKU:</h6>
                          <span className="variant-sku">abccd-13</span>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="share-icons">
                          <h6>Share:</h6>
                          <div className="pro-social">
                            <ul className="social-icon">
                              <li className="facebook">
                                <Link
                                  to="https://facebook.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaFacebookF />
                                </Link>
                              </li>
                              <li className="twitter">
                                <Link
                                  to="https://twitter.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaTwitter />
                                </Link>
                              </li>
                              <li className="pinterest">
                                <Link
                                  to="https://pinterest.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaPinterestP />
                                </Link>
                              </li>
                              <li className="instagram">
                                <Link
                                  to="https://instagram.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaInstagram />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-payment-image">
                          <ul className="payment-icon">
                            <li>
                              <Link to="/">
                                <FaCcVisa
                                  size={38}
                                  color="#142688"
                                  title="Visa"
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <FaCcMastercard
                                  size={38}
                                  color="#EB001B"
                                  title="Mastercard"
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <FaCcAmex
                                  size={38}
                                  color="#006FCF"
                                  title="American Express"
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <FaCcPaypal
                                  size={38}
                                  color="#003087"
                                  title="PayPal"
                                />
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
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .zoom {
    overflow: hidden;
    position: relative;
  }
  .zoom img {
    transition: transform 0.4s ease-out, transform-origin 0.4s ease-out;
    will-change: transform;
    cursor: zoom-in;
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1);
  }

  .thumb-arrow {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 35%;
    z-index: 1;
    transition: all 0.3s ease;
  }
  .thumb-arrow.prev {
    left: -40px;
  }
  .thumb-arrow.next {
    right: -40px;
  }
  .thumb-arrow:hover {
    background: #512ec3;
    color: #fff;
    border-color: #512ec3;
  }

  /* ================ fullview-slider ================ */
  .fullview-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fullview-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .fullview-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    z-index: 10000;
  }

  .fullview-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: #000; /* black background */
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 10100;

    /* center the X icon */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background 0.3s, transform 0.2s;
  }

  .fullview-close:hover {
    background: #222;
    transform: scale(1.1);
  }

  .fullview-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    z-index: 10100;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fullview-arrow.prev {
    left: 10px;
  }

  .fullview-arrow.next {
    right: 10px;
  }

  .fullview-slider img {
    max-height: 80vh;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }
`;

export default ProductDetailsInfo;
