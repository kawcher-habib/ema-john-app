import React from 'react';

const Card = (props) => {
    const card = props.card;
    const totalPrice = card.reduce((total, prd) => total + prd.price, 0)
    let shipping = 0;
    if(totalPrice > 35 ){
        shipping= 0;
    }else if(totalPrice > 15){
        shipping = 4.99
    }else if(totalPrice > 0){
        shipping = 12.98
    }
    const tax = (totalPrice / 10).toFixed(2);
    const geatTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Items Order :{card.length} </h5>
            <h5>Product Cost :  {totalPrice}</h5>
            <h6><small>Shipping Cost : {shipping}</small></h6>
            <p><small>Tax + Vat : {tax}</small></p>
            <h6>Total Price : {geatTotal}</h6>

        </div>
    );
};

export default Card;