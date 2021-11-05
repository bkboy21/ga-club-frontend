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
                            <h1>${sneaker.price}</h1>
                        </div>

                        <button>Add to Cart</button> 
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