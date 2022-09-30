import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import reducer from './reducer';

// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer cart={cartItems} />{' '}
      </main>
    </Provider>
  );
}

export default App;
