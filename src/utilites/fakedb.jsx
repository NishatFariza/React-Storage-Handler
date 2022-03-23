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
   const quality = shoppingCart[id];
   if(quality){
    //    console.log('Already exists');
       const newQuantity = quality + 1;
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

export {addToDb, removeFromDb}