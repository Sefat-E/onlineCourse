import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prc) => total + prc.price, 0)
    return (
        <div className="cart px-3 mt-5 d-flex my-2 shadow justify-content-between">
           <h4><strong> Course Summary:</strong></h4> 
           <h5>Enroll Course Number:{cart.length}</h5>
           <h6>Total Price: {total}</h6>
        </div>
    );
};

export default Cart;