import { createSlice } from '@reduxjs/toolkit';

/*Call function createSlice to create slice named CartSlice*/
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },

  /*Function for the action Add new item, update quantity, remove item to cart*/
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; /*take product info from payload*/
        const existingItem = state.items.find(item => item.name === name); /*Check if item exists in the cart*/
        if (existingItem) {
            existingItem.quantity++;
    } else {
        state.items.push({ name, image, cost, quantity: 1})
    }
   
    },


    removeItem: (state, action) => {
  const { name } = action.payload;
  state.items = state.items.filter(item => item.name !== name);
},

    updateQuantity: (state, action) => {
        const { name, quantity} = action.payload; //take the product info from the payload
        const itemToUpdate = state.items.find(item => item.name === name); 
        if (itemToUpdate)
            itemToUpdate.quantity = quantity;

   
    },
  },
});


export const { addItem, removeItem, updateQuantity } = CartSlice.actions; 
export default CartSlice.reducer
