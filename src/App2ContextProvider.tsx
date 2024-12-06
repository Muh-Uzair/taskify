import React, { ReactNode, useReducer } from "react";
import { App2Context } from "./App2Context";

interface Props {
  children: ReactNode;
}

export type InitialStateType = {
  rangeVal: number;
  daysCount: number;
};
const initialState: InitialStateType = { rangeVal: 0, daysCount: 0 };

export type Action =
  | { type: "setRangeVal"; payload: { rangeVal: number } }
  | { type: "addDay" }
  | { type: "removeDay" }
  | { type: "daysInput"; payload: { daysInput: number } }
  | { type: "reset" };
const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case "setRangeVal":
      return {
        ...state,
        rangeVal: action.payload.rangeVal,
        daysCount: action.payload.rangeVal,
      };
    case "addDay":
      return { ...state, daysCount: state.daysCount + 1 };
    case "removeDay":
      return { ...state, daysCount: state.daysCount - 1 };
    case "daysInput":
      return { ...state, daysCount: action.payload.daysInput };
    case "reset":
      return { ...state, rangeVal: 0, daysCount: 0 };
    default:
      throw new Error("Unknown action");
  }
};

const App2ContextProvider: React.FC<Props> = ({ children }) => {
  // VARS
  const [state, dispatch] = useReducer(reducer, initialState);

  // JSX
  return (
    <App2Context.Provider value={{ state, dispatch }}>
      {children}
    </App2Context.Provider>
  );
};

export default App2ContextProvider;
