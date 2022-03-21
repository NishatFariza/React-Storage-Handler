import React from 'react';
import { add } from '../../utilites/calculate';
// import add from '../../utilites/calculate';

const Cosmetic = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second)
    return (
        <div>
            <h1>Welcome To My Cosmetic Store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetic;