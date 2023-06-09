import data from '../data/product.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: data.products,
  filter: '',
  cart: [],
};

const rootReducer = createSlice({
  name: 'root',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.products = state.products.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            inCart: true,
          };
        }
        return item;
      });
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter(item => item.id != action.payload),
        products: state.products.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              inCart: false,
            };
          }
          return item;
        }),
      };
    },
  },
});

export const { changeFilter, addToCart, removeFromCart } = rootReducer.actions;
export default rootReducer.reducer;
