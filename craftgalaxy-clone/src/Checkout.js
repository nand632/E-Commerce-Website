import React from "react";
import "./Checkout.css";

function Checkout() {
  return ( 
    <div className="checkout">
        <div className="checkout_left">
          <img 
            className="checkout_ad" src={require("./add2.png")} 
          />
          
          <div>
              <h2 className="checkout_titile">
                  Your shopping Basket
              </h2>
          </div>
        </div>
            <div className="checkout_right">
                <h2>The subtotal will go here</h2>
            </div>
    </div>
  );
}

export default Checkout;
