import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="product-img"/>
            </div>
            <div className="product-detail">
                <h3>{name}</h3>
                <br/>
                <p><span>By: {seller}</span></p>
                <br/>
                <p>${price}</p>
                <p><small>Only {stock} left stock - in order</small></p>
                <button onClick={()=>props.handlerAddProduct(props.product)} className="mainBtn"><FontAwesomeIcon icon={faShoppingCart}/>add to card</button>
                
            </div>

        </div>
    );
};

export default Product;