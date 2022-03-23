const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

const number = [25, 45, 67, 89, 79];
const sumReducer =(previous, current) => previous + current;
const total = number.reduce( sumReducer, 0)


export {add, multiply};