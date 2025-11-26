// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext.jsx";

// const ViewCartInfo = () => {
//     const { addToCart } = useContext(CartContext);

//   return (
//     <>
//       <section className="breadcrumb-area">
//         <div className="container">
//           <div className="col">
//             <div className="row">
//               <div className="breadcrumb-index">
//                 <ul className="breadcrumb-ul">
//                   <li className="breadcrumb-li">
//                     <Link className="breadcrumb-link" to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="breadcrumb-li">
//                     <span className="breadcrumb-text">Your shopping cart</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="cart-page section-ptb">
//         <form method="post">
//           <div className="container">
//             <div className="row">
//               <div className="col">
//                 <div className="cart-page-wrap">
//                   <div className="cart-wrap-info">
//                     <div className="cart-item-wrap">
//                       <div className="cart-title">
//                         <h6>My cart:</h6>
//                         <span className="cart-count">
//                           <span className="cart-counter">3</span>
//                           <span className="cart-item-title">Items</span>
//                         </span>
//                       </div>
//                       <div className="item-wrap">
//                         <ul className="cart-wrap">
//                           {/* <!-- cart-info start --> */}
//                           <li className="item-info">
//                             <div className="item-img">
//                               <Link to="/product">
//                                 <img
//                                   src="/img/menu/home-pro-banner1.jpg"
//                                   className="img-fluid"
//                                   alt="p-1"
//                                 />
//                               </Link>
//                             </div>

//                             <div className="item-text">
//                               <Link to="/product">Bluetooth earbuds</Link>
//                               <span className="item-option">
//                                 <span className="item-title">Color:</span>
//                                 <span className="item-type">Black</span>
//                               </span>
//                               <span className="item-option">
//                                 <span className="item-price">$11,00</span>
//                               </span>
//                             </div>
//                           </li>

//                           {/* <!-- cart-qty start --> */}
//                           <li className="item-qty">
//                             <div className="product-quantity-action">
//                               <div className="product-quantity">
//                                 <div className="cart-plus-minus">
//                                   <button className="dec qtybutton minus">
//                                     <i className="fa-solid fa-minus"></i>
//                                   </button>
//                                   <input
//                                     type="text"
//                                     name="quantity"
//                                     value="1"
//                                   />
//                                   <button className="inc qtybutton plus">
//                                     <i className="fa-solid fa-plus"></i>
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item-remove">
//                               <span className="remove-wrap">
//                                 <Link to="#" className="text-danger">
//                                   Remove
//                                 </Link>
//                               </span>
//                             </div>
//                           </li>

//                           {/* <!-- cart-price start --> */}
//                           <li className="item-price">
//                             <span className="amount full-price">$11,00</span>
//                           </li>
//                         </ul>
//                         <ul className="cart-wrap">
//                           {/* <!-- cart-info start --> */}
//                           <li className="item-info">
//                             <div className="item-img">
//                               <Link to="/product">
//                                 <img
//                                   src="/img/menu/home-pro-banner2.jpg"
//                                   className="img-fluid"
//                                   alt="p-2"
//                                 />
//                               </Link>
//                             </div>

//                             <div className="item-text">
//                               <Link to="/product">Portable speaker</Link>
//                               <span className="item-option">
//                                 <span className="item-title">Color:</span>
//                                 <span className="item-type">White</span>
//                               </span>
//                               <span className="item-option">
//                                 <span className="item-price">$21,00</span>
//                               </span>
//                             </div>
//                           </li>

//                           {/* <!-- cart-qty start --> */}
//                           <li className="item-qty">
//                             <div className="product-quantity-action">
//                               <div className="product-quantity">
//                                 <div className="cart-plus-minus">
//                                   <button className="dec qtybutton minus">
//                                     <i className="fa-solid fa-minus"></i>
//                                   </button>
//                                   <input
//                                     type="text"
//                                     name="quantity"
//                                     value="1"
//                                   />
//                                   <button className="inc qtybutton plus">
//                                     <i className="fa-solid fa-plus"></i>
//                                   </button>
//                                 </div>
//                                 <span className="dec qtybtn"></span>
//                                 <span className="inc qtybtn"></span>
//                               </div>
//                             </div>
//                             <div className="item-remove">
//                               <span className="remove-wrap">
//                                 <Link to="#" className="text-danger">
//                                   Remove
//                                 </Link>
//                               </span>
//                             </div>
//                           </li>

