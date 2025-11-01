import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalamount:0 ,
    items: [  ], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;<q></q>
      } else {
        state.items.push({ name, image, cost, quantity: 1, totalcost: 0, add_added:"Added to Cart"  });
        state.add_added = "Added to Cart";
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item =>item.name !== action.payload.name);
    },
    incrementQuantity: (state, action) => {
      const { name } = action.payload;
const itemToUpdate = state.items.find(item => item.name === name);
if (itemToUpdate) {
  itemToUpdate.quantity++;
}
    },
    decrementQuantity: (state, action) => {
      const { name } = action.payload;
var itemToUpdate = state.items.find(item => item.name === name);
if (itemToUpdate) {
  itemToUpdate.quantity--;
}
    },
    updateTotalCost: (state, action) => {
       var a = state.items.find( item => item.name === action.payload.name);
      ;
       a.totalcost = a.quantity *  parseInt(a.cost.substring(1));
    },
    updateTotalamout: (state, action) => {
if(state.items.length !== 0)
  for(let i = 0 ; i < state.items.length ; i++)
   state.totalamount  =  state.items.reduce((total , item) =>  total + (parseInt(item.cost.substring(1)) * item.quantity)   , 0)
else
state.totalamount = 0;
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity , updateTotalCost , updateTotalamout } = CartSlice.actions;

export default CartSlice.reducer;
