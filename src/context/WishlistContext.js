// import React, { createContext, useState, useEffect } from "react";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   // 🧠 Load saved wishlist from localStorage
//   useEffect(() => {
//     const savedWishlist = localStorage.getItem("wishlist");
//     if (savedWishlist) {
//       setWishlist(JSON.parse(savedWishlist));
//     }
//   }, []);

//   // 💾 Save to localStorage when wishlist changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // ➕ Add product to wishlist
//   const addToWishlist = (product) => {
//     const alreadyAdded = wishlist.some((item) => item.id === product.id);
//     if (!alreadyAdded) setWishlist([...wishlist, product]);
//   };

//   // ❌ Remove from wishlist
//   const removeFromWishlist = (productId) => {
//     setWishlist(wishlist.filter((item) => item.id !== productId));
//   };

//   // 🔄 Clear wishlist
//   const clearWishlist = () => setWishlist([]);

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // 🔄 Load saved wishlist from localStorage on first render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // 💾 Save wishlist to localStorage on every change (add/remove)
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      localStorage.removeItem("wishlist"); // clear if empty to avoid stale data
    }
  }, [wishlist]);

  // ➕ Add product to wishlist
  const addToWishlist = (product) => {
    const isAlreadyAdded = wishlist.some((item) => item.id === product.id);
    if (!isAlreadyAdded) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  // ❌ Remove product from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  // 🗑 Clear whole wishlist
  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
