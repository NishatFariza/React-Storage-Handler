import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const cosmetics =[
        {
          "id": "623a387602815ddc6c01494d",
          "index": 0,
          "balance": "$2,708.52",
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "name": "Melisa Kirkland",
          "gender": "female"
        },
        {
          "id": "623a38761656260e79151a2b",
          "index": 1,
          "balance": "$3,964.80",
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "name": "Tonya Hoffman",
          "gender": "female"
        },
        {
          "id": "623a3876b2c1907202319721",
          "index": 2,
          "balance": "$1,630.02",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "name": "Cooley Craft",
          "gender": "male"
        },
        {
          "id": "623a38767047641a5d9bf4fb",
          "index": 3,
          "balance": "$1,623.25",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "name": "Morin Franks",
          "gender": "male"
        },
        {
          "id": "623a3876d272a1bd78350491",
          "index": 4,
          "balance": "$2,259.13",
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "name": "Rhea Kirby",
          "gender": "female"
        }
      ]
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