import React from 'react';
import { addToDb, deleteAllShoppingCart, removeFromDb } from '../../utilites/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
     const {name, id, price} =props.data;
//     console.log(props);
        const addToCart = (id) =>{
          //    console.log('item added', id);
         addToDb(id)
        }
     //    const addToCartWithParam = () => addToCart(id);


     const removeFromCart = id => {
          // console.log('removing', id);
          // console.log('remove fake db', id);
          removeFromDb(id);
     }
        return (
        <div className='product'>
             <h1>Name: {name}</h1>
             <h1>Id: {id}</h1>
             <h1>Price: {price}</h1>
             {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
             {/* <button onClick={() => addToCart(id)}>Add To Cart: Shortcart </button> */}
             <button onClick={ () => addToCart(id)}>Purchese</button>
             <button onClick={ () => removeFromCart(id)}>Remove</button>
             <button onClick={deleteAllShoppingCart}>Remove All</button>
        </div>
     )
}

export default Cosmetic;