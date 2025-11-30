// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";

// const ViewCartInfo = () => {
//   const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

//   const incrementQty = (product) => {
//     addToCart(product);
//   };

//   const decrementQty = (product) => {
//     if (product.quantity > 1) {
//       // Decrease quantity by 1
//       const updatedCart = cartItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//       window.location.reload(); // refresh to update context (simplest way)
//     }
//   };

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

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

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";

// const ViewCartInfo = () => {
//   const { cartItems, removeFromCart, addToCart, decreaseQty } =
//     useContext(CartContext);

//   const incrementQty = (product) => {
//     addToCart(product); // increase qty
//   };

//   const decrementQtyHandler = (product) => {
//     decreaseQty(product.id); // decrease qty
//   };

//   // Total price calculation
//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.newPrice * item.quantity,
//     0
//   );

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
//                         {cartItems.length === 0 ? (
//                           <p>Your cart is empty</p>
//                         ) : (
//                           cartItems.map((product) => (
//                             <ul key={product.id} className="cart-wrap">
//                               {/* <!-- cart-info start --> */}
//                               <li className="item-info">
//                                 <div className="item-img">
//                                   <Link to="/product">
//                                     <img
//                                       // src="/img/menu/home-pro-banner1.jpg"
//                                       src={product.img1}
//                                       className="img-fluid"
//                                       alt="p-1"
//                                     />
//                                   </Link>
//                                 </div>

//                                 <div className="item-text">
//                                   {/* <Link to="/product">Bluetooth earbuds</Link> */}
//                                   <Link to={`/product/${product.id}`}>
//                                     {product.title}
//                                   </Link>
//                                   <span className="item-option">
//                                     <span className="item-title">Color:</span>
//                                     <span className="item-type">Black</span>
//                                   </span>
//                                   <span className="item-option">
//                                     {/* <span className="item-price">$11,00</span> */}
//                                     <span className="item-price">
//                                       {" "}
//                                       {product.newPrice}
//                                     </span>
//                                   </span>
//                                 </div>
//                               </li>

//                               {/* <!-- cart-qty start --> */}
//                               <li className="item-qty">
//                                 <div className="product-quantity-action">
//                                   <div className="product-quantity">
//                                     {/* <div className="cart-plus-minus">
//                                       <button className="dec qtybutton minus" >
//                                         <i className="fa-solid fa-minus"></i>
//                                       </button>
//                                       <input
//                                         type="text"
//                                         name="quantity"
//                                         value="1"
//                                       />
//                                       <button className="inc qtybutton plus">
//                                         <i className="fa-solid fa-plus"></i>
//                                       </button>
//                                     </div> */}

//                                     <div className="cart-plus-minus">
//                                       <button
//                                         className="dec qtybutton minus"
//                                         onClick={() =>
//                                           decrementQtyHandler(product)
//                                         }
//                                       >
//                                         <i className="fa-solid fa-minus"></i>
//                                       </button>

//                                       <input
//                                         type="text"
//                                         name="quantity"
//                                         value={product.quantity}
//                                         readOnly
//                                       />

//                                       <button
//                                         className="inc qtybutton plus"
//                                         onClick={() => incrementQty(product)}
//                                       >
//                                         <i className="fa-solid fa-plus"></i>
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="item-remove">
//                                   <span className="remove-wrap">
//                                     <Link
//                                       to="#"
//                                       className="text-danger"
//                                       onClick={() => removeFromCart(product.id)}
//                                     >
//                                       Remove
//                                     </Link>
//                                   </span>
//                                 </div>
//                               </li>

//                               {/* <!-- cart-price start --> */}
//                               <li className="item-price">
//                                 <span className="amount full-price">
//                                  ${product.newPrice * product.quantity}
//                                 </span>
//                               </li>
//                             </ul>
//                           ))
//                         )}
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
import { CartContext } from "../../context/CartContext";

