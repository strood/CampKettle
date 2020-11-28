import React, { useState, useContext, useEffect, useReducer } from 'react';
import { coffeeStock, localCart } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: localCart,
  modal: false,
  modalType: null,
  modalId: 0,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const toggleModal = (val, type, id = 0) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: { val, type, id } });
  };

  const toggleAmount = (id, action, name, price, img, value = 0) => {
    console.log('TOGGLE AMT --- ID, Action, Value');
    console.log(id);
    console.log(action);
    console.log(value);
    dispatch({
      type: 'TOGGLE_AMOUNT',
      payload: { id, action, name, price, img, value },
    });
  };

  const fetchData = () => {
    dispatch({ type: 'LOADING' });
    // const response = await fetch(url);
    // const cart = await response.json();
    // just a local fetch, but generally asyc from external source
    // const cart = localStorage.getItem('cart');
    dispatch({ type: 'DISPLAY_ITEMS', payload: state.cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        toggleAmount,
        toggleModal,
        coffeeStock,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
