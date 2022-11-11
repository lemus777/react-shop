import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((product, index) => index !== indexValue), // filtra los items del carrito dejando sólo los de index diferente a indexValue
    })
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export { useInitialState };