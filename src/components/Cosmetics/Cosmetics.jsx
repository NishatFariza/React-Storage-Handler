import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const cosmetics =[
        {id:1, name: 'Alta', price: 100},
        {id:2, name: 'Churi', price: 600},
        {id:3, name: 'Nopor', price: 400},
        {id:4, name: 'Palish', price: 700},
        {id:5, name: 'Nalish', price: 900},
    ]
    return (
        <div>
            {
                cosmetics.map(cosmetic =><Cosmetic data={cosmetic}></Cosmetic>)
                    
            }
        </div>
    );
};



export default Cosmetics;