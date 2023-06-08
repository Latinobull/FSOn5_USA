import data from '../data/product.json';

const initialState = {
  products: data.products,
  filter: '',
  cart: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'category/filter': {
      //* This is the code that going to do something, if we are running that specific action
      return {
        ...state,
        filter: action.payload,
      };
    }
    case 'cart/add': {
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              inCart: true,
            };
          }
          return item;
        }),
        cart: [...state.cart, action.payload],
      };
    }
    case 'cart/remove': {
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
    }
    default:
      return state;
  }
}
