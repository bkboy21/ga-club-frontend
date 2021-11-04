import { useState, useEffect } from "react";
import { getOneSneaker } from "../services/sneakerService";

export default function Show(props){

    const [sneaker, setSneaker] = useState(null);

    async function updateSneakers() {
        setSneaker(await getOneSneaker(1));
    }

    useEffect(() => updateSneakers(), []);

    const loaded = () => {
        return (
            <div>
                <div className='sneak'>
                    <h1>{sneaker.name}</h1>
                </div>
            </div>
        );
    }

    const loading = () => {
       
        return <h1>Loading...</h1>;
    };

    return sneaker ? loaded() : loading();

}