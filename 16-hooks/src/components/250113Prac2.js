import React, { useState, useCallback, useEffect, useRef } from 'react';

const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
];

const ShoppingCartApp = () => {
    const [cart, setCart] = useState([]);
    const prevRef = useRef();

    const addToCart = useCallback((product) => {
        setCart((prevCart) => [
            ...prevCart,
            { id: product.id, name: product.name },
        ]);
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCart((prevCart) =>
            prevCart.filter((item) => {
                return item.id !== productId;
            }),
        );
    }, []);

    // addToCart 참조값 변경 여부 확인 [useEffect]
    useEffect(() => {
        console.log('ADD to CART', prevRef.current === addToCart);
        prevRef.current = addToCart;
    }, [addToCart]);

    // removeFromCart 참조값 변경 여부 확인 [useEffect]
    useEffect(() => {
        console.log('REMOVED', prevRef.current === removeFromCart);
        prevRef.current = removeFromCart;
    }, [removeFromCart]);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((prod) => (
                    <li key={prod.id}>
                        {prod.name}
                        <button onClick={() => addToCart(prod)}>
                            ADD to CART
                        </button>
                    </li>
                ))}
            </ul>

            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeFromCart(item.id)}>
                            REMOVE
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCartApp;
