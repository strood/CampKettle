import React, { useContext, useEffect, useReducer } from 'react';
import { getStock, getLocalCart } from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  stock: [],
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

  const adjustAmount = (id, action, name, price, img, value = 0) => {
    dispatch({
      type: 'ADJUST_AMOUNT',
      payload: { id, action, name, price, img, value },
    });
  };

  const fetchData = () => {
    dispatch({ type: 'LOADING' });
    // const response = await fetch(url);
    // const cart = await response.json();
    // just a local fetch imitation, but generally asyc from external source like above
    const cart = getLocalCart();
    const stock = getStock();
    dispatch({ type: 'DISPLAY_ITEMS', payload: { cart, stock } });
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
        adjustAmount,
        toggleModal,
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
