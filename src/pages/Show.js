import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneSneaker } from "../services/sneakerService";

import './css/show.scss'

export default function Show(props){

    const [sneaker, setSneaker] = useState(null);
    const params = useParams();


    async function updateSneakers() {
        setSneaker(await getOneSneaker(params.id));
    }

    useEffect(() => updateSneakers(), []);


    function handleClick(){
        console.log(props.cart.current)
        props.cart.current.push({
            name: sneaker.name,
            brand: sneaker.brand,
            description: sneaker.description,
            price: sneaker.price,
            image: sneaker.image
        })

        console.log(props.cart.current)
    }

    const loaded = () => {
        return (
            <div>
                <div className='sneakShow'>
                    <div className='showLeft'>
                        <div className='sneak_img'>
                            <img src={sneaker.image} />
                        </div>
                    </div>

                    <div className='showRight'>
                        
                        <div className='sneak_brand'>
                            <h2>{sneaker.brand}'s</h2>
                        </div>

                        <h1 className='sneak_name'>
                            {sneaker.name}</h1>
                       

                        <div className='sneak_descrip'>
                            <p>{sneaker.description}</p>
                        </div>
                        <div className='sneak_price'>
                            <h2>Price: ${sneaker.price}</h2>
                        </div>

                        <button onClick={handleClick}>Add to Cart</button> 
                    </div>
                </div>
            </div>
        );
    }

    const loading = () => {

        return <h1>Loading...</h1>;
    };

    return sneaker ? loaded() : loading();

}