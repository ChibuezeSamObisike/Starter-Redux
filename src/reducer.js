import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let newStateVal = state.cart.map((item) => {
      let newItem = { ...item };
      if (item.id === action.payload['id']) {
        if (newItem.amount <= 0) {
          return newItem;
        }
        newItem.amount -= 1;
      }
      return newItem;
    });
    return {
      ...state,
      cart: newStateVal,
    };
  }
  if (action.type === INCREASE) {
    let newStateVal = state.cart.map((item) => {
      let newItem = { ...item };
      if (item.id === action.payload['id']) {
        newItem.amount += 1;
      }
      return newItem;
    });
    return {
      ...state,
      cart: newStateVal,
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload['id']),
    };
  }
  if (action.type === GET_TOTALS) {
    console.log('Getting totals');
    let totalVal = state.cart.reduce((acc, curr) => {
      acc += curr.amount;
      return acc;
    }, 0);
    console.log(totalVal);
    return { ...state, total: totalVal };
  }
  return state;
}

export default reducer;