const ViewCartInfo = () => {
  const { cartItems, removeFromCart, addToCart, decreaseQty } =
    useContext(CartContext);

  // Convert "৳2,160" → 2160
  const getPriceNumber = (value) => {
    if (!value) return 0;
    const clean = String(value).replace(/[^0-9]/g, "");
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
  };

  const incrementQty = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  const decrementQtyHandler = (e, product) => {
    e.preventDefault();
    decreaseQty(product.id);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = getPriceNumber(item.newPrice ?? item.price);
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

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
        <form method="post">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="cart-page-wrap">
                  <div className="cart-wrap-info">
                    <div className="cart-item-wrap">
                      <div className="cart-title">
                        <h6>My cart:</h6>
                        <span className="cart-count">
                          <span className="cart-counter">
                            {cartItems.length}
                          </span>
                          <span className="cart-item-title">Items</span>
                        </span>
                      </div>

                      <div className="item-wrap">
                        {cartItems.length === 0 ? (
                          <p>Your cart is empty</p>
                        ) : (
                          cartItems.map((product) => {
                            const price = getPriceNumber(
                              product.newPrice ?? product.price
                            );
                            const qty = product.quantity || 1;
                            const lineTotal = price * qty;

                            return (
                              <ul key={product.id} className="cart-wrap">
                                {/* cart-info start */}
                                <li className="item-info">
                                  <div className="item-img">
                                    <Link to={`/product/${product.id}`}>
                                      <img
                                        src={product.img1}
                                        className="img-fluid"
                                        alt={product.title}
                                      />
                                    </Link>
                                  </div>

                                  <div className="item-text">
                                    <Link to={`/product/${product.id}`}>
                                      {product.title}
                                    </Link>
                                    <span className="item-option">
                                      <span className="item-title">Color:</span>
                                      <span className="item-type">Black</span>
                                    </span>
                                    <span className="item-option">
                                      <span className="item-price">
                                        ৳{price}
                                      </span>
                                    </span>
                                  </div>
                                </li>

                                {/* cart-qty start */}
                                <li className="item-qty">
                                  <div className="product-quantity-action">
                                    <div className="product-quantity">
                                      <div className="cart-plus-minus">
                                        <button
                                          className="dec qtybutton minus"
                                          onClick={(e) =>
                                            decrementQtyHandler(e, product)
                                          }
                                        >
                                          <i className="fa-solid fa-minus"></i>
                                        </button>

                                        <input
                                          type="text"
                                          name="quantity"
                                          value={qty}
                                          readOnly
                                        />

                                        <button
                                          className="inc qtybutton plus"
                                          onClick={(e) =>
                                            incrementQty(e, product)
                                          }
                                        >
                                          <i className="fa-solid fa-plus"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="item-remove">
                                    <span className="remove-wrap">
                                      <Link
                                        to="#"
                                        className="text-danger"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          removeFromCart(product.id);
                                        }}
                                      >
                                        Remove
                                      </Link>
                                    </span>
                                  </div>
                                </li>

                                {/* cart-price start */}
                                <li className="item-price">
                                  <span className="amount full-price">
                                    ৳{lineTotal}
                                  </span>
                                </li>
                              </ul>
                            );
                          })
                        )}
                      </div>

                      <div className="cart-buttons">
                        <Link to="/product" className="btn-style2">
                          Continue shopping
                        </Link>

                        <Link to="/cart-empty" className="btn-style2">
                          Clear cart
                        </Link>
                      </div>
                    </div>

                    <div className="special-notes">
                      <label>Special instructions for seller</label>
                      <textarea rows="10" name="note"></textarea>
                    </div>
                  </div>

                  <div className="cart-info-wrap">
                    <div className="cart-calculator cart-info">
                      <h6>Shipping info</h6>
                      <div
                        className="culculate-shipping"
                        id="shipping-calculator"
                      >
                        <ul>
                          <li className="field">
                            <label>Country</label>
                            <select>
                              <option>India</option>
                              <option>Afghanistan</option>
                              <option>Austria </option>
                              <option>Belgium</option>
                              <option>Bhutan</option>
                              <option>Canada</option>
                              <option>France</option>
                              <option>Germany</option>
                              <option>Maldives</option>
                              <option>Nepal</option>
                            </select>
                          </li>
                          <li className="field">
                            <label>State</label>
                            <select>
                              <option>Gujarat</option>
                              <option>Andaman and Nicobar Islands</option>
                              <option>Andhra Pradesh</option>
                              <option>Bihar</option>
                              <option>Chandigarh</option>
                              <option>Delhi</option>
                              <option>Haryana</option>
                              <option>Jammu and Kashmir</option>
                              <option>Karnataka</option>
                              <option>Ladakh</option>
                            </select>
                          </li>
                          <li className="field cpn-code">
                            <label>Postal/Zip Codes</label>
                            <input
                              type="text"
                              name="q"
                              placeholder="Zip/Postal Code"
                            />
                          </li>
                        </ul>
                        <div className="shipping-info">
                          <Link to="#" className="btn btn-style2">
                            Calculate
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="cart-total-wrap cart-info">
                      <div className="cart-total">
                        <div className="total-amount">
                          <h6 className="total-title">Total</h6>
                          <span className="amount total-price">
                            ৳{totalPrice}
                          </span>
                        </div>

                        <div className="proceed-to-discount">
                          <input
                            type="text"
                            name="discount"
                            placeholder="Discount code"
                          />
                        </div>

                        <div className="proceed-to-checkout">
                          <Link to="/checkout" className="btn btn-style2">
                            Checkout
                          </Link>
                        </div>

                        <div className="cart-payment-icon">
                          <ul className="payment-icon">
                            <li>
                              <Link to="/">
                                <img
                                  src="/img/payment/pay-1.jpg"
                                  className="img-fluid"
                                  alt="pay-1"
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <img
                                  src="/img/payment/pay-2.jpg"
                                  className="img-fluid"
                                  alt="pay-2"
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <img
                                  src="/img/payment/pay-3.jpg"
                                  className="img-fluid"
                                  alt="pay-3"
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <img
                                  src="/img/payment/pay-4.jpg"
                                  className="img-fluid"
                                  alt="pay-4"
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
        </form>
      </section>
    </>
  );
};

export default ViewCartInfo;
