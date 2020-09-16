import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* {Part of the homework} */}
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                       </> 
                )}
                decimalScal={2}
                value={0} // Part of Homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
               /> 

               <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
