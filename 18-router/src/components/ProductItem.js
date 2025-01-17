import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { id, name, email, body } = product;

    return (
        <div>
            <ul>
                <Link to={`/products/${id}`}>
                    <li>상품명 : {name}</li>
                </Link>
                <li>상세설명 : {body}</li>
            </ul>
        </div>
    );
}
