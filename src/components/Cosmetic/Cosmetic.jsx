import React from 'react';

const Cosmetic = (props) => {
     const {name, id, price} =props.data;
     
//     console.log(props);
        return (
        <div className='cosmetic-container'>
             <h1>Name: {name}</h1>
             <h1>Id: {id}</h1>
             <h1>Price: {price}</h1>
        </div>
     )
}

export default Cosmetic;