import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getSneakers } from "../services/sneakerService";

export default function Sneakers(props){


    const [sneakers, setSneakers] = useState(null);

    async function updateSneakers() {
        setSneakers(await getSneakers());
    }

    useEffect(() => updateSneakers(), []);

    const loaded = () => {
        return sneakers.map((sneak, i) => {
            return(
                <div key={sneak.id} className='sneak background'>
                    <Link to={`/sneakers/${sneak.id}`}>
                        <h1>{sneak.name}</h1>
                    </Link>
                </div>
            );
        });
    }

    const loading = () => {
       
        return <h1>Loading...</h1>;
    };

    return sneakers ? loaded() : loading();
}