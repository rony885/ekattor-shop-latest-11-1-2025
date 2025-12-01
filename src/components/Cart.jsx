// import React, { useContext } from "react";
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// import { Trash2, X } from "lucide-react";
// import { Minus, Plus } from "lucide-react";
// import { CartContext } from "../context/CartContext";

// const Cart = ({ cartOpen, closeMennu }) => {
//   const { cartItems, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   return (
//     <Wrapper>
//       <div
//         className={`cart-drawer ${cartOpen ? "cart-drawer active" : ""}`}
//         id="cart-drawer"
//       >
//         <form className="drawer-contents">
//           <div className="drawer-fixed-header">
//             <div className="drawer-header">
//               <h6 className="drawer-header-title">Cart</h6>
//               <div className="drawer-close">
//                 <button
//                   type="button"
//                   className="drawer-close-btn"
//                   onClick={closeMennu}
//                 >
//                   <span className="drawer-close-icon">
//                     <X size={16} strokeWidth={2} />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="drawer-cart-empty">
//             <div className="drawer-scrollable">
//               <h2>Your cart is currently empty</h2>
//               <Link to="#" className="btn btn-style2">
//                 Continue shopping
//               </Link>
//             </div>
//           </div>
//           {!cartItems || cartItems.length === 0 ? (
//             <div className="text-center">
//               <h2 className="fs-5 my-3">Your cart is currently empty</h2>
//               <Link to="/product" className="btn btn-style2">
//                 Continue shopping
//               </Link>
//             </div>
//           ) : (
//             <div className="drawer-inner">
//               <div className="drawer-scrollable">
//                 <ul className="cart-items">
//                   {cartItems.map((product) => {
//                     return (
//                       <li key={product.id} className="cart-item">
//                         <div className="cart-item-info">
//                           <div className="cart-item-image">
//                             <Link to="/product-details">
//                               <img
//                                 src={product.img1}
//                                 className="img-fluid"
//                                 alt="cart-1"
//                               />
//                             </Link>
//                           </div>
//                           <div className="cart-item-details">
//                             <div className="cart-item-name">
//                               {/* <Link to="/product-details">
//                                 Portable speaker
//                               </Link> */}
//                               <Link to="/product-details">{product.title}</Link>
//                             </div>
//                             <div className="cart-pro-info">
//                               <div className="cart-qty-price">
//                                 <span> {product.quantity}</span>
//                                 <span>×</span>
//                                 <span className="price">
//                                   {product.newPrice}
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="cart-item-sub">
//                               <div className="cart-qty-price-remove">
//                                 <div className="cart-item-qty">
//                                   <div className="js-qty-wrapper">
//                                     <div className="js-qty-wrap">
//                                       <button
//                                         type="button"
//                                         className="js-qty-adjust ju-qty-adjust-minus"
//                                       >
//                                         <Minus size={16} strokeWidth={2} />
//                                       </button>
//                                       <input
//                                         type="text"
//                                         className="js-qty-num"
//                                         name="name"
//                                         defaultValue="1"
//                                         pattern="[0-9]*"
//                                       />
//                                       <button
//                                         type="button"
//                                         className="js-qty-adjust ju-qty-adjust-plus"
//                                       >
//                                         <Plus size={16} strokeWidth={2} />
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="cart-item-price">
//                                   <span className="cart-price">$12.00</span>
//                                 </div>
//                                 <div className="cart-item-remove">
//                                   <button
//                                     type="button"
//                                     className="cart-remove"
//                                     onClick={() => removeFromCart(product.id)}
//                                   >
//                                     <Trash2 size={16} strokeWidth={2} />
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="cart-item-variants">
//                               <h6>Color:</h6>
//                               <span>Black</span>
//                             </div>
//                             <div className="cart-item-variants">
//                               <h6>Size:</h6>
//                               <span>XL</span>
//                             </div>
//                           </div>
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 <div className="drawer-notes">
//                   <label htmlFor="cartnote">Order note</label>
//                   <textarea
//                     name="note"
//                     className="cart-notes"
//                     id="cartnote"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="drawer-footer">
//                 <div className="drawer-block drawer-total">
//                   <span className="drawer-subtotal">Subtotal</span>
//                   <span className="drawer-totalprice">$74.00</span>
//                 </div>
//                 <div className="drawer-block drawer-ship-text">
//                   <label className="box-area">
//                     <span className="text">
//                       I have read and agree with the
//                       <Link to="/terms-condition">terms &amp; condition.</Link>
//                     </span>
//                     <input type="checkbox" className="cust-checkbox" />
//                     <span className="cust-check"></span>
//                   </label>
//                 </div>
//                 <div className="drawer-block drawer-cart-checkout">
//                   <div className="cart-checkout-btn">
//                     <button
//                       type="button"
//                       name="checkout"
//                       className="btn btn-style2"
//                       onClick={() => {
//                         navigate("/cart-view");
//                         closeMennu();
//                       }}
//                     >
//                       View cart
//                     </button>
//                     <button
//                       type="button"
//                       className="checkout btn btn-style2 disabled"
//                       onClick={() => navigate("/checkout")}
//                     >
//                       Checkout
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section``;

