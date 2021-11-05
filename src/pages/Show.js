import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneSneaker } from "../services/sneakerService";


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
                <div className='sneak_brand'>
                    <h2>{sneaker.brand}</h2>
                </div>
                <div className='sneak'>
                    <h1>{sneaker.name}</h1>
                </div>
                <div className='sneak_img'>
                    <img src={sneaker.image} />
                </div>
                <div className='sneak_descrip'>
                    <p>{sneaker.description}</p>
                </div>
                <div className='sneak_price'>
                    <h2>{sneaker.price}</h2>
                </div>
            </div>
        );
    }

    const loading = () => {

        return <h1>Loading...</h1>;
    };

    return sneaker ? loaded() : loading();

}