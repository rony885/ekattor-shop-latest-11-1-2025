import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample product data
const products = [
  {
    id: 1,
    img1: "/img/product/home1-pro-1.jpg",
    img2: "/img/product/home1-pro-2.jpg",
    subtitle: "Wireless device",
    title: "Wireless headphones",
    newPrice: "$21.00",
    oldPrice: "$25.00",
    sale: "20%",
  },
  {
    id: 2,
    img1: "/img/product/home1-pro-3.jpg",
    img2: "/img/product/home1-pro-4.jpg",
    subtitle: "Waterproof",
    title: "Wireless mouse",
    newPrice: "$18.00",
    oldPrice: "$24.00",
    sale: "14%",
  },
  {
    id: 3,
    img1: "/img/product/home1-pro-5.jpg",
    img2: "/img/product/home1-pro-6.jpg",
    subtitle: "Live program",
    title: "Pen drivess",
    newPrice: "$10.00",
    oldPrice: "$15.00",
    sale: "22%",
  },
  {
    id: 4,
    img1: "/img/product/home1-pro-7.jpg",
    img2: "/img/product/home1-pro-8.jpg",
    subtitle: "Waterproof watch",
    title: "Smart watch",
    newPrice: "$32.00",
    oldPrice: "$38.00",
    sale: "30%",
  },
  {
    id: 5,
    img1: "/img/product/home1-pro-1.jpg",
    img2: "/img/product/home1-pro-2.jpg",
    subtitle: "Wireless device",
    title: "Wireless headphones",
    newPrice: "$21.00",
    oldPrice: "$25.00",
    sale: "20%",
  },
  {
    id: 6,
    img1: "/img/product/home1-pro-3.jpg",
    img2: "/img/product/home1-pro-4.jpg",
    subtitle: "Waterproof",
    title: "Wireless mouse",
    newPrice: "$18.00",
    oldPrice: "$24.00",
    sale: "14%",
  },
  {
    id: 7,
    img1: "/img/product/home1-pro-5.jpg",
    img2: "/img/product/home1-pro-6.jpg",
    subtitle: "Live program",
    title: "Pen drivess",
    newPrice: "$10.00",
    oldPrice: "$15.00",
    sale: "22%",
  },
  {
    id: 8,
    img1: "/img/product/home1-pro-7.jpg",
    img2: "/img/product/home1-pro-8.jpg",
    subtitle: "Waterproof watch",
    title: "Smart watch",
    newPrice: "$32.00",
    oldPrice: "$38.00",
    sale: "30%",
  },
];

// ✅ Custom Arrow Components
const PrevArrow = ({ className, onClick }) => (
  <button className={`slick-arrow slick-prev ${className}`} onClick={onClick}>
    <i className="fa-solid fa-chevron-left"></i>
  </button>
);

const NextArrow = ({ className, onClick }) => (
  <button className={`slick-arrow slick-next ${className}`} onClick={onClick}>
    <i className="fa-solid fa-chevron-right"></i>
  </button>
);

const ProductTranding = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Wrapper>
      <section className="Trending-product bg-color section-ptb">
        <div className="collection-category">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Browse collection</span>
              <h2>
                <span>Trending product</span>
              </h2>
            </div>
          </div>

          <div className="container">
            <div className="collection-wrap">
              <Slider {...settings}>
                {products.map((product) => (
                  <div key={product.id} className="single-product-wrap">
                    <div className="product-image">
                      <Link to="/product" className="pro-img">
                        <img
                          src={product.img1}
                          className="img-fluid img1"
                          alt={product.title}
                        />
                        <img
                          src={product.img2}
                          className="img-fluid img2"
                          alt={product.title}
                        />
                      </Link>
                      <div className="product-action">
                        <Link to="#" className="quickview">
                          <span className="tooltip-text">Quickview</span>
                          <span className="pro-action-icon">
                            <i className="feather-eye"></i>
                          </span>
                        </Link>
                        <Link to="#" className="add-to-cart">
                          <span className="tooltip-text">Add to cart</span>
                          <span className="pro-action-icon">
                            <i className="feather-shopping-bag"></i>
                          </span>
                        </Link>
                        <Link to="/wishlist-product" className="wishlist">
                          <span className="tooltip-text">Wishlist</span>
                          <span className="pro-action-icon">
                            <i className="feather-heart"></i>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="product-content">
                      <div className="product-sub-title">
                        <span>{product.subtitle}</span>
                      </div>
                      <div className="product-title">
                        <h6>
                          <Link to="/product">{product.title}</Link>
                        </h6>
                      </div>
                      <div className="product-price">
                        <div className="pro-price-box">
                          <span className="new-price">{product.newPrice}</span>
                          <span className="old-price">{product.oldPrice}</span>
                        </div>
                      </div>
                      <div className="product-description">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>

                    <div className="pro-label-retting">
                      <div className="product-ratting">
                        <span className="pro-ratting">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="product-label pro-new-sale">
                        <span className="product-label-title">
                          Sale<span>{product.sale}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="collection-button">
                <Link to="/product" className="btn btn-style2">
                  View all item
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

// ✅ Styled Components
const Wrapper = styled.section`
  .slick-slide {
    display: flex !important;
    height: auto !important;
  }

  .slick-slide > div {
    padding: 0 12px;
  }

  .single-product-wrap {
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .single-product-wrap:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Arrows */
  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .slick-prev {
    left: -45px;
  }

  .slick-next {
    right: -45px;
  }

  .slick-arrow i {
    font-size: 18px;
    color: #333;
  }

  .slick-arrow:hover {
    background: #f5e70e;
    border-color: #f5e70e;
  }

  .slick-arrow:hover i {
    color: #fff;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .slick-prev {
      left: -20px;
    }
    .slick-next {
      right: -20px;
    }
  }

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      width: 34px;
      height: 34px;
    }

    .slick-arrow i {
      font-size: 16px;
    }
  }

  @media (max-width: 425px) {
    .slick-prev {
      left: -5px;
    }
    .slick-next {
      right: -5px;
    }
  }
`;

export default ProductTranding;
