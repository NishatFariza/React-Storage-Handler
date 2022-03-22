import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
     const {name, id, price} =props.data;
//     console.log(props);
        const addToCart = (id) =>{
             console.log('item added', id);
        }
        const addToCartWithParam = () => addToCart(id);
        return (
        <div className='product'>
             <h1>Name: {name}</h1>
             <h1>Id: {id}</h1>
             <h1>Price: {price}</h1>
             <button onClick={addToCartWithParam}>Add To Cart</button>
        </div>
     )
}

export default Cosmetic;