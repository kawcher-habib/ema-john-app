import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Card from '../../Card/Card';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const frist10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(frist10);
    const [card, setCard] = useState([]);

    const handlerAddProduct = (product) => {
        const newCard = [...card, product];
            setCard(newCard)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Product handlerAddProduct = {handlerAddProduct} product={pd}></Product>)
                    }
                </ul>
            </div>
            <div className="card-container">
                <Card card ={card}></Card>
            </div>
        </div>
    );
};

export default Shop;