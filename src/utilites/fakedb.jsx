//use local storage to manage cart data
const addToDb = id => {
   const quality = localStorage.getItem(id);

   if(quality){
       console.log('Already exists');
       const newQuantity = quality + 1;
       localStorage.setItem(id, newQuantity)
   }
   else{
       console.log('New Item');
         localStorage.setItem(id, 1);
   }
}

export {addToDb}