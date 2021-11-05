import "./css/cart.scss"



export default function Cart(props){
    return(
        <body className="cBody">
        <div className="Cart-Container"></div>
        <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action">Remove all</h5>
        </div>
        <div className="Cart-Items">
            <div className="image-box">
 
            </div>
            <div className="about">
                <h1 className="title">Apple Juice</h1>
                <h3 className="subtitle">250ml</h3>

            </div>
            <div className="counter"></div>
            <div className="prices"></div>
        </div>
        <div className="counter">
            <div className="btn">+</div>
            <div className="count">2</div>
            <div className="btn">-</div>
        </div>
        <div className="prices">
            <div className="amount">$2.99</div>
            <div className="save"><u>Save for later</u></div>
            <div className="remove"><u>Remove</u></div>
        </div>
        
        <div className="checkout">
            <div className="total">
                <div>
                    <div className="total">Sub-Total</div>
                    <div className='items'>2 items</div>
                </div>
                <div className='total-amount'>$6.18</div>
            </div>
            <button className='button'>Checkout</button>
        </div>
        </body>
    );
}