// export default Cart;

import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, X, Minus, Plus } from "lucide-react";
import { CartContext } from "../context/CartContext";

const Cart = ({ cartOpen, closeMennu }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, addToCart, decreaseQty } =
    useContext(CartContext);

  // Convert "৳2,160" → 2160
  const getPriceNumber = (value) => {
    if (!value) return 0;
    const clean = String(value).replace(/[^0-9]/g, "");
    return Number(clean) || 0;
  };

  const incrementQty = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  const decrementQtyHandler = (e, product) => {
    e.preventDefault();
    decreaseQty(product.id);
  };

  // ---- TOTAL PRICE ----
  const lineTotal = cartItems.reduce((acc, item) => {
    const price = getPriceNumber(item.newPrice ?? item.price);
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  return (
    <Wrapper>
      <div
        className={`cart-drawer ${cartOpen ? "cart-drawer active" : ""}`}
        id="cart-drawer"
      >
        <form className="drawer-contents">
          <div className="drawer-fixed-header">
            <div className="drawer-header">
              <h6 className="drawer-header-title">Cart</h6>
              <div className="drawer-close">
                <button
                  type="button"
                  className="drawer-close-btn"
                  onClick={closeMennu}
                >
                  <span className="drawer-close-icon">
                    <X size={16} strokeWidth={2} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {!cartItems || cartItems.length === 0 ? (
            <div className="text-center">
              <h2 className="fs-5 my-3">Your cart is currently empty</h2>
              <Link to="/product" className="btn btn-style2">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="drawer-inner">
              <div className="drawer-scrollable">
                <ul className="cart-items">
                  {cartItems.map((product) => {
                    const price = getPriceNumber(product.newPrice);
                    const qty = product.quantity || 1;

                    return (
                      <li key={product.id} className="cart-item">
                        <div className="cart-item-info">
                          <div className="cart-item-image">
                            <Link to="/product-details">
                              <img
                                src={product.img1}
                                className="img-fluid"
                                alt="cart-img"
                              />
                            </Link>
                          </div>

                          <div className="cart-item-details">
                            <div className="cart-item-name">
                              <Link to="/product-details">{product.title}</Link>
                            </div>

                            <div className="cart-pro-info">
                              <div className="cart-qty-price">
                                <span>{qty}</span>
                                <span>×</span>
                                <span className="price">
                                  {product.newPrice}
                                </span>
                              </div>
                            </div>

                            <div className="cart-item-sub">
                              <div className="cart-qty-price-remove">
                                <div className="cart-item-qty">
                                  <div className="js-qty-wrapper">
                                    <div className="js-qty-wrap">
                                      <button
                                        type="button"
                                        className="js-qty-adjust ju-qty-adjust-minus"
                                        onClick={(e) =>
                                          decrementQtyHandler(e, product)
                                        }
                                      >
                                        <Minus size={16} strokeWidth={2} />
                                      </button>

                                      <input
                                        type="text"
                                        className="js-qty-num"
                                        name="quantity"
                                        value={qty}
                                        readOnly
                                      />

                                      <button
                                        type="button"
                                        className="js-qty-adjust ju-qty-adjust-plus"
                                        onClick={(e) =>
                                          incrementQty(e, product)
                                        }
                                      >
                                        <Plus size={16} strokeWidth={2} />
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="cart-item-price">
                                  <span className="cart-price">
                                    ৳{price * qty}
                                  </span>
                                </div>

                                <div className="cart-item-remove">
                                  <button
                                    type="button"
                                    className="cart-remove"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeFromCart(product.id);
                                    }}
                                  >
                                    <Trash2 size={16} strokeWidth={2} />
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="cart-item-variants">
                              <h6>Color:</h6>
                              <span>Black</span>
                            </div>
                            <div className="cart-item-variants">
                              <h6>Size:</h6>
                              <span>XL</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="drawer-notes">
                  <label htmlFor="cartnote">Order note</label>
                  <textarea
                    name="note"
                    className="cart-notes"
                    id="cartnote"
                  ></textarea>
                </div>
              </div>

              <div className="drawer-footer">
                <div className="drawer-block drawer-total">
                  <span className="drawer-subtotal">Subtotal</span>
                  <span className="drawer-totalprice">৳{lineTotal}</span>
                </div>

                <div className="drawer-block drawer-ship-text">
                  <label className="box-area">
                    <span className="text">
                      I have read and agree with the{" "}
                      <Link to="/terms-condition">terms & condition.</Link>
                    </span>
                    <input type="checkbox" className="cust-checkbox" />
                    <span className="cust-check"></span>
                  </label>
                </div>

                <div className="drawer-block drawer-cart-checkout">
                  <div className="cart-checkout-btn">
                    <button
                      type="button"
                      className="btn btn-style2"
                      onClick={() => {
                        navigate("/cart-view");
                        closeMennu();
                      }}
                    >
                      View cart
                    </button>
                    <button
                      type="button"
                      className="checkout btn btn-style2 disabled"
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Cart;
