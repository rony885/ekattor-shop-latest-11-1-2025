// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   FaCcVisa,
//   FaCcMastercard,
//   FaCcPaypal,
//   FaCcAmex,
// } from "react-icons/fa6";
// import prodactData from "../products.js";

// const QuickviewModal = () => {
//   const [products, setProducts] = useState([]);
//   // console.log(products);
//   useEffect(() => {
//     setProducts(prodactData);
//   }, []);

//   const navigate = useNavigate();
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   const { prodId } = useParams();

//   const findProduct = products.find((prod) => prod.id === parseInt(prodId));

//   // Close modal
//   const closeModal = (modalId) => {
//     const modalEl = document.getElementById(modalId);

//     if (modalEl && window.bootstrap) {
//       let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
//       if (!modalInstance) {
//         modalInstance = new window.bootstrap.Modal(modalEl, {
//           backdrop: true,
//           keyboard: true,
//         });
//       }

//       // Hide modal
//       modalInstance.hide();

//       // Cleanup after hidden
//       modalEl.addEventListener(
//         "hidden.bs.modal",
//         () => {
//           // Remove leftover backdrop
//           const backdrop = document.querySelector(".modal-backdrop.fade.show");
//           if (backdrop) backdrop.remove();

//           // Restore body scroll
//           document.body.classList.remove("modal-open");
//           document.body.removeAttribute("data-bs-overflow");
//           document.body.removeAttribute("data-bs-padding-right");
//           document.body.style.overflow = "";
//           document.body.style.paddingRight = "";

//           // 🟢 Reset modal DOM state for next time
//           modalEl.classList.remove("show");
//           modalEl.style.display = "none";
//           modalEl.setAttribute("aria-hidden", "true");
//           modalEl.removeAttribute("aria-modal");
//           modalEl.removeAttribute("role");
//         },
//         { once: true }
//       );
//     }
//   };

//   return (
//     <div className="productmodal">
//       <div className="modal fade" id="quickview">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h6 className="modal-quickview">Quickview</h6>
//               <button type="button" className="close" data-bs-dismiss="modal">
//                 <i className="fa-solid fa-xmark"></i>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="quickview-slider">
//                 {/* <Slider
//                   asNavFor={nav2}
//                   ref={(slider1) => setNav1(slider1)}
//                   arrows={true}
//                   fade={true}
//                   infinite={true}
//                   className="main-slider"
//                 >
//                   {productImages.map((img, index) => (
//                     <div key={index}>
//                       <Link
//                         to="/product-details"
//                         onClick={() => closeModal("quickview")}
//                       >
//                         <img
//                           // src={img}
//                           src={img}
//                           className="img-fluid"
//                           alt={`p-${index + 1}`}
//                         />
//                       </Link>
//                     </div>
//                   ))}

       
//                   <div>
//                       <Link
//                         to={`/product-details/${product.id}`}
//                         onClick={() => closeModal("quickview")}
//                       >
//                         <img
//                           src={img}
//                           src={findProduct.img1}
//                           className="img-fluid"
//                           alt=""
//                         />
//                       </Link>
//                     </div> 
            
//                 </Slider>

//                 <Slider
//                   asNavFor={nav1}
//                   ref={(slider2) => setNav2(slider2)}
//                   slidesToShow={4}
//                   swipeToSlide={true}
//                   focusOnSelect={true}
//                   infinite={true}
//                   className="thumb-slider"
//                 >
//                   {productImages.map((img, index) => (
//                     <div key={index}>
//                       <img
//                         src={img}
//                         className="img-fluid"
//                         alt={`thumb-${index + 1}`}
//                       />
//                     </div>
//                   ))}
//                 </Slider> */}

//                 <Slider
//                   asNavFor={nav2}
//                   ref={(slider1) => setNav1(slider1)}
//                   arrows={true}
//                   fade={true}
//                   infinite={true}
//                   className="main-slider"
//                 >
//                   {products.map((product) => (
//                     <div key={product.id}>
//                       <Link
//                         to={`/product-details/${product.id}`}
//                         onClick={() => closeModal("quickview")}
//                       >
//                         <img
//                           src={product.img1}
//                           className="img-fluid"
//                           alt={product.title || `product-${product.id}`}
//                         />
//                       </Link>
//                     </div>
//                   ))}
//                 </Slider>

//                 {/* 🟢 Thumbnail slider */}
//                 <Slider
//                   asNavFor={nav1}
//                   ref={(slider2) => setNav2(slider2)}
//                   slidesToShow={4}
//                   swipeToSlide={true}
//                   focusOnSelect={true}
//                   infinite={true}
//                   className="thumb-slider"
//                 >
//                   {products.map((product) => (
//                     <div key={product.id}>
//                       <img
//                         src={product.img1}
//                         className="img-fluid"
//                         alt={`thumb-${product.id}`}
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//               </div>

//               <div className="quick-view-content">
//                 <div className="pro-nprist">
//                   <div className="product-title">
//                     <h2>360 cemera</h2>
//                   </div>

//                   <div className="product-ratting">
//                     <span className="pro-ratting">
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star-half-alt"></i>
//                     </span>
//                     <span className="spr-badge-caption">No reviews</span>
//                     <span className="slash">/</span>
//                     <div className="product-count-sale">
//                       <span className="count">16</span> sold in last
//                       <span className="time">2</span> hours
//                     </div>
//                   </div>

