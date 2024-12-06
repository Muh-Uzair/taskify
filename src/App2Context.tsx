import { createContext } from "react";
import { Action, InitialStateType } from "./App2ContextProvider";

type App2ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<Action>;
};

export const App2Context = createContext<App2ContextType | undefined>(
  undefined,
);
