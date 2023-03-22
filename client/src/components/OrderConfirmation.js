import React from "react";




function OrderConfirmation(props) {
    console.log(props.cookieValue)
    return (
        <>
            <h1>Your order is complete!</h1>
            <div>
                <h3>Order number: </h3>
                <h3>Email address </h3>
            </div>
            <button>View order history</button>
        </>
    )
}

export default OrderConfirmation;