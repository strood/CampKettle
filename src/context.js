import React, { useState, useContext, useEffect, useReducer } from 'react';
import { coffeeStock, localCart } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: localCart,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, coffeeStock }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
