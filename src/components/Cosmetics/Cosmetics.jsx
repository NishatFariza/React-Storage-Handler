import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilites/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetic] = useState([]);

    useEffect( () => {
           fetch('data.json')
           .then(res => res.json())
           .then(data => setCosmetic(data))
    }, []);

       const total = getTotal(cosmetics)


    return (
       <div className='cosmetic-shop'>
           <h1>Welcome To My Cosmetic Store</h1>
           <p>Money Needed: {total}</p>
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