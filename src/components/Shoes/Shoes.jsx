import React from 'react';
import { add, multiply } from '../../utilites/calculate';

const Shoes = () => {
    const first = 13;
    const second = 25;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h1>This is Shoes Component</h1>
            <p>Result: {result} and Total: {sum}</p>
        </div>
    );
};

export default Shoes;