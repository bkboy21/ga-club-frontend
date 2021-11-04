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