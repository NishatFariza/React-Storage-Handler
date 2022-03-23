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
       <div className='cosmetic-shop'>
           <h1>Welcome To My Cosmetic Store</h1>
            <div className='cosmetic-container'>
            
            {
                cosmetics.map(cosmetic =><Cosmetic
                     data={cosmetic}
                    key={cosmetic.id}>
                     </Cosmetic>)
                    
            }
        </div>
       </div>
    );
};



export default Cosmetics;