import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetic] = useState([]);

    useEffect( () => {
           fetch('data.json')
           .then(res => res.json())
           .then(data => setCosmetic(data))
    }, [])
    return (
        <div>
            {
                cosmetics.map(cosmetic =><Cosmetic
                     data={cosmetic}
                    key={cosmetic.id}>
                     </Cosmetic>)
                    
            }
        </div>
    );
};



export default Cosmetics;