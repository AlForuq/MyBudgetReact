import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "onAdd":
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case "onDelete":
      return {
        ...state,
        expenses: state.expenses.filter((value) => value.id !== action.payload),
      };

    case "EditBudget":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 1200,
  expenses: [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 70 },
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