//                   <div className="pro-prlb pro-sale">
//                     <div className="price-box">
//                       <span className="new-price">$61.00 </span>
//                       <span className="old-price">$54.00 </span>
//                       <span className="percent-count">-%17</span>
//                     </div>
//                   </div>
//                   <div className="short-description">
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry dummy text and typesetting industry
//                     </p>
//                   </div>
//                   <div className="product-variant">
//                     <h6>Availability:</h6>
//                     <span className="stock-qty in-stock text-success">
//                       <span>
//                         In stock<i className="bi bi-check2"></i>
//                       </span>
//                     </span>
//                   </div>
//                   <div className="pro-detail-action">
//                     <div className="product-variant-option">
//                       <div className="swatch-variant">
//                         <div className="swatch clearfix Color">
//                           <div className="header">
//                             <h6>
//                               <span>Color</span>
//                             </h6>
//                           </div>
//                           <div className="variant-wrap">
//                             <div className="variant-property">
//                               <div className="swatch-element White first-variant">
//                                 <input
//                                   type="radio"
//                                   name="option-0"
//                                   value="White"
//                                   defaultChecked=""
//                                 />
//                                 <label>White</label>
//                               </div>
//                               <div className="swatch-element Gold">
//                                 <input
//                                   type="radio"
//                                   name="option-0"
//                                   value="Gold"
//                                 />
//                                 <label>Gold</label>
//                               </div>
//                               <div className="swatch-element Silver">
//                                 <input
//                                   type="radio"
//                                   name="option-0"
//                                   value="Silver"
//                                 />
//                                 <label>Silver</label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="product-button">
//                     <form method="post" className="cart">
//                       <div className="pro-detail-button">
//                         <div className="product-quantity-button">
//                           <div className="product-quantity-action">
//                             <h6>Quantity:</h6>
//                             <div className="product-quantity">
//                               <div className="cart-plus-minus">
//                                 <button className="dec qtybutton minus">
//                                   <i className="feather-minus"></i>
//                                 </button>
//                                 <input
//                                   type="text"
//                                   name="quantity"
//                                   defaultValue="1"
//                                 />
//                                 <button className="inc qtybutton plus">
//                                   <i className="feather-plus"></i>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={() => {
//                               closeModal("quickview");
//                               navigate("/cart-view");
//                             }}
//                             className="btn add-to-cart ajax-spin-cart"
//                           >
//                             <span className="cart-title">Add to cart</span>
//                           </button>
//                         </div>

//                         <Link
//                           to="/cart-empty"
//                           className="btn btn-cart btn-theme"
//                           onClick={() => closeModal("quickview")}
//                         >
//                           <span>Buy now</span>
//                         </Link>
//                       </div>
//                     </form>
//                   </div>
//                   <div className="product-actions">
//                     <div className="pro-aff-che">
//                       <Link
//                         to="/wishlist-product"
//                         className="wishlist"
//                         onClick={() => closeModal("quickview")}
//                       >
//                         <span className="wishlist-icon action-wishlist tile-actions--btn wishlist-btn">
//                           <span className="add-wishlist">
//                             <i className="bi bi-heart"></i>
//                           </span>
//                         </span>
//                         <span className="wishlist-text">Wishlist</span>
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="product-payment-image">
//                     <ul className="payment-icon">
//                       <li>
//                         <Link to="/">
//                           <FaCcVisa size={38} color="#142688" title="Visa" />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/">
//                           <FaCcMastercard
//                             size={38}
//                             color="#EB001B"
//                             title="Mastercard"
//                           />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/">
//                           <FaCcAmex
//                             size={38}
//                             color="#006FCF"
//                             title="American Express"
//                           />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/">
//                           <FaCcPaypal
//                             size={38}
//                             color="#003087"
//                             title="PayPal"
//                           />
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickviewModal;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa6";

const QuickviewModal = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null; // nothing selected

  const productImages = [product.img1, product.img2, product.img3, product.img4, product.img5].filter(Boolean);

  const closeModal = (modalId) => {
    const modalEl = document.getElementById(modalId);
    if (modalEl && window.bootstrap) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
    }
  };

  return (
    <div className="productmodal">
      <div className="modal fade" id="quickview">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-quickview">{product.title}</h6>
              <button type="button" className="close" data-bs-dismiss="modal">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <Slider dots={true} arrows={true} infinite={true}>
                    {productImages.map((img, index) => (
                      <div key={index}>
                        <img src={img} className="img-fluid" alt={`product-${index}`} />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="col-md-6">
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
                  <div className="product-price">
                    <span className="new-price">{product.newPrice}</span>{" "}
                    <span className="old-price">{product.oldPrice}</span>
                  </div>
                  <p className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>

                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => {
                      closeModal("quickview");
                      navigate("/cart-view");
                    }}
                  >
                    Add to Cart
                  </button>

                  <div className="mt-4">
                    <FaCcVisa size={32} color="#142688" className="me-2" />
                    <FaCcMastercard size={32} color="#EB001B" className="me-2" />
                    <FaCcAmex size={32} color="#006FCF" className="me-2" />
                    <FaCcPaypal size={32} color="#003087" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default QuickviewModal;
