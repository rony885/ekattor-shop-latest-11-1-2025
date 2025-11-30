// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     // Load from localStorage on first render
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   // Save to localStorage whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existing = prevItems.find((item) => item.id === product.id);

//       if (existing) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((product) => product.id !== id)
//     );
//   };

//   // Decrease quantity
//   const decreaseQty = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, decreaseQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (!savedCart) return [];

    try {
      const parsed = JSON.parse(savedCart);
      // ensure every item has quantity at least 1
      return parsed.map((item) => ({
        ...item,
        quantity: item.quantity && item.quantity > 0 ? item.quantity : 1,
      }));
    } catch (e) {
      console.error("Error parsing cartItems from localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((product) => product.id !== id)
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        const currentQty = item.quantity || 1;
        if (item.id === id && currentQty > 1) {
          return { ...item, quantity: currentQty - 1 };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
