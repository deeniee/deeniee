import React, { useState, useMemo } from 'react';

const ProductFilter = () => {
    // 상품 가격 제한 상태 관리
    const [priceLimit, setPriceLimit] = useState('');

    const products = [
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 50 },
        { name: 'Product C', price: 70 },
    ];

    const handlePriceLimit = (e) => {
        setPriceLimit(e.target.value);
    };

    // 필터링 로직
    const filteredProducts = useMemo(() => {
        return products.filter((prod) => {
            return priceLimit === '' || prod.price < priceLimit;
        });
    }, [priceLimit, products]);

    return (
        <div>
            <h2>Product Filter</h2>
            <input
                type="number"
                value={priceLimit}
                placeholder="Enter price limit"
                onChange={handlePriceLimit}
            />
            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((prod, index) => (
                        <li key={index}>
                            {prod.name} - ${prod.price}
                        </li>
                    ))
                ) : (
                    <li>No products</li>
                )}
            </ul>
        </div>
    );
};

export default ProductFilter;