//                           <li className="item-price">
//                             <span className="amount full-price">$21,00</span>
//                           </li>
//                         </ul>
//                         <ul className="cart-wrap">
//                           <li className="item-info">
//                             <div className="item-img">
//                               <Link to="/product">
//                                 <img
//                                   src="/img/menu/home-pro-banner3.jpg"
//                                   className="img-fluid"
//                                   alt="p-3"
//                                 />
//                               </Link>
//                             </div>

//                             <div className="item-text">
//                               <Link to="/product">Verse earphones</Link>
//                               <span className="item-option">
//                                 <span className="item-title">Color:</span>
//                                 <span className="item-type">Red</span>
//                               </span>
//                               <span className="item-option">
//                                 <span className="item-price">$24,00</span>
//                               </span>
//                             </div>
//                           </li>

//                           <li className="item-qty">
//                             <div className="product-quantity-action">
//                               <div className="product-quantity">
//                                 <div className="cart-plus-minus">
//                                   <button className="dec qtybutton minus">
//                                     <i className="fa-solid fa-minus"></i>
//                                   </button>
//                                   <input
//                                     type="text"
//                                     name="quantity"
//                                     value="1"
//                                   />
//                                   <button className="inc qtybutton plus">
//                                     <i className="fa-solid fa-plus"></i>
//                                   </button>
//                                 </div>
//                                 <span className="dec qtybtn"></span>
//                                 <span className="inc qtybtn"></span>
//                               </div>
//                             </div>
//                             <div className="item-remove">
//                               <span className="remove-wrap">
//                                 <Link to="#" className="text-danger">
//                                   Remove
//                                 </Link>
//                               </span>
//                             </div>
//                           </li>

//                           <li className="item-price">
//                             <span className="amount full-price">$24,00</span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="cart-buttons">
//                         <Link to="/product" className="btn-style2">
//                           Continue shopping
//                         </Link>
//                         <Link to="/cart-empty" className="btn-style2">
//                           Clear cart
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="special-notes">
//                       <label>Special instructions for seller</label>
//                       <textarea rows="10" name="note"></textarea>
//                     </div>
//                   </div>
//                   <div className="cart-info-wrap">
//                     <div className="cart-calculator cart-info">
//                       <h6>Shipping info</h6>
//                       <div
//                         className="culculate-shipping"
//                         id="shipping-calculator"
//                       >
//                         <ul>
//                           <li className="field">
//                             <label>Country</label>
//                             <select>
//                               <option>India</option>
//                               <option>Afghanistan</option>
//                               <option>Austria </option>
//                               <option>Belgium</option>
//                               <option>Bhutan</option>
//                               <option>Canada</option>
//                               <option>France</option>
//                               <option>Germany</option>
//                               <option>Maldives</option>
//                               <option>Nepal</option>
//                             </select>
//                           </li>
//                           <li className="field">
//                             <label>State</label>
//                             <select>
//                               <option>Gujarat</option>
//                               <option>Andaman and Nicobar Islands</option>
//                               <option>Andhra Pradesh</option>
//                               <option>Bihar</option>
//                               <option>Chandigarh</option>
//                               <option>Delhi</option>
//                               <option>Haryana</option>
//                               <option>Jammu and Kashmir</option>
//                               <option>Karnataka</option>
//                               <option>Ladakh</option>
//                             </select>
//                           </li>
//                           <li className="field cpn-code">
//                             <label>Postal/Zip Codes</label>
//                             <input
//                               type="text"
//                               name="q"
//                               placeholder="Zip/Postal Code"
//                             />
//                           </li>
//                         </ul>
//                         <div className="shipping-info">
//                           <Link to="#" className="btn btn-style2">
//                             Calculate
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="cart-total-wrap cart-info">
//                       <div className="cart-total">
//                         <div className="total-amount">
//                           <h6 className="total-title">Total</h6>
//                           <span className="amount total-price">$56.00</span>
//                         </div>
//                         <div className="proceed-to-discount">
//                           <input
//                             type="text"
//                             name="discount"
//                             placeholder="Discount code"
//                           />
//                         </div>
//                         <div className="proceed-to-checkout">
//                           <Link to="/checkout" className="btn btn-style2">
//                             Checkout
//                           </Link>
//                         </div>
//                         <div className="cart-payment-icon">
//                           <ul className="payment-icon">
//                             <li>
//                               <Link to="/">
//                                 <img
//                                   src="/img/payment/pay-1.jpg"
//                                   className="img-fluid"
//                                   alt="pay-1"
//                                 />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="/">
//                                 <img
//                                   src="/img/payment/pay-2.jpg"
//                                   className="img-fluid"
//                                   alt="pay-2"
//                                 />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="/">
//                                 <img
//                                   src="/img/payment/pay-3.jpg"
//                                   className="img-fluid"
//                                   alt="pay-3"
//                                 />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="/">
//                                 <img
//                                   src="/img/payment/pay-4.jpg"
//                                   className="img-fluid"
//                                   alt="pay-4"
//                                 />
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default ViewCartInfo;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

