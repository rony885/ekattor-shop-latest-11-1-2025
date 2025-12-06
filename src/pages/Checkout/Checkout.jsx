// import React from "react";
// import { Link } from "react-router-dom";

// const Checkout = () => {
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
//                     <span className="breadcrumb-text">Checkout</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-ptb">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <div className="checkout-area">
//                 <div className="billing-area">
//                   <form>
//                     <h2>Billing details</h2>
//                     <div className="billing-form">
//                       <ul className="input-2">
//                         <li className="billing-li">
//                           <label>First name</label>
//                           <input
//                             type="text"
//                             name="f-name"
//                             placeholder="First name"
//                           />
//                         </li>
//                         <li className="billing-li">
//                           <label>Last name</label>
//                           <input
//                             type="text"
//                             name="l-name"
//                             placeholder="Last name"
//                           />
//                         </li>
//                       </ul>
//                       <ul className="billing-ul">
//                         <li className="billing-li">
//                           <label>Company name (Optional)</label>
//                           <input
//                             type="text"
//                             name="company details"
//                             placeholder="Company name"
//                           />
//                         </li>
//                         <li className="billing-li">
//                           <label>Country</label>
//                           <select>
//                             <option>Select Link country</option>
//                             <option>United country</option>
//                             <option>Russia</option>
//                             <option>italy</option>
//                             <option>France</option>
//                             <option>Ukraine</option>
//                             <option>Germany</option>
//                             <option>india</option>
//                             <option>Australia</option>
//                             <option>canada</option>
//                           </select>
//                         </li>
//                         <li className="billing-li">
//                           <label>Street address</label>
//                           <input
//                             type="text"
//                             name="address"
//                             placeholder="Street address"
//                           />
//                         </li>
//                         <li className="billing-li">
//                           <label>Apartment,suite,unit etc. (Optional)</label>
//                           <input type="text" name="--" />
//                         </li>
//                         <li className="billing-li">
//                           <label>Town / City</label>
//                           <input type="text" name="city" />
//                         </li>
//                         <li className="billing-li">
//                           <label>State / Country</label>
//                           <input type="text" name="--" />
//                         </li>
//                         <li className="billing-li">
//                           <label>Postcode / Zip</label>
//                           <input type="text" name="--" />
//                         </li>
//                       </ul>
//                       <ul className="input-2">
//                         <li className="billing-li">
//                           <label>Email address</label>
//                           <input
//                             type="text"
//                             name="mail"
//                             placeholder="Email address"
//                           />
//                         </li>
//                         <li className="billing-li">
//                           <label>Phone number</label>
//                           <input
//                             type="text"
//                             name="phone"
//                             placeholder="Phone number"
//                           />
//                         </li>
//                       </ul>
//                     </div>
//                   </form>
//                   <div className="billing-details">
//                     <form>
//                       <h2>Shipping details</h2>
//                       <ul className="shipping-form pro-submit">
//                         <li className="check-box label-info">
//                           <label className="box-area">
//                             <span className="text">
//                               Ship to Link different address?
//                             </span>
//                             <input type="checkbox" className="cust-checkbox" />
//                             <span className="cust-check"></span>
//                           </label>
//                         </li>
//                         <li className="comment-area">
//                           <label>Order notes(Optional)</label>
//                           <textarea
//                             name="comments"
//                             rows="5"
//                             cols="80"
//                           ></textarea>
//                         </li>
//                       </ul>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="order-area">
//                   <div className="check-pro">
//                     <h2>In your cart (2)</h2>
//                     <ul className="check-ul">
//                       <li>
//                         <div className="check-pro-img">
//                           <Link to="/product">
//                             <img
//                               src="/img/menu/home-pro-banner1.jpg"
//                               className="img-fluid"
//                               alt="p-1"
//                             />
//                           </Link>
//                         </div>
//                         <div className="check-content">
//                           <Link to="/product">Verse earphones</Link>
//                           <span className="check-code">
//                             <span>Product code:</span>
//                             <span>CA70051541B</span>
//                           </span>
//                           <div className="check-qty-pric">
//                             <span className="check-qty">4 X</span>
//                             <span className="check-price">$11,00</span>
//                           </div>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="check-pro-img">
//                           <Link to="/product">
//                             <img
//                               src="/img/menu/home-pro-banner2.jpg"
//                               className="img-fluid"
//                               alt="p-2"
//                             />
//                           </Link>
//                         </div>
//                         <div className="check-content">
//                           <Link to="/product">Bluetooth earbuds</Link>
//                           <span className="check-code">
//                             <span>Product code:</span>
//                             <span>CA70051541B</span>
//                           </span>
//                           <div className="check-qty-pric">
//                             <span className="check-qty">4 X</span>
//                             <span className="check-price">$21,00</span>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <h2>Your order</h2>
//                   <ul className="order-history">
//                     <li className="order-details">
//                       <span>Product:</span>
//                       <span>Total</span>
//                     </li>
//                     <li className="order-details">
//                       <span>Candy nut chocolate</span>
//                       <span>$44,00</span>
//                     </li>
//                     <li className="order-details">
//                       <span>A bekery doughnutss</span>
//                       <span>$84,00</span>
//                     </li>
//                     <li className="order-details">
//                       <span>Subtotal</span>
//                       <span>$128,00</span>
//                     </li>
//                     <li className="order-details">
//                       <span>Shipping Charge</span>
//                       <span>Free shipping</span>
//                     </li>
//                     <li className="order-details">
//                       <span>Total</span>
//                       <span>$128,00</span>
//                     </li>
//                   </ul>
//                   <form>
//                     <ul className="order-form pro-submit">
//                       <li className="label-info">
//                         <label className="box-area">
//                           <span className="text">Direct bank transfer</span>
//                           <input type="checkbox" className="cust-checkbox" />
//                           <span className="cust-check"></span>
//                         </label>
//                       </li>
//                       <li className="label-info">
//                         <label className="box-area">
//                           <span className="text">Paypal</span>
//                           <input type="checkbox" className="cust-checkbox" />
//                           <span className="cust-check"></span>
//                         </label>
//                       </li>
//                       <li className="label-info">
//                         <label className="box-area">
//                           <span className="text">Cash on hand</span>
//                           <input type="checkbox" className="cust-checkbox" />
//                           <span className="cust-check"></span>
//                         </label>
//                       </li>
//                       <li className="pay-icon">
//                         <Link to="#">
//                           <i className="fa-solid fa-credit-card"></i>
//                         </Link>
//                         <Link to="#">
//                           <i className="fa-brands fa-cc-visa"></i>
//                         </Link>
//                         <Link to="#">
//                           <i className="fa-brands fa-cc-paypal"></i>
//                         </Link>
//                         <Link to="#">
//                           <i className="fa-brands fa-cc-mastercard"></i>
//                         </Link>
//                       </li>
//                     </ul>
//                   </form>
//                   <div className="checkout-btn">
//                     <Link
//                       to="/order-complete"
//                       className="btn-style2 checkout disabled"
//                     >
//                       Place order
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Checkout;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  // Convert price string -> number
  const getPriceNumber = (value) => {
    if (!value) return 0;
    const clean = String(value).replace(/[^0-9]/g, "");
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
  };

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => {
    const price = getPriceNumber(item.newPrice ?? item.price);
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const shippingCost = 0; // free shipping
  const total = subtotal + shippingCost;

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
                    <span className="breadcrumb-text">Checkout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="checkout-area">
                {/* ------------------- BILLING AREA ------------------- */}
                <div className="billing-area">
                  <form>
                    <h2>Billing details</h2>
                    <div className="billing-form">
                      <ul className="input-2">
                        <li className="billing-li">
                          <label>First name</label>
                          <input type="text" placeholder="First name" />
                        </li>

                        <li className="billing-li">
                          <label>Last name</label>
                          <input type="text" placeholder="Last name" />
                        </li>
                      </ul>

                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Company (Optional)</label>
                          <input type="text" placeholder="Company name" />
                        </li>

                        <li className="billing-li">
                          <label>Country</label>
                          <select>
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Canada</option>
                            <option>Australia</option>
                          </select>
                        </li>

                        <li className="billing-li">
                          <label>Street address</label>
                          <input type="text" placeholder="Street address" />
                        </li>

                        <li className="billing-li">
                          <label>Apartment (Optional)</label>
                          <input type="text" />
                        </li>

                        <li className="billing-li">
                          <label>Town / City</label>
                          <input type="text" />
                        </li>

                        <li className="billing-li">
                          <label>Postcode / Zip</label>
                          <input type="text" />
                        </li>
                      </ul>

                      <ul className="input-2">
                        <li className="billing-li">
                          <label>Email</label>
                          <input type="text" placeholder="Email" />
                        </li>

                        <li className="billing-li">
                          <label>Phone</label>
                          <input type="text" placeholder="Phone" />
                        </li>
                      </ul>
                    </div>
                  </form>

                  {/* SHIPPING AREA */}
                  <div className="billing-details">
                    <form>
                      <h2>Shipping details</h2>
                      <ul className="shipping-form pro-submit">
                        <li className="check-box label-info">
                          <label className="box-area">
                            <span className="text">
                              Ship to a different address?
                            </span>
                            <input type="checkbox" className="cust-checkbox" />
                            <span className="cust-check"></span>
                          </label>
                        </li>

                        <li className="comment-area">
                          <label>Order notes (Optional)</label>
                          <textarea rows="5"></textarea>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>

                {/* ------------------- ORDER SUMMARY ------------------- */}
                <div className="order-area">
                  <div className="check-pro">
                    <h2>In your cart ({cartItems.length})</h2>

                    {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <ul className="check-ul">
                        {cartItems.map((item) => {
                          const price = getPriceNumber(item.newPrice);
                          return (
                            <li key={item.id}>
                              <div className="check-pro-img">
                                <img
                                  src={item.img1}
                                  className="img-fluid"
                                  alt={item.title}
                                />
                              </div>

                              <div className="check-content">
                                <span>{item.title}</span>

                                <div className="check-qty-pric">
                                  <span className="check-qty">
                                    {item.quantity} ×
                                  </span>
                                  <span className="check-price">৳{price}</span>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <h2>Your order</h2>

                  <ul className="order-history">
                    <li className="order-details">
                      <span>Subtotal</span>
                      <span>৳{subtotal.toLocaleString()}</span>
                    </li>

                    <li className="order-details">
                      <span>Shipping</span>
                      <span>Free</span>
                    </li>

                    <li className="order-details">
                      <span>Total</span>
                      <span>৳{total.toLocaleString()}</span>
                    </li>
                  </ul>

                  <div className="checkout-btn">
                    <Link to="/order-complete" className="btn-style2 checkout">
                      Place order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
