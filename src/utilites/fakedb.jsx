//use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};
    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


    //getting the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart){
        shoppingCart =JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }

     //add quantity
   const quantity = shoppingCart[id];
   if(quantity){
    //    console.log('Already exists');
       const newQuantity = quantity + 1;
       shoppingCart[id] = newQuantity;
    //    localStorage.setItem(id, newQuantity)
   }
   else{
       shoppingCart[id] = 1;
    //    console.log('New Item');
    //      localStorage.setItem(id, 1);
   }
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const removeFromDb = id => {
    const storedCart =localStorage.getItem('shopping-cart')
    // removeFromDb(id)
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            // console.log('Here in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }

}

const deleteAllShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export {addToDb, removeFromDb, deleteAllShoppingCart}