const ViewCartInfo = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

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
                    <span className="breadcrumb-text">Your shopping cart</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cart-page section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart-page-wrap">
                <div className="cart-wrap-info">
                  {/* ---------- Empty Cart ---------- */}
                  {cartItems.length === 0 && (
                    <h3 style={{ padding: "30px 0", textAlign: "center" }}>
                      Your cart is empty 😕
                    </h3>
                  )}

                  {/* ---------- Cart Items ---------- */}
                  {cartItems.length > 0 && (
                    <div className="item-wrap">
                      {cartItems.map((item) => (
                        <ul className="cart-wrap" key={item.id}>
                          {/* PRODUCT INFO */}
                          <li className="item-info">
                            <div className="item-img">
                              <img
                                src={item.image}
                                className="img-fluid"
                                alt={item.name}
                              />
                            </div>

                            <div className="item-text">
                              <span>{item.name}</span>
                              <span className="item-option">
                                <span className="item-price">
                                  ${item.price}
                                </span>
                              </span>
                            </div>
                          </li>

                          {/* QUANTITY */}
                          <li className="item-qty">
                            <div className="product-quantity-action">
                              <div className="product-quantity">
                                <div className="cart-plus-minus">
                                  <input
                                    type="text"
                                    value={item.quantity}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>

                            {/* REMOVE BUTTON */}
                            <div className="item-remove">
                              <span className="remove-wrap">
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-danger"
                                >
                                  Remove
                                </button>
                              </span>
                            </div>
                          </li>

                          {/* PRICE */}
                          <li className="item-price">
                            <span className="amount full-price">
                              ${item.price * item.quantity}
                            </span>
                          </li>
                        </ul>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="cart-buttons">
                    <Link to="/product" className="btn-style2">
                      Continue shopping
                    </Link>
                  </div>
                </div>

                {/* Right Side Cart Summary */}
                {cartItems.length > 0 && (
                  <div className="cart-info-wrap">
                    <div className="cart-total-wrap cart-info">
                      <div className="cart-total">
                        <div className="total-amount">
                          <h6 className="total-title">Total</h6>
                          <span className="amount total-price">
                            $
                            {cartItems
                              .reduce(
                                (sum, item) => sum + item.price * item.quantity,
                                0
                              )
                              .toFixed(2)}
                          </span>
                        </div>

                        <div className="proceed-to-checkout">
                          <Link to="/checkout" className="btn btn-style2">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCartInfo;
