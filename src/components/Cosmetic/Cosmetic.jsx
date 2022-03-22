import React from 'react';

const Cosmetic = (props) => {
    console.log(props);
        return (
        <div className='cosmetic-container'>
             <h1>Name: {props.data.name}</h1>
             <h1>Id: {props.data.id}</h1>
             <h1>Price: {props.data.price}</h1>
        </div>
     )
}

export default Cosmetic;