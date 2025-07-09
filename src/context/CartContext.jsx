import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, qty) => {
        const exist = cartItems.find((x) => x.id === product.id);

        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + qty } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty }]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((x) => x.id !== id));
    };
    
    const updateCartQty = (id, qty) => {
         setCartItems(
            cartItems.map((x) =>
                x.id === id ? { ...x, qty } : x
            )
        );
    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQty,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}; 