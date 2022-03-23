const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}
// reduce function
// const number = [25, 45, 67, 89, 79];
// const sumReducer =(previous, current) => previous + current;
// const total = number.reduce( sumReducer, 0)


//reduce array in object
const items =[
    {id:1, name:'churi', price:700},
    {id:1, name:'churi', price:700},
    {id:1, name:'churi', price:700}
]

const getTotalPrice = product =>{
    const itemSumReducer = (previous, current) => previous + current.price;
    const itemTotal = items.reduce(itemSumReducer, 0);
    return itemTotal;   
}


export {add, multiply, getTotalPrice as getTotal};