import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
  }
};

const initialState = {
  budget: 1200,
  expenses: [
    { id: 1, name: "Shoppin'", cost: 50 },
    { id: 2, name: "Holidays", cost: 70 },
  ],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
