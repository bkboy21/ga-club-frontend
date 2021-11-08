import "./css/cart.scss"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";


export default function Cart(props){

    const [renderCart, setRender] = useState([]);

    useEffect(() => setRender([...props.cart.current]), []);

    let sum=0;
    console.log(props.cart.current)
    props.cart.current.forEach((item, i) => {
        sum+=item.price;
        console.log(sum);
    });


    function handleClick(i){
       props.cart.current.splice(i, 1)
       setRender([...props.cart.current]);
    }

    return(
       
            <div className='cart'>
                <div className='cartItems'>
                    {renderCart.map((item, i) => {
                        return(
                            <div key={i} className='item'>
                                <div>
                                    <img src={item.image}
                                         className='imgSThumb'/>
                                </div>
                                <div>
                                    <h4>{item.brand}</h4>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className='itemPrice'>
                                    <h2>${item.price}</h2>
                                </div>
                                <button onClick={() => handleClick(i)}>Remove</button>
                            </div>
                        );
                    })}
                </div>

                <div className='cartSum'>
                    <div className='sum'>
                        <div>
                            <h2>Order Summary</h2>
                        </div>
                        
                        <table>
                            <tr>
                                <td><h3>Items:</h3></td>
                                <td><h3>${sum}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Shipping {'&'} Handling:</h3></td>
                                <td><h3>$5.99</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Before Tax:</h3></td>
                                <td><h3>${sum+5.99}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Estimated Tax:</h3></td>
                                <td><h3>${Math.round(((sum+5.99)*.12)*100)/100}</h3></td>
                            </tr>
                            <tr>
                                <td><h2>Order Total:</h2></td>
                                <td><h2>${(sum+5.99)+(Math.round(((sum+5.99)*.12)*100)/100)}</h2></td>
                            </tr>

                        </table>

                        <div className='center'>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
       
    );
}